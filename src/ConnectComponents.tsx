import * as React from 'react';
import * as connectJs from '@stripe/connect-js';

type ConnectComponentsPayload = {
  connectInstance: connectJs.StripeConnectInstance | null;
};

const ConnectComponentsContext =
  React.createContext<ConnectComponentsPayload | null>(null);

ConnectComponentsContext.displayName = 'ConnectComponents';

export const ConnectComponentsProvider = ({
  connectInstance,
  children,
}: {
  connectInstance:
    | Promise<connectJs.StripeConnectInstance>
    | connectJs.StripeConnectInstance
    | null;
  children: any;
}): JSX.Element => {
  const [resolvedConnectInstance, setResolvedConnectInstance] =
    React.useState<connectJs.StripeConnectInstance | null>(null);

  React.useEffect(() => {
    (async () => {
      setResolvedConnectInstance(await connectInstance);
    })();
  }, [connectInstance]);

  return (
    <ConnectComponentsContext.Provider
      value={{connectInstance: resolvedConnectInstance}}
    >
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
