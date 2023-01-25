import React,{useState} from 'react';
import './header.css';
import Logo from '../../assets/logo.png';
import Bars from '../../assets/bars.png'; 

const Header = () => {
  const mobile = window.innerWidth<=768 ? true: false;
  const [menuOpened, setMenuOpened] = useState(false)
  return (
    <>
      <div className='header'>

        <img src={Logo} alt="logo" className='logo' />
        {(menuOpened === false && mobile ===true )?(
        <div style={{backgroundColor:"var(--appColor",padding:"0.5rem",borderRadius:"5px"}} onClick={()=>setMenuOpened(true)}>
          <img src={Bars} alt="" style={{width:"1.5rem", height:"1.5rem"}}/>
        </div>
        ): (
        <ul className='header-menu'>
          <li onClickk={()=> setMenuOpened(false)}>Home</li>
          <li onClickk={()=> setMenuOpened(false)}>Programs</li>
          <li onClickk={()=> setMenuOpened(false)}>Why us</li>
          <li onClickk={()=> setMenuOpened(false)}>Plans</li>
          <li onClickk={()=> setMenuOpened(false)}>Testimonials</li>
        </ul>)}
      </div>
    </>
  )
}

export default Header
