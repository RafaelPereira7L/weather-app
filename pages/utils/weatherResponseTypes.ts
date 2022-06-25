export type Location = {
    name: string;
    region: string;
    country: string;
    localtime: string;
  };
  
export type Current = {
    last_updated: string;
    temp_c: number;
    condition: {
      text: string;
      icon: string;
    };
  }
  
export interface WeatherResponse {
    location: Location,
    current: Current,
  }