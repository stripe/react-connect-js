import React from 'react';
import {useCreateComponent} from './useCreateComponent';
import {useAttachAttribute} from './utils/useAttachAttribute';
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
