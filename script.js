// Handles loading the events for <model-viewer>'s slotted progress bar
const onProgress = (event) => {
    const progressBar = event.target.querySelector('.progress-bar');
    const updatingBar = event.target.querySelector('.update-bar');
    updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
    if (event.detail.totalProgress === 1) {
      progressBar.classList.add('hide');
    } else {
      progressBar.classList.remove('hide');
      if (event.detail.totalProgress === 0) {
        event.target.querySelector('.center-pre-prompt').classList.add('hide');
      }
    }
  };
  document.querySelector('model-viewer').addEventListener('progress', onProgress);

//Show/Hide dropdown menu
function toggleDisplay(){
  const toggle = document.getElementById("dropdown-content")
    if(toggle.style.display === "none"){
      toggle.style.display = "block"
    } else {
      toggle.style.display = "none"
}
}

document.addEventListener('mouseup', function(e) {
  var container = document.getElementById("dropdown-content");
  if (!container.contains(e.target)) {
      container.style.display = 'none';
  }
});

//copy url to clipboard
function copyURL(){
  const btnHome = document.getElementsByClassName("share")
  navigator.clipboard.writeText(window.location.href) 
  
  const popup = document.getElementById("alert")
  popup.style.display = "block"
  
}

function closeAlert(){
  const closeBtn = document.getElementById("alert")
  closeBtn.style.display = "none"
}

document.addEventListener('mouseup', function(e) {
  var container = document.getElementById("alert");
  if (!container.contains(e.target)) {
      container.style.display = 'none';
  }
});


//change language
function changeLang(){
  const esp = document.getElementById("text-esp")
  const eng = document.getElementById("text-eng")
  if(esp.style.display === "block"){
    esp.style.display = "none"
    eng.style.display = "block"
  } else{
    esp.style.display = "block"
    eng.style.display = "none"
  }
  
}


