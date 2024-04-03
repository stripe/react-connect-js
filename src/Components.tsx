import {useCreateComponent} from './useCreateComponent';
import {useUpdateWithSetter} from './utils/useUpdateWithSetter';
import {CollectionOptions, FetchEphemeralKeyFunction} from './types';

export const ConnectPayments = (): JSX.Element => {
  const {wrapper} = useCreateComponent('payments');
  return wrapper;
};

export const ConnectPayouts = (): JSX.Element => {
  const {wrapper} = useCreateComponent('payouts');
  return wrapper;
};

export const ConnectPaymentDetails = ({
  payment,
  onClose,
}: {
  /**
   * @param payment the ID of `payment`, `charge`, or `paymentIntent` to be displayed.
   */
  payment: string;
  onClose: () => void;
}): JSX.Element | null => {
  const {wrapper, component: paymentDetails} =
    useCreateComponent('payment-details');

  useUpdateWithSetter(paymentDetails, payment, (comp, val) =>
    comp.setPayment(val)
  );
  useUpdateWithSetter(paymentDetails, onClose, (comp, val) =>
    comp.setOnClose(val)
  );
  return wrapper;
};

export const ConnectAccountOnboarding = ({
  onExit,
  recipientTermsOfServiceUrl,
  fullTermsOfServiceUrl,
  privacyPolicyUrl,
  skipTermsOfServiceCollection,
  collectionOptions,
}: {
  onExit: () => void;
  recipientTermsOfServiceUrl?: string;
  fullTermsOfServiceUrl?: string;
  privacyPolicyUrl?: string;
  skipTermsOfServiceCollection?: boolean;
  collectionOptions?: CollectionOptions;
}): JSX.Element | null => {
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

  return wrapper;
};

export const ConnectPaymentMethodSettings = (): JSX.Element => {
  const {wrapper} = useCreateComponent('payment-method-settings');
  return wrapper;
};

export const ConnectAccountManagement = ({
  collectionOptions,
}: {
  collectionOptions?: CollectionOptions;
}): JSX.Element => {
  const {wrapper, component: management} =
    useCreateComponent('account-management');
  useUpdateWithSetter(management, collectionOptions, (comp, val) =>
    comp.setCollectionOptions(val)
  );
  return wrapper;
};

export const ConnectInstantPayouts = (): JSX.Element => {
  const {wrapper} = useCreateComponent('instant-payouts');
  return wrapper;
};

export const ConnectNotificationBanner = (): JSX.Element => {
  const {wrapper} = useCreateComponent('notification-banner');
  return wrapper;
};

export const ConnectIssuingCard = ({
  defaultCard,
  cardArtFileLink,
  cardSwitching,
  fetchEphemeralKey,
}: {
  defaultCard?: string;
  cardArtFileLink?: string;
  cardSwitching?: boolean;
  fetchEphemeralKey?: FetchEphemeralKeyFunction;
}): JSX.Element => {
  const {wrapper, component: issuingCard} = useCreateComponent('issuing-card');

  useUpdateWithSetter(issuingCard, defaultCard, (comp, val) =>
    comp.setDefaultCard(val)
  );
  useUpdateWithSetter(issuingCard, cardArtFileLink, (comp, val) =>
    comp.setCardArtFileLink(val)
  );
  useUpdateWithSetter(issuingCard, cardSwitching, (comp, val) =>
    comp.setCardSwitching(val)
  );
  useUpdateWithSetter(issuingCard, fetchEphemeralKey, (comp, val) =>
    comp.setFetchEphemeralKey(val)
  );

  return wrapper;
};

export const ConnectIssuingCardsList = ({
  cardArtFileLink,
  fetchEphemeralKey,
}: {
  cardArtFileLink?: string;
  fetchEphemeralKey?: FetchEphemeralKeyFunction;
}): JSX.Element => {
  const {wrapper, component: issuingCardsList} =
    useCreateComponent('issuing-cards-list');

  useUpdateWithSetter(issuingCardsList, cardArtFileLink, (comp, val) =>
    comp.setCardArtFileLink(val)
  );
  useUpdateWithSetter(issuingCardsList, fetchEphemeralKey, (comp, val) =>
    comp.setFetchEphemeralKey(val)
  );

  return wrapper;
};

export const ConnectFinancialAccount = ({
  financialAccount,
}: {
  financialAccount: string;
}): JSX.Element => {
  const {wrapper, component: financialAccountComponent} =
    useCreateComponent('financial-account');

  useUpdateWithSetter(
    financialAccountComponent,
    financialAccount,
    (comp, val) => comp.setFinancialAccount(val)
  );

  return wrapper;
};

export const ConnectFinancialAccountTransactions = ({
  financialAccount,
}: {
  financialAccount: string;
}): JSX.Element => {
  const {wrapper, component: financialAccountTransactionsComponent} =
    useCreateComponent('financial-account-transactions');

  useUpdateWithSetter(
    financialAccountTransactionsComponent,
    financialAccount,
    (comp, val) => comp.setFinancialAccount(val)
  );

  return wrapper;
};

export const ConnectDocuments = (): JSX.Element => {
  const {wrapper} = useCreateComponent('documents');
  return wrapper;
};
