import React, { useState } from "react";
import Container from "../components/Container";
import Graphic from "../components/Graphic";
import Controls from "../components/Controls";

const IndexPage = () => {
  const [math, setMath] = useState("\\sum_{i=0}^n \\frac{i^2}{2}");
  const onChange = (e) => {
    setMath(e.target.value);
  };
  return (
    <Container>
      <Graphic math={math} />
      <Controls math={math} onChange={onChange} />
    </Container>
  );
};

export default IndexPage;
