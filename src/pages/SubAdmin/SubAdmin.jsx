import React, { useState } from 'react';
import UserTable from '../../components/UserTable/UserTable';
import { useGetAgentsQuery } from '../../redux/api/api';
import Loading from '../../components/Loading/Loading';
import Modal from '../../components/Modal/Modal';

const SubAdmin = () => {
    const [modal, setModal] = useState(false);
    const [query, setQuery] = useState({
        role: "subadmin",
        pageno: 1,
        perpage: 100
    })
    const { data, isLoading } = useGetAgentsQuery(query);
    const users = data?.data[0]?.data;
    const user = JSON.parse(localStorage?.getItem("admin"))

    if (isLoading) return <Loading />

    return (
        <section className="MasterAgent">
            <div className="container">
                <div className="table__content">
                    <UserTable users={users} />
                </div>
                {user?.role === "admin" && (
                    <div className="admin__area">
                        <button onClick={() => setModal(true)}>Add agent</button>
                        <div className="admin__modal">
                            {modal && <Modal setModal={setModal} />}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default SubAdmin;