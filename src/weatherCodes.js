const weatherCodes = {
    0: 'Clear Sky',
    1: 'Mostly Clear',
    2: 'Partly Cloudy',
    3: 'Cloudy',
    45: 'Fog',
    48: 'Fog',
    51: 'Drizzle',
    53: 'Drizzle',
    55: 'Drizzle',
    56: 'Drizzle',
    57: 'Drizzle',
    61: 'Light Rain',
    63: 'Light Rain',
    65: 'Heavy Rain',
    66: 'Light Rain',
    67: 'Heavy Rain',
    71: 'Light Snow',
    73: 'Light Snow',
    75: 'Light Snow',
    77: 'Light Snow',
    80: 'Light Rain',
    81: 'Light Rain',
    82: 'Heavy Rain',
    85: 'Light Snow Showers',
    86: 'Light Snow Showers',
};

const findMatch = (value) =>{
    for(const code in weatherCodes) {
        if(parseInt(code) === value){
            console.log("value found", weatherCodes[code]);

            return weatherCodes[code];
        }
    }

}

export{weatherCodes, findMatch}