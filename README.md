# @stripe/react-connect-js

# React Connect.js

React components for Connect.js and Connect embedded components

This project is a thin React wrapper around
[Connect embedded components](https://stripe.com/docs/connect/get-started-connect-embedded-components).
It allows you to add embedded components to any React app, and manages the state
and lifecycle of embedded components for you.

Note: Some Connect embedded components are currently still in preview. These can
be
[viewed on our doc site](https://docs.stripe.com/connect/supported-embedded-components),
where you can also request preview access.

### Components

The list of supported components and their required parameters can be found
[here](https://stripe.com/docs/connect/supported-embedded-components)

### Minimal example

First, install React Connect.js and
[Connect.js](https://github.com/stripe/connect-js).

```sh
npm install @stripe/react-connect-js @stripe/connect-js
```

You have to wrap your components with `ConnectComponentsProvider` in order to
provide the ConnectInstance context to create or update components

#### Example

See more examples in the /examples folder

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import {loadConnectAndInitialize} from '@stripe/connect-js';
import {
  ConnectPayments,
  ConnectPayouts,
  ConnectPaymentDetails,
  ConnectComponentsProvider,
} from '@stripe/react-connect-js';

const fetchClientSecret = async () => {
  // Fetch the AccountSession client secret by making an API call to your service
};
const connectInstance = loadConnectAndInitialize({
  publishableKey: '{{pk test123}}',
  fetchClientSecret: fetchClientSecret,
  appearance: {
    variables: {
      colorPrimary: '#228403', //optional appearance param,
    },
  },
});

const App = () => (
  <ConnectComponentsProvider connectInstance={connectInstance}>
    <ConnectPayments />
    <ConnectPayouts />
    <ConnectPaymentDetails
      onClose={() => {
        console.log('closed');
      }}
      payment="pi_test123"
    />
  </ConnectComponentsProvider>
);

ReactDOM.render(<App />, document.body);
```

The `stripeConnect.initalize` function returns a `ConnectInstance` once you
initialize it with a publishable key and a client secret returned from the
[Account Session API](https://stripe.com/docs/api/account_sessions/create) call.

We’ve placed a placeholder API key in this example. Replace it with your
[actual publishable API keys](https://dashboard.stripe.com/account/apikeys) to
test this code through your Connect account.

### Contributing

If you would like to contribute to React Connect.js, please make sure to read
our [contributor guidelines](CONTRIBUTING.md).
