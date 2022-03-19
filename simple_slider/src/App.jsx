import { useState, useRef, useEffect } from "react";
import Screen from "./components/Screen";
import "./App.css";

const listItemStyle = {
  width: 200,
  height: 200,
  border: "1px solid black",
  aspectRatio: "1/1",
  borderRadius: "5px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const listStyle = {
  listStyle: "none",
  display: "flex",
  width: "200px",
  height: "200px",
};

const buttonStyles = {
  background: "white",
  padding: "5px",
  border: "none",
  outline: "none",
  boxShadow: "0 0 0 1px black",
};

const screenStyle = {
  width: 200,
  height: 200,
  border: "2px solid green",
  top: "1rem",
  left: "1rem",
  borderRadius: "5px",
  overflow: "hidden",
};
const items = ["one", "two", "three", "four", "five"];

const ButtonClickType = {
  next: "next",
  prev: "prev",
};

function App() {
  const [activeItemPositon, setActiveItemPosition] = useState(0);
  const [disableButton,setDisableButton] = useState(ButtonClickType.prev);

  const handleButtonClick = (type) => () => {
    if (type === ButtonClickType.next) {
      if(activeItemPositon < items.length - 2){
        if(disableButton == ButtonClickType.prev){
          setDisableButton(null);
        }
        setActiveItemPosition((prev) => prev + 1);
      }else{
        setActiveItemPosition((prev) => prev + 1);
        setDisableButton(ButtonClickType.next)
      }
      return;
    }
    if(activeItemPositon >= 1){
      if(disableButton == ButtonClickType.next){
        setDisableButton(null);
      }
    }else{
      setActiveItemPosition((prev) => prev - 1);
        setDisableButton(ButtonClickType.prev)
    }
  };

  return (
    <div>
      <Screen style={screenStyle}>
        <ul
          style={{
            ...listStyle,
            transform: `translateX(-${activeItemPositon * 200 + "px"})`,
            transition:"all 1000ms linear"
          }}
        >
          {items.map((el) => (
            <li key={items.indexOf(el)} style={listItemStyle}>
              <span>{el}</span>
            </li>
          ))}
        </ul>
      </Screen>

      <div
        className="buttonWrapper"
        style={{
          marginTop: "1rem",
          display: "flex",
          alignItems: "center",
        }}
      >
        <button
          onClick={handleButtonClick(ButtonClickType.prev)}
          style={buttonStyles}
          disabled= {disableButton == ButtonClickType.prev}
        >
          Prev
        </button>
        <button
          onClick={handleButtonClick(ButtonClickType.next)}
          style={buttonStyles}
          disabled= {disableButton == ButtonClickType.next}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
