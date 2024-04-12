//1.დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს ერთ მთელ რიცხვს და დააბრუნებს true -ს თუ რიცხვი არის ლუწი ან false -ს თუ რიცხვი არის კენტი.

function isEven(number) {
	return number % 2 === 0;
}
console.log(isEven(8));
console.log(isEven(9));

//2.დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს ორ რიცხვს - მართკუთხედის გვერდების ზომებს და დააბრუნებს მართკუთხედის ფართობს.

function rectangleArea(width, height) {
	return width * height;
}
const area = rectangleArea(4, 5);
console.log(area);

//3.დაწერეთ ფუქცია, რომელიც პარამეტრად მიიღებს ერთ რიცხვს - კვადრატის გვერდის სიგრძეს და დააბრუნებს კვადრატის ფართობს. ფართობის გამოსათვლელად გამოიყენეთ #2 პუნქტში აღწერილი ფუნქცია.

function squareArea(side) {
	return rectangleArea(side, side)
}
const iarea = squareArea(5);
console.log(iarea);

//4.დაწერეთ ფუნქცია, რომელიც Math.random() ფუნქციის გამოყენებით დააგენერირებს და დააბრუნებს 0-დან 100-მდე შემთხვევით რიცხვს.

function getRandomNumber() {
	return Math.floor(Math.random() * 101);
}
const randomNumber = getRandomNumber();
console.log(randomNumber)

//5.ლექციაზე დაწერილ რეპოზიტორში მოცემულია ფაილი characters.js სადაც გვაქვს პერსონაჟების მასივი (characters). გადააკოპირეთ ეს მასივი თქვენთან და შემდეგ შექმენით ფუნქცია,  რომელიც პარამეტრად მიიღებს ამ მასივს და დააბრუნებს იმ ელემენტებს(ობიექტებს), რომელთა alternate_names მასივის მნიშვნელობაც არის ცარიელი

function getEmptyAlternateNames(characters) {
    return characters.filter(character => character.alternate_names.length === 0);
}

console.log(getEmptyAlternateNames(characters));
