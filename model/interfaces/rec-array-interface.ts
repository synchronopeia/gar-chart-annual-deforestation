import IRec from './rec-interface';

export default interface IArrayRec extends IRec {
  arrayId: string;
  rows: [string, number | null][];
}
