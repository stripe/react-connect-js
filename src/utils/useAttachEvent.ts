import React from 'react';

export enum ConnectElementEventNames {
  onboardingExited = 'onboardingexited',
  close = 'close',
  instantPayoutCreated = 'instantpayoutcreated',
}

export const useAttachEvent = (
  component: HTMLElement | null,
  eventName: ConnectElementEventNames | string,
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
