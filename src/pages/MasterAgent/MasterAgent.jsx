import React, { useState } from 'react';
import UserTable from '../../components/UserTable/UserTable';
import { useGetAgentsQuery } from '../../redux/api/api';

const MasterAgent = () => {
    const [query, setQuery] = useState({
        role: "master",
        pageno: 1,
        perpage: 5
    })
    const { data, isLoading } = useGetAgentsQuery(query);
    const users = data?.data[0]?.data;

    return (
        <section className="MasterAgent">
            <div className="container">
                <UserTable users={users} />
            </div>
        </section>
    );
};

export default MasterAgent;