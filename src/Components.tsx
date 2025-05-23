import type {FetchEphemeralKeyFunction} from './types';
import {useCreateComponent} from './useCreateComponent';
import {useUpdateWithSetter} from './utils/useUpdateWithSetter';
import type {
  LoadError,
  LoaderStart,
  NotificationCount,
  StepChange,
  PaymentsListDefaultFilters,
} from '@stripe/connect-js';

export type CommonComponentProps = {
  onLoaderStart?: ({elementTagName}: LoaderStart) => void;
  onLoadError?: ({error, elementTagName}: LoadError) => void;
};

export const ConnectPayments = ({
  defaultFilters,
  onLoadError,
  onLoaderStart,
}: {
  defaultFilters?: PaymentsListDefaultFilters;
} & CommonComponentProps): JSX.Element => {
  const {wrapper, component: payments} = useCreateComponent('payments');

  useUpdateWithSetter(payments, onLoaderStart, (comp, val) => {
    comp.setOnLoaderStart(val);
  });
  useUpdateWithSetter(payments, onLoadError, (comp, val) => {
    comp.setOnLoadError(val);
  });
  useUpdateWithSetter(payments, defaultFilters, (comp, val) => {
    comp.setDefaultFilters(val);
  });

  return wrapper;
};

export const ConnectPayouts = ({
  onLoadError,
  onLoaderStart,
}: CommonComponentProps): JSX.Element => {
  const {wrapper, component: payouts} = useCreateComponent('payouts');

  useUpdateWithSetter(payouts, onLoaderStart, (comp, val) => {
    comp.setOnLoaderStart(val);
  });
  useUpdateWithSetter(payouts, onLoadError, (comp, val) => {
    comp.setOnLoadError(val);
  });

  return wrapper;
};

export const ConnectPaymentDetails = ({
  payment,
  onClose,
  onLoadError,
  onLoaderStart,
}: {
  /**
   * @param payment the ID of `payment`, `charge`, or `paymentIntent` to be displayed.
   */
  payment: string;
  onClose: () => void;
} & CommonComponentProps): JSX.Element | null => {
  const {wrapper, component: paymentDetails} =
    useCreateComponent('payment-details');

  useUpdateWithSetter(paymentDetails, payment, (comp, val) =>
    comp.setPayment(val)
  );
  useUpdateWithSetter(paymentDetails, onClose, (comp, val) =>
    comp.setOnClose(val)
  );
  useUpdateWithSetter(paymentDetails, onLoaderStart, (comp, val) => {
    comp.setOnLoaderStart(val);
  });
  useUpdateWithSetter(paymentDetails, onLoadError, (comp, val) => {
    comp.setOnLoadError(val);
  });
  return wrapper;
};

export const ConnectPaymentDisputes = ({
  payment,
  onDisputesLoaded,
  onLoadError,
  onLoaderStart,
}: {
  /**
   * @param payment the ID of `payment`, `charge`, or `paymentIntent` to be displayed.
   */
  payment: string;
  onDisputesLoaded?: ({total}: {total: number}) => void;
} & CommonComponentProps): JSX.Element | null => {
  const {wrapper, component} =
    useCreateComponent('payment-disputes');

  useUpdateWithSetter(component, payment, (comp, val) =>
    comp.setPayment(val)
  );
  useUpdateWithSetter(component, onDisputesLoaded, (comp, val) =>
    comp.setOnDisputesLoaded(val)
  );
  useUpdateWithSetter(component, onLoaderStart, (comp, val) => {
    comp.setOnLoaderStart(val);
  });
  useUpdateWithSetter(component, onLoadError, (comp, val) => {
    comp.setOnLoadError(val);
  });
  return wrapper;
};

export const ConnectDisputesList = ({
  onLoadError,
  onLoaderStart,
}: CommonComponentProps): JSX.Element | null => {
  const {wrapper, component} =
    useCreateComponent('disputes-list');

  useUpdateWithSetter(component, onLoaderStart, (comp, val) => {
    comp.setOnLoaderStart(val);
  });
  useUpdateWithSetter(component, onLoadError, (comp, val) => {
    comp.setOnLoadError(val);
  });
  return wrapper;
};

export type CollectionOptions = {
  fields: 'currently_due' | 'eventually_due';
  futureRequirements?: 'omit' | 'include';
};

export const ConnectAccountOnboarding = ({
  onExit,
  recipientTermsOfServiceUrl,
  fullTermsOfServiceUrl,
  privacyPolicyUrl,
  skipTermsOfServiceCollection,
  collectionOptions,
  onLoadError,
  onLoaderStart,
  onStepChange,
}: {
  onExit: () => void;
  onStepChange?: (stepChange: StepChange) => void;
  recipientTermsOfServiceUrl?: string;
  fullTermsOfServiceUrl?: string;
  privacyPolicyUrl?: string;
  skipTermsOfServiceCollection?: boolean;
  collectionOptions?: CollectionOptions;
} & CommonComponentProps): JSX.Element | null => {
  const {wrapper, component: onboarding} =
    useCreateComponent('account-onboarding');

  useUpdateWithSetter(onboarding, recipientTermsOfServiceUrl, (comp, val) =>
    comp.setRecipientTermsOfServiceUrl(val)
  );
  useUpdateWithSetter(onboarding, fullTermsOfServiceUrl, (comp, val) =>
    comp.setFullTermsOfServiceUrl(val)
  );
  useUpdateWithSetter(onboarding, privacyPolicyUrl, (comp, val) =>
    comp.setPrivacyPolicyUrl(val)
  );
  useUpdateWithSetter(onboarding, skipTermsOfServiceCollection, (comp, val) =>
    comp.setSkipTermsOfServiceCollection(val)
  );
  useUpdateWithSetter(onboarding, collectionOptions, (comp, val) =>
    comp.setCollectionOptions(val)
  );
  useUpdateWithSetter(onboarding, onExit, (comp, val) => comp.setOnExit(val));
  useUpdateWithSetter(onboarding, onLoaderStart, (comp, val) => {
    comp.setOnLoaderStart(val);
  });
  useUpdateWithSetter(onboarding, onLoadError, (comp, val) => {
    comp.setOnLoadError(val);
  });
  useUpdateWithSetter(onboarding, onStepChange, (comp, val) =>
    comp.setOnStepChange(val)
  );

  return wrapper;
};

export const ConnectAccountManagement = ({
  collectionOptions,
  onLoadError,
  onLoaderStart,
}: {
  collectionOptions?: CollectionOptions;
} & CommonComponentProps): JSX.Element | null => {
  const {wrapper, component: accountManagement} =
    useCreateComponent('account-management');

  useUpdateWithSetter(accountManagement, collectionOptions, (comp, val) =>
    comp.setCollectionOptions(val)
  );
  useUpdateWithSetter(accountManagement, onLoaderStart, (comp, val) => {
    comp.setOnLoaderStart(val);
  });
  useUpdateWithSetter(accountManagement, onLoadError, (comp, val) => {
    comp.setOnLoadError(val);
  });

  return wrapper;
};

export const ConnectNotificationBanner = ({
  collectionOptions,
  onNotificationsChange,
  onLoadError,
  onLoaderStart,
}: {
  collectionOptions?: CollectionOptions;
  onNotificationsChange?: ({total, actionRequired}: NotificationCount) => void;
} & CommonComponentProps): JSX.Element | null => {
  const {wrapper, component: notificationBanner} = useCreateComponent(
    'notification-banner'
  );

  useUpdateWithSetter(notificationBanner, collectionOptions, (comp, val) =>
    comp.setCollectionOptions(val)
  );
  useUpdateWithSetter(notificationBanner, onNotificationsChange, (comp, val) =>
    comp.setOnNotificationsChange(val)
  );
  useUpdateWithSetter(notificationBanner, onLoaderStart, (comp, val) => {
    comp.setOnLoaderStart(val);
  });
  useUpdateWithSetter(notificationBanner, onLoadError, (comp, val) => {
    comp.setOnLoadError(val);
  });

  return wrapper;
};

export const ConnectIssuingCard = ({
  defaultCard,
  cardSwitching,
  showSpendControls,
  fetchEphemeralKey,
  onLoadError,
  onLoaderStart,
}: {
  defaultCard?: string;
  cardSwitching?: boolean;
  showSpendControls?: boolean;
  fetchEphemeralKey?: FetchEphemeralKeyFunction;
} & CommonComponentProps): JSX.Element => {
  const {wrapper, component: issuingCard} = useCreateComponent('issuing-card');

  useUpdateWithSetter(issuingCard, defaultCard, (comp, val) =>
    comp.setDefaultCard(val)
  );
  useUpdateWithSetter(issuingCard, cardSwitching, (comp, val) =>
    comp.setCardSwitching(val)
  );
  useUpdateWithSetter(issuingCard, showSpendControls, (comp, val) =>
    comp.setShowSpendControls(val)
  );
  useUpdateWithSetter(issuingCard, fetchEphemeralKey, (comp, val) =>
    comp.setFetchEphemeralKey(val)
  );
  useUpdateWithSetter(issuingCard, onLoaderStart, (comp, val) => {
    comp.setOnLoaderStart(val);
  });
  useUpdateWithSetter(issuingCard, onLoadError, (comp, val) => {
    comp.setOnLoadError(val);
  });

  return wrapper;
};

export const ConnectIssuingCardsList = ({
  showSpendControls,
  issuingProgram,
  fetchEphemeralKey,
  onLoadError,
  onLoaderStart,
}: {
  showSpendControls?: boolean;
  issuingProgram?: string;
  fetchEphemeralKey?: FetchEphemeralKeyFunction;
} & CommonComponentProps): JSX.Element => {
  const {wrapper, component: issuingCardsList} =
    useCreateComponent('issuing-cards-list');

  useUpdateWithSetter(issuingCardsList, showSpendControls, (comp, val) =>
    comp.setShowSpendControls(val)
  );
  useUpdateWithSetter(issuingCardsList, issuingProgram, (comp, val) =>
    comp.setIssuingProgram(val)
  );
  useUpdateWithSetter(issuingCardsList, fetchEphemeralKey, (comp, val) =>
    comp.setFetchEphemeralKey(val)
  );
  useUpdateWithSetter(issuingCardsList, onLoaderStart, (comp, val) => {
    comp.setOnLoaderStart(val);
  });
  useUpdateWithSetter(issuingCardsList, onLoadError, (comp, val) => {
    comp.setOnLoadError(val);
  });

  return wrapper;
};

export const ConnectFinancialAccount = ({
  financialAccount,
  onLoadError,
  onLoaderStart,
}: {
  financialAccount: string;
} & CommonComponentProps): JSX.Element => {
  const {wrapper, component: financialAccountComponent} =
    useCreateComponent('financial-account');

  useUpdateWithSetter(
    financialAccountComponent,
    financialAccount,
    (comp, val) => comp.setFinancialAccount(val)
  );
  useUpdateWithSetter(financialAccountComponent, onLoaderStart, (comp, val) => {
    comp.setOnLoaderStart(val);
  });
  useUpdateWithSetter(financialAccountComponent, onLoadError, (comp, val) => {
    comp.setOnLoadError(val);
  });

  return wrapper;
};

export const ConnectFinancialAccountTransactions = ({
  financialAccount,
  onLoadError,
  onLoaderStart,
}: {
  financialAccount: string;
} & CommonComponentProps): JSX.Element => {
  const {wrapper, component: financialAccountTransactionsComponent} =
    useCreateComponent('financial-account-transactions');

  useUpdateWithSetter(
    financialAccountTransactionsComponent,
    financialAccount,
    (comp, val) => comp.setFinancialAccount(val)
  );
  useUpdateWithSetter(
    financialAccountTransactionsComponent,
    onLoaderStart,
    (comp, val) => {
      comp.setOnLoaderStart(val);
    }
  );
  useUpdateWithSetter(
    financialAccountTransactionsComponent,
    onLoadError,
    (comp, val) => {
      comp.setOnLoadError(val);
    }
  );

  return wrapper;
};

export const ConnectDocuments = ({
  onLoadError,
  onLoaderStart,
}: CommonComponentProps): JSX.Element => {
  const {wrapper, component: documents} = useCreateComponent('documents');

  useUpdateWithSetter(documents, onLoaderStart, (comp, val) => {
    comp.setOnLoaderStart(val);
  });
  useUpdateWithSetter(documents, onLoadError, (comp, val) => {
    comp.setOnLoadError(val);
  });

  return wrapper;
};

export const ConnectPayoutsList = ({
  onLoadError,
  onLoaderStart,
}: CommonComponentProps): JSX.Element => {
  const {wrapper, component: payoutsList} = useCreateComponent('payouts-list');

  useUpdateWithSetter(payoutsList, onLoaderStart, (comp, val) => {
    comp.setOnLoaderStart(val);
  });
  useUpdateWithSetter(payoutsList, onLoadError, (comp, val) => {
    comp.setOnLoadError(val);
  });
  return wrapper;
};

export const ConnectBalances = ({
  onLoadError,
  onLoaderStart,
}: CommonComponentProps): JSX.Element => {
  const {wrapper, component: balances} = useCreateComponent('balances');

  useUpdateWithSetter(balances, onLoaderStart, (comp, val) => {
    comp.setOnLoaderStart(val);
  });
  useUpdateWithSetter(balances, onLoadError, (comp, val) => {
    comp.setOnLoadError(val);
  });

  return wrapper;
};

export const ConnectTaxRegistrations = ({
  onLoadError,
  onLoaderStart,
  displayCountries,
  onAfterTaxRegistrationAdded,
}: {
  displayCountries?: string[];
  onAfterTaxRegistrationAdded?: ({id}: {id: string}) => void;
} & CommonComponentProps): JSX.Element => {
  const {wrapper, component: taxRegistrations} =
    useCreateComponent('tax-registrations');

  useUpdateWithSetter(taxRegistrations, onLoaderStart, (comp, val) => {
    comp.setOnLoaderStart(val);
  });

  useUpdateWithSetter(taxRegistrations, onLoadError, (comp, val) => {
    comp.setOnLoadError(val);
  });

  useUpdateWithSetter(taxRegistrations, displayCountries, (comp, val) => {
    comp.setDisplayCountries(val);
  });

  useUpdateWithSetter(
    taxRegistrations,
    onAfterTaxRegistrationAdded,
    (comp, val) => {
      comp.setOnAfterTaxRegistrationAdded(val);
    }
  );

  return wrapper;
};

export const ConnectTaxSettings = ({
  onLoadError,
  onLoaderStart,
  hideProductTaxCodeSelector,
  displayHeadOfficeCountries,
  onTaxSettingsUpdated,
}: {
  hideProductTaxCodeSelector?: boolean;
  displayHeadOfficeCountries?: string[];
  onTaxSettingsUpdated?: ({id}: {id: string}) => void;
} & CommonComponentProps): JSX.Element => {
  const {wrapper, component: taxSettings} = useCreateComponent('tax-settings');

  useUpdateWithSetter(taxSettings, onLoaderStart, (comp, val) => {
    comp.setOnLoaderStart(val);
  });
  useUpdateWithSetter(taxSettings, onLoadError, (comp, val) => {
    comp.setOnLoadError(val);
  });

  useUpdateWithSetter(taxSettings, hideProductTaxCodeSelector, (comp, val) => {
    comp.setHideProductTaxCodeSelector(val);
  });

  useUpdateWithSetter(taxSettings, displayHeadOfficeCountries, (comp, val) => {
    comp.setDisplayHeadOfficeCountries(val);
  });

  useUpdateWithSetter(taxSettings, onTaxSettingsUpdated, (comp, val) => {
    comp.setOnTaxSettingsUpdated(val);
  });

  return wrapper;
};
