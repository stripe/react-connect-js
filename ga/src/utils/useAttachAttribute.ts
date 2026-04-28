import React from 'react';

/**
 * @deprecated The method should not be used as we are deprecating the use of attributes directly.
 * Define a setter for your use case and use useUpdateWithSetter instead.
 */
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
