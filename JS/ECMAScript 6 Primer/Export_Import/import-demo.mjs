import { foo } from "./exppp.mjs";


console.log(foo);

setTimeout(() => {
    console.log("setTimeout-foo :" + foo);
}, 3000);