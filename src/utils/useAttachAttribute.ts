import React from 'react';

export const useAttachAttribute = (
  component: HTMLElement | null,
  attribute: string,
  value: string | boolean | undefined
): void => {
  React.useEffect(() => {
    if (!component) return;

    if (value !== undefined) {
      component.setAttribute(attribute, value.toString());
    } else {
      // RemoveAttribute is a no-op if the attribute is not present
      component.removeAttribute(attribute);
    }
  }, [component, attribute, value]);
};
