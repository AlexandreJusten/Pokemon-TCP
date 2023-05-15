import styled from "styled-components";
export const Containner = styled.div`

display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .trainer {
    width: 10%;
    margin-left: 30vw;
    margin-top: 24vh;
    position: absolute;

    @media (max-width: 768px) {
      width: 20%;
      margin-left: 10vw;
    }

    @media (max-width: 480px) {
      width: 30%;
      margin-left: 5vw;
    }
  }
  
 .logoTextPanel{
  width:200px;
  position:absolute;
  margin-top:-600px;
  margin-right:700px
 }
`