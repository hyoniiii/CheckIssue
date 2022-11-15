import { useEffect, useState, useRef, useCallback } from 'react';
import styled from 'styled-components';
import issueAPI from '../../server/api';
import ListItem from './ListItem';
import Advertisement from './Advertisement';

const ListFrame = () => {
  const [issues, setIssues] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const observer = useRef();

  const lastIssueElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  useEffect(() => {
    setLoading(true);
    issueAPI
      .getIssues(page)
      .then(({ data }) => {
        setIssues((prevIssues) => {
          return [...new Set([...prevIssues, ...data])];
        });
        setHasMore(data.length > 0);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page]);

  return (
    <ListFrameBlock>
      {issues &&
        issues.map((issue, index) => {
          if (index === 5) {
            return <Advertisement key={Date.now()} />;
          } else {
            if (issues.length === index + 1) {
              return <ListItem key={issue.number} issue={issue} ref={lastIssueElementRef} />;
            } else {
              return <ListItem key={issue.number} issue={issue} />;
            }
          }
        })}
    </ListFrameBlock>
  );
};

export default ListFrame;

export const ListFrameBlock = styled.div``;
