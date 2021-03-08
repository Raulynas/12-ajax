import { ajax } from './components/ajax.js';
import { people } from './components/people.js';

const url = 'https://raulynas.github.io/12-ajax/api/users.json';
ajax('GET', url, people);
