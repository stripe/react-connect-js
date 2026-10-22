import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {act} from 'react-dom/test-utils';
import {assert} from 'conditional-type-checks';
import type {IsExact} from 'conditional-type-checks';
import * as Components from './Components';
import {useConnectComponents} from './ConnectComponents';

jest.mock('./ConnectComponents', () => ({
  useConnectComponents: jest.fn(),
}));

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

describe('ConnectReportingChart height', () => {
  let container: HTMLDivElement;
  let reportingChart: HTMLElement;
  let setHeight: jest.Mock;
  let create: jest.Mock;

  const renderChart = (
    props: Partial<
      React.ComponentProps<typeof Components.ConnectReportingChart>
    > = {}
  ) => {
    act(() => {
      ReactDOM.render(
        React.createElement(Components.ConnectReportingChart, {
          reportName: 'net_volume',
          ...props,
        }),
        container
      );
    });
  };

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    setHeight = jest.fn();
    reportingChart = Object.assign(document.createElement('reporting-chart'), {
      setHeight,
      setReportName: jest.fn(),
      setIntervalStart: jest.fn(),
      setIntervalEnd: jest.fn(),
      setIntervalType: jest.fn(),
      setOnLoaderStart: jest.fn(),
      setOnLoadError: jest.fn(),
    });
    create = jest.fn().mockReturnValue(reportingChart);
    (useConnectComponents as jest.Mock).mockReturnValue({
      connectInstance: {create},
    });
  });

  afterEach(() => {
    act(() => {
      ReactDOM.unmountComponentAtNode(container);
    });
    container.remove();
    jest.clearAllMocks();
  });

  it('accepts an optional string height', () => {
    assert<
      IsExact<
        React.ComponentProps<typeof Components.ConnectReportingChart>['height'],
        string | undefined
      >
    >(true);
  });

  it('forwards the initial height without changing the wrapper layout', () => {
    renderChart({height: '300px'});

    expect(setHeight).toHaveBeenLastCalledWith('300px');
    expect(create).toHaveBeenCalledWith('reporting-chart');
    const wrapper = container.firstElementChild as HTMLDivElement;
    expect(container.childElementCount).toBe(1);
    expect(wrapper.hasAttribute('data-stripe-connect-js-wrapper')).toBe(true);
    expect(wrapper.style.cssText).toBe('width: 100%;');
    expect(wrapper.childNodes).toHaveLength(1);
    expect(wrapper.firstChild).toBe(reportingChart);
    expect(reportingChart.hasAttribute('style')).toBe(false);
  });

  it('updates and clears height without recreating the component', () => {
    renderChart({height: '300px'});
    setHeight.mockClear();

    renderChart({height: '500px'});
    expect(setHeight).toHaveBeenLastCalledWith('500px');

    renderChart({height: undefined});
    expect(setHeight).toHaveBeenLastCalledWith(undefined);

    renderChart({height: '300px'});
    expect(setHeight).toHaveBeenLastCalledWith('300px');

    renderChart();
    expect(setHeight).toHaveBeenLastCalledWith(undefined);
    expect(create).toHaveBeenCalledTimes(1);
    expect(container.firstElementChild?.firstChild).toBe(reportingChart);
  });

  it('preserves default sizing when height is omitted initially', () => {
    renderChart();

    expect(setHeight).toHaveBeenLastCalledWith(undefined);
    expect(reportingChart.hasAttribute('height')).toBe(false);

    renderChart({height: '300px'});
    expect(setHeight).toHaveBeenLastCalledWith('300px');
    expect(create).toHaveBeenCalledTimes(1);
  });
});
