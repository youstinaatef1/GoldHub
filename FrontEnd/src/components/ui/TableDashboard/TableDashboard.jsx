import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./TableDashboard.module.css";


function TableDashboard() {
   // layer 1 states & Global Data
    const [users, setUsers] = useState([
      {id: 1, userName: "Youstina", Email:"Youstina@yahoo.com", handle: "@Yous"},
      {id: 2, userName: "Ali", Email:"Ali@yahoo.com", handle: "@ahmed"},
      {id: 3, userName: "Mona", Email:"Atef@yahoo.com", handle: "@mona"},
      {id: 4, userName: "Mina", Email:"Monir@yahoo.com", handle: "@mina"}
    ]);
    // layer 2 (effects) API Call
    // layer 3 Handler
    const onDeleteHandler = (userId) => {
      // Get Id & Create New User
      const newUsersArr =users.filter((user) => user.id !== userId);
      // Get New State
      setUsers(newUsersArr);

    }
    // layer 4 JSX  
  return (
    <div className="container py-4">
      <div className="d-flex align-items-center justify-content-between mb-3">
        <h5 className="mb-0 fw-semibold">Users List</h5>
        <Link to="add" className={`${styles.buttonNew} btn btn-primary btn-sm`}>
          Add New User
        </Link>
      </div>

      <div className={styles.tableWrapper}>
        <table className={`table mb-0 ${styles.table}`}>
          <thead>
            <tr>
              <th>#</th>
              <th>userName</th>
              <th>Email</th>
              <th>Handle</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
             <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.userName}</td>
              <td>{user.Email}</td>
              <td>{user.handle}</td>
              <td>
                <button className="btn btn-danger btn-sm" onClick={() => onDeleteHandler(user.id)}>Delete User</button>
                </td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableDashboard;
