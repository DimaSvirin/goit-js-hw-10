export function createCountryInfoMarkup({
    name,
    capital,
    population,
    flags,
    languages,
  }) {
    return `
        <div class="info__header">
            <img src="${flags.png}" alt="${flags.alt}" class="info__img" />
            <h2 class="info__name">${name.official}</h2>
        </div>
        <ul class="info__list">
        <li class="info__item">
            <h3 class="item__key">Capital:</h3>
            <span class="item__value">${capital}</span>
        </li>
        <li class="info__item">
            <h3 class="item__key">Population:</h3>
            <span class="item__value">${population.toLocaleString()}</span>
        </li>
        <li class="info__item">
            <h3 class="item__key">Languages:</h3>
            <ul class="list__languages">
                ${renderLanguages(languages)}
            </ul> 
        </li>
        </ul>
        `;
  }
  
  function renderLanguages(languages) {
    return Object.values(languages)
      .map(lang => `<li class="languages__item">${lang}</li>`)
      .join(' ');
  }