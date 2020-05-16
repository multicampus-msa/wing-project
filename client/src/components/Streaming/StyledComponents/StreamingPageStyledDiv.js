import styled from "styled-components";
export default styled.div`
  display: grid;
  justify-content: center;
  grid-template-rows: repeat(6, 300px);
  grid-template-columns: repeat(7, 150px);
  grid-gap: 3rem 1rem;
  
  .MuiButton-root {
    justify-content: left;
    width: 145px;
    font-size: 1.2rem;
    font-family: "NanumBarunGothic", sans-serif;
  }
`