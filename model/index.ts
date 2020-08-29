import axios from 'axios';

import IData from './interfaces/datum-interface';

interface IFindProps {
  fieldRef?: string,
  regionRef?: string,
  scalarId?: string,
  arrayId?: string,
}

interface IFilterProps {
  fieldRef?: string,
  regionRef?: string,
}

export default class Model {
  recs: IData[] = [];

  // constructor() {
  //   this.baseUri = props.baseUri;
  // }

  fetchData(baseUri: string):Promise<boolean> {
    const apiPath = `${baseUri}/data.json`;

    return axios.get(apiPath)
      .then((response) => {
        this.recs = response.data;
        // console.log('fetched data');
        return true;
      });
  }

  find(props: { fieldRef?: string, regionRef?:string, id?: string }): IData | undefined {
    // if (!this.isLoaded) throw Error('NODATA: No data has been loaded. Did you call fetchData() and make sure the promise resolved?');

    if (props.id) {
      return this.recs.find((rec) => (rec.id === props.id));
    }

    if (props.fieldRef && props.regionRef) {
      return this.recs.find((rec) => ((rec.fieldRef === props.fieldRef) && (rec.regionRef === props.regionRef)));
    }

    return undefined;
  }

  filter(props: { fieldRef?: string | string[], regionRef?: string }): IData[] {
    const { fieldRef, regionRef } = props;

    let filteredRecs;

    if (typeof fieldRef === 'string') filteredRecs = this.recs.filter((rec: IData) => (rec.fieldRef === fieldRef));
    else if (Array.isArray(fieldRef)) filteredRecs = this.recs.filter((rec: IData) => fieldRef.includes(rec.fieldRef));
    else filteredRecs = this.recs;

    if (regionRef) {
      const [nationRef, jurisdictionSlug] = regionRef.split('-');
      const isWildCard = (jurisdictionSlug === '*');
      if (isWildCard) {
        return filteredRecs.filter((rec: IData) => (rec.regionRef.startsWith(`${nationRef}-`)));
      }
      return filteredRecs.filter((rec: IData) => (rec.regionRef === regionRef));
    }

    return filteredRecs;
  }
}
