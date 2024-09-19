const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      searchToggle = document.querySelector(".searchToggle"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      siderbarClose = document.querySelector(".siderbarClose");

      let getMode = localStorage.getItem("mode");
          if(getMode && getMode === "dark-mode"){
            body.classList.add("dark");
          }

      modeToggle.addEventListener("click" , () =>{
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");

        if(!body.classList.contains("dark")){
            localStorage.setItem("mode" , "light-mode");
        }else{
            localStorage.setItem("mode" , "dark-mode");
        }
      });

        searchToggle.addEventListener("click" , () =>{
        searchToggle.classList.toggle("active");
      });
 
      
sidebarOpen.addEventListener("click" , () =>{
    nav.classList.add("active");
});

body.addEventListener("click" , e =>{
    let clickedElm = e.target;

    if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
        nav.classList.remove("active");
    }
});
document.getElementById('socialBtn').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('social-section').scrollIntoView({
    behavior: 'smooth'
  });
});
const images = document.querySelectorAll('.image-grid img');

images.forEach((image) => {
  let isLarge = false;
  image.addEventListener('click', () => {
    if (!isLarge) {
      image.style.transform = 'scale(1.5)';
      image.style.transition = 'transform 0.5s ease-in-out';
      isLarge = true;
    } else {
      image.style.transform = 'scale(1)';
      image.style.transition = 'transform 0.5s ease-in-out';
      isLarge = false;
    }
  });
});

document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const formData = new FormData(this);
  const statusMessage = document.getElementById('status-message');

  fetch(this.action, {
      method: 'POST',
      body: formData,
      headers: {
          'Accept': 'application/json'
      }
  }).then(response => {
      if (response.ok) {
          statusMessage.textContent = "Thank you for your message. It has been sent.";
          statusMessage.className = "success";
          this.reset();
      } else {
          throw new Error('Network response was not ok.');
      }
  }).catch(error => {
      statusMessage.textContent = "Oops! There was a problem sending your message. Please try again later.";
      statusMessage.className = "error";
  }).finally(() => {
      statusMessage.style.display = 'block';
  });
});