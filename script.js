$(document).ready(function () {
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

$(".menu-items a").click(function () {
  $("#checkbox").prop("checked", false);
});

// -------------------------------------------------------------------------------------

document.getElementById("contactFormMaleFashon").addEventListener("submit", function (event) {
  event.preventDefault();

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  var templateParams = {
    name: name,
    email: email,
    message: message
  };

  emailjs.send('service_wyh2fx8', 'template_j30ed1a', templateParams).then(
    (response) => {
      alert('SUCCESS!', response.status, response.text);
    },
    (error) => {
      alert('FAILED...', error);
    },
  )
});



