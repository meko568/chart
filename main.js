
// window.alert("hellow from js file");
// document.write("<h1>hellow <span>page</span></h1>");
// console.log( "%celzero %cweb %cschool" , "color:red; font-size:40px" , "color:green; font-size:40px" , "color:white; font-size:40px; background-color:blue;" )
// console.group("group one");
// console.group("first child")
// console.log("message one");
// console.log("message two");
// console.groupEnd("first child");
// console.group("last child");
// console.log("massage one")
// console.log("massage two")
// console.groupEnd();
// console.groupEnd();
// console.group("group two")
// console.group();
// console.log("Hello again, this time inside a group!");
// console.groupEnd();
// console.table(["elzero" , "ahmed" , "sameh" , "aya"])
// console.log(typeof "mohammed")string;
// console.log(typeof 19)number;
// console.log(typeof [1 , 2 , "mohammed"])array
// console.log(typeof true)boolean
// console.log(typeof {age: 17 , name:"mohammed"})object
// console.log(typeof undefined)undefined;s
// console.log(typeof null)null;
// var user = "meko";
// console.log(user);
// console.log(hellow);
// let a = "we love"
// let b = "javascript";
// let card = `<div>
// <p>${user}</p>
// </div>`;
// document.write(card);
// console.log(`${a}\n${b}`);
// let date = "25/10" , description = "Elzero Web School" , title = "Elzero";
// let the_card = `
// <div>
// <h3> Hellow ${title}</h3>
// <p>${description}</P>
// <span>${date}</span>
// </div>`;
// document.write(the_card.repeat(4));
// console.log(`${a}
//     ${b}`);
// let num = 3;
// console.log(num++);
// console.log(num);
// console.log(++num);
// console.log(10 - "meko"); //nan
// console.log(10 % 2);
// let num = 1;
// --num;
// console.log(num);
// console.log(-"100");
// console.log(number("2"));
// console.log(true + false);
// a -= 10;
// console.log(a);
// let a = 10;
// let b = "20";
// let c = 80;
// console.log(++a + b++ + c++ - +a++);
// console.log(11 + 20 + 80 - 11);
// console.log(++a + -b + +c++ - a++ + +a);
// console.log(13 + -21 + 81 - 13 + 14);
// console.log(--c + +b + --a * +b++ - +b * a + --a - +true);
// console.log(81 + 21 + 13 * 21 - 22 * 13 + 12 - 1);
// let d = "-100";
// let e = "20";
// let f = 30;
// let g = true;
// console.log(-d * e);
// console.log(-d + ++e * 2 + f + g);
// console.log(1e6);
// console.log(1_000_000);
// console.log(100 ** 200);
// Number.MAX_SAFE_INTEGER;
// Number.MAX_VALUE
// console.log(parseFloat((100.5222).toFixed(3)));
// console.log((100.3).toString());
// console.log(parseFloat("100.3"));
// console.log(Number.isInteger(100)); //not 100.5 not "100"
// console.log(Number.isNaN("osama" - 30));
// let num = Math.random(12);
// console.log(num);
// console.log(Math.round(11.452));
// console.log(Math.floor(11.452));
// console.log(Math.ceil(11.452));
// console.log(Math.min(10, -10));
// console.log(Math.max(10, -10));
// console.log(Math.pow(2, 4));
// console.log(Math.trunc(100.99483948392));
// let a = 1_00;
// let b = 2_00.5;
// let c = 1e2;
// let d = 2.4;
// console.log(parseInt(Math.min(a, b, c, d)));
// console.log(parseInt(b / 2) * a);
// console.log(parseInt(d));
// console.log(Math.round(d));
// console.log(Math.floor(d));
// console.log(Math.trunc(d));
// console.log(d.toFixed(0));
// console.log((b / 2 - d * 13.99).toFixed(2).toString());
// console.log(Math.ceil((b / 2 - d * 13.99).toFixed(2)));
// let user = "meko";
// console.log(user[2]);
// console.log(user.charAt(0));
// console.log(user.length);
// console.log(user.trim());
// console.log(user.trim().charAt(2).toLocaleUpperCase());
// user = user.trim();
// console.log(user);
// console.log(user.toLocaleUpperCase());
// console.log(user.repeat(3));
// console.log(a.(" ", 1));
// console.log(a.indexOf("ahmed", 10));
// console.log(a.lastIndexOf("e"));
// console.log(a.slice(9, 16));
// let b = a.length;
// console.log(b);
// let c = a.split(" ", 2).toString().length;
// let d = a.substring(0, c);
// let f = `<h4 class="user-name">${d}</h4>`;
// document.write(f);
// console.log(a.substring(a.length - 3));
// console.log(a.slice(-2));
// console.log(a.substring(6, 2));
// console.log(a.slice(2, 6));
// console.log(a.lastIndexOf("m"));
// console.log(a.substr(-3, 2));
// console.log(a.includes("mohammed", 1));
// console.log(a.startsWith("mohammed"));
// console.log(a.endsWith("e", --a.length));
// let a = "Elzero Web School";
// console.log(a.charAt(2).toUpperCase() + a.slice(3, 6));
// console.log(a.charAt(13).toUpperCase().repeat(8));
// console.log(a.split(" ", 1));
// console.log(a.substr(0, 6) + a.substr(10));
// console.log(
//   a.charAt(0).toLowerCase() +
//     a.slice(1, --a.length).toUpperCase() +
//     a.charAt(--a.length).toLowerCase()
// );

// console.log("osama" == "osama");
// console.log("10" == 10);
// console.log(!(10 === "10"));
// console.log(10 !== "10");
// console.log(10 != "10");
// console.log(10 !== "10" || 10 != 10);
// console.log(10 != "10" && 10 != 10);
// let price = "w";
// let student = true;
// let country = "egypt ";
// if (student === true) {
//   price -= 20;
//   if (!country.includes(" ")) {
//     console.log("write an space");
//   } else {
//     console.log("right");
//   }
// }
// console.log(price);
// price === 100
//   ? (price = 20)
//   : price > 100
//   ? (price = 100)
//   : price < 100
//   ? (price = 0)
//   : (price = "unknown");
// console.log(price);
// let price = "";
// console.log(price || 200);
// console.log(price ?? 200); //null or undefiend
// let a = 10;
// let st = "Elzero Web School";
// if ((st.length * 2).toString() === "34") {
//   console.log("good");
// }
// if (st.includes("W") === true) {
//   console.log("good");
// }
// if (st.slice(0, 6) + st.slice(0, 6) === "ElzeroElzero") {
//   console.log("good");
// }
// if (typeof st.length !== typeof "e") {
//   console.log("good");
// }
// if (typeof st.length === typeof 1) {
//   console.log("good");
// }
// let day = 0;
// switch (day) {
//   case 0:
//     console.log("friday");
//     break;
//   case 1:
//   case 8:
//     console.log("saturday");
//     break;

//   case 2:
//     console.log("sudnday");
//     break;

//   default:
//     console.log("unknown");
//     break;
// }
// let job = "manager";
// let salary = 0;
// switch (job) {
//   case "manager":
//     salary = 8000;
//     break;
//   case "it":
//   case "support":
//     salary = 6000;
//     break;
//   case "developer":
//   case "designer":
//     salary = 7000;
//     break;
//   default:
//     salary = 4000;
//     break;
// }
let i = [[8, 0, 9]]
console.log()
// let b = "mohammed ahmed osama";
// c = b.split(" ");
// let a = ["mohammed", "ahmed", "osama"];
// console.log(`hellow ${a[1][1]}`);
// console.log(`${c[1]} ${c[2]}`);
// console.log(a.toString().length);
// console.log(c);
// a[1] = "mohammed";
// console.log(a[1]);
// console.log(Array.isArray(a));
// a[a.length] = "ali";
// console.log(a);
// console.log(a.length);
// a.length = 2;
// a.unshift("abdlla", "khaled");
// console.log(a);
// a.push("abdlla", "khaled");
// console.log(a);
// let b = a.shift();
// console.log(a);
// console.log(b);
// let c = a.pop();
// console.log(a);
// console.log(c);
// let f = "elzero web school";
// console.log(f[f.indexOf("w")]);
// if (f[f.indexOf("w")] === "w") {
//   console.log("good");
// } else {
//   console.log(1);
// }
// let a = ["ahmed", "mahmoud", "khaled"];
// let f = [34, 7, 1];
// console.log(f.sort());
// console.log(a.reverse());
// a.splice(2);
// console.log(a)
// a.pop();
// let c = ["abd", "mahmoud", "ahmed"];
// let d = [4, 5, 6];
// c = c.concat(a);
// console.log(c.concat(d, a));
// console.log(a.join(" "));
// let zero = 0;
// let counter = 3;
// console.log(my);
// my.splice(4);
// let b = [1, 3, 4];
// console.log(b)
// let my = [1, "ahmed", "mazero", "elham", 4, "osama", "gamal", 10, "ameer", 9];
// console.log(my.slice(1, 3).reverse());
// console.log(Math.ceil(5 / 2))
// let a = my.slice(1, 3).reverse();
// let b = my.slice(0, 1);
// let d = my.slice(3, 4);
// my = d.concat(a, b);
// console.log(a);
// console.log(b);
// console.log(d);

// console.log(my);
// console.log(my);
// console.log(my[1][3] + my[2][1] + my[1][2] + my[1][3] + my[1][4] + my[1][5]);
// let c = my[my.indexOf("mazero")];
// console.log(c[c.indexOf("r")] + c[c.indexOf("o")].toUpperCase());
// for (let i = 0; i < my.length; ++i) {
//   if (typeof my[i] === "number") {
//     let q = my.splice(i, 1);
//     console.log(q);
//   }
// }
// let c = "ahmed mazero elham 4 osama gamal 10 ameer 9";
// console.log(my);
// let b = ["red", "green"];
// let c = ["2021", "2022"];
// for (let i = 0; i < a.length; i++) {
//   console.log("#");
//   console.log(a[i]);
//   console.log("#");
//   for (let j = 0; j < b.length; j++) {
//     console.log("#");
//     console.log(b[j]);
//     console.log("#");
//     for (let k = 0; k < c.length; k++) {
//       console.log("#");
//       console.log(c[k]);
//       console.log("#");
//     }
//   }
// }
// let a = 0;
// while (a < my.length) {
//   console.log(my[a]);
//   a += 1;
// }
// function array1() {
//   let myAdmins = ["abdlla", "osama", "sayed", "stop", "samera"];
//   let myEmployess = [
//     "amged",
//     "samah",
//     "ameer",
//     "omar",
//     "othman",
//     "amany",
//     "samia",
//     "anwar",
//   ];
//   let c = myAdmins.indexOf("stop");
//   let a = myAdmins.length;
//   let b = myEmployess.length;
//   document.write(`<div>`);
//   document.write(`<h3>we have ${c} admins</h3`);
//   document.write(`<div>`);
//   document.write(`<hr>`);
//   for (let i = 0; i < a; i++) {
//     if (myAdmins[i] === "stop") {
//       break;
//     }
//     document.write(`<div> the admin of team ${i + 1} is ${myAdmins[i]}`);
//     document.write(`<h4>team member is:</h4>`);
//     let f = 0;
//     for (let k = 0; k < b; k++) {
//       if (myAdmins[i][0] === myEmployess[k][0]) {
//         document.write(`<p>- ${++f}  ${myEmployess[k]}</p>`);
//       }
//     }
//     document.write(`<div>`);
//     document.write(`<hr>`);
//   }
// }
// function sayinfo(name, age) {
//   if (age > 20) {
//     console.log("app isn't suitbale for you");
//   } else {
//     console.log(`your age is ${name} and your name is ${age}`);
//   }
// }
// sayinfo("samy", 10);
// sayinfo("samy", 30);
// function years(start, donot, end, stop) {
//   for (let i = start; i <= end; i++) {
//     if (i === donot) {
//       continue;
//     }
//     console.log(i);
//     if (i === stop) {
//       return `Interruptting`;
//     }
//   }
// }

// years(10, 13, 30, 15);
// years(2010, 2011, 2024);
// function calc(...numbers) {
//   let result = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     result += numbers[i];
//   }
//   return result;
// }
// console.log(calc(1, 9, 8, 2));
// function showInfo(us = "unknown", ag = 0, rt = "", show = "yes", ...skills) {
//   document.write(`<div>`);
//   document.write(`<h2>hello ${us}</h2>`);
//   document.write(`<p>age : ${ag}</p>`);
//   document.write(`<p>rate : $${rt}</p>`);
//   if (show === "yes") {
//     if (skills.length !== 0) {
//       document.write(`<div>skills</div>`);
//       document.write(`<p> ${skills.join(" | ")}</p>`);
//     } else {
//       document.write(`<p>there no skills</p>`);
//     }
//   } else {
//     document.write(`<p>skills is hidden</p>`);
//   }
//   document.write(`</div>`);
// }
// function showDetails(a, b, c) {
//   if (typeof a === "string") {
//     console.log(a);
//   } else if (typeof b === "string") {
//     console.log(b);
//   } else if (typeof c === "boolean") {
//     console.log(c);
//   }
//   if (typeof a === "number") {
//     console.log(a);
//   } else if (typeof b === "number") {
//     console.log(b);
//   } else if (typeof c === "number") {
//     console.log(c);
//   }
//   if (typeof a === "boolean") {
//     console.log(a);
//   } else if (typeof b === "boolean") {
//     console.log(b);
//   } else if (typeof c === "boolean") {
//     console.log(c);
//   }
// }
// showDetails(13, "ahmed", true);
// function generate(...info) {}
// let fun = (num1, num2) => num1 + num2;
// console.log(fun(1, 2));
// function parent() {
//   let a = 1;
//   function child() {
//     console.log(a);
//   }
//   child();
// }
// parent();
// function names(...name) {
//   return `// string [${name.join("], [")}]=> done !`;
// }
// let names = (...name) => `// string [${name.join("], [")}]=> done !`;
// console.log(names("osama", "ahmed", "ali", "osama"));
// let numbers = [20, 50, 10, 60];
// let calc = (sum1, sum2, ...sums) => sum1 + sum2 + sums[0];
// console.log(calc(10, numbers[0], numbers[1]));
// let d = my.filter(function (el) {
//   return typeof el === "number";
// });
// console.log(d);

// let c = d.filter(function (el) {
//   return el % 2 === 0;
// });
// console.log(c);
// function date(date1, date2) {
// let a = date1
//   .split(" ")[1]
//   .split("")
//   .filter(function (el) {
//     return el !== ",";
//   });

// a = a.join("");
// a = +a;
// let b = date2
//   .split(" ")[1]
//   .split("")
//   .filter(function (el) {
//     return el !== ",";
//   });

// b = b.join("");
// b = +b;
// if (date1.split(" ")[0] !== date2.split(" ")[0]) {
//   a = a + 31;
// }
// if (+date1.split(" ")[2] !== +date2.split(" ")[2]) {
//   let w = +date1.split(" ")[2] - +date2.split(" ")[2];
//   a += w * 365;
// }
// let result = a - b;
// return result;
// }
// console.log(date("june 16, 2024", "june 1, 2021"));
// function dataFinder(nums) {
//   let d = 0;
//   let k = 0;
//   for (var i = 0; i < nums.length + 1; i++) {
//     if (nums[k] >= nums[d]) {
//       ++d;
//     } else {
//       ++k;
//     }
//   }
//   var max = 0;
//   if (nums[d] < nums[k]) {
//     max += nums[d];
//   } else {
//     max += nums[d];
//   }
//   return max;
// }
// console.log(dataFinder([1, 8, 2, 20, 2, 0, 10]));

//   let f = 0;
//   let g = 0;
//   for (var r = 0; r < data.length + 1; r++) {
//     if (data[f] <= data[g]) {
//       ++g;
//     } else {
//       ++f;
//     }
//   }
//   if (data[g] < data[f]) {
//     var min = data[g];
//   } else {
//     min = data[f];
//   }
//   console.log(min);
//   return (result = [max, max - min, min]);
// }
// console.log(dataFinder([100, 4, 1, -10, 800, 6, 2, 200, 3, 5, 0]));
// let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b_,S,c,h,o,o,l";
// let result = myString
//   .split(",")
//   .map(function (el) {
//     return (el = el[0]);
//   })
//   .map(function (el) {
//     if (el === "_") {
//       el = " ";
//     }
//     return el;
//   })
//   .filter(function (el) {
//     return isNaN(parseInt(el)) === true;
//   })
//   .reduce(function (acc, cur) {
//     return `${acc}${cur}`;
//   });
// console.log(result);
// let user = {
//   theName: "meko",
//   theAge: 15,
//   sayhello: function () {
//     return this.theAge * 2;
//   },
// };
// let obj1 = {
//   theName: "ahmed",
// };
// let copy = Object.create(user);
// copy.theAge = 30;
// console.log(copy.sayhello());
// let obj = Object.assign(user, obj1);
// console.log(obj);
// let user1 = new Object({});
// console.log(user.theAge);
// console.log(user.theName);
// console.log(user.sayhello());
// console.log(user["theAge"]);
// user.skill = ["html", "css", "javascript"];
// console.log(user["skill"]);
// user.finder = function () {
//   if (user.theAge < 20) {
//     return "you are young";
//   }
// };
// console.log(user.finder());
// let two = new Object({
//   age: 20,
// });
// console.log(two.age);
// let bo = document.getElementById("bo");
// bo.onclick = function () {
//   console.log(this);
// };
// let a = document.getElementsByTagName("p");
// console.log(a);
// // console.log(document.body); // forms links tittle
// a[1].innerHTML = ";lt";
// a[0].textContent = "<span>";
// // a[2].innerHTML = `${t}`;
// a[0].className = "p1";
// a[2].setAttribute("class", "p1");
// console.log(a[0].attributes);
// for (let i = 1; i < 137; i++) {
//   a[0].innerHTML = i;
// }
// for (let i = 0; i < a.length; i++) {
//   if (!a[i].hasAttribute("class")) {
//     a[i].setAttribute("class", "p1");
//   }
// }

// let a = document.createElement("div");
// let attr = document.createAttribute("tittle");
// a.setAttributeNode(attr);
// a.setAttribute("title", "div1");
// let text = document.createTextNode("hello1");
// a.innerHTML = "<p>hello</p>";
// let comment = document.createComment("this is div");
// a.appendChild(comment);
// a.appendChild(text);
// a.className = "div";
// document.body.appendChild(a);
// console.log(a);
// for (let i = 0; i < 100; i++) {
//   let card = document.createElement("div");
//   card.className = "product";
//   let head = document.createElement("h1");
//   let headText = document.createTextNode(`this is heading ${i + 1}`);
//   head.appendChild(headText);
//   card.appendChild(head);
//   let paragraphe = document.createElement("p");
//   let pText = document.createTextNode(`this is paragraphe ${i + 1}`);
//   paragraphe.appendChild(pText);
//   card.appendChild(paragraphe);
//   document.body.appendChild(card);
// }
// let divs = document.getElementsByTagName("div");
// let h1 = document.getElementsByTagName("h1");
// console.log(div.childNodes[0]);
// console.log(div.firstChild);
// console.log(div.firstElementChild);
// console.log(div.lastChild);
// console.log(div.lastElementChild);
// let span = document.createElement("span");
// span.innerHTML = 1;
// span.className = "span";
// document.body.appendChild(span);
// let mainspan = document.querySelector(".span");
// h1.onclick = function () {
//   h1.innerHTML = "another hello";
// };
// span.onclick = function () {
// mainspan.style.backgroundColor = "yellow";
//   // for (let i = 0; i < 4; i++) {}
// };
// window.onscroll = function () {
// h1.innerHTML = "another another hello";
// };
// onmouseleave onmouseenter onload onresize onfoucs onblur onsubmit
// let main = document.querySelector(".paret");
// let load = document.querySelector(".load");
// window.onload = function () {
//   load.style.display = "none";
//   main.style.display = "block";
// };
// let a = document.querySelector(".a");
// let b1 = document.querySelector(".b1");
// let b2 = document.querySelector(".b2");
// let b3 = document.querySelector(".b3");
// let rc = document.querySelector(".rc");
// let lc = document.querySelector(".lc");
// let hunder = 100;
// rc.onclick = function () {
//   if (hunder === 100) {
//     b1.style.transform = `translateX(${hunder}px)`;
//     b2.style.transform = `translateX(-${hunder}px)`;
//     hunder += 100;
//   } else if (hunder === 200) {
//     b2.style.transform = `translateX(0px)`;
//     b3.style.transform = `translateX(-${hunder}px)`;
//     hunder = 100;
//   }
// };
// console.log(hunder);
// lc.onclick = function () {
//   if (hunder === 100) {
//     b3.style.transform = `translateX(0)`;
//     b2.style.transform = `translateX(-${hunder}px)`;
//     hunder += 100;
//   } else if (hunder === 200) {
//     b1.style.transform = `translateX(0px)`;
//     b2.style.transform = `translateX(0px)`;
//     hunder = 100;
//   }
// };
// let h1 = document.createElement("h1");
// let form = document.querySelector("form");
// let userName = document.querySelector("[name='user']");
// let fds = "";
// let n = document.createElement("p");
// form.onsubmit = function (e) {
//   e.preventDefault();
//   // h1.innerHTML = `hello ${name}`;
//   document.body.appendChild(h1);
// };
// form.addEventListener("submit", function () {
//   fds = userName.value;
//   n.innerHTML = `hello ${fds}`;
// });
// document.body.appendChild(n);
// console.log(b1.classList);
// console.log(b1.classList.contains("b"));
// console.log(b1.classList.item("0"));
// b1.classList.add("class1", "class2");
// b1.classList.remove("class1", "class2");
// b1.classList.toggle("class1", "class2");
// b1.style.cssText = "width: 200%";
// document.styleSheets[0].rules.style.removeproperty();
// document.styleSheets[0].rules[0].styl;
// document.styleSheets[0].rules[0].style.setProperty("--maincolor", "green");
// console.log(document.styleSheets[0].rules[0].style);
// Element.before("");
// Element.after(elemnt);
// Element.append();end
// Element.prepend();start
// Element.remove();
// b1.nextSibling;
// b1.previousElementSibling;
// b1.parentElement;
// Element.clonenode(true);
// target
// alert("hello");
// confirm("hello"); // true or false
// prompt("day" , "write");
let p = document.querySelector(".mainp");
//   }
// };
// clearInterval(time);
// location.href = "/#p2";
// location.hostname = "google";
// console.log(location.hostname);
// console.log(location.protocol);
// console.log(location.hash);
// location.reload();
// location.reload(); history no
// location.assign();
// window.open("https://google.com", "", "width=10, height=10", true);
// window.close();
// console.log(history);
// history.back();
// history.forward();
// console.log(history.length);
// history.go(-2);
// window.stop();
// window.print();
// window.focus();
// window.scroll({
//   left: 100,
//   behavior: "smooth",
// });
// window.localStorage.maincolor = "red";
// window.localStorage.removeItem("maincolor");
// console.log(localStorage);
// window.localStorage.clear();
// window.localStorage.key(0);
//   let lis = document.querySelectorAll("ul li");
// let exp = document.querySelector(".exp");
// lis.forEach(function (li) {
//   li.addEventListener("click", function (e) {
//     lis.forEach(function (li) {
//         li.classList.remove("active");
//     });
//     window.localStorage.color = e.osama .dataset.c;
//     console.log(localStorage.color);
//     exp.style.backgroundColor = localStorage.color;
//     e.target.classList.add("active");
//     console.log(e.target);
//   });
// });
// if (window.localStorage.color) {
//   exp.style.backgroundColor = localStorage.color;
//   lis.forEach(function (li) {
//     li.classList.remove("active");
//   });

//   document
//     .querySelector(`[data-c="${localStorage.color}"]`)
//     .classList.add("active");
// }
// sessionStorage.color = "red";
let input = document.querySelector(".input");
let add = document.querySelector(".add");
let tasks = document.querySelector(".tasks");
let obj = {};
let k = 1;
if (input.value === "") {

}
if (window.localStorage.getItem("mham")) {
  tasks.innerHTML = window.localStorage.mham;
}
add.onclick = function () {
  this.classList.toggle("an");
  if (input.value !== "") {
    this.classList.add("an")
    let div = document.createElement("div");
    div.className = "the";
    let p = document.createElement("p");
    let del = document.createElement("button");
    p.innerHTML = input.value;
    del.innerHTML = "delete";
    div.appendChild(p);
    div.append(del);
    tasks.append(div);
    del.onclick = function () {
      del.style.animation = "add .5s";
      setTimeout(function () {
        del.parentElement.remove();
        window.localStorage.mham = tasks.innerHTML;
      }, 500);
    }
    input.value = "";
  } else {
    alert("you should write your task")
  }
  window.localStorage.mham = tasks.innerHTML;
};
// let divs = document.querySelectorAll(".the");
let btns = document.querySelectorAll("button");
btns.forEach(function (btn) {
  btn.onclick = function () {
    btn.style.animation = "add .5s";
    setTimeout(function () {
      btn.parentElement.remove();
      window.localStorage.mham = tasks.innerHTML;
    }, 500);

  };
});
// let arr = ["ahmed", "osama", "ali", "mohammed", "khaled"];
// let [a, b, c, d, , v = true] = arr;
// console.log(a);
// console.log(v);
// console.log(v);
// in object () if no let
// let user = {
//   theage: 12,
//   thename: "mohammed",
//   skills: {
//     one: "jave script",
//   },
// };
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// function a({
//   theage: a,
//   thename: b,
//   thecolor: c = "red",
//   skills: { one: d },
// } = user) {
//   console.log(a);
//   console.log(b);
//   console.log(c);
//   console.log(d);
// }
// a();
// let user = {
//   thename: "ali",
//   theage: 4,
//   theskils: ["html", "css", "javascript"],
//   theadd: {
//     egy: "cairo",
//     ksa: "riyad",
//   },
// };
// let {
//   thename: n,
//   theage: a,
//   theskils: [r, t, y],
//   theadd: { egy: e },
// } = user;
// console.log(n);
// console.log(a);
// console.log(r);
// console.log(t);
// console.log(y);
// console.log(e);
// let chosen = 3;
// let friend = [
//   { title: "ahmed", age: 30, availble: true, skills: ["css", "html"] },
//   { title: "ali", age: 20, availble: false, skills: ["css", "html"] },
//   { title: "khaled", age: 10, availble: true, skills: ["css", "html"] },
// ];
// let [] = "";
// let v = "";
// if (chosen === 1) {
//   if (friend[0].availble === true) {
//     v = "availble";
//   } else {
//     v = "unavaible";
//   }
//   [
//     {
//       title: t,
//       age: a,
//       skills: [e],
//     },
//   ] = friend;
//   console.log(t);
//   console.log(a);
//   console.log(v);
//   console.log(e);
// } else if (chosen === 2) {
//   if (friend[1].availble === true) {
//     v = "availble";
//   } else {
//     v = "unavaible";
//   }
//   [
//     ,
//     {
//       title: t,
//       age: a,
//       skills: [e],
//     },
//   ] = friend;
//   console.log(t);
//   console.log(a);
//   console.log(v);
//   console.log(e);
// } else if (chosen === 3) {
//   if (friend[2].availble === true) {
//     v = "availble";
//   } else {
//     v = "unavaible";
//   }
//   [
//     ,
//     ,
//     {
//       title: t,
//       age: a,
//       skills: [e],
//     },
//   ] = friend;
//   console.log(t);
//   console.log(a);
//   console.log(v);
//   console.log(e);
// }
let arr = [1, 1, 2, 2, 2, 3, 4];
for (let i = 0; i < arr.length; i++) {
}
let the = new Set(arr);
console.log(the);
the.add(4);
let inte = the.keys();
// console.log(inte.next().value);
// console.log(inte.next().value);
// console.log(inte.next().value);
// console.log(inte.next().value);
// console.log(inte.next());
// let ws = new WeakSet([{ a: 1, b: 2, c: 3 }]);
// console.log(ws);
// let obj = { a: 1, b: 2, c: 3 };
// console.log(obj);
// return Boolean;
// new1.clear();
// console.log(new1.has(1));
// console.log(new1);
// console.log(new1.size);
// let map = new Map([
//   [2, "two"],
//   [3, "three"],
//   [4, "four"],
// ]);
// map.set(1, "number");
// map.set("1", "stirng");
// console.log(map.get(1));
// console.log(map);
// map.set(1, "1");
// map.delete(1);
// map.set(1, "1");
// console.log(map.has(1));
// console.log(map.size);
// map.clear();
// let wmap = new WeakMap();
// wmap.set({ a: 1 }, "object");

// console.log(wmap);
// let set = new Set(arr);
// console.log(Array.from(set));
// arguments
// console.log(arr);
// arr.copyWithin(3, -1);
// console.log(arr);
// let check = arr.some(function (e) {
//   return e > 3;
// }, this);
// console.log(check);
// let obj = {
//   10: "place1",
//   20: "place2",
//   30: "place3",
//   40: "place4",
// };
// let a = [...Object.keys(obj).map((e) => +e)];
// console.log(a);
// let check = a.every(function (e) {
//   return e > this;
// }, 0);
// console.log(check);
// let n1 = [10, 30, 10, 20];
// let n2 = [30, 20, 10];
// console.log([...n1, ...n2].length * Math.max(...n1));
// let name = "elzero Elzero";
// let exp = new RegExp("elzero", "ig");
// let exp = /elzero/gim;
// console.log(name.match(exp));
// let name = "com io info Org";
// let ex = /(com|io|info|org)/gi;
// console.log(name.match(ex));
// let nums = "12345678910";
// let exp = /[0-9]/g;
// console.log(nums.match(exp));
// let nums = "1234567!8910";
// let exp = /[^0-9]/g;
// console.log(nums.match(exp));
// let nums = "1234567!8910 os8os";
// let exp = /os[0-9]os/gi;
// console.log(nums.match(exp));
let string =
  "ab42618cdDfFE FGDAGD!# 0100 00 programing affkskl@afkdfka54987289.com ";
let re = /(dr|er|mr)s?\S\w+(?!.)/gi;
console.log(re.test("Mr.X"));
// let exp = /[a-z]/g;
// console.log(string.match(exp));
// let exp = /[^a-z]/g; not
// console.log(string.match(exp));
// let exp = /[A-Z]/g;
// console.log(string.match(exp));
// let exp = /[a-z]/g;
// let exp = /[acdlfjs]/g;
// let exp = /[a-z]/gi;
// let exp = /[^a-z0-9]/gi;
// let exp = /\s/gi; //space
// let exp = /\S/gi; //not space
// let exp = /\w/gi; // not special chracter and space
// let exp = /\W/gi; //  special chracter and space
// let exp = /\d/gi; //  0-9
// let exp = /\D/gi; //  not 0-9
// let exp = /./gi; // every thing
// let exp = /\w+@\w+.(com|net)/gim;
// let exp = /\b0\d*0\b/gim;
// let exp = /\b0\d?0\b/gim;
// /b{4,}
// /b{4,6}
// /b{4}
// let exp = /ing$/gi; end with
// let exp = /^ing/gi; start with
// (?= z);
// (?!z);

// console.log(string.match(exp));
// let the = "aspam1 spam1 1spam";
// let exp = /(\bspam|spam\b)/g;
// let exp = /(\Bspam|spam\B)/g;
// console.log(the.match(exp));
// console.log(exp.test(the));
// string.replace(/8/, "hello");
// string.replaceAll(/8/, "hello");
// let url1 = "elzero.org";
// let url2 = "https://elzero.org";
// let url3 = "http://elzero.org";
// let url4 = "https://www.elzero.org";
// let url5 = "https://www.elzero.org:8080/articles.php?id=100&cat=topics";
// let re = /(https?:\/\/(www.)?)?\w+.org(:\d{4}\/\w+.php\?id=\d{3}&\w{3}=\w+)?/g;
// console.log(url1.match(re));
// console.log(url2.match(re));
// console.log(url3.match(re));
// console.log(url4.match(re));
// console.log(url5.match(re));
// class User {
//   static count = 0;
//   constructor(id, name, number) {
//     this.i = id;
//     this.n = name || "unknown";
//     this.b = number + 20;
//     User.count++;
//     this.func = function () {
//       return `your name is ${this.n}`;
//     };
//   }
//   msg() {
//     return `your name is ${this.n}`;
//   }
//   static countt() {
//     return `${User.count} created`;
//   }
// }
// class Admin extends User {
//   #s;
//   constructor(id, name, number, special) {
//     super(id, name, number);
//     this.#s = special.toLocaleUpperCase();
//   }
//   getspecial() {
//     return this.#s;
//   }
// }
// class New extends Admin {
//   constructor(id, name, number, special) {
//     super(id, name, number, special)
//   }
// }
// function User(id, name, number) {
//   this.i = id;
//   this.n = name;
//   this.b = number + 20;
// }
// let obj1 = new User(100, "ahmed", 2000);
// let obj2 = new User(100, "ahmed", 2000);
// let obj3 = new Admin(200, "sayed", 8000, "i am special");
// let obj4 = new New(200, "sayed", 8000, "i am special");
// let str = "elzero";
// String.prototype.the = function(){
//   return `.${this}.`
// }
// console.log(str.the())
// console.log(obj1);
// console.log(obj2);
// console.log(obj3.getspecial());
// console.log(New.prototype)
// New.prototype.welcome = function(){
//   return `hello ${this.n}`
// }
// Object.prototype.love = "elzero web school"
// console.log(obj4.welcome())
// console.log(obj4.love);
// let my = {
//   a:1,
//   b:2,
// };
// Object.defineProperty(my,"c",{
//   writable:true,//new value
//   enumerable:true,//lop
//   configurable:false,//redefinde
//   value:5,
// });
// Object.defineProperties(my,{
//   c:{
//     value:4,
//     configurable:true,
//     writable:true,
//   },
//   d:{
//     value:5,
//     configurable:true,
//     writable:true,
//   },
//   e:{
//     value:6,
//     configurable:true,
//     writable:true,
//   },
//   f:{
//     value:7,
//     configurable:true,
//     writable:true,
//   },
// });
// my.c = 10;
// console.log(my)
// console.log(Object.getOwnPropertyDescriptors(my))
// for(let prop in my){
//   console.log(prop,my[prop])
// }
// console.log(obj1.func());
// console.log(obj1.msg());
// console.log(User.countt());
// console.log(obj1 instanceof User);
// console.log(obj1.constructor === User);
// let str1 = "hello";
// let str2 = new String("hello");
// console.log(str2[0]);
// let a = document.createElement("button");
// a.innerHTML = 0;
// a.id = "btn";
// a.onclick = function () {
//   this.innerHTML = +this.innerHTML + 1;
// };
// document.body.appendChild(a);
// let date = new Date();
// let my = new Date("june 6, 2010");
// let age = date - my;
// console.log(age / 1000 / 60/ 60/ 24/ 365);
// console.log(my)
// console.log(date / 1000 / 60/ 60/ 24/ 365);
// console.log(date.getDate()); // the day of month
// console.log(date.getDay()); // the day of week
// console.log(date.getTime()); // mill seconds
// console.log(date.getMonth()); //  month my index
// console.log(date.getFullYear()); // year
// console.log(date.getHours()); // hour
// console.log(date.getMinutes()); // minute
// console.log(date.getSeconds()); // seconds
// date.setDate(1)
// console.log(date)
// window.onscroll = function () {
//       if (window.scrollY === 0) {
//     let time = setInterval(function () {
//         p.innerHTML = +p.innerHTML + 1;
//         if (p.innerHTML === "137") {
//               clearInterval(time);}
//             },100)}}

//     date.setSeconds(date.getSeconds() + 1)
//     date = new Date()

//     p.innerHTML = date;
//   }, 1000);
// function* gen(){
//   yield 1;
// }
// function* gen1(){
//   yield* gen();
// }
// console.log(gen())
// import h,{n,arr,some as s} from "./main1.js";
// import * as all from "./main1.js"
// console.log(all);
// console.log(all.default());
// console.log(arr);
//  console.log(s());
//  console.log(h());
//  let a = {
//   a:2,
//   b:2,
//   c:2,
//  }
// console.log(Object.keys(a))
// let json = `{"j":1,"arr":[1,2]}`;
// let js = JSON.parse(json);
// console.log(Object.keys(js).length);
// let js2 = JSON.stringify(js);
// console.log(js2)
// let req = new XMLHttpRequest();
// req.open("get", "https://api.github.com/users/meko568/repos");
// req.send()
// console.log(req);
// req.onreadystatechange = function () {
//   if (this.status === 200 && this.readyState === 4) {
//     let data = JSON.parse(this.responseText);
//     console.log(data)
//     for (let i = 0; i < data.length; i++) {
//       let div = document.createElement("div");
//       div.className = "a"
//       div.innerHTML = data[i].full_name;
//       document.body.appendChild(div)
//     }
//   }
// }
// let divs = document.querySelector(".a");
// let z = 1;
// divs.forEach(function (div){
//   div.onclick = function(){
//         console.log(div)
//         if(z === 1 ){
//             div.style.color = "red";
//             z = 0
//           }else if(z === 0){
//             div.style.color = "black";
//             z = 1;
//         }
// }})
// setTimeout(function(){
//   console.log("iam 1");
// setTimeout(function(){
//   console.log("iam 2");
// setTimeout(function(){
//   console.log("iam 3");
// setTimeout(function(){
//   console.log("iam 4");

// }, 1000)
// }, 1000)
// }, 1000)
// }, 1000)
// let pro = new Promise(function (a, b) {
//   let the = true;
//   if (the) {
//     a("that good");
//   } else {
//     b(Error("that bad"))
//   }
// })
// console.log(pro)
// pro.then(
//   function (value1) {
//     console.log(`better ${value1}`)
//   },
//   function (value2) {
//     console.log(`worse ${value2}`)
//   }
// ).catch(console.log(Error("a"))).finally(console.log("finally"));
// fetch(link).then();
// Promise.all([arr]).then() if one
// Promise.allSettled([arr]).then() all in arry
// Promise.race([arr]).then() give the first
// async await pro
