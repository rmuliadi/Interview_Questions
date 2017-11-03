// Fix the function to change the output 'hey rizky' into 'hey Arya'

// Problem
/*Function greet(person) {
  		if (person == { name: 'Arya' }) {
    			return 'hey Arya'
  		} else {
    			return 'hey Rizky'
  		}
	}
	greet({ name: 'Arya' })
*/
// One way to solve this is by removing the name and just input person as arya without the name.
function greet(person) {
  		if (person == 'Arya' ) {
    			return 'hey Arya'
  		} else {
    			return 'hey Rizky'
  		}
	}
	console.log(greet('Arya'));

