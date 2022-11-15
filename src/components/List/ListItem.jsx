import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ListItem = ({ issue, lastIssueElementRef }) => {
  const { number, title, user, created_at, comments } = issue;

  return (
    <StListItem ref={lastIssueElementRef}>
      <Link to={`/issue/${number}`}>
        <div className="contents">
          <div className="contents_title">
            <h4>#{number}</h4>
            <h4>{title}</h4>
          </div>
          <div className="conte nts_info">
            <span>작성자:{user.login},</span>
            <span>
              {' '}
              작성일:{`${created_at.slice(0, 4)}년 ${created_at.slice(5, 7)}월 ${created_at.slice(8, 10)}일`}
            </span>
            <span> 코멘트:{comments}</span>
          </div>
        </div>
      </Link>
    </StListItem>
  );
};

export default ListItem;

export const StListItem = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 0 20px;
  margin-bottom: 20px;
  cursor: pointer;

  .contents {
    border-bottom: 1px solid #e1e4e8;
    padding: 1rem 0;
  }
  .contents_title {
    display: flex;
  }
  .contents_title h4 {
    margin: 0.5rem 0 0.5rem 0.5rem;
  }
  .contents_info {
    margin: 0 0.5rem;
`;
