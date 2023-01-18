import React from 'react';

const UserRow = ({ user, index }) => {
    console.log(user)
    return (
        <tr className="table__body">
            <td>{index + 1}</td>
            <td>{user.role}</td>
            <td>{user.name}</td>
            <td>{user.whatsappUrl}</td>
            <td>0{user.phone}</td>
        </tr>
    );
};

export default UserRow;