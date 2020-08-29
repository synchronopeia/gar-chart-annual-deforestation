import IRecArray from './rec-array-interface';
import IRecScalar from './rec-scalar-interface';
import IRecSource from './rec-source-interface';

import IRegion from './region-interface';
import IField from './field-interface';

interface IData extends IRecArray, IRecScalar {
  id: string;
  regionDef: IRegion;
  fieldDef: IField;
  sourceRecs: IRecSource[];
}

export default IData;
