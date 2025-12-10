import React from 'react';
import type {
  FetchEphemeralKeyFunction,
  FinancingProductType,
} from '../types';
import type {
  CollectionOptions,
  LoadError,
  LoaderStart,
  InstallState,
  NotificationCount,
  StepChange,
  PaymentsListDefaultFilters,
} from '@stripe/connect-js';

export const useUpdateWithSetter = <
  T extends HTMLElement,
  V extends
    | string
    | boolean
    | string[]
    | Record<string, string>
    | (() => void)
    | FetchEphemeralKeyFunction
    | CollectionOptions
    | PaymentsListDefaultFilters
    | ((notificationCount: NotificationCount) => void)
    | ((loaderStart: LoaderStart) => void)
    | ((loaderError: LoadError) => void)
    | ((installState: InstallState) => void)
    | ((productType: FinancingProductType) => void)
    | ((StepChange: StepChange) => void)
    | Date
    | (({id}: {id: string}) => void)
    | ((taxCode: string | null, _: {analyticsName: string} | null) => void)
    | (({promotionShown}: {promotionShown: boolean}) => void)
    | (({payoutId}: {payoutId: string}) => void)
    | (({checkScanToken}: {checkScanToken: string}) => Promise<void>)
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
