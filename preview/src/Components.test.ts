import * as Components from './Components';

describe('Components', () => {
  it('should not export the deprecated ConnectInstantPayouts component', () => {
    expect(Components).not.toHaveProperty('ConnectInstantPayouts');
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
