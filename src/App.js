import Router from '../src/router/Router'

import { GlobalStyle } from './styled/globalStyeld'
import { Container } from './styled'
import GlobalState from './global/GlobalState';

import { ToastContainer } from 'react-toastify';


export const App = () => {

  return (
    
    <GlobalState>
      <Container>
        <GlobalStyle />
        <Router />
        <ToastContainer autoClose={3000} />
      </Container>
    </GlobalState>
  );
}

export default App
