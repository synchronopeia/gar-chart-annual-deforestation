import IJurisdiction from './jurisdiction-interface';

export default interface Nation {
  regionId: string,
  regionType: string,
  legacyRegionId: string;
  name: string;
  lang: string;
  currency: string;
  navColumn: number;
  subunitDesignation: string;
  mapCoordinates: [number, number];
  mapCenter: [number, number];
  mapZoom: number;
  jurisdictions: Array<IJurisdiction>;
};
