import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import { fetchCountries } from './js/fetchCountries';
import { createCountryListMarkup } from './js/countryListMarkup';
import { createCountryInfoMarkup } from './js/countryInfoMarkup';

const DEBOUNCE_DELAY = 300;

const searchBoxEl = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

searchBoxEl.addEventListener(
  'input',
  debounce(handleSearchInput, DEBOUNCE_DELAY)
);

function handleSearchInput() {
  const searchCountry = searchBoxEl.value.trim();
  clearFields();

  fetchCountries(searchCountry)
    .then(data => {
      if (data.length > 10) {
        Notiflix.Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
        return;
      }

      if (data.length >= 2) {
        const countryListMarkup = createCountryListMarkup(data);
        countryList.insertAdjacentHTML('beforeend', countryListMarkup);
        return;
      }

      if (data.length === 1) {
        const countryInfoMarkup = createCountryInfoMarkup(data[0]);
        countryList.insertAdjacentHTML('beforeend', countryInfoMarkup);
        return;
      }
    })
    .catch(error => {
      Notiflix.Notify.failure('Oops, there is no country with that name');
      clearFields();
    });
}

function clearFields() {
  countryList.innerHTML = '';
  countryInfo.innerHTML = '';
}
