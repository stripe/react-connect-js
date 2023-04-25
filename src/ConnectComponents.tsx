import React from 'react';
import * as connectJs from '@stripe/connect-js';

export type ConnectComponentsPayload = {
  connectInstance: connectJs.StripeConnectInstance;
};

export const ConnectComponentsContext =
  React.createContext<ConnectComponentsPayload | null>(null);

ConnectComponentsContext.displayName = 'ConnectComponents';

export const ConnectComponentsConsumer = ConnectComponentsContext.Consumer;
export const ConnectComponentsProvider = ConnectComponentsContext.Provider;
export const useConnectComponents = (): ConnectComponentsPayload => {
  const context = React.useContext(ConnectComponentsContext);
  if (!context) {
    throw new Error(
      `Could not find Components context; You need to wrap the part of your app in an <ConnectComponentsProvider> provider.`
    );
  }
  return context;
};
