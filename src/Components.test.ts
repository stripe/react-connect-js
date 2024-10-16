import * as Components from './Components';

describe('Components', () => {
  it("each component should be prefixed with 'Connect'", () => {
    const doesEveryComponentStartWithConnect = Object.keys(Components).every(
      (key) => {
        return key.startsWith('Connect');
      }
    );
    expect(doesEveryComponentStartWithConnect).toBe(true);
  });
});
