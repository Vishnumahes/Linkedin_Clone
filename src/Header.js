import React from 'react';
import './Header.css';
import HeaderOption from './HeaderOption';
import { Avatar } from '@mui/material';

function Header() {
  return (
    <div className='header'>
      <div className="header_left">
        <img src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" alt=""/>
        <div className="header_search">
          <span className="material-symbols-outlined">search</span>
          <input type="text" placeholder="Search"/>
        </div>
      </div>
      <div className="header_right">
        <HeaderOption Icon={() => <span className="material-symbols-outlined">home</span>} title="Home" />
        <HeaderOption Icon={() => <span className="material-symbols-outlined">supervisor_account</span>} title="My Network" />
        <HeaderOption Icon={() => <span className="material-symbols-outlined">business_center</span>} title="Jobs" />
        <HeaderOption Icon={() => <span className="material-symbols-outlined">chat</span>} title="Messages" />
        <HeaderOption Icon={() => <span className="material-symbols-outlined">notifications</span>} title="Notifications" />
        <HeaderOption avatar="https://media.licdn.com/dms/image/D4E03AQHM6457MiEB8w/profile-displayphoto-shrink_200_200/0/1718298922811?e=2147483647&v=beta&t=7IeyNmU6hr8ZjvSZ4U4K4BsnBa-MnFI4SqXrzd1Lz44" title='me' />
      </div>
    </div>
  );
}

export default Header;
