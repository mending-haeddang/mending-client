import React from "react";

const CopyButton = ({ text = "" }) => {
  const clickHandler = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("Text copied.");
      })
      .catch(() => {
        console.log("Failed to copy text.");
      });
  };

  return (
    <>
      <p>{text}</p>
      <button onClick={clickHandler}>복사</button>
    </>
  );
};

export default CopyButton;
