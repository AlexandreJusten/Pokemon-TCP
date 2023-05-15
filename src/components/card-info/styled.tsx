import styled from "styled-components";
export const Containner = styled.div`

  margin-left:-60%;
  margin-top:-16%;
  position: absolute;
  width: 226px;
  height: 167px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%), rgba(0, 255, 178, 0.2);
  border-radius: 9px;

  .life{
    position: absolute;
width: 67px;
height: 24px;
background: #D9D9D9;
border-radius: 9px;
margin-left: 20px;
margin-top:20px;
color: green;
  }
.life-bar{
  box-sizing: border-box;
position: absolute;
width: 98px;
height: 8px;
background: #00FF38;
border: 1px solid #000000;
border-radius: 9px;
margin-left: 90px;
margin-top:28px;
}
.Attack{
    position: absolute;
width: 67px;
height: 24px;
background: #D9D9D9;
border-radius: 9px;
margin-left: 20px;
margin-top:70px;
color: #800000;
  }
.Attack-bar{
  box-sizing: border-box;
position: absolute;
width: 98px;
height: 8px;
background: #ff0000;
border: 1px solid #000000;
border-radius: 9px;
margin-left: 90px;
margin-top:78px;
}
.Defense{
    position: absolute;
width: 67px;
height: 24px;
background: #D9D9D9;
border-radius: 9px;
margin-left: 20px;
margin-top:120px;
color: #ff7b00;
  }
.Defense-bar{
  box-sizing: border-box;
position: absolute;
width: 98px;
height: 8px;
background: #ffbb00;
border: 1px solid #000000;
border-radius: 9px;
margin-left: 90px;
margin-top:128px;
}
.life-text{
  position: absolute;
width: 21px;
height: 12px;

font-family: 'Inter';
font-style: normal;
font-weight: 900;
font-size: 22px;
line-height: 15px;
margin-left: 194px;
margin-top:24px;
color: #77ff00;
}
.Attack-text{
  position: absolute;
width: 21px;
height: 12px;

font-family: 'Inter';
font-style: normal;
font-weight: 900;
font-size: 22px;
line-height: 15px;
margin-left: 194px;
margin-top:74px;
color: #ff0000;
}
.Defense-text{
  position: absolute;
width: 21px;
height: 12px;

font-family: 'Inter';
font-style: normal;
font-weight: 900;
font-size: 22px;
line-height: 15px;
margin-left: 194px;
margin-top:123px;
color: #ffbb00;
}
`