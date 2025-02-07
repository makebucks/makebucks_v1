import { useEffect, useState } from "react";
import { getUsers } from "../services/getUsers";

const Users = () => {
  const [data, setData] = useState([]);
  useEffect(function () {
    getUsers().then((data) => setData(data));
  });

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Sl no</th>
            <th>Created At</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.createdAt}</td>
              <td>{item.name}</td>
            </tr>
          ))}
          {data.length === 0 && <p>No data</p>}
        </tbody>
      </table>
    </div>
  );
};
export default Users;
