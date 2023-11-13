import React, { useState } from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Main from "./component/Main";

export default function App() {
  const [lists, setLists] = useState([]);

  return (
    <>
      <Header />
      <Main list={lists} setList={setLists} />
      <Footer />
    </>
  );
}
