import * as Components from './Components';

describe('Components', () => {
  it('should do something', () => {
    const doesEveryComponentNameStartsWithConnect = Object.keys(
      Components
    ).every((componentName) => {
      return componentName.startsWith('Connect');
    });
    expect(doesEveryComponentNameStartsWithConnect).toBe(true);
  });
});
