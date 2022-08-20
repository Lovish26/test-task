import React from "react";

const Table = (props) => {
  const { credentials } = props;
  return (
    <div className="table">
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
            <th>Occupation</th>
            <th>Religion</th>
            <th>Marital Status</th>
            <th>Blood Group</th>
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
              <td>{credentials.occupation ? credentials.occupation : "-"}</td>
              <td>{credentials.religion ? credentials.religion : "-"}</td>
              <td>
                {credentials.maritalStatus ? credentials.maritalStatus : "-"}
              </td>
              <td>{credentials.bloodGroup ? credentials.bloodGroup : "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        Note: <span>Fields that are not defined are shown as hyphen (-)</span>
      </p>
    </div>
  );
};

export default Table;
