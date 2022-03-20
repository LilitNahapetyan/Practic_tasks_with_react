import { useEffect, useState, useReducer } from "react";
import Info from "./components/Info";
import Records from "./components/Records";
import Pagination from "./components/Pagination";
import usePagination from "./hooks/usePagination";
import { fetchGalleryData } from "./utils/fetchGalleryData";
import "./App.css";



function App() {
  //This is whitout custtom hook
  //const API_KEY = "67d9edc0-e6a3-11e3-9798-57275476509";
  //const API_URL = `https://api.harvardartmuseums.org/object?apikey=${API_KEY}a&sort=rank&sortorder=asc&from=12&size=30`;
  // const [records, setRecords] = useState([]);
  // const [info, setinfo] = useState([]);
  // const[activePage,setActivePage] = useState(1);

  // useEffect(() => {
  //   fetch(`${API_URL}&page=${activePage}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setinfo(data.info);
  //       setRecords(prev => [...prev,...data.records]);
  //       setActivePage(data.info.page);
  //     });
  // }, [activePage]);


  const {records, activePage,setActivePage,info} = usePagination(fetchGalleryData)

  return (
    <div>
     {records.length > 0 ? <>
      <Info {...info} />
      {records.map(
        ({
          id,
          century,
          department,
          dimensions,
          title,
          totalpageviews,
          images,
        }) => (
          <Records
            key={id}
            century={century}
            department={department}
            dimensions={dimensions}
            title={title}
            totalpageviews={totalpageviews}
            images={images}
          />
        )
      )}</> :<h1>...loading</h1>}
      <Pagination activePage={activePage} changeActivePage={setActivePage}/>
    </div>
  );
}

export default App;
