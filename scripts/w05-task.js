/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector('#temples');
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
        let article = document.createElement('article');
        let h3 = document.createElement('h3');
        h3.innerHTML = temple.templeName;
        let image = document.createElement('img');
        image.setAttribute ("src", temple.imageUrl);
        image.setAttribute ("alt", temple.location);
        article.appendChild(h3);
        article.appendChild(image);
        templesElement.appendChild(article);
    })
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');
    templeList = await response.json();
    displayTemples (templeList);
}

/* reset Function */
const reset = function () {
    while (templesElement.firstChild) {
        templesElement.removeChild(templesElement.firstChild);
    }
}

/* filterTemples Function */
const filterTemples = (temples) => {
    reset();
    let filter = document.getElementById('filtered').value;
    let utah = 'Utah';
    switch (filter) {
        case 'utah':
            let inUtah = temples.filter((temple) => temple.location.toLowerCase().includes(utah.toLowerCase()));
            displayTemples(inUtah);
            break;
        case 'notutah' :
            let notUtah = temples.filter((temple) => !temple.location.toLowerCase().includes(utah.toLowerCase()));
            displayTemples(notUtah);
            break;
        case 'older' :
            let older = temples.filter((temple) => new Date (temple.dedicated) < new Date(1950, 0, 1));
            displayTemples(older);
            break;
        case 'all' :
            displayTemples(temples);
            break;
    }

}

const fillTempleList = async () => {
    const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');
    templeList = await response.json();
    return templeList;
}

templeList = fillTempleList();

/* Event Listener */
document.getElementById('filtered').addEventListener('change', () => {filterTemples(templeList)});

getTemples();