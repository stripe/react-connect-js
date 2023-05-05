import React from 'react';

export const useAttachAttribute = (
  component: HTMLElement | null,
  attribute: string,
  value: string | boolean | undefined
): void => {
  React.useEffect(() => {
    if (component && value !== undefined) {
      component.setAttribute(attribute, value.toString());
    }
  }, [component, attribute, value]);
};
