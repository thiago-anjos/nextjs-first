export const fetchData = async <T>(url: string): Promise<T> => {
  const rawData = await fetch(url);
  const json = await rawData.json();
  return json;
};

// async function fetchData<T>(url: string): Promise<T> {
//   const rawData = await fetch(url);
//   const json = await rawData.json();
//   return json;
// }

// export default fetchData;
