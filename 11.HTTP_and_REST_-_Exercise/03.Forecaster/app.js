async function attachEvents() {
    const getLocationBtn = document.getElementById('submit');
    getLocationBtn.addEventListener('click', confirmLocation);

    const forecastDiv = document.getElementById('forecast');

    conditionSymbols = {
        'Sunny': String('\u2600'),
        'Partly sunny': String('\u26C5'),
        'Overcast': String('\u2601'),
        'Rain': String('\u2614'),
    }

    async function confirmLocation() {
        const requestedLocation = document.getElementById('location').value;
        BASE_URL_LOCATIONS = 'http://localhost:3030/jsonstore/forecaster/locations';
        let searchedLocationCode = '';

        try {
            const locationsResponse = await fetch(BASE_URL_LOCATIONS, { method: 'GET' });
            const locationData = await locationsResponse.json();

            for (const location of locationData) {
                if (location.name === requestedLocation) {
                    searchedLocationCode = location.code;
                    break;
                }
            }

            // Today forecast

            const BASE_URL_CURRENT_CONDITIONS = `http://localhost:3030/jsonstore/forecaster/today/${searchedLocationCode}`;

            const currentConditionsResponse = await fetch(BASE_URL_CURRENT_CONDITIONS, { method: 'GET' });
            const dataCurrentConditions = await currentConditionsResponse.json();

            let locationName = dataCurrentConditions.name;
            let lowestTemp = dataCurrentConditions.forecast.low;
            let highestTemp = dataCurrentConditions.forecast.high;
            let condition = dataCurrentConditions.forecast.condition;

            // Creating elements with fetched data for today forecast

            forecastDiv.style.display = 'block';
            let current = document.getElementById('current');

            let divForecasts = createElement('div', '', current, '', ['forecasts',]);
            createElement('span', conditionSymbols[condition], divForecasts, '', ['condition', 'symbol']);
            let spanCondition = createElement('span', '', divForecasts, '', ['condition',]);
            createElement('span', locationName, spanCondition, '', ['forecast-data',]);
            let degreesRange = `${lowestTemp}${String.fromCharCode(176)}/${highestTemp}${String.fromCharCode(176)}`;
            createElement('span', degreesRange, spanCondition, '', ['forecast-data',]);
            createElement('span', condition, spanCondition, '', ['forecast-data',]);

            // Fetching data for upcoming 3 days forecast

            const BASE_URL_UPCOMING_CONDITIONS = `http://localhost:3030/jsonstore/forecaster/upcoming/${searchedLocationCode}`;

            const upcomingConditionsResponse = await fetch(BASE_URL_UPCOMING_CONDITIONS, { method: 'GET' });
            const dataUpcomingConditions = await upcomingConditionsResponse.json();

            let nextThreeDays = dataUpcomingConditions.forecast;

            // Upcoming 3 days forecast element creation
            let upcoming = document.getElementById('upcoming');
            let divForecastInfo = createElement('div', '', upcoming, '', ['forecast-info',]);

            nextThreeDays.forEach((day) => {
                let cond = day.condition;
                let high = day.high;
                let low = day.low;
                let tempString = `${low}${String.fromCharCode(176)}/${high}${String.fromCharCode(176)}`;

                let spanUpcoming = createElement('span', '', divForecastInfo, '', ['upcoming',]);
                createElement('span', conditionSymbols[cond], spanUpcoming, '', ['symbol',]);
                createElement('span', tempString, spanUpcoming, '', ['forecast-data',]);
                createElement('span', cond, spanUpcoming, '', ['forecast-data',]);
            });

        } catch {
            const forecastDiv = document.getElementById('current');
            let span = document.createElement('span');
            span.textContent = 'Error';
            forecastDiv.style.display = 'block';
            forecastDiv.appendChild(span);
        }
    }

    function createElement(type, content, parentNode, id, classes, attributes) {
        const htmlElement = document.createElement(type);

        if (content && type !== 'input') {
            htmlElement.textContent = content;
        }

        if (content && type === 'input') {
            htmlElement.value = content;
        }

        if (id) {
            htmlElement.id = id;
        }

        if (classes) {
            htmlElement.classList.add(...classes);
        }

        if (parentNode) {
            parentNode.appendChild(htmlElement);
        }

        if (attributes) {
            for (const key in attributes) {
                htmlElement.setAttribute(key, attributes[key]);
            }
        }

        return htmlElement;
    }

}

attachEvents();