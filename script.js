window.onscroll = function() {
    var nav = document.querySelector('nav'); // Select the nav element
    if (window.scrollY> 0) { // Check if the page is scrolled down
        nav.classList.add('sticky'); // Add sticky class
    } else {
        nav.classList.remove('sticky'); // Remove sticky class
    }
};

function sendMail() {
    var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
    };
    const serviceID="service_e3e7q67";
    const templateID="template_lyyp9ve";
emailjs.send(serviceID, templateID, params)
.then(
    res => {
document.getElementById("name").value = "";
document.getElementById("email").value = "";
document.getElementById("message").value = "";
console.log(res);
alert ("your message sent successfully");
})
.catch((err) => console.log(err));
}
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', function() {
    navLinks.forEach(nav => nav.classList.remove('active')); // Remove active from all links
    this.classList.add('active'); // Add active to clicked link
  });
});

