document.getElementById('btn').addEventListener('click', () => {
  const inputNumber = parseInt(document.getElementById('ip').value);

  // Create the initial promise
  const initialPromise = new Promise((resolve) => {
    setTimeout(() => {
      console.log('Initial number:', inputNumber);
      document.getElementById('output').textContent = `Result: ${inputNumber}`;
      resolve(inputNumber);
    }, 2000);
  });

  // Chain promises for each operation
  initialPromise
    .then((num) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const multiplied = num * 2;
          console.log('Multiplied:', multiplied);
          document.getElementById('output').textContent = `Result: ${multiplied}`;
          resolve(multiplied);
        }, 1000);
      });
    })
    .then((num) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const subtracted = num - 3;
          console.log('Subtracted:', subtracted);
          document.getElementById('output').textContent = `Result: ${subtracted}`;
          resolve(subtracted);
        }, 1000);
      });
    })
    .then((num) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const divided = num / 2;
          console.log('Divided:', divided);
          document.getElementById('output').textContent = `Result: ${divided}`;
          resolve(divided);
        }, 1000);
      });
    })
    .then((num) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const added = num + 10;
          console.log('Added:', added);
          document.getElementById('output').textContent = `Final Result: ${added}`;
          resolve(added);
        }, 1000);
      });
    })
    .catch((error) => {
      console.error('Error:', error);
      document.getElementById('output').textContent = 'An error occurred.';
    });
});