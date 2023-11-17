import {useCreateComponent} from './useCreateComponent';
import {useUpdateWithSetter} from './utils/useUpdateWithSetter';

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

  useUpdateWithSetter(onboarding, recipientTermsOfServiceUrl, (comp, val) => comp.setRecipientTermsOfServiceUrl(val));
  useUpdateWithSetter(onboarding, fullTermsOfServiceUrl, (comp, val) => comp.setFullTermsOfServiceUrl(val));
  useUpdateWithSetter(onboarding, privacyPolicyUrl, (comp, val) => comp.setPrivacyPolicyUrl(val));
  useUpdateWithSetter(onboarding, skipTermsOfServiceCollection, (comp, val) => comp.setSkipTermsOfServiceCollection(val));
  useUpdateWithSetter(onboarding, onExit, (comp, val) => comp.setOnExit(val));

  return wrapper;
};
