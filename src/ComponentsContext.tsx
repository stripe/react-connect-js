import React from 'react';
import * as connectJs from '@stripe/connect-js';

export type ComponentsContextPayload = {
  connectInstance: connectJs.StripeConnectInstance;
};

export const ComponentsContext = React.createContext<ComponentsContextPayload | null>(
  null
);

ComponentsContext.displayName = 'ComponentsContext';

export const ComponentsContextConsumer = ComponentsContext.Consumer;
export const ComponentsContextProvider = ComponentsContext.Provider;
export const useComponentsContext = (): ComponentsContextPayload => {
  const context = React.useContext(ComponentsContext);
  if (!context) {
    throw new Error(
      `Could not find Components context; You need to wrap the part of your app in an <Components> provider.`
    );
  }
  return context;
};
