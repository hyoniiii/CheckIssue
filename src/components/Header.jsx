import React, { useState, useEffect } from 'react';
import issueAPI from '../server/api';
import styled from 'styled-components';

const Header = () => {
  const [repo, setRepo] = useState([]);

  const handleGetRepo = () => {
    issueAPI.getRepoIssues().then(({ data }) => {
      setRepo(data);
    });
  };
  useEffect(() => {
    handleGetRepo();
  }, []);
  return (
    <StyledHeader>
      <header className="header">{repo.full_name}</header>
    </StyledHeader>
  );
};

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 60px;
  background-color: #24292e;
  color: #fff;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 100px;
  }
`;

export default Header;
