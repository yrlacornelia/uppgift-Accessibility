
  window.onbeforeunload = function (e) {

   fnamefield = document.getElementById("fname");
    emailfield = document.getElementById("email");
    subjectfield = document.getElementById("subject");
console.log(fnamefield.value)
    if ( fnamefield.value !== "" ||  emailfield.value !== "" || subjectfield.value !== "" ){
    console.log("unloading");
  return "save";
  }
  else{
    return null
  }


};




    var navBtn = document.querySelector(".nav-btn");
    var closeBtn = document.querySelector(".close-btn");
    var nav = document.querySelector(".hamburger-menu");
   navBtn.addEventListener("click", function () {
      nav.classList.toggle("active");
    });
    closeBtn.addEventListener("click", function () {
        nav.classList.toggle("active");
      });
      
  document.getElementById("hero-btn").onclick = function(){
    location.href = "./recipes.html"
  }

  var video = document.querySelector('#video');
  var tracks = video.textTracks; // one for each track element
  var track = video.textTracks[0]; // corresponds to the first track element. If more than one will need to adapt code to select the right one
  
  tracks.addEventListener("change", captionStatus, false);
  function check () {
    const icon = "triangle-exclamation";
    var valid = true, error = "", field = "";
    field = document.getElementById("fname");
    error = document.getElementById("error-fname");
    if (!field.checkValidity()) {
      valid = false;
      field.classList.add("err");
      error.innerHTML = `<i class="fas fa-${icon}"></i> ` + field.validationMessage;
    } else {
      field.classList.remove("err");
      error.innerHTML = "";
    }

    field = document.getElementById("email");
    error = document.getElementById("error-email");
    if (!field.checkValidity()) {
      valid = false;
      field.classList.add("err");
      error.innerHTML = `<i class="fas fa-${icon}"></i> ` + field.validationMessage;
    } else {
      field.classList.remove("err");
      error.innerHTML = "";
    }

    field = document.getElementById("subject");
    error = document.getElementById("error-subject");
    if (!field.checkValidity()) {
      valid = false;
      field.classList.add("err");
      error.innerHTML = `<i class="fas fa-${icon}"></i> ` + field.validationMessage;
    } else {
      field.classList.remove("err");
      error.innerHTML = "";
    }
    

  
    return valid;
  }
  function checkFname(e) {

    const icon = "triangle-exclamation";
    var valid = true, error = "", field = "";
  
    field = document.getElementById("fname");
    error = document.getElementById("error-fname");
  
    if (!field.checkValidity()) {
      valid = false;
      field.classList.add("err");
     error.innerHTML = `<i class="fas fa-${icon}"></i> ` + field.validationMessage;
    } else {
      field.classList.remove("err");
      error.innerHTML = "";
    }

    return valid;
    
  }
  function checkEmail(params) {
    const icon = "triangle-exclamation";
    var valid = true, error = "", field = "";
  
    field = document.getElementById("email");
    error = document.getElementById("error-email");
    if (!field.checkValidity()) {
      valid = false;
      field.classList.add("err");
   error.innerHTML = `<i class="fas fa-${icon}"></i>` + field.validationMessage;
      
    } else {
      field.classList.remove("err");
      error.innerHTML = "";
    }

    return valid;
  }

  function checkTextArea(params) {

    const icon = "triangle-exclamation";
    var valid = true, error = "", field = "";

    field = document.getElementById("subject");
    error = document.getElementById("error-subject");
    if (!field.checkValidity()) {
      valid = false;
      field.classList.add("err");
      error.innerHTML = `<i class="fas fa-${icon}"></i> ` + field.validationMessage;
    } else {
      field.classList.remove("err");
      error.innerHTML = "";
    }

    return valid;
  }
