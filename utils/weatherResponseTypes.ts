type Location = {
    name: string;
    region: string;
    country: string;
    localtime: string;
  };
  
  type Current = {
    last_updated: string;
    temp_c: number;
    condition: {
      text: string;
      icon: string;
    };
  };
  
export default interface WeatherResponse {
    location: Location,
    current: Current,
  };
  