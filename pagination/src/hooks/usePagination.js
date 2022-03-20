import { useEffect, useState } from "react";

function usePagination(fetchCallback, defaultActivePage = 1) {
  const [records, setRecords] = useState([]);
  const [info, setinfo] = useState([]);
  const [activePage, setActivePage] = useState(defaultActivePage);

  useEffect(() => {
    fetchCallback(activePage).then((res) => {
      setRecords(prev=>[...prev,...res.records]), setinfo(res.info);
    });
  }, [activePage]);

  return {records, activePage,setActivePage,info};
}

export default usePagination;
