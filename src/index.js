import ReactDOM from 'react-dom/client';
import {ApolloProvider} from '@apollo/client';
import client from './controller/client/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('app'));


root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)