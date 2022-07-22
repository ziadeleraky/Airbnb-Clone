import React from "react";
import MainContent from "./components/MainContent/MainContent";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card/Card";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import cardsData from "./data";

function App() {
  const cards = cardsData.map((data) => {
    return (
      <Card
        key={data.id}
        {...data}
      />
    );
  });
  return (
    <div>
      <Navbar />
      <MainContent />
      <section className="container">
        <div className="row">{cards}</div>
      </section>
    </div>
  );
}

export default App;
