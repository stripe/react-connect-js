import React from 'react';
import ReactDOM from 'react-dom';
import {loadConnect} from '@stripe/connect-js';
import {
  ConnectPayments,
  ConnectPayouts,
  ConnectPaymentDetails,
  ComponentsProvider
} from '@stripe/react-connect-js';

const stripeConnect = await loadConnect();

const connectInstance = stripeConnect.initialize({
  publishableKey: '{{your key here}}',
  clientSecret: '{{your client secret}}',
  appearance: {
    colorPrimary: '#228403', //optional appearance param
  },
});

const App = () => {
  return (
    <ConnectComponentsProvider value={{connectInstance: connectInstance}}>
      <ConnectPayouts />
      <ConnectPayments />
      <ConnectPaymentDetails
        onClose={() => {
          console.log('closed');
        }}
        chargeId="pi_3MuO0YGac4z90jID0RJQbUpF"
        visible
      />
    </ConnectComponentsProvider>
  );
};

export default App;
