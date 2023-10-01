import React, { useState } from "react";
import style from "./BmpList.module.css";
import Pagination from "../../component/Pagination/Pagination";
import { useNavigate } from "react-router-dom";

const BmpList = () => {
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const handlePageChange = (page, status) => {
    if (status === "next") {
      setPage(page + 1);
    } else {
      setPage(page - 1);
    }
  };

  return (
    <>
      <div className={style.dashboard_para}>
        <span className={style.link_bread} onClick={() => navigate("/")}>
          Dashboard
        </span>{" "}
        > BMP List
      </div>
      <div className={style.header}>
        List Of BMP <p className={style.tank_count}>100</p>
      </div>
      <div className={style.main_div}>
        <div className={style.table_div}>
          <table className={style.table}>
            <thead className={style.table_head}>
              <tr>
                <th>BMP Code</th>
                <th>BA/REG No.</th>
                <th>Country Of Origin</th>
                <th>Present SER Life</th>
                <th>Make/Type</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]?.map((item, idx) => (
                <tr key={idx}>
                  <td>
                    <span className={style.link}>IITM-00002</span>
                  </td>
                  <td>up78</td>
                  <td>INDIA</td>
                  <td>33 Years</td>
                  <td>TANK T-90 (OH-553)</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className={style.pagination_div}>
        <Pagination
          onPageChange={handlePageChange}
          currentPage={page}
          pagesCount={100 / 10}
          color="#001731"
          color2="white"
        />
      </div>
    </>
  );
};

export default BmpList;
