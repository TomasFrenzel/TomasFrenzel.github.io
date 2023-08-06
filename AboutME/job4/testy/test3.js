// Získání elementu chatu
const chat = document.getElementById('chat');
        
// Simulace psaní zprávy
function typeMessage(messageContainer, messageText, delay) {
  const message = messageContainer.querySelector('p');
  const letters = messageText.split('');
  let i = 0;

  const typingInterval = setInterval(() => {
    if (i < letters.length) {
      message.innerHTML += letters[i];
      i++;
    } else {
      clearInterval(typingInterval);
      setTimeout(() => {
        messageContainer.style.opacity = '1';
        messageContainer.style.transform = 'translateX(0)';
      }, 300);
    }
  }, delay);
}

// Animace konverzace
function animateChat() {
  const messages = chat.querySelectorAll('.message');

  messages.forEach((message, index) => {
    const text = message.querySelector('p').textContent;
    const delay = text.length * 70;

    setTimeout(() => {
      typeMessage(message, text, 70);
    }, index * 2000);
  });
} animateChat();