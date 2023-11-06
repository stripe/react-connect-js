/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import {useConnectComponents} from './ConnectComponents';
import {
  ConnectElementTagName,
  IStripeConnectUpdateParams,
} from '@stripe/connect-js';

interface IConnectJSWithPrivateMethods {
  create: (tagName: ConnectElementTagName) => HTMLElement | null;
  update: (options: IStripeConnectUpdateParams) => void;
  setReactSdkAnalytics: (version: string) => void;
}

export const useCreateComponent = (
  tagName: ConnectElementTagName
): {wrapper: JSX.Element; component: HTMLElement | null} => {
  const [component, setComponent] = React.useState<HTMLElement | null>(null);
  const {connectInstance} = useConnectComponents();
  const wrapperDivRef = React.useRef<HTMLDivElement | null>(null);
  const wrapper = <div ref={wrapperDivRef}></div>;

  React.useLayoutEffect(() => {
    if (wrapperDivRef.current !== null && component === null) {
      try {
        (connectInstance as unknown as IConnectJSWithPrivateMethods)
          // This will be replaced by the npm package version when bundling
          .setReactSdkAnalytics('_NPM_PACKAGE_VERSION_');
      } catch (e) {
        console.log('Error setting React Sdk version with error message: ', e);
      }
      const newComponent = connectInstance.create(tagName);
      setComponent(newComponent);
      if (newComponent !== null) {
        while (wrapperDivRef.current.firstChild) {
          wrapperDivRef.current.removeChild(wrapperDivRef.current.firstChild);
        }

        wrapperDivRef.current.appendChild( newComponent );
      }
    }
  }, [connectInstance, tagName]);

  return {wrapper, component};
};
