// Chaining after a catch
new Promise((resolve, reject) => {
  console.log('Initial');

  resolve();
})
  .then(() => {
    throw new Error('Something failed');

    // Note that the text "Do this" is not outputted because the "Something failed" error caused a rejection.
    console.log('Do this');
  })
  .catch(() => {
    console.log('Do that');
  })
  .then(() => {
    console.log('Do this whatever happened before');
  });

  