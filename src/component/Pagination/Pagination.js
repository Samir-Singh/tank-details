import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import _ from "lodash";
import downarrow from "../../assets/ArrowPagintion.png";
import style from "./Pagination.module.css";

const Pagination = (props) => {
  const location = useLocation();
  let [pages, setPages] = useState([]);
  let [click, setClick] = useState(0);
  const { pagesCount, onPageChange, currentPage } = props;

  useEffect(() => {
    let pages = _.range(1, pagesCount + 1);
    setPages(pages);
  }, []);

  useEffect(() => {
    let pages = _.range(click * 2 + 1, pagesCount + 1);
    setPages(pages);
  }, [click, pagesCount]);

  if (
    Math.ceil(pagesCount) === 1 ||
    isNaN(Math.ceil(pagesCount)) ||
    Math.ceil(pagesCount) === 0
  )
    return null;

  return (
    <div className={style.paginationContainer}>
      <ul className={style.paginationSubContainer}>
        <button
          style={{
            border: "none",
            backgroundColor: props.color,
            color: props.color2,
            borderRadius: "7px",
            padding: "5px",
          }}
          className={style.preBtn}
          disabled={currentPage == 1 ? true : false}
          onClick={() => onPageChange(currentPage, "prev")}
        >
          {/* Prev */}
          <img
            style={{ transform: " rotateZ(180deg)" }}
            src={downarrow}
            alt="img"
          />
        </button>

        <p style={{ padding: "10px" }}>
          {" "}
          {currentPage} of {Math.ceil(pagesCount)}
        </p>
        <button
          style={{
            border: "none",
            backgroundColor: props.color,
            color: props.color2,
            borderRadius: "7px",
            padding: "5px",
          }}
          className={style.preBtn}
          disabled={Math.ceil(pagesCount) == currentPage ? true : false}
          onClick={() => onPageChange(currentPage, "next")}
        >
          <img src={downarrow} alt="img" />
        </button>
      </ul>
    </div>
  );
};

export default Pagination;
