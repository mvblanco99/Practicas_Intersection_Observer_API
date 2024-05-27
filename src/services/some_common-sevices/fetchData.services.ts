export const fetchData = async (endPoint:string) => {
  try {
    const res = await fetch(endPoint);
    const json = await res.json(); 
    return json;
  } catch (err) {
    console.log(err)
  }
}