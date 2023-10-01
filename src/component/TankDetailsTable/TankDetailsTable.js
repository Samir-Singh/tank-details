import React from "react";
import style from "./TankDetailsTable.module.css";

const TankDetailsTable = ({ table_heading }) => {
  return (
    <div className={style.main_div}>
      <h1 className={style.table_main_heading}>{table_heading}</h1>
      <div className={style.table_div}>
        <table className={style.table}>
          <thead className={style.table_head}>
            <tr>
              <th>S/No.</th>
              <th>Due Date</th>
              <th>Carried Out</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5]?.map((item, idx) => (
              <tr key={idx}>
                <td style={{ width: "13%" }}>{idx + 1}</td>
                <td style={{ width: "21%" }}>01 Apr 2023</td>
                <td style={{ width: "22%" }}>01 Apr 2023</td>
                <td>As Per Procedure Carried Out</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TankDetailsTable;
