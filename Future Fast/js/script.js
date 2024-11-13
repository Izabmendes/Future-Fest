// Seleciona os elementos
const openChatbotButton = document.getElementById('open-chatbot');
const chatbotModal = document.getElementById('chatbot-modal');
const closeChatbotButton = document.getElementById('close-chatbot');

// Abre o modal ao clicar no botão flutuante
openChatbotButton.addEventListener('click', () => {
  chatbotModal.style.display = 'flex';
});

// Fecha o modal ao clicar no botão de fechar
closeChatbotButton.addEventListener('click', () => {
  chatbotModal.style.display = 'none';
});

// Fecha o modal ao clicar fora do conteúdo
window.addEventListener('click', (event) => {
  if (event.target === chatbotModal) {
    chatbotModal.style.display = 'none';
  }
});
