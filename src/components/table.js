import React from 'react'; 
import './style.css'
export default function Table({tableData }) {
  return (
      <table className="table">
        <tr>
          <th>
            {"A"}
          </th>
          <th>
            {"B"}
          </th>
          <th>
            {"C"}
          </th>
          <th>
            {"D"}
          </th>
          <th>
            {"E"}
          </th>
        </tr>
        <tbody>
          {
            tableData.map(record => (
              <tr>
              <td>
                {record.A}
              </td>
              <td>
                {record.B}
              </td>
              <td>
                {record.C}
              </td>
              <td>
                {record.D}
              </td>
              <td>
                {record.E}
              </td>
            </tr>
            ))
          }
        </tbody>
      </table>
  );
}

