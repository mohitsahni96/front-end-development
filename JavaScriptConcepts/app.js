const companies= [
  {name: "Company One", category: "Finance", start: 1981, end: 2004},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//Loop
for(let i=0; i<companies.length;i++) {
    console.log(companies[i].name);
    console.log(companies[i].category);
    console.log(companies[i].start);
    console.log(companies[i].end);
    console.log(companies[i]);
}
//forEach loop :- shorthand method
companies.forEach(company => console.log(company.name));
companies.forEach(company => console.log(company.category));


//Filter method  using for loop
let canD = [];
for(let i=0;i<ages.length;i++){
    if(ages[i] >21){
        canD.push(ages[i]);
    }
}
console.log(canD);
//Filter method using arrow function short hand way
const canDrink = ages.filter( age => age > 21);
console.log(canDrink);
//filter companies categories
const technology = companies.filter((company) => {
if(company.category === 'Technology'){
    return true;
}
});
console.log(technology);
//or another way
const tech = companies.filter(company =>   company.category === 'Technology');
console.log(tech);

//map 

//create array of company names 
const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
console.log(testMap);
const agesSquare = ages.map(age => Math.sqrt(age));
console.log(agesSquare);
const ageTwice = ages.map(age => age * 2);
console.log(ageTwice);
//putting two map function together
const addMap = ages
.map(age => Math.sqrt(age))
.map(age => age * 2)
.map(age => age / 2);
console.log(addMap);

//sort function
const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
console.log(sortedCompanies);
//ages sort
// const agesSort = ages.sort((a,b) => a - b); //ascending
const agesSort = ages.sort((a,b) => b - a); //descending
console.log(agesSort);

//Reduce function
const ageSum = ages.reduce((total,age) => total + age, 0);
console.log(ageSum);
const totalYears = companies.reduce((total, company) => total + (company.start - company.end),0);
console.log(totalYears);

//combined method 
const combined = ages 
.map(age => age * 2)
.filter(age => age >60)
.sort((a,b) => a - b)
.reduce((a,b) => a + b, 0);

console.log(combined);