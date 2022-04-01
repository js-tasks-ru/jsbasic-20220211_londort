function toggleText() {
  let btn = document.querySelector('.toggle-text-button');
  let text = document.querySelector('#text');

  function toggle () {
    if (text.hidden !== true) {
      text.hidden = true;
    } else {
      text.hidden = false;
    }
  } 

  btn.addEventListener('click', toggle);  
}
