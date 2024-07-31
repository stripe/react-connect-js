import React from 'react';
import {CollectionOptions} from '../Components';
import {LoadError, LoaderStart, NotificationCount} from '@stripe/connect-js';

export const useUpdateWithSetter = <
  T extends HTMLElement,
  V extends
    | string
    | boolean
    | (() => void)
    | CollectionOptions
    | ((notificationCount: NotificationCount) => void)
    | ((loaderStart: LoaderStart) => void)
    | ((loaderError: LoadError) => void)
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
