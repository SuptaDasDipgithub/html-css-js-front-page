let openBtn = document.querySelector(".bi-list");
let closeBtn = document.querySelector(".bi-x-lg");
let menu = document.querySelector(".navbar__menu");

openBtn.addEventListener("click", () => {
  openBtn.classList.toggle("hide");
  closeBtn.classList.toggle("hide");
  menu.classList.toggle("hidden");
});

closeBtn.addEventListener("click", () => {
  openBtn.classList.toggle("hide");
  closeBtn.classList.toggle("hide");
  menu.classList.toggle("hidden");
});


document.querySelector('.contact-form').addEventListener('submit', async (event) => {
  event.preventDefault();

  // Get the form data
  const fullName = document.getElementById('full-name').value;
  const mobileNumber = document.getElementById('mobile-number').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Prepare the data to send
  const formData = {
      full_name: fullName,
      mobile_number: mobileNumber,
      email: email,
      message: message,
  };

  try {
      // Send a POST request to the server
      const response = await fetch('http://localhost:3000/submit-form', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
      });

      if (response.ok) {
          alert('Your message has been sent successfully!');
          // Clear the form
          document.querySelector('.contact-form').reset();
      } else {
          alert('There was an error submitting your message.');
      }
  } catch (error) {
      console.error('Error:', error);
      alert('There was an error submitting your message.');
  }
});