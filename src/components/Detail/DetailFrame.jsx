import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import issueAPI from '../../server/api';
import IssueContent from './IssueContent';
import IssueInfo from './IssueInfo';

const DetailFrame = () => {
  const { id } = useParams();

  const [issue, setIssue] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // const navigate = useNavigate();

  useEffect(() => {
    issueAPI
      .getIssue(id)
      .then((res) => {
        setIssue({ ...res.data });
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <StDetailFrame>
      {isLoading ? (
        <div>로딩중</div>
      ) : (
        <>
          <IssueInfo issue={issue} />
          <IssueContent issue={issue} />
        </>
      )}
    </StDetailFrame>
  );
};

export default DetailFrame;

const StDetailFrame = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;
