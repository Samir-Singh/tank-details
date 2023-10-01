import React from "react";
import style from "./SingleVehicle.module.css";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

const SingleVehicle = ({ vehicle_img, vehicle_name, pathName }) => {
  const navigate = useNavigate();

  return (
    <div className={style.main_div}>
      <div className={style.logo_div}>
        <img src={logo} className={style.logo} alt="img" />
      </div>
      <div className={style.tank_photo}>
        <img src={vehicle_img} className={style.tank_img} alt="img" />
      </div>
      <div className={style.flex_div}>
        <p className={style.total_para}>Total {vehicle_name} : 100</p>
        <button className={style.view_btn} onClick={() => navigate(pathName)}>
          View List
        </button>
      </div>
    </div>
  );
};

export default SingleVehicle;
