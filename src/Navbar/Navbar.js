import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import { IconButton } from '@mui/material';
import Button from '@mui/material/Button';
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';
import CodeIcon from '@mui/icons-material/Code';
 
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './../firebase';
import LogoutIcon from '@mui/icons-material/Logout';
import Avatar from '@mui/material/Avatar';

const Navbar = ({savebtn}) => {
  const [user] = useAuthState(auth)
  return (
    <nav className="navbar">
      <div className='navbar-name'>
      <Avatar   src={user.photoURL} />
      <h3 className="navbar-title">  {user.displayName}  </h3>
      </div>

      <ul className="navbar-nav">
       
        <li className="nav-item">
          <Link to="/" className="nav-link"><Button>Code Editor<CodeIcon style={{ color: "red" , paddingLeft:"5"}}  /></Button></Link>
        </li>
        <li className="nav-item">
          <Link to="/saved" className="nav-link"><Button>Archive< FolderSpecialIcon style={{ color: "orange" , paddingLeft:"5"}}/></Button></Link>
        </li>
        
        <Button onClick={() => { auth.signOut() }}>Logout<LogoutIcon style={{    paddingLeft:"5"}} /></Button>
      </ul>
    </nav>
  );
};

export default Navbar;
