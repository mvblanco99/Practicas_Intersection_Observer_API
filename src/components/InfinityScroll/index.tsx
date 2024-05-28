import { useEffect, useRef, useState } from 'react'
import Header from '../Header';
import ListItem from './ListItem';
import Loader from '../Loaders/InfinityScrollLoader';
import { fetchData } from '../../services/some_common-sevices/fetchData.services';
import { ENDPOINTPOKEAPI } from '../../config';
import { Welcome} from '../../types/PokeApiJsonResponse'

type Pokemon = {
  name:string,
  photo:string
}

const TemplateInfinityScroll = () => {
  const [data,setData] = useState<Pokemon []>([]);
  const [hasMore, setHasMore] = useState(true);
  const [offset, setOffset] = useState(0);

    const elementRef = useRef(null);
 
    const getData = async() => {
        const json:Welcome = await fetchData(ENDPOINTPOKEAPI);
        console.log(offset)
        const dataPromises = json.results.map(({url}) => fetchData(url));

        const dataPokemons = await Promise.all(dataPromises);
        console.log(dataPokemons)

        const dataPokemon = dataPokemons.map(({sprites,name}) => {
            const pokemon =  {name:name, photo: sprites.front_default} as Pokemon
            return pokemon
        });

        if(json.results.length > 0){ 
          setData(data => [...data, ...dataPokemon]);
          setOffset((offset) => offset + 20 )
          return;
        }

        setHasMore(false);
    }

    const onIntersection = async (entries:IntersectionObserverEntry[]) => {
      const firstEntry = entries[0]
      if(firstEntry.isIntersecting && hasMore){
        await getData()
      }
    }

    useEffect(() => {
      const observer = new IntersectionObserver(onIntersection);
      if(observer && elementRef.current) observer.observe(elementRef.current)
      
      return () => {observer && observer.disconnect}
    },[data])

  return (
    <>
      <Header />
      <h3 className='text-center border-t-2 font-serif font-bold py-2'>Lista de Pokemons</h3> 
      <ul className='grid grid-cols-6 gap-1 p-1'>
        { data?.map((item,index) => <ListItem key={index} name={item.name} photo={item.photo}/>)}
      </ul>
      { hasMore && 
        <div ref={elementRef} className='w-full h-fit text-center flex justify-center'>
          <Loader/>
        </div>
      }
    </>
  )
}

export default TemplateInfinityScroll