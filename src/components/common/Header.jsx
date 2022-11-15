import React, { useState, useEffect } from 'react';
import issueAPI from '../../server/api';
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
  justify-content: space-between;
  align-items: center;
  text-align: center;
  height: 70px;
  background-color: #24292e;
  color: #fff;
  font-size: 1.5rem;
  line-height: 2.5;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export default Header;
