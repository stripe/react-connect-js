import * as React from 'react';
import * as connectJs from '@stripe/connect-js';

export type ConnectComponentsContextPayload = {
  connectInstance: connectJs.StripeConnectInstance;
};

export const ConnectComponentsContext =
  React.createContext<ConnectComponentsContextPayload | null>(null);

ConnectComponentsContext.displayName = 'ComponentsContext';

export const ComponentsContextConsumer = ConnectComponentsContext.Consumer;
export const ComponentsContextProvider = ConnectComponentsContext.Provider;
export const useConnectComponentsContext =
  (): ConnectComponentsContextPayload => {
    const context = React.useContext(ConnectComponentsContext);
    if (!context) {
      throw new Error(
        `Could not find Components context; You need to wrap the part of your app in an <Components> provider.`
      );
    }
    return context;
  };
