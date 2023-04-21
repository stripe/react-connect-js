import {useCreateComponent} from './useCreateComponent';
import {useAttachAttribute} from './utils/useAttachAttribute';
import {ConnectElementEventNames, useAttachEvent} from './utils/useAttachEvent';

export const StripeConnectPayments = (): JSX.Element => {
  const {wrapper} = useCreateComponent('stripe-connect-payments');
  return wrapper;
};

export const StripeConnectPayouts = (): JSX.Element => {
  const {wrapper} = useCreateComponent('stripe-connect-payouts');
  return wrapper;
};

export const StripeConnectAccountManagement = (): JSX.Element => {
  const {wrapper} = useCreateComponent('stripe-connect-account-management');
  return wrapper;
};

export const StripeConnectInstantPayouts = (): JSX.Element => {
  const {wrapper} = useCreateComponent('stripe-connect-instant-payouts');
  return wrapper;
};

export const StripeConnectPaymentDetails = ({
  chargeId,
  onClose,
  visible = false,
}: {
  chargeId: string;
  onClose: () => void;
  visible?: boolean;
}): JSX.Element | null => {
  const {wrapper, component: paymentDetails} = useCreateComponent(
    'stripe-connect-payment-details'
  );

  useAttachEvent(paymentDetails, ConnectElementEventNames.close, onClose);
  useAttachAttribute(paymentDetails, 'charge-id', chargeId);
  useAttachAttribute(paymentDetails, 'visible', visible);

  return wrapper;
};

export const StripeConnectAccountOnboarding = (
  onOnboardingComplete: () => void
): JSX.Element | null => {
  const {wrapper, component: onboarding} = useCreateComponent(
    'stripe-connect-payment-details'
  );

  useAttachEvent(
    onboarding,
    ConnectElementEventNames.onboardingComplete,
    onOnboardingComplete
  );

  return wrapper;
};
