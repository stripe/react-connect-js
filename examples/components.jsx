import React from 'react';
import ReactDOM from 'react-dom';
import {loadConnect} from '@stripe/connect-js';
import {
  StripeConnectPayments,
  StripeConnectPayouts,
  StripeConnectPaymentDetails,
  ComponentsContextProvider,
} from '@stripe/react-connect-js';

const stripePromise = loadConnect();
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
    <ComponentsContextProvider value={{connectInstance: connectInstance}}>
      <StripeConnectPayouts />
      <StripeConnectPayments />
      <StripeConnectPaymentDetails
        onClose={() => {
          console.log('closed');
        }}
        chargeId="pi_3MuO0YGac4z90jID0RJQbUpF"
        visible
      />
    </ComponentsContextProvider>
  );
};

export default App;
