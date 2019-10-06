/**
 * Note that assignment to module.exports must be done immediately. It cannot be done in any callbacks. This does not work:
 */
setTimeout(() => {exports.x = "hello";}, 0);
