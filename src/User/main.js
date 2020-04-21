import React from './node_modules/react';
import '../App.css';
import { ApolloProvider} from 'react-apollo';
import {ApolloClient, createNetworkInterface } from 'react-apollo';
import Button from './node_modules/antd/lib/button';
import logo from './logo/svg';
import 'antd/dist/antd.css';
import Routes from './routes';
import ReactDOM from 'react-dom';

const networkInterface = createNetworkInterface({
    url: 'http://localhost:3000'
});
const client = new ApolloClient({
    networkInterface: networkInterface
});
const Main = () => (
    <ApolloProvider client = {client}>
        <Routes />
    </ApolloProvider>
);
export default Register;