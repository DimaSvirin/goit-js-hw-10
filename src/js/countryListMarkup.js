export function createCountryListMarkup(countries) {
    return countries
      .map(
        country => `
        <li class="country-list__item">
          <img src="${country.flags.svg}" alt="${country.flags.alt}" width="50">
          <span>${country.name.official}</span> 
        </li>
      `
      )
      .join('');
  }