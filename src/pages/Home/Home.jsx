import React from 'react';
import AccountInfo from '../../components/Sections/AccountInfo/AccountInfo';
import AgentInfo from '../../components/Sections/AgentInfo/AgentInfo';
import AgentRules from '../../components/Sections/AgentsRules/AgentRules';
import AgentType from '../../components/Sections/AgentType/AgentType';
import PointBuy from '../../components/Sections/PointBuy/PointBuy';

const Home = () => {
    return (
        <>
           <AccountInfo />
           <AgentInfo />
           <AgentType />
           <AgentRules />
           <PointBuy />
        </>
    );
};

export default Home;