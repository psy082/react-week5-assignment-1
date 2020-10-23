import axios from 'axios';

export async function fetchRegions() {
  const url = 'https://eatgo-customer-api.ahastudio.com/regions';
  const response = await axios.get(url);
  return response.data;
}

export async function fetchCategories() {
  const url = 'https://eatgo-customer-api.ahastudio.com/categories';
  const response = await axios.get(url);
  return response.data;
}

export async function fetchRestaurants() {
  return [];
}
