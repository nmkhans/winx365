import React from 'react';
import AccountInfo from '../../components/Sections/AccountInfo/AccountInfo';
import AgentInfo from '../../components/Sections/AgentInfo/AgentInfo';
import AgentRules from '../../components/Sections/AgentsRules/AgentRules';
import AgentType from '../../components/Sections/AgentType/AgentType';

const Home = () => {
    return (
        <>
           <AccountInfo />
           <AgentInfo />
           <AgentType />
           <AgentRules />
        </>
    );
};

export default Home;