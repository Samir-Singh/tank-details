import React from "react";
import style from "./Home.module.css";
import SingleVehicle from "../../component/SingleVehicle/SingleVehicle";
import tank_img from "../../assets/tank.jpg";
import bmp_img from "../../assets/bmp.jpg";

const Home = () => {
  return (
    <div className={style.main_div}>
      <div className={style.dashboard_para}>Dashboard</div>
      <div className={style.second_div}>
        <SingleVehicle
          vehicle_img={tank_img}
          vehicle_name="Tank"
          pathName="/tankList"
        />
        <SingleVehicle
          vehicle_img={bmp_img}
          vehicle_name="BMP"
          pathName="/bmpList"
        />
      </div>
    </div>
  );
};

export default Home;
