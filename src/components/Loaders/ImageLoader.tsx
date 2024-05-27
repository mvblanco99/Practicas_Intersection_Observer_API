const ImageLoader = () => {
  return (
    <div 
      role="status" 
      className="flex items-center justify-center w-full h-full bg-gray-600 animate-pulse dark:bg-gray-700 absolute top-0 z-50"
    >
      <svg 
        className="w-full h-full text-gray-500 dark:text-gray-700" 
        aria-hidden="true" 
        xmlns="http://www.w3.org/2000/svg" 
        fill="currentColor" 
        viewBox="0 0 16 20">
      </svg>
    </div>            
     
  )
}

export default ImageLoader