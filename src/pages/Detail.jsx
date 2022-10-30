import React, { useState, useEffect, useParams } from 'react';
import Header from '../components/Header';
import issueAPI from '../server/api';

const Detail = () => {
  const { id } = useParams();
  const [issue, setIssue] = useState([]);

  const handleGetIssue = () => {
    issueAPI.getIssue(id).then(({ data }) => {
      setIssue(data);
    });
  };

  useEffect(() => {
    handleGetIssue();
  }, []);
  return (
    <div>
      <Header />
      {issue}
    </div>
  );
};

export default Detail;
