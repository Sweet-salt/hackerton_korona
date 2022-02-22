import styled from "styled-components";
import IconMapFin from "../img/icon_mapFin.svg";

const HosInfo = styled.div`
  padding: 80px 0 28px;
  margin-bottom: 70px;
  border-bottom: 2px solid #888888;
  p {
    display: inline-block;
    vertical-align: top;
    font-size: 26px;
    line-height: 32px;
    font-weight: 700;
    color: #333;
    margin-right: 20px;
  }
  span {
    display: inline-block;
    vertical-align: top;
    font-size: 20px;
    line-height: 32px;
    color: #000;
    font-weight: 500;
    max-width: calc(100% - 73px);
    padding-right: 15px;
    word-break: break-word;
  }
  h1 {
    font-size: 40px;
    line-height: 56px;
    font-weight: 700;
    padding-bottom: 8px;
    padding-left: 60px;
    background-size: 42px auto;
    background-repeat: no-repeat;
    background-position: left center;
    background-image: url(${IconMapFin});
    border-bottom: 5px solid #26439e;
  }
  .info {
    padding: 28px 30px 17px;
    border-bottom: 1px solid #c5c5c5;
    display: flex;
    > div {
      width: 50%;
      display: flex;
    }
  }
  .detail {
    padding: 16px 30px 0;
    > div {
      display: flex;
      align-items: baseline;
    }
    .sort {
      width: 110px;
      font-size: 20px;
      font-weight: 500;
      line-height: 32px;
    }
    ul {
      margin-top: 30px;
    }
    ul > li {
      position: relative;
      padding-left: 32px;
      font-size: 20px;
      line-height: 28px;
      color: #000;
      font-weight: 700;
      &:before {
        content: "";
        width: 10px;
        height: 10px;
        background: #333;
        border-radius: 100%;
        display: inline-block;
        vertical-align: middle;
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
        left: 7px;
      }
    }
  }
`;

export default function HospitalInfo({ hosinfo }) {
  return (
    <>
      {hosinfo.yadmnm !== undefined ? (
        <HosInfo>
          <h1>{hosinfo.yadmnm}</h1>
          <div className="info">
            <div>
              <p>주소</p>
              <span>{hosinfo.addr}</span>
            </div>
            <div>
              <p>전화번호</p>
              <span>{hosinfo.telno}</span>
            </div>
          </div>
          <div className="detail">
            <div>
              <p>진료안내</p>
              <div>
                <div className="sort">
                  {hosinfo.recuclcd === 11 ? "종합병원" : null}
                  {hosinfo.recuclcd === 21 ? "병원" : null}
                  {hosinfo.recuclcd === 31 ? "의원" : null}
                </div>
                <ul>
                  <li>
                    신속 항원 검사(RAT){" "}
                    <span>{hosinfo.ratpsblyn === "Y" ? "가능" : "불가능"}</span>
                  </li>
                  <li>
                    PCR{" "}
                    <span>{hosinfo.pcrpsblyn === "Y" ? "가능" : "불가능"}</span>
                  </li>
                  <li>잔여백신 화이자12 모더나 8</li>
                </ul>
              </div>
            </div>
          </div>
        </HosInfo>
      ) : null}
    </>
  );
}
