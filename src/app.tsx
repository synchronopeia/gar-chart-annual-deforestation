import React, {
  useState,
  useEffect,
  // ReactElement,
  FunctionComponent,
} from 'react';

import Model from '../model';

import IDatum from '../model/interfaces/datum-interface';

const REGION_ID = 'BR-TO';

const SERIES_ID = 'annual-deforestation-rate';

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
      App is running.
    </div>
  );
};

export default App;
