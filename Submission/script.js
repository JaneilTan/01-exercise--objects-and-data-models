/**
 * PART A
 * Objects
 */

const person = {
  firstName: "Robert",
  lastName: "Pollock",
  birthday: "October 29, 1936",
  email: "RobertKPollock@armyspy.com",
  friends: ["Bob", "Sam"],
};

// Replace null with the firstName and lastName from the person object
// You should access the value using dot notation
// Use a string template literal to combine the names together, with a space in the middle
const personsName = `${person.firstName} ${person.lastName}`;

// Replace null with the second item from the friends array, from the person object. It should result in the value "Sam"
// You should access the value using dot notation, and array indexes
const secondFriend = `${person.friends[1]}`;

// Use this object to look up the correct tax rate from the getTaxRate function
const taxRates = {
  ut: 0.0685,
  nv: 0.08,
  tx: 0.0625,
  al: 0.04,
  ca: 0.0825,
};

const getTaxRate = (stateCode) => {
  // Replace null with the correct state code
  // Use square bracket notation to read from the taxRates object
  // https://www.loom.com/share/4edb4131d48f40e8bb0d527365932e4c
  return taxRates[stateCode];
};

const utTaxRate = getTaxRate("ut");
const nvTaxRate = getTaxRate("nv");

// Create an object containing at least 3 countries, including newZealand
// countries.newZealand.population should be 5000000
// countries.newZealand.cities[0] should be "Auckland"
// You can make up the rest of the countries
const countries = {
  newZealand: {
    population: 5000000,
    cities: ['Auckland', 'Whangarei', 'Wellington']
  },
  canada: {
    population: 38000000,
    cities: ['Vancouver', 'Toronto']
  },
  fiji: {
    population: 924610,
    cities:['Suva','Nadi']
  }
};
/**
 * PART B
 * Data models
 */

// Represent an artist and their albums
// https://www.allmusic.com/artist/prince-mn0000361393/discography
const artist = null;

// Represent a list of news articles
// https://news.ycombinator.com/
const articles = null;

// Represent a cafe menu
// https://www.thequaykitchen.co.nz/menu/main-menu
const menu = null;


// IGNORE! Do not edit the below text - it's used to make the tests run
export {
  personsName,
  secondFriend,
  getTaxRate,
  countries,
  artist,
  articles,
  menu,
};
