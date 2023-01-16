import React from 'react';
import AccountInfo from '../../components/Sections/AccountInfo/AccountInfo';
import AgentInfo from '../../components/Sections/AgentInfo/AgentInfo';
import AgentType from '../../components/Sections/AgentType/AgentType';

const Home = () => {
    return (
        <>
           <AccountInfo />
           <AgentInfo />
           <AgentType />
        </>
    );
};

export default Home;