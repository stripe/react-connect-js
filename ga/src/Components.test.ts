import React from 'react';
import * as Components from './Components';
import {useCreateComponent} from './useCreateComponent';

jest.mock('./useCreateComponent');

describe('ConnectReportingChart', () => {
  const wrapper = React.createElement('div');
  const reportingChart = Object.assign(document.createElement('div'), {
    setReportName: jest.fn(),
    setIntervalStart: jest.fn(),
    setIntervalEnd: jest.fn(),
    setIntervalType: jest.fn(),
    setHeight: jest.fn(),
    setOnLoaderStart: jest.fn(),
    setOnLoadError: jest.fn(),
  });

  beforeEach(() => {
    jest.clearAllMocks();
    (useCreateComponent as jest.Mock).mockReturnValue({
      wrapper,
      component: reportingChart,
    });
    jest.spyOn(React, 'useEffect').mockImplementation((effect) => {
      effect();
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('forwards every prop to its setter and returns the wrapper', () => {
    const props: React.ComponentProps<typeof Components.ConnectReportingChart> =
      {
        reportName: 'gross_volume',
        intervalStart: new Date('2026-01-01T00:00:00Z'),
        intervalEnd: new Date('2026-02-01T00:00:00Z'),
        intervalType: 'day',
        height: '400px',
        onLoaderStart: jest.fn(),
        onLoadError: jest.fn(),
      };

    expect(Components.ConnectReportingChart(props)).toBe(wrapper);
    expect(useCreateComponent).toHaveBeenCalledWith('reporting-chart');
    expect(reportingChart.setReportName).toHaveBeenCalledWith(props.reportName);
    expect(reportingChart.setIntervalStart).toHaveBeenCalledWith(
      props.intervalStart
    );
    expect(reportingChart.setIntervalEnd).toHaveBeenCalledWith(
      props.intervalEnd
    );
    expect(reportingChart.setIntervalType).toHaveBeenCalledWith(
      props.intervalType
    );
    expect(reportingChart.setHeight).toHaveBeenCalledWith(props.height);
    expect(reportingChart.setOnLoaderStart).toHaveBeenCalledWith(
      props.onLoaderStart
    );
    expect(reportingChart.setOnLoadError).toHaveBeenCalledWith(
      props.onLoadError
    );
  });

  it('forwards updated props to their setters', () => {
    Components.ConnectReportingChart({
      reportName: 'gross_volume',
      height: '400px',
    });
    const intervalStart = new Date('2026-02-01T00:00:00Z');
    const intervalEnd = new Date('2026-03-01T00:00:00Z');
    const onLoaderStart = jest.fn();
    const onLoadError = jest.fn();

    Components.ConnectReportingChart({
      reportName: 'net_volume',
      intervalStart,
      intervalEnd,
      intervalType: 'month',
      height: '600px',
      onLoaderStart,
      onLoadError,
    });

    expect(reportingChart.setReportName).toHaveBeenLastCalledWith('net_volume');
    expect(reportingChart.setIntervalStart).toHaveBeenLastCalledWith(
      intervalStart
    );
    expect(reportingChart.setIntervalEnd).toHaveBeenLastCalledWith(intervalEnd);
    expect(reportingChart.setIntervalType).toHaveBeenLastCalledWith('month');
    expect(reportingChart.setHeight).toHaveBeenLastCalledWith('600px');
    expect(reportingChart.setOnLoaderStart).toHaveBeenLastCalledWith(
      onLoaderStart
    );
    expect(reportingChart.setOnLoadError).toHaveBeenLastCalledWith(onLoadError);
  });

  it('clears optional props through their setters when omitted', () => {
    Components.ConnectReportingChart({
      reportName: 'gross_volume',
      intervalStart: new Date('2026-01-01T00:00:00Z'),
      intervalEnd: new Date('2026-02-01T00:00:00Z'),
      intervalType: 'week',
      height: '400px',
      onLoaderStart: jest.fn(),
      onLoadError: jest.fn(),
    });
    Components.ConnectReportingChart({reportName: 'gross_volume'});

    expect(reportingChart.setIntervalStart).toHaveBeenLastCalledWith(undefined);
    expect(reportingChart.setIntervalEnd).toHaveBeenLastCalledWith(undefined);
    expect(reportingChart.setIntervalType).toHaveBeenLastCalledWith(undefined);
    expect(reportingChart.setHeight).toHaveBeenLastCalledWith(undefined);
    expect(reportingChart.setOnLoaderStart).toHaveBeenLastCalledWith(undefined);
    expect(reportingChart.setOnLoadError).toHaveBeenLastCalledWith(undefined);
  });

  it('waits for the component before calling setters', () => {
    (useCreateComponent as jest.Mock).mockReturnValue({
      wrapper,
      component: null,
    });

    expect(Components.ConnectReportingChart({reportName: 'gross_volume'})).toBe(
      wrapper
    );

    expect(reportingChart.setReportName).not.toHaveBeenCalled();
    expect(reportingChart.setIntervalStart).not.toHaveBeenCalled();
    expect(reportingChart.setIntervalEnd).not.toHaveBeenCalled();
    expect(reportingChart.setIntervalType).not.toHaveBeenCalled();
    expect(reportingChart.setHeight).not.toHaveBeenCalled();
    expect(reportingChart.setOnLoaderStart).not.toHaveBeenCalled();
    expect(reportingChart.setOnLoadError).not.toHaveBeenCalled();
  });
});

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
