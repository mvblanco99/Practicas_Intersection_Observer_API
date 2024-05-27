import ListImages from "./ListImages";
import ImagesGrid from "./ImagesGrid";
import Header from "../Header";

const TemplateGallery = () => {

  return (
    <>
      <Header/>
      <div className="w-[380px] mx-auto border-2 border-gray-200 rounded-sm my-1">
        <h1 className="text-center pt-2">Gallery Images</h1>
         <ListImages/>
      </div>
      <ImagesGrid/>
    </>
  )
}


export default TemplateGallery