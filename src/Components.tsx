import {useCreateComponent} from './useCreateComponent';
import {useAttachAttribute} from './utils/useAttachAttribute';
import {ConnectElementEventNames, useAttachEvent} from './utils/useAttachEvent';

export const ConnectPayments = (): JSX.Element => {
  const {wrapper} = useCreateComponent('stripe-connect-payments');
  return wrapper;
};

export const ConnectPayouts = (): JSX.Element => {
  const {wrapper} = useCreateComponent('stripe-connect-payouts');
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
  const {wrapper, component: paymentDetails} = useCreateComponent(
    'stripe-connect-payment-details'
  );

  useAttachEvent(paymentDetails, ConnectElementEventNames.close, onClose);
  useAttachAttribute(paymentDetails, 'charge-id', chargeId);
  useAttachAttribute(paymentDetails, 'visible', visible);

  return wrapper;
};
