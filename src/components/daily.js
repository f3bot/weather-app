import { fetchDailyData } from "../api/fetchData";
import { renderDailyData } from "../render/renderDailyData";


const generateTodayContent = (parent) =>{
    const container = document.createElement('div');
    container.classList.add('today-forecast');

    generateLeft(container);
    generateRight(container);

    parent.appendChild(container);
}

const generateLeft = (parent) =>{
    const leftContainer = document.createElement('div');
    leftContainer.classList.add('today-forecast-left')

    const weather_code_span = document.createElement('span');
    weather_code_span.classList.add('weather-code-span');
    weather_code_span.textContent = 'Broken Clouds'

    const city = document.createElement('span');
    city.classList.add('city-span');
    city.textContent = 'Poznan'

    const dateTimeDiv = document.createElement('div');
    dateTimeDiv.classList.add('date-time-div');

    const date = document.createElement('span');
    date.classList.add('date-span');

    date.textContent = 'Tuesday, 19th Sep 23'

    const time = document.createElement('span')
    time.classList.add('time-span');

    time.textContent = '10:56';

    dateTimeDiv.appendChild(date);
    dateTimeDiv.appendChild(time);

    const temperature = document.createElement('span');
    temperature.classList.add('today-temperature');

    temperature.textContent = '12 *C'

    const weather_code_icon = document.createElement('img');
    weather_code_icon.classList.add('weather-code-icon');

    weather_code_icon.src = '../src/assets/codeIcons/ClearSky.svg'

    const inputDiv = document.createElement('div');
    inputDiv.classList.add("input-div");


    const input = document.createElement('input');
    input.type = 'text'
    input.placeholder = 'Search Location...'

    addInputListener(input);
    inputDiv.appendChild(input);

    leftContainer.appendChild(weather_code_span);
    leftContainer.appendChild(city);
    leftContainer.appendChild(dateTimeDiv);
    leftContainer.appendChild(temperature);
    leftContainer.appendChild(weather_code_icon);
    leftContainer.appendChild(inputDiv);

    parent.appendChild(leftContainer);

}   

const generateRight = (parent) =>{
    const parentContainer = document.createElement('div');
    parentContainer.classList.add('today-forecast-right');

    const text = ['Feels like', 'Humidity', 'Chance of Rain', 'Wind Speed'];
    const icons = ['../src/assets/right/feelslike.svg', '../src/assets/right/moisture.svg', '../src/assets/right/rain.svg', '../src/assets/right/WIND.svg'];
    const testValues = ['12 *C', '73%', '0%', '12km/h'];
    const classLists = ['today-apparent', 'today-humidity', 'today-rain', 'today-wind']

    for(let i = 0; i < text.length; i++){
        const container = document.createElement('div');
        container.classList.add('today-right-container');

        const ico = document.createElement('img');
        ico.src = icons[i];

        const leftDiv = document.createElement('div');
        const title = document.createElement('p');

        title.textContent = text[i];
        const value = document.createElement('span')
        value.classList.add(classLists[i]);

        value.textContent = testValues[i];
 
        
        leftDiv.appendChild(title);
        leftDiv.appendChild(value);

        container.appendChild(ico);
        container.appendChild(leftDiv);

        parentContainer.appendChild(container);
    }

    parent.appendChild(parentContainer);
}

const addInputListener = (item) =>{
    item.addEventListener('keypress', (e) =>{
        if(e.key == 'Enter'){
            if(item.value != ''){
                renderDailyData(item.value);
                //Render7DayData

                item.value = '';
            }else{console.log("empty throw error here")}
        }
    })
}

export { generateTodayContent }