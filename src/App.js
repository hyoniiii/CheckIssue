import GlobalStyle from './shared/GlobalStyle';
import Routers from './Router';
import Header from './components/common/Header';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routers />
    </>
  );
};

export default App;
