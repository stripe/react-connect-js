import {useCreateComponent} from './useCreateComponent';
import {useUpdateWithSetter} from './utils/useUpdateWithSetter';

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

export const ConnectAccountManagement = (): JSX.Element => {
  const {wrapper} = useCreateComponent('account-management');
  return wrapper;
};

export const ConnectNotificationBanner = (): JSX.Element => {
  const {wrapper} = useCreateComponent('notification-banner');
  return wrapper;
};

export const ConnectDocuments = (): JSX.Element => {
  const {wrapper} = useCreateComponent('documents');
  return wrapper;
};

export const ConnectPayoutsList = (): JSX.Element => {
  const {wrapper} = useCreateComponent('payouts-list');
  return wrapper;
};

export const ConnectBalances = (): JSX.Element => {
  const {wrapper} = useCreateComponent('balances');
  return wrapper;
};
