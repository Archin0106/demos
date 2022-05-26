import React from 'react'
import Contact from '../Contact/Contact'

export default function ContactList() {
  const [contacts, setContacts] = React.useState([]);
  React.useEffect(() => {
    fetch('http://localhost:3001/contacts')
      .then(res => res.json())
      .then(data => setContacts(data));
  }, [])

  function DeleteContact(id) {
    fetch(`http://localhost:3001/contacts/${id}`, {
      method: 'DELETE'
    }).then(res => res.json)
      .then(data => {
        let res = contacts.filter(item => item.id !== id);
        setContacts(res);
      });
  }

  return (
    <div className="container mt-2">
      <div className="row">
        {
          contacts.map(item => <Contact DeleteHandler={DeleteContact} key={item.id} id={item.id} firstname={item.firstname} lastname={item.lastname} email={item.email} city={item.city} phone={item.phone} />)
        }
      </div>
    </div>
  )
}
