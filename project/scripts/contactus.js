document.addEventListener("DOMContentLoaded", () => {

  document.querySelector("#currentyear").innerHTML = `${new Date().getFullYear()}`;
  document.querySelector("#lastModified").innerHTML = `Last Modification: ${document.lastModified}`;

 
  const form = document.getElementById('contactForm');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const subjectInput = document.getElementById('subject');
  const messageInput = document.getElementById('message');

  
  loadFormData();

  
  form.addEventListener('submit', handleSubmit);

 
  function handleSubmit(event) {
      event.preventDefault(); 

      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const subject = subjectInput.value.trim();
      const message = messageInput.value.trim();

      if (name === '' || email === '' || subject === '' || message === '') {
          alert('Please fill out all required fields.');
          return;
      }

     
      saveFormData({ name, email, subject, message });

      
      alert('Message sent successfully!');

      
      form.reset();
  }

  function saveFormData(data) {
      localStorage.setItem('contactFormData', JSON.stringify(data));
  }
  
  function loadFormData() {
      const savedData = localStorage.getItem('contactFormData');
      if (savedData) {
          const { name, email, subject, message } = JSON.parse(savedData);
          nameInput.value = name || '';
          emailInput.value = email || '';
          subjectInput.value = subject || '';
          messageInput.value = message || '';
      }
  }
});
