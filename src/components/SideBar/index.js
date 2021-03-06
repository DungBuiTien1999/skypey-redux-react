import React from 'react';
import User from '../../containers/User';
import './SideBar.css';

function SideBar({ contacts }) {
    return (
        <aside className="Sidebar" >
            {
                contacts.map(contact => <User key={contact.user_id} user={contact} />)
            }
        </aside>
    )
}

export default SideBar
