import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import issueAPI from '../server/api';

const List = () => {
  const [list, setList] = useState([]);

  const navigate = useNavigate();

  const handleGetIssues = () => {
    issueAPI.getIssues().then(({ data }) => {
      setList(data);
    });
  };

  const handleLink = (id) => {
    navigate(`/detail/${id}`);
  };

  useEffect(() => {
    handleGetIssues();
  }, []);

  const handleObserver = (entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      handleGetIssues();
    }
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    };
    const observer = new IntersectionObserver(handleObserver, options);
    if (list.length) {
      observer.observe(document.querySelector('#last'));
    }
  }, [list]);

  const renderImage = (index) => {
    if (index === 4) {
      return (
        <a href="https://www.wanted.co.kr">
          <img
            alt="wanted"
            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100"
          />
        </a>
      );
    }
  };

  return (
    <div>
      <Header />
      <div>
        {list
          .sort((a, b) => b.comments - a.comments)
          .map((item, index) => {
            return (
              <div key={item.id} onClick={() => handleLink(item.id)}>
                <br></br>
                {renderImage(index)}
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

export default List;
