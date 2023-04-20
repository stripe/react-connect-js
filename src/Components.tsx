import { StripeConnectInstance } from "@stripe/connect-js";
import React from "react";
import { useComponentsContext } from "./ComponentsContext";

export const StripeConnectPayments = (): HTMLElement | null => {
  console.log("in payments test");
  const { connectInstance } = useComponentsContext();
  const payments = connectInstance.create("stripe-connect-payments");
  console.log(payments);
  return payments;
};

export const StripeConnectPayouts = (): HTMLElement | null => {
  const { connectInstance } = useComponentsContext();
  return connectInstance.create("stripe-connect-payouts");
};

export const StripeConnectPaymentDetails = ({
  chargeId,
  visible,
  close,
}: {
  chargeId: string;
  visible: boolean;
  close: () => void;
}): HTMLElement | null => {
  const { connectInstance } = useComponentsContext();
  const paymentDetails = connectInstance.create(
    "stripe-connect-payment-details"
  );
  paymentDetails?.addEventListener("close", () => {
    close();
  });
  return paymentDetails;
};

export const StripeConnectAccountManagement = (): HTMLElement | null => {
  const { connectInstance } = useComponentsContext();
  return connectInstance.create("stripe-connect-account-management");
};

export const StripeConnectAccountOnboarding = (
  onboardingComplete: () => void
): HTMLElement | null => {
  const { connectInstance } = useComponentsContext();
  const onboarding = connectInstance.create(
    "stripe-connect-account-onboarding"
  );
  onboarding?.addEventListener("onboardingcomplete", (ev) => {
    onboardingComplete();
  });
  return onboarding;
};

export const StripeConnectNotificationBanner = (): HTMLElement | null => {
  const { connectInstance } = useComponentsContext();
  return connectInstance.create("stripe-connect-instant-payouts");
};
