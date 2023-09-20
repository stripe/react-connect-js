import * as React from 'react';
import * as connectJs from '@stripe/connect-js';

type ConnectComponentsPayload = {
  connectInstance: connectJs.StripeConnectInstance;
};

const ConnectComponentsContext =
  React.createContext<ConnectComponentsPayload | null>(null);

ConnectComponentsContext.displayName = 'ConnectComponents';

export const ConnectComponentsProvider = ({
  connectInstance,
  children,
  initParams,
}: {
  connectInstance: connectJs.StripeConnectInstance;
  children: any;
  initParams?: connectJs.IStripeConnectInitParams | undefined;
}): JSX.Element => {
  if (connectInstance === null && !initParams) {
    throw new Error();
  }

  if (connectInstance === null && initParams) {
    async () => {
      const connectWrapper = await connectJs.loadConnect();
      connectInstance = await connectWrapper.initialize(initParams);
    };
  }

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
