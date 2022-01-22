import Axios from 'axios';

export const rootUrl = 'http://localhost:3000/minhas-reservas';

export const Http = Axios.create({
  baseUrl: rootUrl,
})