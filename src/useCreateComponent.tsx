/* eslint-disable react-hooks/exhaustive-deps */
import {ConnectElementTagName} from '@stripe/connect-js';
import React from 'react';
import {useComponentsContext} from './ComponentsContext';

export const useCreateComponent = (
  tagName: ConnectElementTagName
): {wrapper: JSX.Element; component: HTMLElement | null} => {
  const [component, setComponent] = React.useState<HTMLElement | null>(null);
  const {connectInstance} = useComponentsContext();
  const wrapperDivRef = React.useRef<HTMLDivElement | null>(null);
  const wrapper = <div ref={wrapperDivRef}></div>;

  React.useLayoutEffect(() => {
    if (wrapperDivRef.current !== null && component === null) {
      const newComponent = connectInstance.create(tagName);
      setComponent(newComponent);
      if (newComponent !== null) {
        wrapperDivRef.current.replaceChildren(newComponent);
      }
    }
  }, []);

  return {wrapper: wrapper, component: component};
};
