import React from 'react';
import ReactDOM from 'react-dom';
import {loadConnect} from '@stripe/connect-js';
import {
  ConnectPayments,
  ConnectPayouts,
  ConnectPaymentDetails,
  ConnectComponentsProvider
} from '@stripe/react-connect-js';

const stripeConnect = await loadConnect();

const connectInstance = stripeConnect.initialize({
  publishableKey: '{{your publishable key}}',
  clientSecret: '{{your client secret}}',
  appearance: {
    colorPrimary: '#228403', //optional appearance param
  },
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
        chargeId="pi_test123"
        visible
      />
    </ConnectComponentsProvider>
  );
};

export default App;
