import styled from 'styled-components';

const Advertisement = () => {
  return (
    <StAdvertisement>
      <a href="https://www.wanted.co.kr" target="_blank" rel="noreferrer">
        <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100" />
      </a>
    </StAdvertisement>
  );
};

export default Advertisement;

const StAdvertisement = styled.div`
  width: 100%;
  height: 100px;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  img {
    width: 110px;
    height: 30px;
  }
`;
