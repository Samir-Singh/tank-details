import React from "react";
import style from "./TankDetails.module.css";
import { useNavigate } from "react-router-dom";
import tank_img from "../../assets/tank.jpg";
import TankDetailsTable from "../../component/TankDetailsTable/TankDetailsTable";

const TankDetails = () => {
  const navigate = useNavigate();

  return (
    <div className={style.main_div}>
      <div className={style.bread_crum}>
        <span className={style.link_bread} onClick={() => navigate("/")}>
          {" "}
          Dashboard
        </span>{" "}
        {">"}{" "}
        <span
          className={style.link_bread}
          onClick={() => navigate("/tankList")}
        >
          Tank List
        </span>{" "}
        {">"} Tank Details
      </div>

      <div className={style.main_details_div}>
        <div className={style.tank_img_div}>
          <img src={tank_img} className={style.tank_img} alt="img" />
        </div>

        <div className={style.tank_details_div}>
          <p className={style.tank_code_para}>TANK CODE : ITM-00002</p>
          <p className={style.tank_reg_no}>
            BA/REG NO. : <span className={style.value}>up78</span>
          </p>
          <p className={style.tank_reg_no}>
            CHASIS NO. : <span className={style.value}>45214</span>
          </p>
          <p className={style.tank_reg_no}>
            Country Of Origin : <span className={style.value}>India</span>
          </p>
          <p className={style.tank_reg_no}>
            Present Ser Life : <span className={style.value}>33 Years</span>
          </p>
          <p className={style.tank_reg_no}>
            Make/Type : <span className={style.value}>TANK T-90 (OH-553)</span>
          </p>
          <p className={style.tank_reg_no}>
            Issue Type : <span className={style.value}>VSD OD AVADI</span>
          </p>
          <p className={style.tank_reg_no}>
            User Unit : <span className={style.value}>up78</span>
          </p>
          <p className={style.tank_reg_no}>
            EQPT Status : <span className={style.value}>458gty87</span>
          </p>
          <p className={style.tank_reg_no}>
            BOH/ORG : <span className={style.value}>45879-der345</span>
          </p>
          <p className={style.tank_reg_no}>
            BOH Date : <span className={style.value}>12 Apr 2000</span>
          </p>

          <div className={style.other_details_div}>
            <div className={style.row}>
              <div className={`${style.col} ${style.no_pad_left}`}>
                BOH KM/HRS <br />{" "}
                <span className={style.value}>2023 - 09 - 22</span>
              </div>
              <div className={style.col}>
                Style <br /> <span className={style.value}>344455688</span>
              </div>
              <div className={style.col}>
                Length <br /> <span className={style.value}>35657478</span>
              </div>
            </div>
            <div className={style.row}>
              <div className={`${style.col} ${style.no_pad_left}`}>
                ENG REG NO. <br /> <span className={style.value}>44332</span>
              </div>
              <div className={style.col}>
                Color <br /> <span className={style.value}>Green</span>
              </div>
              <div className={style.col}>
                Width <br /> <span className={style.value}>34555</span>
              </div>
            </div>
            <div className={style.row}>
              <div className={`${style.col} ${style.no_pad_left}`}>
                DT of Fitment <br />{" "}
                <span className={style.value}>234465534</span>
              </div>
              <div className={style.col}>
                Size <br /> <span className={style.value}>344455688</span>
              </div>
              <div className={style.col}>
                Weight <br /> <span className={style.value}>35657478</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={style.tank_details_table_div}>
        <TankDetailsTable table_heading="TM-I TASK DETAILS" />
        <TankDetailsTable table_heading="TM-II TASK DETAILS" />
        <TankDetailsTable table_heading="MR-I TASK DETAILS" />
        <TankDetailsTable table_heading="MR-II TASK DETAILS" />
        <TankDetailsTable table_heading="MR-III TASK DETAILS" />
        <TankDetailsTable table_heading="MR-III TASK DETAILS" />
      </div>
    </div>
  );
};

export default TankDetails;
