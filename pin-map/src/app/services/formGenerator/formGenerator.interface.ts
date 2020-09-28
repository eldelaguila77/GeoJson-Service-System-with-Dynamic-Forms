export interface FormGenerator {
    form?: string;
    fieldType: string|null;
    fieldName: string|null;
    fieldPlaceholder: string|null;
    fieldDefaultValue: string|null;
    fieldRequired: boolean|null;
    fieldLabel: string|null;
    geoJson: any;
    optionsDrop?: OptsDrop[];
    optionsRadio?: OptsRadio[];
    optionsCheck?: OptsCheckbox[];
}

export interface Payload {
  fieldName: string;
  value: any;
  geoJson?: FeatureGeoJSON
}

export interface FeatureGeoJSON {
    type: string;
    geometry: {
      type: string;
      coordinates: {lng: number, lat: number, alt?: number}[]
    };
    properties: {
      name: string;
      address: string;
    }
}

export interface OptLocation { title?: string, latitude?: number, longitude?: number, zoom?: number, address?: string, geoPolygon?: FeatureGeoJSON }

export interface OptsDrop {
  label?: string;
  value?: any;
  default?: any;
}

export interface OptsRadio {
  label?: string;
  value?: any;
  default?: any;
  name?: string;
}

export interface OptsCheckbox {
  typeOpt?: string;
  label?: string;
  val?: any;
  preselected?: any;
}
