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
  const handleExtraSpaces = () => {
    let newText = text.split(/\s+/).join(" ");
    setText(newText);
    props.showAlert("Extra spaces removed", "success");
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
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            onChange={handleChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            value={text}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
          ></textarea>
          <div className="d-flex flex-column flex-md-row gap-2 my-4">
            <button
              disabled={text.trim().length === 0}
              onClick={handlUpClick}
              type="button"
              className="btn btn-primary  btn-sm"
            >
              Convert to Uppercase
            </button>
            <button
              disabled={text.trim().length === 0}
              onClick={handlLowClick}
              type="button"
              className="btn btn-primary  btn-sm"
            >
              Convert to Lowrercase
            </button>
            <button
              disabled={text.trim().length === 0}
              onClick={handlclearClick}
              type="button"
              className="btn btn-primary  btn-sm"
            >
              Clear Text
            </button>
            <button
              disabled={text.trim().length === 0}
              onClick={handlCopyClick}
              type="button"
              className="btn btn-primary  btn-sm"
            >
              Copy Text
            </button>
            <button
              disabled={text.trim().length === 0}
              className="btn btn-primary mx-1"
              onClick={handleExtraSpaces}
            >
              Remove Extra Spaces
            </button>
          </div>
        </div>
        <div className="container my-3">
          <h1>Your text summery</h1>
          {/* issu */}
          {/* <p>
            {text.split(" ").length} words and {text.length} characters
          </p> */}

          {/* issu sol */}
          <p>
            {
              text.split(" ").filter((element) => {
                return element.length != 0;
              }).length
            }{" "}
            words and {text.length} characters
          </p>

          <p>{0.008 * text.split(" ").length} Minutes read</p>
          <h2> Preview</h2>
          <p>{text.length > 0 ? text : "Nothing to Preview"}</p>
        </div>
      </div>
    </>
  );
}

export default TextForm;
