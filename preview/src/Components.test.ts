import React from 'react';
import * as Components from './Components';
import {useCreateComponent} from './useCreateComponent';

jest.mock('./useCreateComponent');

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

describe('ConnectCapitalFinancingApplication', () => {
  const setDefaultFinancingOffer = jest.fn();
  const component = {
    setDefaultFinancingOffer,
    setOnApplicationSubmitted: jest.fn(),
    setOnApplicationStepChange: jest.fn(),
    setPrivacyPolicyUrl: jest.fn(),
    setHowCapitalWorksUrl: jest.fn(),
    setOnApplicationInitiated: jest.fn(),
    setResumeInitiatedApplication: jest.fn(),
    setOnLoaderStart: jest.fn(),
    setOnLoadError: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
    (useCreateComponent as jest.Mock).mockReturnValue({
      wrapper: null,
      component,
    });
    jest.spyOn(React, 'useEffect').mockImplementation((effect) => {
      effect();
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('passes the default financing offer to the application setter', () => {
    Components.ConnectCapitalFinancingApplication({
      defaultFinancingOffer: 'financing_offer_123',
      onApplicationSubmitted: jest.fn(),
    });

    expect(useCreateComponent).toHaveBeenCalledWith(
      'capital-financing-application'
    );
    expect(setDefaultFinancingOffer).toHaveBeenCalledTimes(1);
    expect(setDefaultFinancingOffer).toHaveBeenCalledWith(
      'financing_offer_123'
    );
  });

  it('passes undefined when the optional financing offer is omitted', () => {
    Components.ConnectCapitalFinancingApplication({
      onApplicationSubmitted: jest.fn(),
    });

    expect(setDefaultFinancingOffer).toHaveBeenCalledTimes(1);
    expect(setDefaultFinancingOffer).toHaveBeenCalledWith(undefined);
  });

  it('waits for the application component before calling its setter', () => {
    (useCreateComponent as jest.Mock).mockReturnValue({
      wrapper: null,
      component: null,
    });

    Components.ConnectCapitalFinancingApplication({
      defaultFinancingOffer: 'financing_offer_123',
      onApplicationSubmitted: jest.fn(),
    });

    expect(setDefaultFinancingOffer).not.toHaveBeenCalled();
  });
});
