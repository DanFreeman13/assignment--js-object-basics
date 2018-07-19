/**
 * makeFullNamesList()
 *
 * Write a function called `makeFullNamesList` that takes an array
 * of objects with first and last names properties and returns
 * an array of strings, where each string is a full title + first & last
 * name.
 *
**/


// ++ YOUR CODE HERE

function makeFullNamesList (arrainput) {

	var namesList = [];
	var fullName = "";

	for (var i = 0; i<arrainput.length; i++) {

		var obj = arrainput[i];
		var title ="";

		if (obj.gender === "male") {
			title = "Mr."
		} else {
			title = "Ms."
		}

		fullName = title + " " + obj.first + " " + obj.last;
		namesList.push(fullName);

	}

	return namesList;
}

// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*

console.group('ex-05');
  console.log('%cFunction: makeFullNamesList', 'background-color: green; color: white')
console.groupEnd();

var customersList = [
    { first: 'Joe', last: 'Blogs', gender: 'male'},
    { first: 'Kate', last: 'Smith', gender: 'female'},
    { first: 'Dave', last: 'Jones', gender: 'male'},
    { first: 'Jacky', last: 'White', gender: 'female'}
]

var moreCustomersList = [
	{ first: 'Ruby', last: 'Scooby', gender: 'female'},
	{ first: 'Jen', last: 'Vin', gender: 'female'},
	{ first: 'Dan', last: 'Theman', gender: 'male'},
]


var fullNamesList1 = makeFullNamesList(customersList)
var moreNamesList = makeFullNamesList(moreCustomersList)


/* ----------------------- TEST-1  ----------------------- */
// Function returns an array of strings
/* ------------------------------------------------------ */
console.log('TEST-1');

console.assert(Array.isArray(fullNamesList1) === true)
console.assert(typeof fullNamesList1[0] === 'string')

console.assert(Array.isArray(moreNamesList) === true)
console.assert(typeof moreNamesList[1] === 'string')


//* ----------------------- TEST-2  ----------------------- */
// Each string element in returned array is formatted
//    '«Gender-Title» «First-Name» «Last-Name»'
/* ------------------------------------------------------ */
console.log('TEST-2');

console.assert(fullNamesList1.indexOf("Mr. Joe Blogs") >= 0)
console.assert(fullNamesList1.indexOf("Ms. Kate Smith") >= 0)
console.assert(fullNamesList1.indexOf("Ms. Jacky White") >= 0)


console.assert(moreNamesList.indexOf("Ms. Ruby Scooby") >= 0 )
console.assert(moreNamesList.indexOf("Mr. Dan Theman") >= 0 )
