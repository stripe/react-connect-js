import React from 'react';
import {useCreateComponent} from './useCreateComponent';
import {useAttachAttribute} from './utils/useAttachAttribute';
import {useUpdateWithSetter} from './utils/useUpdateWithSetter';
import { FetchEphemeralKeyFunction } from './types';

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
  visible = undefined,
}: {
  /**
   * @param payment the ID of `payment`, `charge`, or `paymentIntent` to be displayed.
   */
  payment: string;
  onClose: () => void;
  visible?: boolean | undefined;
}): JSX.Element | null => {
  const {wrapper, component: paymentDetails} =
    useCreateComponent('payment-details');

  useAttachAttribute(paymentDetails, 'visible', visible);
  React.useEffect(() => {
    if (!paymentDetails) return;
    paymentDetails.setPayment(payment);
    paymentDetails.setOnClose(onClose);
  }, [paymentDetails, payment, onClose]);

  return wrapper;
};

export const ConnectAccountOnboarding = ({
  onExit,
  recipientTermsOfServiceUrl,
  fullTermsOfServiceUrl,
  privacyPolicyUrl,
  skipTermsOfServiceCollection,
}: {
  onExit: () => void;
  recipientTermsOfServiceUrl?: string;
  fullTermsOfServiceUrl?: string;
  privacyPolicyUrl?: string;
  skipTermsOfServiceCollection?: boolean;
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
  useUpdateWithSetter(onboarding, onExit, (comp, val) => comp.setOnExit(val));

  return wrapper;
};

export const ConnectPaymentMethodSettings = (): JSX.Element => {
  const {wrapper} = useCreateComponent('payment-method-settings');
  return wrapper;
};

export const ConnectAccountManagement = (): JSX.Element => {
  const {wrapper} = useCreateComponent('account-management');
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
}: {
  cardArtFileLink?: string;
}): JSX.Element => {
  const {wrapper, component: issuingCardsList} =
    useCreateComponent('issuing-cards-list');

  useUpdateWithSetter(issuingCardsList, cardArtFileLink, (comp, val) =>
    comp.setCardArtFileLink(val)
  );

  return wrapper;
};
