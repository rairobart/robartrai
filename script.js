// Simple script to handle form submission
document.querySelector('.contact-form form').addEventListener('submit', function(e) {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);

  fetch(form.action, {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      alert('Message sent successfully!');
      form.reset();
    } else {
      throw new Error('Network response was not ok');
    }
  })
  .catch(error => {
    alert('There was a problem sending your message. Please try again later.');
    console.error('Error:', error);
  });
});
