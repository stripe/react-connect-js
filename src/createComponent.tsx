/* eslint-disable react-hooks/exhaustive-deps */
import {ConnectElementTagName} from '@stripe/connect-js';
import React from 'react';
import {useComponentsContext} from './ComponentsContext';

export const CreateComponent = (
  tagName: ConnectElementTagName
): JSX.Element => {
  const {connectInstance} = useComponentsContext();
  const wrapperDivRef = React.useRef<HTMLDivElement | null>(null);
  const wrapper = <div ref={wrapperDivRef}></div>;

  React.useLayoutEffect(() => {
    const component = connectInstance.create(tagName);
    if (wrapperDivRef.current !== null && component !== null) {
      wrapperDivRef.current.replaceChildren(component);
    }
  }, []);

  return wrapper;
};
