export default interface Field {
  fieldId: string;
  collectionName: string;
  legacyFieldId?: string;
  units?: string;
  isDerived?: boolean;
  implementation?: any;
  groupName?: string;
  translations: Array<[string, string]>;
}
