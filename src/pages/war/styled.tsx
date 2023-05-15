import styled from "styled-components";
export const Containner = styled.div`

margin-top:-40px;
margin-left:-33px;
img{
  width:1003px;
  height:700px;
  position: absolute;
 margin-top:-30%;
 margin-left:-48.5%;
 z-index:-10
}
.trainer {
    
    margin-left: 13vw;
    margin-top: 7vh;
    position: absolute;
    z-index: 1000;
img{
  width: 500px;
  height: 500px;
    
}
   
  }
  .pokemon-div{
       
    margin-left: 17vw;
    margin-top: -1vh;
    position: absolute;
    z-index: 1000;
img{
  width: 200px;
  height: 200px;
    
}
  }
  .x2-div{
       
       margin-left: -27vw;
       margin-top: 7vh;
       position: absolute;
       z-index: 1000;
   img{
     width: 160px;
     height: 160px;
     transform: scaleX(-1);
       
   }
     }
     .users-on{
      color:green;
      position: absolute;
      margin-top:-30vw;
      margin-left:-45vw;
      font-weight: bold;
     }
     .end{
      position: absolute;
      margin-left: -53.5vw;
      margin-top: -30vw;
      width:110vw;
      height:100vw;
      background-color: #000000cc;
      z-index:10000
     }
     .end-text{
      margin-left: 3.5vw;
      margin-top:20vw;
     }
     .pointer{
      position: absolute;
      color:red;
      margin-left:20vw;
      z-index:9999;
      font-weight: bold;
     }
     .pointer2{
      position: absolute;
      color:red;
      margin-left:-20vw;
      margin-top:4vw;
      z-index:9999;
      font-weight: bold;
     }
`