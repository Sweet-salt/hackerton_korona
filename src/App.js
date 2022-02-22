import "./styles.css";
import { GlobalStyle } from "./css/GlobalStyle";
import Location from "./components/Location";
import hospital from "./hospital";
import Header from "./components/Header";
import styled from "styled-components";

const Inner = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

export default function App() {
  const hospitalData = hospital.map((item) => item.yadmnm);
  return (
    <div className="App">
      <Inner>
        <GlobalStyle />
        <Header />
        <Location hospitalData={hospitalData} />
      </Inner>
    </div>
  );
}
