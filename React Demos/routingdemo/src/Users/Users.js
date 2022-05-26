import React from 'react'
import { Link } from "react-router-dom";
export default function Users() {
    const [users, setUsers] = React.useState([]);
    React.useEffect(() => {
        fetch('https://dummyapi.io/data/v1/user?limit=20', {
            headers: {
                'app-id': '61d42dff81395d74a1d00055'
            }
        }).then(res => res.json())
        .then(data => setUsers(data.data));
    }, [])

    return (
        <div className="container">
            <div className="row">
                {
                    users.map(item => <div key={item.id} className="col-md-3 mt-3">
                        <div className="card">
                            <img src={item.picture} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{item.firstName} {item.lastName}</h5>
                                <Link to={`/profile/${item.id}`} className="btn btn-primary stretched-link">See Profile</Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}
