import {useCreateComponent} from './useCreateComponent';
import {useUpdateWithSetter} from './utils/useUpdateWithSetter';
import {CollectionOptions, FetchEphemeralKeyFunction} from './types';
import {
  LoadError,
  LoaderStart,
  NotificationCount,
  InstallState,
} from '@stripe/connect-js';

export type CommonComponentProps = {
  onLoaderStart?: ({elementTagName}: LoaderStart) => void;
  onLoadError?: ({error, elementTagName}: LoadError) => void;
};

export const ConnectAppInstall = ({
  app,
  onAppInstallStateFetch,
  onAppInstallStateChange,
  onLoadError,
  onLoaderStart,
}: {
  app: string;
  onAppInstallStateFetch?: (({appId, state}: InstallState) => void) | undefined;
  onAppInstallStateChange?:
    | (({appId, state}: InstallState) => void)
    | undefined;
} & CommonComponentProps): JSX.Element | null => {
  const {wrapper, component: appInstall} = useCreateComponent('app-install');
  useUpdateWithSetter(appInstall, app, (comp, val) => comp.setApp(val));
  useUpdateWithSetter(appInstall, onAppInstallStateFetch, (comp, val) =>
    comp.setOnAppInstallStateFetched(val)
  );
  useUpdateWithSetter(appInstall, onAppInstallStateChange, (comp, val) =>
    comp.setOnAppInstallStateChanged(val)
  );
  useUpdateWithSetter(appInstall, onLoaderStart, (comp, val) => {
    comp.setOnLoaderStart(val);
  });
  useUpdateWithSetter(appInstall, onLoadError, (comp, val) => {
    comp.setOnLoadError(val);
  });
  return wrapper;
};

export const ConnectAppViewport = ({
  app,
  appData,
  onLoadError,
  onLoaderStart,
}: {
  app: string;
  appData?: Record<string, string>;
} & CommonComponentProps): JSX.Element | null => {
  const {wrapper, component: appViewport} = useCreateComponent('app-viewport');
  useUpdateWithSetter(appViewport, app, (comp, val) => comp.setApp(val));
  useUpdateWithSetter(appViewport, appData, (comp, val) =>
    comp.setAppData(val)
  );
  useUpdateWithSetter(appViewport, onLoaderStart, (comp, val) => {
    comp.setOnLoaderStart(val);
  });
  useUpdateWithSetter(appViewport, onLoadError, (comp, val) => {
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

export const ConnectPayments = ({
  onLoadError,
  onLoaderStart,
}: CommonComponentProps): JSX.Element => {
  const {wrapper, component: payments} = useCreateComponent('payments');

  useUpdateWithSetter(payments, onLoaderStart, (comp, val) => {
    comp.setOnLoaderStart(val);
  });
  useUpdateWithSetter(payments, onLoadError, (comp, val) => {
    comp.setOnLoadError(val);
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

export const ConnectAccountOnboarding = ({
  onExit,
  recipientTermsOfServiceUrl,
  fullTermsOfServiceUrl,
  privacyPolicyUrl,
  skipTermsOfServiceCollection,
  collectionOptions,
  onLoadError,
  onLoaderStart,
}: {
  onExit: () => void;
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

  return wrapper;
};

export const ConnectPaymentMethodSettings = ({
  paymentMethodConfiguration,
  onLoadError,
  onLoaderStart,
}: {
  paymentMethodConfiguration?: string;
} & CommonComponentProps): JSX.Element => {
  const {wrapper, component: paymentMethodSettings} = useCreateComponent(
    'payment-method-settings'
  );

  useUpdateWithSetter(
    paymentMethodSettings,
    paymentMethodConfiguration,
    (comp, val) => comp.setPaymentMethodConfiguration(val)
  );

  useUpdateWithSetter(paymentMethodSettings, onLoaderStart, (comp, val) => {
    comp.setOnLoaderStart(val);
  });
  useUpdateWithSetter(paymentMethodSettings, onLoadError, (comp, val) => {
    comp.setOnLoadError(val);
  });

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

export const ConnectInstantPayouts = ({
  onLoadError,
  onLoaderStart,
}: CommonComponentProps): JSX.Element => {
  const {wrapper, component: instantPayouts} =
    useCreateComponent('instant-payouts');

  useUpdateWithSetter(instantPayouts, onLoaderStart, (comp, val) => {
    comp.setOnLoaderStart(val);
  });
  useUpdateWithSetter(instantPayouts, onLoadError, (comp, val) => {
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
  fetchEphemeralKey,
  onLoadError,
  onLoaderStart,
}: {
  defaultCard?: string;
  cardSwitching?: boolean;
  fetchEphemeralKey?: FetchEphemeralKeyFunction;
} & CommonComponentProps): JSX.Element => {
  const {wrapper, component: issuingCard} = useCreateComponent('issuing-card');

  useUpdateWithSetter(issuingCard, defaultCard, (comp, val) =>
    comp.setDefaultCard(val)
  );
  useUpdateWithSetter(issuingCard, cardSwitching, (comp, val) =>
    comp.setCardSwitching(val)
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
  fetchEphemeralKey,
  onLoadError,
  onLoaderStart,
}: {
  fetchEphemeralKey?: FetchEphemeralKeyFunction;
} & CommonComponentProps): JSX.Element => {
  const {wrapper, component: issuingCardsList} =
    useCreateComponent('issuing-cards-list');

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

export const ConnectCapitalOverview = ({
  onLoadError,
  onLoaderStart,
}: CommonComponentProps): JSX.Element => {
  const {wrapper, component: capitalOverview} =
    useCreateComponent('capital-overview');

  useUpdateWithSetter(capitalOverview, onLoaderStart, (comp, val) => {
    comp.setOnLoaderStart(val);
  });
  useUpdateWithSetter(capitalOverview, onLoadError, (comp, val) => {
    comp.setOnLoadError(val);
  });

  return wrapper;
};

export const ConnectCapitalFinancing = ({
  defaultFinancingOffer,
  showFinancingSelector,
  faqUrl,
  supportUrl,
  onFinancingsLoaded,
  onLoadError,
  onLoaderStart,
}: {
  defaultFinancingOffer?: string;
  showFinancingSelector?: boolean;
  faqUrl?: string;
  supportUrl?: string;
  onFinancingsLoaded?: ({total}: {total: number}) => void;
} & CommonComponentProps): JSX.Element => {
  const {wrapper, component: capitalFinancing} = 
    useCreateComponent('capital-financing');

  useUpdateWithSetter(
    capitalFinancing,
    defaultFinancingOffer,
    (comp, val) => comp.setDefaultFinancingOffer(val)
  );

  useUpdateWithSetter(
    capitalFinancing,
    showFinancingSelector,
    (comp, val) => comp.setShowFinancingSelector(val)
  )

  useUpdateWithSetter(
    capitalFinancing,
    faqUrl,
    (comp, val) => comp.setFaqUrl(val)
  )

  useUpdateWithSetter(
    capitalFinancing,
    supportUrl,
    (comp, val) => comp.setSupportUrl(val)
  )

  useUpdateWithSetter(
    capitalFinancing,
    onFinancingsLoaded,
    (comp, val) => comp.setOnFinancingsLoaded(val)
  )

  useUpdateWithSetter(capitalFinancing, onLoaderStart, (comp, val) => {
    comp.setOnLoaderStart(val);
  });
  useUpdateWithSetter(capitalFinancing, onLoadError, (comp, val) => {
    comp.setOnLoadError(val);
  });

  return wrapper;
};

export const ConnectCapitalFinancingApplication = ({
  onApplicationSubmitted,
  onLoadError,
  onLoaderStart,
}: {
  onApplicationSubmitted: () => void;
} & CommonComponentProps): JSX.Element => {
  const {wrapper, component: capitalFinancingApplication} =
    useCreateComponent('capital-financing-application');

  useUpdateWithSetter(
    capitalFinancingApplication,
    onApplicationSubmitted,
    (comp, val) => comp.setOnApplicationSubmitted(val)
  )

  useUpdateWithSetter(capitalFinancingApplication, onLoaderStart, (comp, val) => {
    comp.setOnLoaderStart(val);
  });
  useUpdateWithSetter(capitalFinancingApplication, onLoadError, (comp, val) => {
    comp.setOnLoadError(val);
  });

  return wrapper;
};

export const ConnectCapitalFinancingPromotion = ({
  onApplicationSubmitted,
  onLoadError,
  onLoaderStart,
}: {
  onApplicationSubmitted?: () => void;
} & CommonComponentProps): JSX.Element => {
  const {wrapper, component: capitalPromotion} =
    useCreateComponent('capital-financing-promotion');
  
  useUpdateWithSetter(
    capitalPromotion,
    onApplicationSubmitted,
    (comp, val) => comp.setOnApplicationSubmitted(val)
  )

  useUpdateWithSetter(capitalPromotion, onLoaderStart, (comp, val) => {
    comp.setOnLoaderStart(val);
  });
  useUpdateWithSetter(capitalPromotion, onLoadError, (comp, val) => {
    comp.setOnLoadError(val);
  });

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

export const ConnectTaxRegistrations = ({
  onLoadError,
  onLoaderStart,
}: CommonComponentProps): JSX.Element => {
  const {wrapper, component: taxRegistrations} =
    useCreateComponent('tax-registrations');

  useUpdateWithSetter(taxRegistrations, onLoaderStart, (comp, val) => {
    comp.setOnLoaderStart(val);
  });
  useUpdateWithSetter(taxRegistrations, onLoadError, (comp, val) => {
    comp.setOnLoadError(val);
  });

  return wrapper;
};

export const ConnectTaxSettings = ({
  onLoadError,
  onLoaderStart,
}: CommonComponentProps): JSX.Element => {
  const {wrapper, component: taxSettings} = useCreateComponent('tax-settings');

  useUpdateWithSetter(taxSettings, onLoaderStart, (comp, val) => {
    comp.setOnLoaderStart(val);
  });
  useUpdateWithSetter(taxSettings, onLoadError, (comp, val) => {
    comp.setOnLoadError(val);
  });

  return wrapper;
};
