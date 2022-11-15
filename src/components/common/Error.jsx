import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Error = () => {
  const navigation = useNavigate();

  return (
    <ErrorBlock>
      <p>죄송합니다. 페이지를 찾을 수 없습니다.</p>
      <button onClick={() => navigation('/')}>홈으로</button>
    </ErrorBlock>
  );
};

export default Error;

const ErrorBlock = styled.div`
  margin-top: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  button {
    margin-top: 1rem;
    cursor: pointer;
    &:hover {
      opacity: 0.5;
    }
  }
`;
