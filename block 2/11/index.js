const carYear = 2010
const personYear = 1990

var calcAge = function (limit){
	return 2019 - limit
}

function checkAndLogAge(age, entity, limit){
	// debugger;
	if  ( calcAge(limit) < age) {
		console.log('Сущность: \''+ entity +'\'| Возраст меньше '+ limit +' лет')
	} else {
		console.log('Сущность: \''+ entity +'\'| Возраст больше '+ limit +' лет')
	}
	return false
}

checkAndLogAge(carYear, 'Машина', 8)
checkAndLogAge(personYear, "Человек", 30)

