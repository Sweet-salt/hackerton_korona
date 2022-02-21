import "./styles.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Location from "./Location";
import hospital from "./hospital";

export default function App() {
  // const newData = hosPital.map((item, index) => {
  //   return <li key={index}>{item.addr}</li>;
  // });

  const hospitalData = hospital.map((item) => item.yadmnm);
  const hospitalX = hospital.map((item) => item.xposwgs84);
  const hospitalY = hospital.map((item) => item.yposwgs84);

  return (
    <div className="App">
      <Location hospitalData={hospitalData} />
    </div>
  );
}
