import React, { useState } from 'react';
import UserTable from '../../components/UserTable/UserTable';
import { useGetAgentsQuery } from '../../redux/api/api';
import Loading from '../../components/Loading/Loading';

const MasterAgent = () => {
    const [query, setQuery] = useState({
        role: "master",
        pageno: 1,
        perpage: 5
    })
    const { data, isLoading } = useGetAgentsQuery(query);
    const users = data?.data[0]?.data;

    if (isLoading) {
        return <Loading />
    }

    return (
        <section className="MasterAgent">
            <div className="container">
                <div className="table__content">
                    <UserTable users={users} />
                </div>
            </div>
        </section>
    );
};

export default MasterAgent;