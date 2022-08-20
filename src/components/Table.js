import React from "react";

const Table = (props) => {
  const { credentials } = props;
  return (
    <div>
      <h1 className="heading">Table</h1>
      <table>
        <tbody>
          <tr>
            <th>S No.</th>
            <th>Name</th>
            <th>DOB/Age</th>
            <th>Gender</th>
            <th>Mobile No.</th>
            <th>Email</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Country</th>
            <th>Pincode</th>
          </tr>
          {credentials.map((credentials, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{credentials.name}</td>
              <td>{credentials.dob}</td>
              <td>{credentials.sex ? credentials.sex : "-"}</td>
              <td>{credentials.mobile}</td>
              <td>{credentials.email}</td>
              <td>{credentials.address}</td>
              <td>{credentials.city}</td>
              <td>{credentials.state}</td>
              <td>{credentials.country}</td>
              <td>{credentials.pincode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
