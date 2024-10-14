import React from 'react';
import {
  CollectionOptions,
  FetchEphemeralKeyFunction,
  FinancingProductType,
} from '../types';
import {
  LoadError,
  LoaderStart,
  InstallState,
  NotificationCount,
  StepChange,
} from '@stripe/connect-js';

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
    | ((productType: FinancingProductType) => void)
    | ((StepChange: StepChange) => void)
    | Date
    | undefined
>(
  component: T | null,
  value: V,
  onUpdated: (component: T, value: V) => void
): void => {
  React.useEffect(() => {
    if (!component) return;

    try {
      onUpdated(component, value);
    } catch (error) {
      console.error('Error when calling setter! ', error);
      return;
    }
  }, [component, value, onUpdated]);
};
