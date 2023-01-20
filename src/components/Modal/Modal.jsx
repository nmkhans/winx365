import React from 'react';
import "./Modal.scss";
import { useAddAgentMutation } from '../../redux/api/api';
import { toast } from "react-hot-toast";

const Modal = ({ setModal }) => {
    const [addAgent] = useAddAgentMutation()

    const handleSubmit = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const phone = event.target.phone.value;
        const whatsappUrl = event.target.whatsappUrl.value;
        const role = event.target.role.value;
        const formatedUrl = (88 + whatsappUrl);
        
        const data = { name, email, phone, whatsappUrl: formatedUrl, role }
        const result = await addAgent(data)
        if (result?.data?.success) {
            toast.success(result.data.message)
            setModal(false)
        } else {
            toast.error(result?.error?.data?.message)
        }
    }

    return (
        <div className="Modal">
            <div className="modal__body">
                <div className="modal__close">
                    <button onClick={() => setModal(false)}>X</button>
                </div>
                <div className="modal__title">
                    <h3>Add agent</h3>
                </div>
                <div className="modal__content">
                    <form onSubmit={handleSubmit}>
                        <div className="modal__input">
                            <input type="text" placeholder="Enter name" name="name" />
                        </div>
                        <div className="modal__input">
                            <input type="email" placeholder="Enter email" name="email" />
                        </div>
                        <div className="modal__input">
                            <input type="text" placeholder="Enter phone number" name="phone" />
                        </div>
                        <div className="modal__input">
                            <input type="text" placeholder="Enter whatsapp link" name="whatsappUrl" />
                        </div>
                        <div className="modal__input">
                            <select name="role">
                                <option value="customar">Customar</option>
                                <option value="admin">Admin</option>
                                <option value="subadmin">Sub Admin</option>
                                <option value="superagent">Super Agent</option>
                                <option value="masteragent">Master Agent</option>
                            </select>
                        </div>
                        <div className="modal__input">
                            <input type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Modal;