import { useState } from "react"
import ImageLoader from "../Loaders/ImageLoader";

type PropsItemList =  {
  url: string,
  name: number,
  heigth?:number
}

const ItemImages = ({url,name,heigth} : PropsItemList) => {
  const [load, setLoad] = useState(false);

  const onLoad = () => {
    setLoad(true)
  }

  return (
    <li className={`${heigth ? '' : 'mt-4 mb-4'} ${heigth ? 'h-full' : 'h-56'} relative list-none`}>
      <img 
        alt={`Photo-${name}`}
        data-src={url}
        className={`w-full h-full aspect-[16/9] z-20`}
        onLoad={onLoad} 
      />

      {!load && <ImageLoader/>}
    </li>
  )
}

export default ItemImages