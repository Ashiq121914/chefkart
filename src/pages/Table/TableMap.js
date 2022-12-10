import { data } from "autoprefixer";
import React, { useState } from "react";
import "./TableMap.css";

const TableMap = ({ data }) => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = (event) => {
    // 👇️ toggle isActive state on click
    setIsActive((current) => !current);
  };
  return (
    <tr>
      <td
        onClick={handleClick}
        className={
          isActive &&
          `${data.status === true ? "bg-green-400 " : "bg-rose-400 "}`
        }
      >
        {data.first_name}
      </td>
      <td
        onClick={handleClick}
        className={
          isActive &&
          `${data.status === true ? "bg-green-400 " : "bg-rose-400 "}`
        }
      >
        {data.last_name}
      </td>
      <td
        onClick={handleClick}
        className={
          isActive &&
          `${data.status === true ? "bg-green-400 " : "bg-rose-400 "}`
        }
      >
        {data.email}
      </td>
      <td
        onClick={handleClick}
        className={
          isActive &&
          `${data.status === true ? "bg-green-400 " : "bg-rose-400 "}`
        }
      >
        {" "}
        {data.gender}
      </td>
    </tr>
  );
};

export default TableMap;
