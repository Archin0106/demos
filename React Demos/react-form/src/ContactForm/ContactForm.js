import React, { useState } from 'react'
import Contact from '../Contact/Contact';
import { v4 as uuidv4 } from 'uuid';
export default function ContactForm() {
    const [contacts, setContacts] = useState([]);
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    // function setFnameValue(event) {
    //     setFname(event.target.value);
    // }
    const AddContact = () => {
        setContacts([...contacts, {id: uuidv4(), fname, lname, email, phone }]);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <div className="bg-dark text-light text-center py-3 rounded">
                        <h2>Contact Form</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="mt-2">
                        <input type="text" onChange={(e) => setFname(e.target.value)} className="form-control form-control-sm" placeholder="First Name" />
                    </div>
                    <div className="mt-2">
                        <input type="text" onChange={(e) => setLname(e.target.value)} className="form-control form-control-sm" placeholder="Last Name" />
                    </div>
                    <div className="mt-2">
                        <input type="text" onChange={(e) => setEmail(e.target.value)} className="form-control form-control-sm" placeholder="Email" />
                    </div>
                    <div className="mt-2">
                        <input type="text" onChange={(e) => setPhone(e.target.value)} className="form-control form-control-sm" placeholder="Phone" />
                    </div>
                    <div className="mt-2 text-center">
                        <button className="btn btn-success" onClick={AddContact}>Submit</button>
                    </div>
                </div>
            </div>
            <div className="row mt-2">
                {
                    contacts.map(item => <Contact key={item.id} fname={item.fname} lname={item.lname} email={item.email} phone={item.phone} />)
                }
            </div>
        </div>
    )
}
