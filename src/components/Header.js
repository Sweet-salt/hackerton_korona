import styled from "styled-components";

const HeaderWrap = styled.div`
  padding: 42px 0 20px;
  > h1 {
    font-size: 30px;
    line-height: 36px;
    color: #666;
    font-weight: 500;
  }
`;
export default function Header() {
  return (
    <HeaderWrap>
      <h1>코로나(Covid-19) 검사 및 치료 의료기관 검색을 위한 사이트</h1>
    </HeaderWrap>
  );
}
