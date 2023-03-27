function solve() {
    let currentStopID = 'depot';
    let currentStopName = 'Depot'
    const BASE_URL = `http://localhost:3030/jsonstore/bus/schedule/`;
    const infoContainer = document.getElementsByClassName('info')[0];

    var departBtn = document.getElementById('depart');
    var arriveBtn = document.getElementById('arrive');

    async function depart() {
        if (currentStopID === 'depot' && currentStopName === 'Depot') {
            infoContainer.textContent = `Next stop ${currentStopName}`
            departBtn.disabled = true;
            arriveBtn.disabled = false;

            const nextStopRes = await fetch(BASE_URL + currentStopID, { method: 'GET' });
            const nextData = await nextStopRes.json();
            let nextStopName = nextData.name;
            let nextStopID = nextData.next;

            currentStopID = nextStopID;
            currentStopName = nextStopName;
        } else {
            try {
                const currentStopRes = await fetch(BASE_URL + currentStopID, { method: 'GET' });
                const currentData = await currentStopRes.json();
                const nextStopRes = await fetch(BASE_URL + currentData.next, { method: 'GET' });
                const nextData = await nextStopRes.json();
                let nextStopName = nextData.name;
                let nextStopID = nextData.next;

                infoContainer.textContent = `Next stop ${nextStopName}`
                departBtn.disabled = true;
                arriveBtn.disabled = false;

                currentStopID = nextStopID;
                currentStopName = nextStopName;
            } catch {
                infoContainer.textContent = 'Error';
                departBtn.disabled = true;
                arriveBtn.disabled = false;
            }
        }
    }



    async function arrive() {
        infoContainer.textContent = `Arriving at ${currentStopName}`;
        departBtn.disabled = false;
        arriveBtn.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();