import * as React from 'react';
import type * as connectJs from '@stripe/connect-js';

type ConnectComponentsPayload = {
  connectInstance: connectJs.StripeConnectInstance;
};

const ConnectComponentsContext =
  React.createContext<ConnectComponentsPayload | null>(null);

ConnectComponentsContext.displayName = 'ConnectComponents';

export const ConnectComponentsProvider = ({
  connectInstance,
  children,
}: {
  connectInstance: connectJs.StripeConnectInstance;
  children: any;
}): JSX.Element => {
  return (
    <ConnectComponentsContext.Provider value={{connectInstance}}>
      {children}
    </ConnectComponentsContext.Provider>
  );
};

export const useConnectComponents = (): ConnectComponentsPayload => {
  const context = React.useContext(ConnectComponentsContext);
  if (!context) {
    throw new Error(
      `Could not find Components context; You need to wrap the part of your app in an <ConnectComponentsProvider> provider.`
    );
  }
  return context;
};
