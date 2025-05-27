/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import {useConnectComponents} from './ConnectComponents';
import type {
  ConnectElementTagName,
  ConnectHTMLElementRecord,
} from '@stripe/connect-js';

export const useCreateComponent = <T extends ConnectElementTagName>(
  tagName: T
): {wrapper: JSX.Element; component: ConnectHTMLElementRecord[T] | null} => {
  const [component, setComponent] = React.useState<
    ConnectHTMLElementRecord[T] | null
  >(null);
  const {connectInstance} = useConnectComponents();
  const wrapperDivRef = React.useRef<HTMLDivElement | null>(null);

  // We would prefer to use display: contents, but it's not well-supported
  const wrapper = <div style={{width: '100%'}} data-stripe-connect-js-wrapper ref={wrapperDivRef}></div>;

  React.useLayoutEffect(() => {
    if (wrapperDivRef.current !== null && component === null) {
      const newComponent = connectInstance.create(tagName);

      setComponent(newComponent);
      if (newComponent !== null) {
        try {
          newComponent.setAttribute(
            'reactSdkAnalytics',
            '_NPM_PACKAGE_VERSION_'
          );
        } catch (e) {
          console.log(
            'Error setting React Sdk version with error message: ',
            e
          );
        }
        while (wrapperDivRef.current.firstChild) {
          wrapperDivRef.current.removeChild(wrapperDivRef.current.firstChild);
        }

        wrapperDivRef.current.appendChild(newComponent);
      }
    }
  }, [connectInstance, tagName]);

  return {wrapper, component};
};
