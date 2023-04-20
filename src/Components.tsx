import React from "react";
import { useComponentsContext } from "./ComponentsContext";
import { createComponent } from "./createComponent";
import { useAttachAttribute } from "./utils/useAttachAttribute";
import {
  ConnectElementEventNames,
  useAttachEvent,
} from "./utils/useAttachEvent";

export const StripeConnectPayments = (): JSX.Element => {
  return createComponent("stripe-connect-payments");
};

export const StripeConnectPayouts = (): JSX.Element => {
  return createComponent("stripe-connect-payouts");
};

export const StripeConnectAccountManagement = (): JSX.Element => {
  return createComponent("stripe-connect-account-management");
};

export const StripeConnectInstantPayouts = (): JSX.Element => {
  return createComponent("stripe-connect-instant-payouts");
};

export const StripeConnectPaymentDetails = ({
  chargeId,
  visible = false,
  onClose,
  inline = false,
}: {
  chargeId: string;
  visible?: boolean;
  onClose: () => void;
  inline?: boolean;
}): JSX.Element | null => {
  const [
    paymentDetails,
    setPaymentDetails,
  ] = React.useState<HTMLElement | null>(null);
  const { connectInstance } = useComponentsContext();
  const wrapperDivRef = React.useRef<HTMLDivElement | null>(null);
  const wrapper = <div ref={wrapperDivRef}></div>;

  React.useLayoutEffect(() => {
    const component = connectInstance.create("stripe-connect-payment-details");
    setPaymentDetails(component);
    if (wrapperDivRef.current !== null && component !== null) {
      wrapperDivRef.current.replaceChildren(component);
    }
  }, []);

  useAttachEvent(paymentDetails, ConnectElementEventNames.close, onClose);
  useAttachAttribute(paymentDetails, "charge-id", chargeId);
  useAttachAttribute(paymentDetails, "visible", visible);

  return wrapper;
};

export const StripeConnectAccountOnboarding = (
  onOnboardingComplete: () => void
): JSX.Element | null => {
  const [onboarding, setOnboarding] = React.useState<HTMLElement | null>(null);
  const { connectInstance } = useComponentsContext();
  const wrapperDivRef = React.useRef<HTMLDivElement | null>(null);
  const wrapper = <div ref={wrapperDivRef}></div>;

  React.useLayoutEffect(() => {
    const component = connectInstance.create(
      "stripe-connect-account-onboarding"
    );
    setOnboarding(component);
    if (wrapperDivRef.current !== null && component !== null) {
      wrapperDivRef.current.replaceChildren(component);
    }
  }, []);

  useAttachEvent(
    onboarding,
    ConnectElementEventNames.onboardingComplete,
    onOnboardingComplete
  );

  return wrapper;
};
