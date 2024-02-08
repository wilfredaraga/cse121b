/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: 'Wilfred Eiron Araga',
    photo: 'images/placeholder.png',
    favoritesFoods: ['Apple', 'Orange', 'Grapes', 'Banana'],
    hobbies: ['Playing basketball', 'Playing guitar', 'Watching movies'],
    placesLived: [],
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push({
    place: 'Noveleta, Cavite',
    length: '16 years'
});

myProfile.placesLived.push({
    place: 'Silang, Cavite',
    length: '7 years'
});

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').setAttribute ("src", myProfile.photo);
document.querySelector('#photo').setAttribute ("alt", myProfile.name);

/* Favorite Foods List*/
myProfile.favoritesFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(placeObject => {
    let placeList = document.createElement('dt');
    placeList.innerHTML = placeObject.place;
    let lenghtList = document.createElement('dd');
    lenghtList.innerHTML = placeObject.length;
    document.querySelector('#places-lived').appendChild(placeList);
    document.querySelector('#places-lived').appendChild(lenghtList);
});