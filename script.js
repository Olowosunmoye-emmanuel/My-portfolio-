function sendMessage() {
  const message = document.querySelector('.form-group textarea').value;
  if (message.trim() === '') {
    alert('Please type a message before sending!');
    return;
  }
  alert('Hey, my name is OLOWOSUNMOYE EMMANUEL OLAMILEKAN, a 100lvl software engineering student in lcu. How can i help you?');
  document.querySelector('.message-box textarea').value = '';
}