import * as Components from './Components';
import {ConnectPaymentMethodSettings} from './index';

describe('Components', () => {
  it('exports ConnectPaymentMethodSettings from the GA entry point', () => {
    expect(typeof ConnectPaymentMethodSettings).toBe('function');
  });

  it("should verify that every component name starts with 'Connect'", () => {
    const doesEveryComponentNameStartsWithConnect = Object.keys(
      Components
    ).every((componentName) => {
      return componentName.startsWith('Connect');
    });
    expect(doesEveryComponentNameStartsWithConnect).toBe(true);
  });
});
