type Props = {
  name:string,
  photo:string
}

const ListItem = ({name,photo}:Props) => {
  return (
    <div className="flex flex-col justify-center items-center col-span-1 rounded-md border-2 border-gray-200">
          <b>{name}</b>
         <div className="w-[50%] h-fit">
            <img src={photo} alt={name} className="w-full h-full aspect-[16/9]"/>
         </div>
    </div>
  )
}

export default ListItem