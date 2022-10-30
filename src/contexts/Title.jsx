import React, { useState, useEffect } from 'react';
import issueAPI from '../server/api';

const Title = () => {
  const [title, setTitle] = useState([]);

  const handleGetIssues = () => {
    issueAPI.getIssues().then(({ data }) => {
      setTitle(data);
    });
  };

  //함수를 한 번만 실행시키기 위해 끝에 [] 붙여줌
  useEffect(() => {
    handleGetIssues();
  }, []);

  return (
    <div>
      <div>
        {title((item) => {
          return (
            <div key={item.id}>
              <br></br>
              <h4>#{item.number}</h4>
              <h4>{item.title}</h4>
              <h4>{item.state}</h4>
              <h4>{item.user.login}</h4>
              <h4>{item.created_at}</h4>
              <h4>{item.comments}</h4>
            </div>
          );
        })}
        ;
      </div>
    </div>
  );
};

export default Title;
