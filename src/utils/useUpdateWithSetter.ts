import React from 'react';
import {CollectionOptions, FetchEphemeralKeyFunction} from '../types';
import {NotificationCount} from '@stripe/connect-js';

export const useUpdateWithSetter = <
  T extends HTMLElement,
  V extends
    | string
    | boolean
    | (() => void)
    | FetchEphemeralKeyFunction
    | CollectionOptions
    | ((notificationCount: NotificationCount) => void)
    | undefined
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
