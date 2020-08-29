import IRec from './rec-interface';

export default interface IScalarRec extends IRec {
  scalarId: string,
  value: null | number,
  currency: string,
  year: string,
}
