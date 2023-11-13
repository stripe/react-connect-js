import React from 'react';
import {useCreateComponent} from './useCreateComponent';
import {useAttachAttribute} from './utils/useAttachAttribute';

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

  React.useEffect(() => {
    if (!onboarding) return;
    onboarding.setRecipientTermsOfServiceUrl(recipientTermsOfServiceUrl);
    onboarding.setFullTermsOfServiceUrl(fullTermsOfServiceUrl);
    onboarding.setPrivacyPolicyUrl(privacyPolicyUrl);
    onboarding.setSkipTermsOfServiceCollection(skipTermsOfServiceCollection);
    onboarding.setOnExit(onExit);
  }, [
    fullTermsOfServiceUrl,
    onExit,
    onboarding,
    privacyPolicyUrl,
    recipientTermsOfServiceUrl,
    skipTermsOfServiceCollection,
  ]);

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
  fetchEphemeralKey?: (fetchParams: {
    nonce: string;
    issuingCard: string;
  }) => Promise<{
    ephemeralKeySecret: string;
    nonce: string;
    issuingCard: string;
  }>;
}): JSX.Element => {
  const {wrapper, component: issuingCard} = useCreateComponent('issuing-card');

  React.useEffect(() => {
    if (!issuingCard) return;
    issuingCard.setDefaultCard(defaultCard);
    issuingCard.setCardArtFileLink(cardArtFileLink);
    issuingCard.setCardSwitching(cardSwitching);
    issuingCard.setFetchEphemeralKey(fetchEphemeralKey);
  }, [
    issuingCard,
    defaultCard,
    cardArtFileLink,
    cardSwitching,
    fetchEphemeralKey,
  ]);

  return wrapper;
};

export const ConnectIssuingCardsList = ({
  fetchEphemeralKey,
}: {
  fetchEphemeralKey?: (fetchParams: {
    nonce: string;
    issuingCard: string;
  }) => Promise<{
    ephemeralKeySecret: string;
    nonce: string;
    issuingCard: string;
  }>;
}): JSX.Element => {
  const {wrapper, component: issuingCardsList} =
    useCreateComponent('issuing-cards-list');

  React.useEffect(() => {
    if (!issuingCardsList) return;
    issuingCardsList.setFetchEphemeralKey(fetchEphemeralKey);
  }, [issuingCardsList, fetchEphemeralKey]);
  return wrapper;
};
