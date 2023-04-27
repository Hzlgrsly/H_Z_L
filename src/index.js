import "./styles.css";

function sendContact(name, email, message) {
  // Here is where you can write code to handle the contact form submission
  // For example, you could send the form data to your server using a fetch request
  fetch("/send-contact-form", {
    method: "POST",
    body: JSON.stringify({ name, email, message }),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then((response) => {
      if (response.ok) {
        alert("Thank you for your message!");
      } else {
        throw new Error("Oops! Something went wrong.");
      }
    })
    .catch((error) => {
      console.error(error);
      alert(
        "Sorry, there was an error sending your message. Please try again later."
      );
    });
}

const form = document.querySelector("#my-form");
const message = document.querySelector("#message");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  fetch("/submit-form", {
    method: "POST",
    body: new FormData(form)
  })
    .then((response) => {
      if (response.ok) {
        message.textContent = "Message sent successfully!";
        form.reset();
      } else {
        throw new Error("Failed to send message");
      }
    })
    .catch((error) => {
      console.error(error);
      message.textContent = "Failed to send message";
    });
});
