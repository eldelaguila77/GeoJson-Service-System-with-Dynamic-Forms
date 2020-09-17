export interface FormGenerator {
    fieldType: string|null;
    fieldName: string|null;
    fieldPlaceholder: string|null;
    fieldDefaultValue: string|null;
    fieldRequired: boolean|null;
    fieldLabel: string|null,
    geoJson: featureGeoJSON
}

export interface featureGeoJSON {
    type: string;
    geometry: {
      type: string;
      coordinates: [
        [{lng: number, lat: number, alt: number}]
      ]
    };
    properties: {
      name: string;
      address: string;
    }
}
