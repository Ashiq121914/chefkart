import React, { useEffect, useState } from "react";
import TableMap from "./TableMap";

const Table = () => {
  const [datas, setDatas] = useState([]);
  const [option, setOption] = useState("");
  console.log(option);

  useEffect(() => {
    fetch("MOCK_DATA (1).json")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);

  const type = (value) => {
    setOption(value);
  };

  return (
    <div>
      <div className="w-11/12 mx-auto">
        <select
          onChange={(event) => type(event.target.value)}
          name="userType"
          className="select select-bordered w-full max-w-xs mt-10"
        >
          <option selected disabled>
            Unsort
          </option>
          <option value="ASC">ASC</option>
          <option value="DESC">DESC</option>
        </select>
        <table className="table w-full table-auto mt-20">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            <>
              {option === "ASC" &&
                datas
                  .sort((a, b) => (a.first_name > b.first_name ? 1 : -1))
                  .map((data) => (
                    <TableMap key={data.id} data={data}></TableMap>
                  ))}
            </>
            <>
              {option === "DESC" &&
                datas
                  .sort((a, b) => (a.first_name > b.first_name ? -1 : 1))
                  .map((data) => (
                    <TableMap key={data.id} data={data}></TableMap>
                  ))}
            </>
            <>
              {option === "" &&
                datas.map((data) => (
                  <TableMap key={data.id} data={data}></TableMap>
                ))}
            </>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
