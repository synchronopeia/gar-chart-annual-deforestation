/* eslint-disable max-len */

import React, {
  useState,
  useEffect,
  // ReactElement,
  FunctionComponent,
} from 'react';

interface IApp {
  apiBaseUri: string;
}

const App:FunctionComponent<IApp> = (props: IApp) => {
  const { apiBaseUri } = props;

  return (
    <div>
      App is running.
    </div>
  );
};

export default App;
