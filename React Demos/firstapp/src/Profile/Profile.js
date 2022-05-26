import { useState } from 'react'
import './Profile.css'
export default function Profile() {
    const [task, setTask] = useState([
        {
            id: 1,
            text: 'Meeting at 9 AM',
            isCompleted: false
        },
        {
            id: 2,
            text: 'Buy Groceries',
            isCompleted: false
        },
        {
            id: 3,
            text: 'Go to Gym',
            isCompleted: false
        },
        {
            id: 4,
            text: 'Pay Bills',
            isCompleted: false
        }
    ])
    let mystyle = {
        color: 'red',
        fontFamily: 'Arial',
        fontSize: '25pt',
        letterSpacing: 5
    }
    function markCompleted(id) {
        let index = task.indexOf(task.filter(item => item.id == id)[0]);
        task[index].isCompleted = task[index].isCompleted ? false : true;
        setTask([...task]);
    }
    return (
        // <div className="container">
        //     <div className="row">
        //         <div className="col-md-4">
        //             <div className="card" >
        //                 <img src="images/img1.jpg" className="card-img-top" alt="..."/>
        //                     <div className="card-body">
        //                         <h5 className="card-title">Card title</h5>
        //                         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        //                         <a href="#" className="btn btn-primary">Go somewhere</a>
        //                     </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div>
            <p className="heading-1">Welcome to CSS Styling in ReactJS</p>
            <p style={mystyle}>Using Inline Style</p>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <ul className="list-group">
                            {
                                task.map(item => <li key={item.id} className="list-group-item">
                                    <input className='me-2' type="checkbox" onChange={markCompleted.bind(this, item.id)} />
                                    {
                                        item.isCompleted ? <span className='text-decoration-line-through text-success'>{item.text}</span> : <span className='text-danger'>{item.text}</span>
                                    }
                                </li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
