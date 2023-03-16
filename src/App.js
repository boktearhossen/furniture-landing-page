
import { Provider } from 'react-redux';
import './App.css';
import { store } from './Redux/Store';

import Page from './Pages';


function App() {
  return (
    <Provider store={store} >
     <Page/>
   </Provider>
  );
}

export default App;
