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

  const props: React.ComponentProps<typeof Components.ConnectReportingChart> = {
    reportName: 'gross_volume',
    intervalStart: new Date('2026-01-01T00:00:00Z'),
    intervalEnd: new Date('2026-02-01T00:00:00Z'),
    intervalType: 'day',
    height: '400px',
    onLoaderStart: jest.fn(),
    onLoadError: jest.fn(),
  };

  it('forwards every prop to its setter and returns the wrapper', () => {
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

  it('clears optional props through their setters when omitted', () => {
    Components.ConnectReportingChart(props);
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
