import { useEffect, useState } from "react";
import { fetchData } from "../services/some_common-sevices/fetchData.services";

const useFetch = (endPoint:string) => {
  const [data, setData] = useState();

  useEffect(() => {
    const wrapper = async () => {
      const res = await fetchData(endPoint);
      setData(res);
    }
    wrapper();
  },[])

  return{
    data
  }
}

export default useFetch