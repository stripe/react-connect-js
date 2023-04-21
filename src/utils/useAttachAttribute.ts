import React from 'react';

export const useAttachAttribute = (
  component: HTMLElement | null,
  attribute: string,
  value: string | boolean
): void => {
  React.useEffect(() => {
    if (component) {
      component.setAttribute(attribute, value.toString());
    }
  }, [component, attribute, value]);
};
