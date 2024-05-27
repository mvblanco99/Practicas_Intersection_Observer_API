import { useEffect } from 'react'
import ItemImages from './ItemImages';
import useFetch from '../../hooks/useFetch.hook';
import { ENDPOINTAPIPIXABAY } from '../../config';

const ListImages = () => {
  const {data} = useFetch(ENDPOINTAPIPIXABAY);
  const urlImages = data?.hits.map(item => item?.webformatURL)
  const onIntersection = (entries,self) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        self.unobserve(img);
      }
    });
  };

  useEffect(() => {
    let observer = null;
    
    if(urlImages?.length > 0){
      const options = {
        rootMargin: '0px 0px 0px 0px',
        threshold: 0
      };

      observer = new IntersectionObserver(onIntersection,options);
      const images = document.querySelectorAll('[data-src]');

      images.forEach(img => {
        observer.observe(img);
      });
    }

    return () => {
      if(observer) observer.disconnect();
    }
  },[data]);

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