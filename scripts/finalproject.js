let meaning = document.querySelector('#meaning');
let data = [];

const getMeaning = async () => {
    let word = String(document.querySelector('#word').value);
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    const response = await fetch(url);
    if (response.ok) {
        data = await response.json();
        displayMeaning(data);
        reduceSynonyms(data);
    }
}
const displayMeaning = (means) => {
    const article = document.createElement('article');
    means.forEach(meaning => {
        article.appendChild(`
        <h3>${meaning.word}</h3>
        <h4>${meaning.phonetic}</h4}`);
    });
    means.meanings.defitions.forEach(define => {
        article.appendChild(`<li>${define.defition}</li>`);
    });
    meaning.appendChild(article);
}

const getData = async () => {
    let word = String(document.querySelector('#word').value);
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    const response = await fetch(url);
    if (response.ok) {
        data = await response.json();
        return data;
    }
}

const reduceSynonyms = (meaning) => {
    let synonyms = meaning.meanings.defitions.reduce((addedsynonyms, synonym) => addedsynonyms + synonym);
    let p = document.createElement('p');
    p.textContent = synonyms;
    let article = document.querySelector('article');
    article.appendChild(p);

}
document.querySelector('#search').addEventListener('click', () => {getMeaning()});
console.log(data)