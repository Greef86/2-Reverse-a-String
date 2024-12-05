
//PROBLEM1: reverse a string

const reverseString = (string) => {
	const newArr = string.split("")
	const reversedArr = []
	for(let i = newArr.length - 1; i >= 0; i--){
		reversedArr.push(newArr[i])
	}
	return reversedArr.join("")
}

console.log(reverseString("Mooketsi Greef"))
console.log(reverseString("abcde"))