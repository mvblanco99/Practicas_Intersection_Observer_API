const ListItem = ({item}) => {
  return (
    <div className="flex flex-col justify-center items-center col-span-1 rounded-md border-2 border-gray-200">
          <b>{item?.name}</b>
         <div className="w-[50%] h-fit">
            <img src={item.sprites.front_default} alt={item.name} className="w-full h-full aspect-[16/9]"/>
         </div>
    </div>
  )
}

export default ListItem