import React,{useState} from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
function Header() {
  const [Burgerstatus,setBurgerstatus]=useState(false);
  return (
    <Container>
      <a>
        <img src="/images/logo.svg" />
      </a>
      <Menu>
        <a href="#">Model S</a>
        <a href="#">Model Y</a>
        <a href="#">Model 3</a>
        <a href="#">Model X</a>
      </Menu>
      <Rightmenu>
        <a href="#">Shop</a>
        <a href="#">Tesla account</a>
        <CustomMenu onClick={()=>{setBurgerstatus(true)}}/>
      </Rightmenu>
      <BurgerNav show={Burgerstatus}>
        <Closewrapper >
          <Customclose onClick={()=>setBurgerstatus(false)}/>
        </Closewrapper>
        <li><a href="#">Existing inventory</a></li>
        <li><a href="#">Used inventory</a></li>
        <li><a href="#">Trade-in</a></li>
        <li><a href="#">Cybertruck</a></li>
        <li><a href="#">Roadster</a></li>
        <li><a href="#">Roadster</a></li>
        <li><a href="#">Roadster</a></li>
        <li><a href="#">Roadster</a></li>
      </BurgerNav>
    </Container>
  );
}

export default Header;
const Container = styled.div`
  min-height:60px;
  position:fixed;
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:0 20px;
  top:0;
  left:0;
  right:0;
  z-index:1;
`;
const Menu = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  flex:1;
  a{
    font-weight:600;
    text-transform:uppercase;
    padding:0 10px;
    flex-wrap:nowrap;
  }
  @media (max-width:768px){
    display:none;
  }
`;
const Rightmenu = styled.div`
  display:flex;
  align-items:center;
  a{
    font-weight:600;
    text-transform:uppercase;
    margin-right:10px;
  }
`;
const CustomMenu = styled(MenuIcon)`
  cursor:pointer;
`;
const BurgerNav=styled.div`
  background:white;
  position:fixed;
  top:0;
  right:0;
  bottom:0;
  width:300px;
  z-index:200;
  list-style:none;
  padding:20px;
  display:flex;
  flex-direction:column;
  text-align:start;
  transform:${props=>props.show  ? "translateX(0)":"translateX(100%)"};
  transition: transform 0.2s;
  li{
    padding:15px 0;
    border-bottom:1px solid rgba(0,0,0,.2);
    a{
      font-weight:600;
    }
  }
`;
const Customclose=styled(CloseIcon)`
  cursor:pointer;
`;
const Closewrapper=styled.div`
  display:flex;
  justify-content:flex-end;
`;