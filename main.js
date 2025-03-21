// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener('DOMContentLoaded', () => {
  let modal = document.getElementById('modal')
  modal.className = 'hidden'  
})

const likes = document.getElementsByClassName('like-glyph');
Array.from(likes).forEach(like => {
  like.addEventListener('click', () => {
    mimicServerCall()
      .then(res => {
        console.log(res);

        if(like.classList.contains('activated-heart')){
          like.classList.remove('activated-heart');
          like.innerText = `${EMPTY_HEART}`;
        } else {
          like.classList.add('activated-heart');
          like.innerText = `${FULL_HEART}`;
        }

      })
      .catch(err => {
        
        console.error(err);

        let modal = document.getElementById('modal');
        modal.classList.remove('hidden');


        setTimeout(() => {
          modal.classList.add('hidden')
        },3000);
      });

  });
});



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
