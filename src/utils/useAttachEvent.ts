import React from 'react';

export enum ConnectElementEventNames {
  exit = 'exit',
  close = 'close',
  instantPayoutCreated = 'instantpayoutcreated',
}

/**
 * @deprecated The method should not be used as we are deprecating the use of events directly. Define a setter for
 * your use case and use useUpdateWithSetter instead.
 */
export const useAttachEvent = (
  component: HTMLElement | null,
  eventName: ConnectElementEventNames,
  listener: () => void
): void => {
  React.useEffect(() => {
    if (component) {
      component.addEventListener(eventName, listener);
    }
    return () => {
      if (component) {
        component.removeEventListener(eventName, listener);
      }
    };
  }, [component, eventName, listener]);
};
