import React from 'react';
import {CollectionOptions, NotificationCount} from '../Components';

export const useUpdateWithSetter = <
  T extends HTMLElement,
  V extends string | boolean | (() => void) | CollectionOptions | ((notificationCount: NotificationCount) => void) |undefined 
>(
  component: T | null,
  value: V,
  onUpdated: (component: T, value: V) => void
): void => {
  React.useEffect(() => {
    if (!component) return;
    onUpdated(component, value);
  }, [component, value, onUpdated]);
};
