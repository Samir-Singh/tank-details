import React, { useState } from "react";
import style from "./Header.module.css";
import logo from "../../assets/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import Backdrop from "@mui/material/Backdrop";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
    setShowMenu(false);
  };

  return (
    <div className={style.header}>
      <div className={style.img_div}>
        <img className={style.logo_img} src={logo} alt="logo" />
      </div>
      <div className={style.content_div}>ARMY VEHICLE</div>
      <div className={style.menu_div}>
        <MenuIcon
          onClick={() => {
            setShowMenu(!showMenu);
            setOpen(true);
          }}
          className={style.menu_icon}
        />
        {showMenu && (
          <div className={style.menu_ul}>
            <div
              className={style.menu_li}
              onClick={() => {
                navigate("/");
                handleClose();
              }}
            >
              Home
            </div>
            <div className={style.menu_li}>Create Tank</div>
            <div className={style.menu_li}>Create BMP</div>
          </div>
        )}
      </div>

      <Backdrop
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: "transparent",
        }}
        open={open}
        onClick={handleClose}
      ></Backdrop>
    </div>
  );
};

export default Header;
