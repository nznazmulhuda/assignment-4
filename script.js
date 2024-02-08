// Problem 1

function calculateMoney(ticketSale) {
	const ticketPrice = 120;
	const janitorPrice = 500;
	const staffNum = 8;
	const staffPrice = 50;
	let dailyProfit = 0;

	if (ticketSale >= 0) {
		dailyProfit =
			ticketSale * ticketPrice - (janitorPrice + staffNum * staffPrice);

		return dailyProfit;
	} else {
		return "Please enter a correct number.";
	}
}

const ticket = 10;
console.log(calculateMoney(ticket));

// Problem 2

function checkName(name) {
	if (typeof name == "string") {
		const nameChr = name.split("");
		const nameLastChr = nameChr[name.length - 1];

		if (
			nameLastChr === "a" ||
			nameLastChr === "e" ||
			nameLastChr === "i" ||
			nameLastChr === "o" ||
			nameLastChr === "u" ||
			nameLastChr === "w" ||
			nameLastChr === "y" ||
			nameLastChr === "A" ||
			nameLastChr === "E" ||
			nameLastChr === "I" ||
			nameLastChr === "O" ||
			nameLastChr === "U" ||
			nameLastChr === "Y" ||
			nameLastChr === "W"
		) {
			return "Good Name";
		} else {
			return "Bad Name";
		}
	}
	return "Invalid Name";
}

console.log(checkName("hasib"));
console.log(checkName("nahid"));
console.log(checkName("SABBIR"));
console.log(checkName("Jidne"));
console.log(checkName("Sanjida"));
console.log(checkName("JIDDU"));

// Problem 3

function deleteInvalids(array) {
	if (Array.isArray(array)) {
		let newArray = [];
		for (const element of array) {
			if (typeof element == "number" && !isNaN(element)) {
				newArray.push(element);
			}
		}
		return newArray;
	}
	return "Invalid Array.";
}

const array = [12, "14", NaN, { name: "nahid" }, 123, true];
console.log(deleteInvalids(array));

// Problem 4

function password(obj) {
	if (
		Object.keys(obj).includes("name") &&
		Object.keys(obj).includes("birthYear") &&
		Object.keys(obj).includes("siteName") &&
		obj.birthYear >= 1000 &&
		obj.birthYear <= 9999
	) {
		// site name first letter capitalize
		const oldSiteName = obj.siteName;
		const siteNameChr = oldSiteName.split("");
		const siteNameFirstChr = siteNameChr[0].toUpperCase();
		siteNameChr.shift();
		siteNameChr.unshift(siteNameFirstChr);

		const siteName = siteNameChr.join("");
		const name = obj.name;
		const birthYear = obj.birthYear;

		const password = `${siteName}#${name}@${birthYear}`;

		return password;
	} else {
		return "invalid";
	}
}

const ocject = { name: "Nazmul", birthYear: 2002, siteName: "programminghero" };
console.log(password(ocject));

// problem 5

function monthlySavings(arr, livingCost) {
	if (Array.isArray(arr) && typeof livingCost == "number") {
		let income = 0;

		for (const money of arr) {
			if (money >= 3000) {
				const moneyTax = money - money * (20 / 100);
				income += moneyTax;
			} else {
				income += money;
			}
		}

		const saving = income - livingCost;
		if (saving >= 0) {
			return saving;
		} else {
			return "earn more";
		}
	} else {
		return "invalid input";
	}
}

const arry = [5000, 3000, 2000];
const loos = 6000 + 2000;
console.log(monthlySavings(arry, loos));
