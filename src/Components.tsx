import {useCreateComponent} from './useCreateComponent';
import {useAttachAttribute} from './utils/useAttachAttribute';
import {ConnectElementEventNames, useAttachEvent} from './utils/useAttachEvent';

export const ConnectPayments = (): JSX.Element => {
  const {wrapper} = useCreateComponent('payments');
  return wrapper;
};

export const ConnectPayouts = (): JSX.Element => {
  const {wrapper} = useCreateComponent('payouts');
  return wrapper;
};

export const ConnectPaymentDetails = ({
  chargeId,
  onClose,
  visible = undefined,
}: {
  chargeId: string;
  onClose: () => void;
  visible?: boolean | undefined;
}): JSX.Element | null => {
  const {wrapper, component: paymentDetails} =
    useCreateComponent('payment-details');

  useAttachEvent(paymentDetails, ConnectElementEventNames.close, onClose);
  useAttachAttribute(paymentDetails, 'charge-id', chargeId);
  useAttachAttribute(paymentDetails, 'visible', visible);

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

  useAttachAttribute(
    onboarding,
    'recipient-terms-of-service-url',
    recipientTermsOfServiceUrl
  );
  useAttachAttribute(
    onboarding,
    'full-terms-of-service-url',
    fullTermsOfServiceUrl
  );

  useAttachAttribute(onboarding, 'privacy-policy-url', privacyPolicyUrl);

  useAttachAttribute(
    onboarding,
    'skip-terms-of-service-collection',
    skipTermsOfServiceCollection
  );

  useAttachEvent(onboarding, ConnectElementEventNames.exit, onExit);

  return wrapper;
};
