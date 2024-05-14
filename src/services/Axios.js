import axios from "axios"

const base = 'http://medclinic-422605.uc.r.appspot.com/';
const request = axios.create({
  baseURL: base,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export {request}