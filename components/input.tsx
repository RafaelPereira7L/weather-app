/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import Image from 'next/image'
import ThemeChanger from './themeChanger'
import weatherApi  from '../utils/weatherApi'
import WeatherResponse from '../utils/weatherResponseTypes'
import { useState } from 'react'
import { AxiosResponse } from 'axios'


const Input: NextPage = () => {

  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({} as WeatherResponse);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if(event.key === 'Enter') {
      try {
      const data = await weatherApi(city);
      setWeather(data);
      setCity('');
      setSuccess(true);
    } catch(error) {
      alert('Cidade não encontrada!');
      setSuccess(false);
    }
  }
}

  const textColor = ['text-cyan-500', 'text-green-500', 'text-yellow-500'];
  const setColor = (): string => {
    if(weather.current?.temp_c >= 30) {
      return textColor[2];
    } else if(weather.current?.temp_c >= 20) {
      return textColor[1];
    } else {
      return textColor[0];
    }
  }

  return (
    <>
    <ThemeChanger/>
    <div className="bg-zinc-100 dark:bg-zinc-800 py-8 px-6 rounded-lg shadow-md">
      <input type="search" value={city} onChange={(event) => setCity(event.target.value)} onKeyPress={handleSubmit} className="bg-zinc-300 p-2 focus:outline-none focus:ring focus:ring-cyan-500 ease-out duration-150 text-center text-black font-medium rounded-lg" placeholder='Informe uma cidade'></input>
    </div>
    
    <div className={`shadow-md p-6 mt-4 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-center ${success == true ? 'block' : 'hidden'}`}>
        <h1 className='font-bold text-3xl text-cyan-600'>{weather.location?.name}</h1>
        <h2 className='font-medium text-lg text-gray-400'>{weather.location?.region + ' - ' + weather.location?.country}</h2>
        <h1 className={`font-bold text-4xl ${setColor()}`}>{weather.current?.temp_c} °C</h1>
        <h2 className='font-medium text-sm'>{'Horário atual: ' + weather.location?.localtime.slice(11, 16)}</h2>
        <img src={weather.current?.condition?.icon} alt='condition-icon' className='ml-auto mr-auto'/>
        
        <h2 className='font-medium text-2xl'>{weather.current?.condition?.text}</h2>
        <h2 className='font-medium text-sm'>{'Última atualização: ' + weather.current?.last_updated.slice(11, 16)}</h2>


    </div>

    </>
  )
}

export default Input
