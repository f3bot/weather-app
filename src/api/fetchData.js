import { changeLastTwoCharacters } from "../changeChar";

async function fetchGeolocation(input){
    const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${input}&count=1&language=en&format=json`, {mode : 'cors'});
    const data = await response.json();

    if(data.results == undefined){
        console.log("Location not found")
        return;
    }

    //console.log(data);

    let latitude, longitude, country_code, country, cityName;

    latitude = data.results[0].latitude;
    longitude = data.results[0].longitude;
    country_code = data.results[0].country_code;
    country = data.results[0].country;
    cityName = data.results[0].name;

    let staticData = [latitude, longitude, country, country_code, cityName];

    //console.log(staticData);

    return staticData
}

async function fetchDailyData(input) {
    try{
        let dataArray = await fetchGeolocation(input);
    
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${dataArray[0]}&longitude=${dataArray[1]}&hourly=relativehumidity_2m,apparent_temperature,precipitation_probability,windspeed_10m&current_weather=true&timezone=auto&forecast_days=1`, { mode: "cors" });
        const data = await response.json();
    
        console.log(data);

        dataArray = dataArray.slice(3);



        const currentWeatherTime = data.current_weather.time;

        let currentWeatherTime_ = changeLastTwoCharacters(currentWeatherTime, '00')
        const hourIndex = data.hourly.time.indexOf(currentWeatherTime_);
    
        if (hourIndex === -1) {
          console.log('Current time not found in hourly data');
        }
    
        let responseData = {
            "temperature": data.current_weather.temperature,
            "time": data.current_weather.time,
            "weathercode": data.current_weather.weathercode,
            "apparent_temperature": data.hourly.apparent_temperature[hourIndex],
            "precipitation_probability": data.hourly.precipitation_probability[hourIndex],
            "relativehumidity_2m": data.hourly.relativehumidity_2m[hourIndex],
            "windspeed_10m": data.hourly.windspeed_10m[hourIndex]
        };
    
        let relevantData = { ...dataArray, ...responseData };

        return relevantData
    }catch(error){
        console.log("Error - Location Not Found");
        return false;
    }

}

export {fetchGeolocation, fetchDailyData}