import * as Components from './Components';

jest.mock('./useCreateComponent');
jest.mock('./utils/useUpdateWithSetter');

import {useCreateComponent} from './useCreateComponent';
import {useUpdateWithSetter} from './utils/useUpdateWithSetter';

const mockedUseCreateComponent = useCreateComponent as jest.MockedFunction<
  typeof useCreateComponent
>;
const mockedUseUpdateWithSetter = useUpdateWithSetter as jest.MockedFunction<
  typeof useUpdateWithSetter
>;

describe('Components', () => {
  it("should verify that every component name starts with 'Connect'", () => {
    const doesEveryComponentNameStartsWithConnect = Object.keys(
      Components
    ).every((componentName) => {
      return componentName.startsWith('Connect');
    });
    expect(doesEveryComponentNameStartsWithConnect).toBe(true);
  });
});

describe('ConnectBusinessProfileManagement', () => {
  const mockWrapper = {} as JSX.Element;
  const mockComponent = {
    setOnLoaderStart: jest.fn(),
    setOnLoadError: jest.fn(),
    setOnBusinessProfileSaved: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
    mockedUseCreateComponent.mockReturnValue({
      wrapper: mockWrapper,
      component: mockComponent as any,
    });
  });

  it('creates the business-profile-management component', () => {
    Components.ConnectBusinessProfileManagement({});
    expect(mockedUseCreateComponent).toHaveBeenCalledWith(
      'business-profile-management'
    );
  });

  it('returns the wrapper element', () => {
    const result = Components.ConnectBusinessProfileManagement({});
    expect(result).toBe(mockWrapper);
  });

  it('forwards onBusinessProfileSaved to setOnBusinessProfileSaved', () => {
    const callback = jest.fn();
    Components.ConnectBusinessProfileManagement({
      onBusinessProfileSaved: callback,
    });

    const setterCall = mockedUseUpdateWithSetter.mock.calls.find(
      (call) => call[1] === callback
    );
    expect(setterCall).toBeDefined();
    expect(setterCall![0]).toBe(mockComponent);

    setterCall![2](mockComponent as any, callback);
    expect(mockComponent.setOnBusinessProfileSaved).toHaveBeenCalledWith(
      callback
    );
  });

  it('forwards onLoaderStart and onLoadError to common setters', () => {
    const onLoaderStart = jest.fn();
    const onLoadError = jest.fn();
    Components.ConnectBusinessProfileManagement({onLoaderStart, onLoadError});

    const loaderStartCall = mockedUseUpdateWithSetter.mock.calls.find(
      (call) => call[1] === onLoaderStart
    );
    expect(loaderStartCall).toBeDefined();
    loaderStartCall![2](mockComponent as any, onLoaderStart);
    expect(mockComponent.setOnLoaderStart).toHaveBeenCalledWith(onLoaderStart);

    const loadErrorCall = mockedUseUpdateWithSetter.mock.calls.find(
      (call) => call[1] === onLoadError
    );
    expect(loadErrorCall).toBeDefined();
    loadErrorCall![2](mockComponent as any, onLoadError);
    expect(mockComponent.setOnLoadError).toHaveBeenCalledWith(onLoadError);
  });

  it('forwards undefined when callbacks are omitted', () => {
    Components.ConnectBusinessProfileManagement({});

    const calls = mockedUseUpdateWithSetter.mock.calls;
    expect(calls).toHaveLength(3);
    calls.forEach((call) => {
      expect(call[1]).toBeUndefined();
    });
  });
});
