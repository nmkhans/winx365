import React from 'react';
import { useDeleteAgentMutation } from '../../redux/api/api';
import { BsFacebook, BsMessenger, BsWhatsapp } from "react-icons/bs";
import { toast } from "react-hot-toast";

const UserRow = ({ user, index }) => {
    const admin = JSON.parse(localStorage.getItem("admin"));
    const [deleteAgent, { isLoading }] = useDeleteAgentMutation();

    const handleDetete = async (id) => {
        const result = await deleteAgent(id);
        if (result.data.success) {
            toast.success(result.data.message)
        }
    }

    const handleRedirect = () => {
        window.location.href = `https://wa.me/${user.whatsappUrl}`;
    }

    return (
        <tr className="table__body">
            <td>{index + 1}</td>
            <td>{user.role}</td>
            <td>{user.name}</td>
            <td>
                <span className="table__icon">
                    <BsFacebook />
                </span>
                <span className="table__icon">
                    <BsMessenger />
                </span>
                <span onClick={handleRedirect} className="table__icon">
                    <BsWhatsapp />
                </span>
            </td>
            <td>0{user.phone}</td>
            <td>
                <button className="btn">complain</button>
                {
                    admin?.role === "admin" && (
                        <button onClick={() => handleDetete(user._id)} className="deletebtn">{
                            isLoading ? "Deleting..." : "Delete"
                        }</button>
                    )
                }
            </td>
        </tr>
    );
};

export default UserRow;