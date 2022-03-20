function Pagination({ activePage, changeActivePage }) {
  let pages = Array.from(Array(5).keys());

  return (
    <div>
      <button onClick={()=>changeActivePage((prev)=>prev-1)}>prev</button>
      {pages.map((item) => (
        <button
          className={activePage === item + 1 ? "activePage" : ""}
          key={item + 1}
          onClick={()=>changeActivePage(item+1)}
        >
          {item + 1}
        </button>
      ))}
      <button onClick={()=>changeActivePage((prev)=>prev+1)}>next</button>
    </div>
  );
}

export default Pagination;
