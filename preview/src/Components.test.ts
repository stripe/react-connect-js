import * as Components from './Components';
import {useCreateComponent} from './useCreateComponent';
import {useUpdateWithSetter} from './utils/useUpdateWithSetter';

jest.mock('./useCreateComponent');
jest.mock('./utils/useUpdateWithSetter');

describe('Components', () => {
  it("should verify that every component name starts with 'Connect'", () => {
    const doesEveryComponentNameStartsWithConnect = Object.keys(
      Components
    ).every((componentName) => {
      return componentName.startsWith('Connect');
    });
    expect(doesEveryComponentNameStartsWithConnect).toBe(true);
  });

  describe('ConnectCapitalFinancingManualPayment', () => {
    const component = {
      setPresentationMode: jest.fn(),
      setOnManualPaymentSubmitted: jest.fn(),
      setOnOverlayClosed: jest.fn(),
      setOnLoadError: jest.fn(),
      setOnLoaderStart: jest.fn(),
    };

    beforeEach(() => {
      jest.clearAllMocks();
      (useCreateComponent as jest.Mock).mockReturnValue({
        wrapper: null,
        component,
      });
      (useUpdateWithSetter as jest.Mock).mockImplementation(
        (element, value, setter) => setter(element, value)
      );
    });

    it.each([
      ['onLoadError', 'setOnLoadError'],
      ['onLoaderStart', 'setOnLoaderStart'],
    ] as const)('forwards %s to %s', (prop, setter) => {
      const callback = jest.fn();

      Components.ConnectCapitalFinancingManualPayment({[prop]: callback});

      expect(useCreateComponent).toHaveBeenCalledWith(
        'capital-financing-manual-payment'
      );
      expect(component[setter]).toHaveBeenCalledWith(callback);

      const updatedCallback = jest.fn();
      Components.ConnectCapitalFinancingManualPayment({
        [prop]: updatedCallback,
      });

      expect(component[setter]).toHaveBeenLastCalledWith(updatedCallback);

      Components.ConnectCapitalFinancingManualPayment({});

      expect(component[setter]).toHaveBeenLastCalledWith(undefined);
    });

    it('preserves the manual payment props', () => {
      const onManualPaymentSubmitted = jest.fn();
      const onOverlayClosed = jest.fn();

      Components.ConnectCapitalFinancingManualPayment({
        onManualPaymentSubmitted,
        onOverlayClosed,
      });

      expect(component.setOnManualPaymentSubmitted).toHaveBeenCalledWith(
        onManualPaymentSubmitted
      );
      expect(component.setOnOverlayClosed).toHaveBeenCalledWith(
        onOverlayClosed
      );
    });
  });
});
