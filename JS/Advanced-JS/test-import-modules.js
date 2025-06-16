//NOTE: For Both ways, sometimes it dosen't work if we dont addd
//NOTE: the extension type on the end like .js so it's better to add it as a default

//NOTE: Default Import
import multiply from "./ES6Modules-and-commonJS.js";

//NOTE: Named import
import { add, subtract } from "./ES6Modules-and-commonJS.js";

console.log(multiply(2, 2));
console.log(add(2, 2));
console.log(subtract(2, 2));
