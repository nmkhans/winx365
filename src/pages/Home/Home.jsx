import React from 'react';
import AccountInfo from '../../components/Sections/AccountInfo/AccountInfo';
import AgentInfo from '../../components/Sections/AgentInfo/AgentInfo';
import AgentRules from '../../components/Sections/AgentsRules/AgentRules';
import AgentType from '../../components/Sections/AgentType/AgentType';
import LinkArea from '../../components/Sections/LinkArea/LinkArea';
import PointBuy from '../../components/Sections/PointBuy/PointBuy';
import Rules from '../../components/Sections/Rules/Rules';

const Home = () => {
    return (
        <>
           <AccountInfo />
           <AgentInfo />
           <AgentType />
           <AgentRules />
           <PointBuy />
           <Rules />
           <LinkArea />
        </>
    );
};

export default Home;