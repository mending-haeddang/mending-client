import React, { useState } from "react";
// import ChooseCreate from "../components/intro/ChooseCreate";
import InputName from "../components/intro/InputName";

const Intro = () => {
  const [userName, setUserName] = useState("");
  return (
    <div style={{ backgroundColor: "#24212D", height: "100%" }}>
      <InputName userName={userName} setUserName={setUserName} />
      {/* <ChooseCreate userName={userName} /> */}
    </div>
  );
};

export default Intro;
