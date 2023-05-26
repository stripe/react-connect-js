import React from 'react';
import {loadConnect} from '@stripe/connect-js';
import {
  ConnectPayments,
  ConnectPayouts,
  ConnectPaymentDetails,
  ConnectComponentsProvider
} from '@stripe/react-connect-js';

const loadConnectJs = async () => {
  const stripeConnect = await loadConnect();

  return stripeConnect.initialize({
    publishableKey: '{{your publishable key}}',
    clientSecret: '{{your client secret}}',
    appearance: {
      colorPrimary: '#228403', //optional appearance param
    },
  });
};

const connectInstance = loadConnectJs();

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
