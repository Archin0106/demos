import axios from "axios";
import { useState, useEffect } from "react";
export default function UserList() {
    const [users, setUsers] = useState([]);
  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(res => res.json())
  //     .then(data => {
  //       setUsers(data);
  //     });
  // }, [])
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        setUsers(res.data);
      }).catch((err) => {
        console.log(err);
      });
  }, [])


  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-12">
          <ul className="list-group">
            {
              users.map(item => <li key={item.id} className="list-group-item">{item.name}</li>)
            }
          </ul>
        </div>
      </div>
    </div>
  )
}
