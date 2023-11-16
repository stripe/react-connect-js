import React from 'react';
import {useCreateComponent} from './useCreateComponent';
import {useAttachAttribute} from './utils/useAttachAttribute';

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
