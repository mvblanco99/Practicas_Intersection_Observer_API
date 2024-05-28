import { useEffect, useState } from 'react'
import ItemImages from './ItemImages';
import { ENDPOINTAPIPIXABAY } from '../../config';
import { PixabayApiResponse } from '../../types/PixabayApiResponse';
import { fetchData } from '../../services/some_common-sevices/fetchData.services';

const ListImages = () => {
  const [urlImages, setUrlImages] = useState<string[]>([]);
  
  const onIntersection = (
    entries:IntersectionObserverEntry[], 
    self:IntersectionObserver ) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = `${img.dataset.src}`;
          self.unobserve(img);
        }
      });
    };

  useEffect(() => {
    const wrapper = async () => {
      const res:PixabayApiResponse = await fetchData(ENDPOINTAPIPIXABAY);
      setUrlImages(urlImages => {
        const urls = res?.hits.map(item => item?.webformatURL)
        return [...urlImages, ...urls];
      })
    }
    wrapper();
  },[])  

  useEffect(() => {
    let observer:IntersectionObserver|null|undefined = null;
    
    if(urlImages?.length > 0){
      const options = {
        rootMargin: '0px 0px 0px 0px',
        threshold: 0
      };

      observer = new IntersectionObserver(onIntersection,options);
      const images = document.querySelectorAll('[data-src]');

      images.forEach(img => {
        observer?.observe(img);
      });
    }

    return () => {
      if(observer) observer.disconnect();
    }
  },[urlImages]);

  return (
    <>
      <ul className="w-[95%] mx-auto" >
        {urlImages?.map((url, index) => (
          <ItemImages 
            key={index}
            name={index}
            url={url}
          />
        ))}
      </ul>
    </>
  )
}

export default ListImages