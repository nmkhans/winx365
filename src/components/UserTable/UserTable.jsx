import React from 'react';
import UserRow from '../UserRow/UserRow';
import "./UserTable.scss";

const UserTable = ({ users }) => {
   
    return (
        <table className="user__table">
            <thead>
                <tr className="table__head">
                    <th>user id</th>
                    <th>role</th>
                    <th>name</th>
                    <th>social link</th>
                    <th>phone number</th>
                    <th>action</th>
                    
                </tr>
            </thead>
            <tbody>
                {users?.map((user, index) => <UserRow key={user._id} index={index} user={user} />)}
            </tbody>
        </table>
    );
};

export default UserTable;