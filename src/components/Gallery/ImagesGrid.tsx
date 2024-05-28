import { useEffect, useRef, useState } from "react"
import ItemImages from "./ItemImages";
import { fetchData } from "../../services/some_common-sevices/fetchData.services";
import { ENDPOINTAPIPIXABAY } from "../../config";
import { PixabayApiResponse } from '../../types/PixabayApiResponse';

const ImagesGrid = () => {
  const [data, setData] = useState<string[]>([]);
  const container = useRef(null)

  const options = {
    rootMargin: '0px 0px 0px 0px',
    threshold: 0
  };

  const wrapper = async () => {
    const json:PixabayApiResponse = await fetchData(ENDPOINTAPIPIXABAY);
    const urlImages = json?.hits.map(item => item?.webformatURL);
    setData([...data,...urlImages]);
  }

  const onIntersection = async (
    entries:IntersectionObserverEntry[],
    self:IntersectionObserver) => {
      entries.forEach(entry  => {
        if(entry.isIntersecting){
          wrapper();
          const div = entry.target as HTMLDivElement;
          self.unobserve(div);
        }  
      })
  }

  const onIntersectionImages = (
    entries:IntersectionObserverEntry[],
    self:IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = `${img.dataset.src}`;
          self.unobserve(img);
        }
      });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersection,options);
    (container.current) && observer.observe(container.current);
    return () => {
      if(observer) observer.disconnect();
    } 
  },[])

  useEffect(() => {
    let observer:IntersectionObserver|null|undefined = null;

    if(data.length > 0){
      observer = new IntersectionObserver(onIntersectionImages,options);
      const images = document.querySelectorAll('[data-src]');
          
      images.forEach(img => {
          observer?.observe(img);
      });
    }

    return () => {
      if(observer) observer.disconnect();
    } 
  },[data])

  return (
    <div 
      ref={container} 
      className="grid grid-cols-3 w-[50%] h-[432px] mx-auto mt-2 mb-3 border-2 border-gray-200 rounded-sm">
      {
        data?.slice(0,9)?.map((url,index) => {
          return <div key={index} className="col-span-1 h-[144px] border-2 border-gray-200">
            <ItemImages name={index} url={url} heigth={144}/>
          </div>
        })
      }
    </div>
  )
}

export default ImagesGrid