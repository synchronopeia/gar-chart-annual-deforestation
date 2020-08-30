import React, {
  useState,
  useEffect,
  // ReactElement,
  FunctionComponent,
} from 'react';

import Model from '../model';

import Chart from './chart';

import IDatum from '../model/interfaces/datum-interface';

const REGION_ID = 'BR-TO';
const SERIES_ID = 'annual-deforestation-rate';
const YEAR_RANGE: [number, number] = [2000, 2018];

interface IApp {
  apiBaseUri: string;
}

const App:FunctionComponent<IApp> = (props: IApp) => {
  const { apiBaseUri } = props;

  const [series, setSeries] = useState<IDatum>();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const model = new Model();
    model.fetchData(apiBaseUri).then(() => {
      setSeries(model.find({ fieldRef: SERIES_ID, regionRef: REGION_ID }));
      if (!isReady) setIsReady(true);
    });
  }, []);

  if (!isReady) return (<div>... fetching data</div>);

  console.log(series);

  return (
    <div>
      <Chart
        yearRange={YEAR_RANGE}
        series={series}
      />
    </div>
  );
};

export default App;
