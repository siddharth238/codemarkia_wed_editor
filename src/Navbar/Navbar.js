import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import { IconButton } from '@mui/material';
import Button from '@mui/material/Button';
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';
import CodeIcon from '@mui/icons-material/Code';
const Navbar = ({savebtn}) => {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">Codemarkias</h1>
      <ul className="navbar-nav">
       
        <li className="nav-item">
          <Link to="/" className="nav-link"><Button>Code Editor<CodeIcon style={{ color: "red" , paddingLeft:"5"}}  /></Button></Link>
        </li>
        <li className="nav-item">
          <Link to="/saved" className="nav-link"><Button>Archive< FolderSpecialIcon style={{ color: "orange" , paddingLeft:"5"}}/></Button></Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
