const messageElement = document.querySelector('#message');

fetch('/api/message')
  .then((response) => response.json())
  .then((data) => {
    messageElement.textContent = data.message;
  })
  .catch(() => {
    messageElement.textContent = 'Impossible de joindre le back';
  });
