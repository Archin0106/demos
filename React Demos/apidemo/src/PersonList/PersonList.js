import axios from 'axios';
import { useState, useEffect } from 'react'

export default function PersonList() {
    const [persons, setPersons] = useState([]);
    useEffect(() => {
        axios.get('https://dummyapi.io/data/v1/user?limit=30', {
            headers: {
                'app-id': '61d42dff81395d74a1d00055'
            }
        }).then((res) => {
            setPersons(res.data.data);
            console.log(res.data.data);
        }).catch((err) => {
            console.log(err);
        });
    }, [])

    return (
        <div className="container mt-3">
            <div className="row">
                {
                    persons.map(item =>
                        <div className="col-md-2 col-4 mb-3" key={item.id}>
                            <div className="card">
                                <img src={item.picture} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{item.firstName} {item.lastName}</h5>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
