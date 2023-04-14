import React from "react";
import data from "../../assets/data/status-card-data.json";

const User = () => {
  return (
    <div>
      <ul>
        {data.map((item, key) => (
          <li key={key}>{item.title}</li>
        ))}
      </ul>

      <table>
        <thead>
          {Object.keys(data[0]).map((item, index) => (
            <th className="m-5 p-2 " style={{border: "1px solid red"}}>
                {item}
            </th>
          ))}
        </thead>
      </table>
    </div>
  );
};

export default User;
