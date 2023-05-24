/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import {useConnectComponents} from './ConnectComponents';
import {ConnectElementTagName} from '@stripe/connect-js';

export const useCreateComponent = (
  tagName: string
): {wrapper: JSX.Element; component: HTMLElement | null} => {
  const [component, setComponent] = React.useState<HTMLElement | null>(null);
  const {connectInstance} = useConnectComponents();
  const wrapperDivRef = React.useRef<HTMLDivElement | null>(null);
  const wrapper = <div ref={wrapperDivRef}></div>;

  React.useLayoutEffect(() => {
    if (wrapperDivRef.current !== null && component === null) {
      const newComponent = connectInstance.create(
        tagName as ConnectElementTagName
      );
      setComponent(newComponent);
      if (newComponent !== null) {
        wrapperDivRef.current.replaceChildren(newComponent);
      }
    }
  }, []);

  return {wrapper, component};
};
