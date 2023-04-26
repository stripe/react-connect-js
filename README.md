# @stripe/react-connect-js

# React Connect.js

React components for Connect.js and Connect embedded components

This project is a thin React wrapper around
[Connect embedded UIs](https://stripe.com/docs/connect/get-started-connect-embedded-uis).
It allows you to add embedded UIs to any React app, and manages the state and
lifecycle of embedded UIs for you.

### Components

The list of supported components and their required parameters can be found
[here](https://stripe.com/docs/connect/get-started-connect-embedded-components#supported-connect-embedded-components)

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
import {loadConnect} from '@stripe/connect-js';
import {
  ConnectPayments,
  ConnectAccountOnboarding,
} from '@stripe/react-connect-js';

const stripeConnect = await loadConnect();

const connectInstance = stripeConnect.initialize({
  publishableKey: '{{your key here}}',
  clientSecret: '{{your client secret}}',
  appearance: {
    colorPrimary: '#228403', //optional appearance param
  },
});

const App = () => (
  <ConnectComponentsProvider connectInstance={connectInstance}>
    <ConnectPayments />
    <ConnectAccountOnboarding
      onOnboardingComplete={() => {
        console.log('complete');
      }}
    />
  </ConnectComponentsProvider>
);

ReactDOM.render(<App />, document.body);
```

### Contributing

If you would like to contribute to React Connect.js, please make sure to read
our [contributor guidelines](CONTRIBUTING.md).
