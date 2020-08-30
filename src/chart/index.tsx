import React, {
  FunctionComponent,
} from 'react';

import {
  scalePoint,
  scaleLinear,
} from '@vx/scale';

import {
  AxisBottom,
  AxisLeft,
} from '@vx/axis';

import {
  GridRows,
  GridColumns,
} from '@vx/grid';

import { Group } from '@vx/group';

import {
  GlyphTriangle,
} from '@vx/glyph';

import { LinePath, Line } from '@vx/shape';

import { curveMonotoneX } from '@vx/curve';

import IDatum from '../../model/interfaces/datum-interface';

interface IChart {
  yearRange: [number, number],
  series: IDatum | undefined;
}

const Chart:FunctionComponent<IChart> = (props: IChart) => {
  const {
    yearRange,
    series,
  } = props;

  const styleDefs = {
    chartHeight: 400,
    chartWidth: 700,
    chartBackgroundColor: '#cccccc',
  };

  return (
    <svg height={styleDefs.chartHeight} width={styleDefs.chartWidth}>
      <rect
        fill={styleDefs.chartBackgroundColor}
        height={styleDefs.chartHeight}
        width={styleDefs.chartWidth}
      />
    </svg>
  );
};

export default Chart;
