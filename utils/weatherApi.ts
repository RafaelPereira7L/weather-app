import axios from 'axios'

const URL_API: string = 'http://api.weatherapi.com/v1/current.json';
const API_KEY: string = '2593f8ee9faf4ad9893224736222406';

const weatherApi = async (city: string) => {
    const { data } = await axios.get(URL_API, {
        params: {
            key: API_KEY,
            q: city,
            lang: 'pt',
        }
    }); 
    return data;
}

export default weatherApi;
