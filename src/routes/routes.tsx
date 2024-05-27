import Gallery from "../pages/Gallery";
import InfinityScroll from "../pages/InfinityScroll";


export const routes = [
  {
    path:'/',
    element:<Gallery/>
  },
  {
    path:'/scroll',
    element:<InfinityScroll/>
  }
]