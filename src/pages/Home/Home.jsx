import React from 'react';
import AccountInfo from '../../components/Sections/AccountInfo/AccountInfo';
import AgentInfo from '../../components/Sections/AgentInfo/AgentInfo';
import AgentRules from '../../components/Sections/AgentsRules/AgentRules';
import AgentType from '../../components/Sections/AgentType/AgentType';
import LinkArea from '../../components/Sections/LinkArea/LinkArea';
import PointBuy from '../../components/Sections/PointBuy/PointBuy';
import RuleFeature from '../../components/Sections/RuleFeature/RuleFeature';
import Rules from '../../components/Sections/Rules/Rules';
import SocialArea from '../../components/Sections/SocialArea/SocialArea';

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
           <SocialArea />
           <RuleFeature />
        </>
    );
};

export default Home;