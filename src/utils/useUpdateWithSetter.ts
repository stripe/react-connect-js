import React from 'react';
import type {CollectionOptions} from '../Components';
import type {
  LoadError,
  LoaderStart,
  NotificationCount,
  StepChange,
  PaymentsListDefaultFilters,
} from '@stripe/connect-js';
import type {FetchEphemeralKeyFunction} from '../types';

export const useUpdateWithSetter = <
  T extends HTMLElement,
  V extends
    | string
    | boolean
    | string[]
    | PaymentsListDefaultFilters
    | (() => void)
    | FetchEphemeralKeyFunction
    | CollectionOptions
    | ((notificationCount: NotificationCount) => void)
    | ((loaderStart: LoaderStart) => void)
    | ((loaderError: LoadError) => void)
    | ((stepChange: StepChange) => void)
    | (({id}: {id: string}) => void)
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
