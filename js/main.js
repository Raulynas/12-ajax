// import { people } from './components/people.js';
// import { ajax } from './components/ajax.js';
// ajax('GET', url, people);

// import { asyncData } from './components/asyncData.js';
// asyncData('GET', url, people);

import { asyncPeople } from './components/asyncPeople.js';
const url = 'https://raulynas.github.io/12-ajax/api/users.json';

asyncPeople('GET', url);
