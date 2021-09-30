import "./styles.css";
import { useState } from "react";
const emojiDict = {
  "😀": "happy",
  "😞": "sad",
  "😭": "crying",
  "😈": "devil",
  "☠️": "dead",
  "👻️": "ghost"
};
const emojiList = Object.keys(emojiDict);
export default function App() {
  // var shoppingList = ["Milk", "Wheat", "Flour", "Jowar"];
  var [user_input, set_user_input] = useState("");
  var head_txt = "Emoji Finder";
  var user = prompt("Hey, what's your name?");

  function inputChangeHandler(event) {
    console.log(event.target.value);
    var inp = event.target.value;
    var meaning = emojiDict[inp];

    if (meaning === undefined) {
      meaning = "We dont seem to find this in our database";
    }

    set_user_input(meaning);
  }

  function listClickHandler(item) {
    set_user_input(emojiDict[item]);
  }

  return (
    <div className="App">
      <h1>{head_txt}</h1>
      <h2>Hey {user}! </h2>
      <br />
      <input onChange={inputChangeHandler}></input>
      <div className="mn">{user_input}</div>
      <br />
      <div>
        <h3>Emojis we know</h3>
        {emojiList.map((item) => {
          return (
            <span
              key={item}
              onClick={() => listClickHandler(item)}
              style={{ padding: "1rem", fontSize: "2rem", cursor: "pointer" }}
            >
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}
