import React, { useEffect, useState } from "react";

function TextForm(props) {
  const handleChange = (event) => {
    // console.log("onchsnge wer");

    setText(event.target.value);
  };

  const handlUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase!", "success");
  };

  const handlLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Copied to Clipboard", "success");
  };

  const handlclearClick = () => {
    let newText = "";

    setText(newText);
    props.showAlert("Text clear", "success");
  };

  const handlCopyClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("copyied to clipborad", "success");
  };

  const [text, setText] = useState("");

  //   useEffect(() => {
  //     alert("weel come");
  //   }, []);

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            onChange={handleChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            value={text}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
          ></textarea>
          <div className="d-flex flex-column flex-md-row gap-2 my-4">
            <button
              onClick={handlUpClick}
              type="button"
              className="btn btn-primary  btn-sm"
            >
              Convert to Uppercase
            </button>
            <button
              onClick={handlLowClick}
              type="button"
              className="btn btn-primary  btn-sm"
            >
              Convert to Lowrercase
            </button>
            <button
              onClick={handlclearClick}
              type="button"
              className="btn btn-primary  btn-sm"
            >
              Clear Text
            </button>
            <button
              onClick={handlCopyClick}
              type="button"
              className="btn btn-primary  btn-sm"
            >
              Copy Text
            </button>
          </div>
        </div>
        <div className="container my-3">
          <h1>Your text summery</h1>
          <p>
            {text.split(" ").length} words and {text.length} characters
          </p>
          <p>{0.008 * text.split(" ").length} Minutes read</p>
          <h2>Preview</h2>
          <p>
            {text.length > 0
              ? text
              : "Enter something in the textbox above to preview it here"}
          </p>
        </div>
      </div>
    </>
  );
}

export default TextForm;
