
const API_URL = '/api/product/';

export async function getProducts() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }

  return response.json();
}
