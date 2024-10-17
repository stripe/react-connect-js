import React from 'react';
import {CollectionOptions} from '../Components';
import {
  LoadError,
  LoaderStart,
  NotificationCount,
  StepChange,
  PaymentsListDefaultFilters
} from '@stripe/connect-js';

export const useUpdateWithSetter = <
  T extends HTMLElement,
  V extends
    | string
    | boolean
    | string[]
    | PaymentsListDefaultFilters
    | (() => void)
    | CollectionOptions
    | ((notificationCount: NotificationCount) => void)
    | ((loaderStart: LoaderStart) => void)
    | ((loaderError: LoadError) => void)
    | ((stepChange: StepChange) => void)
    | (({id}: {id: string}) => void)
    // | ((defaultFilters: PaymentsListDefaultFilters) => void)
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
