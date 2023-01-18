import React from 'react';

const UserRow = ({ user, index }) => {
    
    return (
        <tr className="table__body">
            <td>{index + 1}</td>
            <td>{user.role}</td>
            <td>{user.name}</td>
            <td>{user.whatsappUrl}</td>
            <td>0{user.phone}</td>
            <td><button className="btn">complain</button></td>
        </tr>
    );
};

export default UserRow;