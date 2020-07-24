import { environment } from '../../environments/environment';

export const baseUrl = environment.production ? 'http://api.cart.com/' : 'http://localhost:3000';
export const productsUrl = baseUrl + '/products';
export const cart = baseUrl + '/cart';
