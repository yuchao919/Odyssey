import("./exppp.mjs").then(function (arg) {
    const { foo } = arg;
    console.log(foo);
});


import("./exppp.mjs").then(({ foo }) => {
    console.log(foo);
});

