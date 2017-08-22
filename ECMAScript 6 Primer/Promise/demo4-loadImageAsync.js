function loadImageAsync(url) {
  return new Promise((resolve, reject) => {
    let image = new Image();

    image.onload = () => {
      resolve(image);
    };

    image.onerror = () => {
      reject(new Error('Could not load image at ' + url));
    };

    image.src = url;
  });
}
