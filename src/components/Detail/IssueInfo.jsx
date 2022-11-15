import React from 'react';
import styled from 'styled-components';

const IssueInfo = ({ issue }) => {
  const { number, title, user, created_at, comments } = issue;

  return (
    <StIssueInfo>
      <img src={user.avatar_url} alt="avatar" className="profile" />
      <div className="contents">
        <div className="contents_title">
          <h3>#{number}</h3>
          <h2>{title}</h2>
        </div>
        <div className="contents_info">
          <span>작성자:{user.login},</span>
          <span>
            {' '}
            작성일:
            {`${created_at.slice(0, 4)}년 ${created_at.slice(5, 7)}월 ${created_at.slice(8, 10)}일`}
          </span>
        </div>
      </div>
      <div>
        <span className="comments"> 코멘트:{comments}</span>
      </div>
    </StIssueInfo>
  );
};

export default IssueInfo;

const StIssueInfo = styled.div`
  display: flex;
  margin: 1rem 2rem;
  padding: 1rem 0;
  border-bottom: 1px solid #e1e4e8;
  justify-content: space-between;
  align-items: center;
  .contents {
    flex: 2;
  }
  .profile {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
    margin-top: 10px;
  }
  .contents_title {
    margin: 0.5rem 0;
  }
  .comments {
    margin-left: auto;
  }
`;
