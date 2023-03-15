import React from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import mic from '../assets/img/mic.png';
import setting from '../assets/img/setting.png';
import back from '../assets/img/back.png';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="navigation">

      <div key={uuidv4()} onClick={() => navigate('/')} aria-hidden="true">
        <img
          className="btn"
          src={back}
          alt="back"
        />
      </div>
      <span> 2023 </span>

      <h2 className="heading"> Gamer Power </h2>
      <div
        key={uuidv4()}
        onClick={() => navigate('/')}
        className="position"
        aria-hidden="true"
      >
        <img className="btn" src={mic} alt="mic" />
        <img className="btn" src={setting} alt="setting" />
      </div>
    </div>
  );
};

export default Navbar;
