import { useState } from 'react';
const Product = () => {
    const [username, setUsername] = useState([
        {
            id: 1,
            pname: 'Laptop',
            price: 45000
        },
        {
            id: 2,
            pname: 'Camera',
            price: 25000
        }
    ]);
    const changeState = () => {
        setUsername('John');
    }
    return (
        <div>
            {/* <h2>{username}</h2> */}
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <ul className="list-group">
                            {
                                username.map(item => <li key={item.id} className="list-group-item">{item.pname}</li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <button onClick={changeState}>Change State</button>
        </div>
    )
}
export default Product;