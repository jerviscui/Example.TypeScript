let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
let search = { food: "rich", ...defaults };
let search2 = {...defaults, food: "rich"};

console.log(search);

console.log(search2);