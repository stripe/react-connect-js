import {useCreateComponent} from './useCreateComponent';
import {useUpdateWithSetter} from './utils/useUpdateWithSetter';
import type {
  FetchEphemeralKeyFunction,
  FinancingProductType,
  FinancingPromotionLayoutType,
} from './types';
import type {
  CollectionOptions,
  LoadError,
  LoaderStart,
  NotificationCount,
  InstallState,
  StepChange,
  IntervalType,
  ReportName,
  RecipientDataSource,
  PaymentsListDefaultFilters
} from '@stripe/connect-js';

export type {CollectionOptions};
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
  defaultFilters,
  onLoadError,
  onLoaderStart,
}: {defaultFilters?: PaymentsListDefaultFilters} & CommonComponentProps): JSX.Element => {
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

export const ConnectRecipients = ({
  dataSource,
  onLoadError,
  onLoaderStart,
}: {
  dataSource: RecipientDataSource;
} & CommonComponentProps): JSX.Element => {
  const {wrapper, component: recipientsComponent} =
    useCreateComponent('recipients');

  useUpdateWithSetter(recipientsComponent, dataSource, (comp, val) =>
    comp.setDataSource(val)
  );
  useUpdateWithSetter(recipientsComponent, onLoaderStart, (comp, val) => {
    comp.setOnLoaderStart(val);
  });
  useUpdateWithSetter(recipientsComponent, onLoadError, (comp, val) => {
    comp.setOnLoadError(val);
  });

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
  howCapitalWorksUrl,
  supportUrl,
  onFinancingsLoaded,
  onLoadError,
  onLoaderStart,
}: {
  defaultFinancingOffer?: string;
  showFinancingSelector?: boolean;
  howCapitalWorksUrl?: string;
  supportUrl?: string;
  onFinancingsLoaded?: ({total}: {total: number}) => void;
} & CommonComponentProps): JSX.Element => {
  const {wrapper, component: capitalFinancing} =
    useCreateComponent('capital-financing');

  useUpdateWithSetter(capitalFinancing, defaultFinancingOffer, (comp, val) =>
    comp.setDefaultFinancingOffer(val)
  );

  useUpdateWithSetter(capitalFinancing, showFinancingSelector, (comp, val) =>
    comp.setShowFinancingSelector(val)
  );

  useUpdateWithSetter(capitalFinancing, howCapitalWorksUrl, (comp, val) =>
    comp.setHowCapitalWorksUrl(val)
  );

  useUpdateWithSetter(capitalFinancing, supportUrl, (comp, val) =>
    comp.setSupportUrl(val)
  );

  useUpdateWithSetter(capitalFinancing, onFinancingsLoaded, (comp, val) =>
    comp.setOnFinancingsLoaded(val)
  );

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
  onApplicationStepChange,
  privacyPolicyUrl,
  howCapitalWorksUrl,
  onLoadError,
  onLoaderStart,
}: {
  onApplicationSubmitted: () => void;
  onApplicationStepChange?: ({step}: StepChange) => void;
  privacyPolicyUrl?: string;
  howCapitalWorksUrl?: string;
} & CommonComponentProps): JSX.Element => {
  const {wrapper, component: capitalFinancingApplication} = useCreateComponent(
    'capital-financing-application'
  );

  useUpdateWithSetter(
    capitalFinancingApplication,
    onApplicationSubmitted,
    (comp, val) => comp.setOnApplicationSubmitted(val)
  );

  useUpdateWithSetter(
    capitalFinancingApplication,
    onApplicationStepChange,
    (comp, val) => comp.setOnApplicationStepChange(val)
  );

  useUpdateWithSetter(
    capitalFinancingApplication,
    privacyPolicyUrl,
    (comp, val) => comp.setPrivacyPolicyUrl(val)
  );
  useUpdateWithSetter(
    capitalFinancingApplication,
    howCapitalWorksUrl,
    (comp, val) => comp.setHowCapitalWorksUrl(val)
  );

  useUpdateWithSetter(
    capitalFinancingApplication,
    onLoaderStart,
    (comp, val) => {
      comp.setOnLoaderStart(val);
    }
  );
  useUpdateWithSetter(capitalFinancingApplication, onLoadError, (comp, val) => {
    comp.setOnLoadError(val);
  });

  return wrapper;
};

export const ConnectCapitalFinancingPromotion = ({
  layout,
  onApplicationSubmitted,
  onEligibleFinancingOfferLoaded,
  onApplicationStepChange,
  privacyPolicyUrl,
  howCapitalWorksUrl,
  eligibilityCriteriaUrl,
  onLoadError,
  onLoaderStart,
}: {
  layout?: FinancingPromotionLayoutType;
  onEligibleFinancingOfferLoaded?: ({
    productType,
    activeFinancingCount,
  }: FinancingProductType) => void;
  privacyPolicyUrl?: string;
  howCapitalWorksUrl?: string;
  eligibilityCriteriaUrl?: string;
  onApplicationSubmitted?: () => void;
  onApplicationStepChange?: ({step}: StepChange) => void;
} & CommonComponentProps): JSX.Element => {
  const {wrapper, component: capitalPromotion} = useCreateComponent(
    'capital-financing-promotion'
  );

  useUpdateWithSetter(capitalPromotion, layout, (comp, val) =>
    comp.setLayout(val)
  );
  useUpdateWithSetter(capitalPromotion, privacyPolicyUrl, (comp, val) =>
    comp.setPrivacyPolicyUrl(val)
  );
  useUpdateWithSetter(capitalPromotion, howCapitalWorksUrl, (comp, val) =>
    comp.setHowCapitalWorksUrl(val)
  );
  useUpdateWithSetter(capitalPromotion, eligibilityCriteriaUrl, (comp, val) =>
    comp.setEligibilityCriteriaUrl(val)
  );

  useUpdateWithSetter(capitalPromotion, onApplicationSubmitted, (comp, val) =>
    comp.setOnApplicationSubmitted(val)
  );
  useUpdateWithSetter(capitalPromotion, onApplicationStepChange, (comp, val) =>
    comp.setOnApplicationStepChange(val)
  );

  useUpdateWithSetter(
    capitalPromotion,
    onEligibleFinancingOfferLoaded,
    (comp, val) => comp.setOnEligibleFinancingOfferLoaded(val)
  );

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

export const ConnectProductTaxCodeSelector = ({
  onLoadError,
  onLoaderStart,
  onTaxCodeSelect,
  hideDescription,
  disabled,
  initialTaxCode
}: {
  onTaxCodeSelect?: (taxCode: string | null, _: { analyticsName: string } | null) => void;
  hideDescription?: boolean;
  disabled?: boolean;
  initialTaxCode?: string;
} & CommonComponentProps): JSX.Element => {
  const {wrapper, component: productTaxCodeSelector} =
    useCreateComponent('product-tax-code-selector');

  useUpdateWithSetter(productTaxCodeSelector, onLoaderStart, (comp, val) => {
    comp.setOnLoaderStart(val);
  });
  useUpdateWithSetter(productTaxCodeSelector, onLoadError, (comp, val) => {
    comp.setOnLoadError(val);
  });

  useUpdateWithSetter(productTaxCodeSelector, onTaxCodeSelect, (comp, val) => {
    comp.setOnTaxCodeSelect(val);
  });
  useUpdateWithSetter(productTaxCodeSelector, hideDescription, (comp, val) => {
    comp.setHideDescription(val);
  });
  useUpdateWithSetter(productTaxCodeSelector, disabled, (comp, val) => {
    comp.setDisabled(val);
  });
  useUpdateWithSetter(productTaxCodeSelector, initialTaxCode, (comp, val) => {
    comp.setInitialTaxCode(val);
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

export const ConnectExportTaxTransactions = ({
  onLoadError,
  onLoaderStart,
}: CommonComponentProps): JSX.Element => {
  const {wrapper, component: exportTaxTransactions} = 
    useCreateComponent('export-tax-transactions');

  useUpdateWithSetter(exportTaxTransactions, onLoaderStart, (comp, val) => {
    comp.setOnLoaderStart(val);
  });

  useUpdateWithSetter(exportTaxTransactions, onLoadError, (comp, val) => {
    comp.setOnLoadError(val);
  });
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

export const ConnectTaxThresholdMonitoring = ({
  onLoadError,
  onLoaderStart,
  displayCountries,
}: {
  displayCountries?: string[];
} & CommonComponentProps): JSX.Element => {
  const {wrapper, component: taxSettings} = useCreateComponent(
    'tax-threshold-monitoring'
  );

  useUpdateWithSetter(taxSettings, onLoaderStart, (comp, val) => {
    comp.setOnLoaderStart(val);
  });
  useUpdateWithSetter(taxSettings, onLoadError, (comp, val) => {
    comp.setOnLoadError(val);
  });

  useUpdateWithSetter(taxSettings, displayCountries, (comp, val) => {
    comp.setDisplayCountries(val);
  });

  return wrapper;
};

export const ConnectReportingChart = ({
  reportName,
  intervalStart,
  intervalEnd,
  intervalType,
  onLoadError,
  onLoaderStart,
}: {
  /**
   * @param reportName The name of the report to render as a chart.
   * @param intervalStart The start date of the report interval.
   * @param intervalEnd The end date of the report interval.
   * @param intervalType The type of the report interval.
   */
  reportName: ReportName;
  intervalStart?: Date;
  intervalEnd?: Date;
  intervalType?: IntervalType;
} & CommonComponentProps): JSX.Element | null => {
  const {wrapper, component: reportingChart} =
    useCreateComponent('reporting-chart');

  useUpdateWithSetter(reportingChart, reportName, (comp, val) =>
    comp.setReportName(val)
  );

  useUpdateWithSetter(reportingChart, intervalStart, (comp, val) =>
    comp.setIntervalStart(val)
  );

  useUpdateWithSetter(reportingChart, intervalEnd, (comp, val) =>
    comp.setIntervalEnd(val)
  );

  useUpdateWithSetter(reportingChart, intervalType, (comp, val) =>
    comp.setIntervalType(val)
  );

  useUpdateWithSetter(reportingChart, onLoaderStart, (comp, val) => {
    comp.setOnLoaderStart(val);
  });
  useUpdateWithSetter(reportingChart, onLoadError, (comp, val) => {
    comp.setOnLoadError(val);
  });

  return wrapper;
};

export const ConnectInstantPayoutsPromotion = ({
  onInstantPayoutsPromotionLoaded,
  onInstantPayoutCreated,
  onLoadError,
  onLoaderStart,
}: {
  onInstantPayoutsPromotionLoaded?: ({
    promotionShown,
  }: {
    promotionShown: boolean;
  }) => void;
  onInstantPayoutCreated?: ({payoutId}: {payoutId: string}) => void;
} & CommonComponentProps): JSX.Element => {
  const {wrapper, component: instantPayoutsPromotion} = useCreateComponent(
    'instant-payouts-promotion'
  );

  useUpdateWithSetter(instantPayoutsPromotion, onLoaderStart, (comp, val) => {
    comp.setOnLoaderStart(val);
  });
  useUpdateWithSetter(instantPayoutsPromotion, onLoadError, (comp, val) => {
    comp.setOnLoadError(val);
  });
  useUpdateWithSetter(
    instantPayoutsPromotion,
    onInstantPayoutsPromotionLoaded,
    (comp, val) => {
      comp.setOnInstantPayoutsPromotionLoaded(val);
    }
  );
  useUpdateWithSetter(
    instantPayoutsPromotion,
    onInstantPayoutCreated,
    (comp, val) => {
      comp.setOnInstantPayoutCreated(val);
    }
  );

  return wrapper;
};

export const ConnectPayoutDetails = ({
  payout,
  onClose,
  onLoadError,
  onLoaderStart,
}: {
  /**
   * @param payout the ID of `payout` to be displayed.
   */
  payout: string;
  onClose: () => void;
} & CommonComponentProps): JSX.Element | null => {
  const {wrapper, component: payoutDetails} =
    useCreateComponent('payout-details');

  useUpdateWithSetter(payoutDetails, payout, (comp, val) =>
    comp.setPayout(val)
  );
  useUpdateWithSetter(payoutDetails, onClose, (comp, val) =>
    comp.setOnClose(val)
  );
  useUpdateWithSetter(payoutDetails, onLoaderStart, (comp, val) => {
    comp.setOnLoaderStart(val);
  });
  useUpdateWithSetter(payoutDetails, onLoadError, (comp, val) => {
    comp.setOnLoadError(val);
  });
  return wrapper;
};
