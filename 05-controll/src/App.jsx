import "./App.css";
// import React from "react";
import React, { useRef } from "react";
function App() {
  // controll
  // const [myValue, setMyValue] = React.useState("");

  let inoutRef = useRef(null);
  let textRef = useRef(null);

  function submit(e) {
    e.preventDefault();
    console.log(inoutRef.current.value);
    console.log(textRef.current.value);
    let number = document.getElementById("number");
    console.log(number.value);
  }
  return (
    // <div>
    //   <h1>Controll componebts</h1>
    //   <input
    //     type="text"
    //     value={myValue}
    //     name=""
    //     id=""
    //     onChange={(e) => setMyValue(e.target.value)}
    //   />
    // </div>

    // uncontrll

    <div>
      <form action="" onSubmit={submit}>
        <input type="text" ref={inoutRef} name="" id="" /> <br /> <br />
        <input type="text" ref={textRef} name="" id="" /> <br /> <br />
        <input type="number" id="number" />
        <button>submit</button>
      </form>
    </div>
  );
}

export default App;
