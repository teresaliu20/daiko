import React from 'react';
import InfoLine from '../InfoLine';
import InfoContainer from '../InfoContainer';
import LinkContainer from '../LinkContainer';

const loremShort = "Lorem ipsum";

const lorem = "Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo  consequat. Duis aute irure dolor in reprehenderit in voluptate velit  esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat  cupidatat non proident, sunt in culpa qui officia deserunt mollit anim  id est laborum";

const CommitteePage = () => {
  return (
    <div className="committee-list-page">
      <h1 className="main-header">Committees</h1>
      <InfoLine title="Lead" info={loremShort}/>
      <InfoLine title="Advisor" info={loremShort}/>
      <InfoContainer title="Mission" info={lorem}/>
      <LinkContainer title="Members"/>
    </div>
  );
};

export default CommitteePage;
