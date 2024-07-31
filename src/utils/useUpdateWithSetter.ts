import React from 'react';
import {CollectionOptions, FetchEphemeralKeyFunction} from '../types';
import {LoadError, LoaderStart, InstallState, NotificationCount} from '@stripe/connect-js';

export const useUpdateWithSetter = <
  T extends HTMLElement,
  V extends
    | string
    | boolean
    | Record<string, string>
    | (() => void)
    | FetchEphemeralKeyFunction
    | CollectionOptions
    | ((notificationCount: NotificationCount) => void)
    | ((loaderStart: LoaderStart) => void)
    | ((loaderError: LoadError) => void)
    | ((installState: InstallState) => void)
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
