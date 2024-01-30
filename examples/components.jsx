import React from 'react';
import ReactDOM from 'react-dom';
import {
  ConnectPayments,
  ConnectPayouts,
  ConnectPaymentDetails,
  ConnectComponentsProvider,
  loadConnectAndInitialize
} from '@stripe/react-connect-js';

const fetchClientSecret = async () => {
  // Fetch the AccountSession client secret by making an API call to your service
};
const connectInstance = loadConnectAndInitialize({
  publishableKey: '{{your publishable key}}',
  fetchClientSecret: fetchClientSecret,
  appearance: {
    variables: {
      colorPrimary: '#228403', //optional appearance param,
    },
  }
});

const App = () => {
  return (
    <ConnectComponentsProvider connectInstance={connectInstance}>
      <ConnectPayouts />
      <ConnectPayments />
      <ConnectPaymentDetails
        onClose={() => {
          console.log('closed');
        }}
        payment="pi_test123"
      />
    </ConnectComponentsProvider>
  );
};

export default App;
