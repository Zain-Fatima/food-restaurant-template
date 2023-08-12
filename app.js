let navToggler = document.querySelector('.nav-toggler');
let linksContainer = document.querySelector('.links-container');

navToggler.addEventListener('click', () => {
  navToggler.classList.toggle('active');
  linksContainer.classList.toggle('active');
})

let reviews = document.querySelectorAll('.review-wrapper'); // Use querySelectorAll to get all elements matching the selector

let currentReviews = [0, 2];

let updateReviewSlider = (cards) => {
  cards.forEach((card_index) => {
    reviews[card_index].classList.add('active');
  });
};

setInterval(() => {
    currentReviews.forEach((card_index, i) => {
        reviews[card_index].classList.remove('active');

        currentReviews[i] = card_index >= reviews.length -1 ? 0 : card_index + 1;
    });

    setTimeout(() => {
        updateReviewSlider(currentReviews);
    }, 250);

}, 5000);

updateReviewSlider(currentReviews);

let faqs = [...document.querySelectorAll('.faq')];
faqs.map(faq => {
  let ques = faq.querySelector('.question-box');

  ques.addEventListener('click', () => {
    faq.classList.toggle('active');
  });

});

let dishSlider = document.querySelector('.dish-slide');

let rotationVal = 0;

setInterval(() => {
  rotationVal += 120;

  dishSlider.style.transform = `translateY(-50%) rotate(${rotationVal}deg)`;
},3000);

AOS.init();

// Smooth scrolling for navigation links
document.querySelectorAll('.links a').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
// Initialize Firebase
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id"
};

firebase.initializeApp(firebaseConfig);

// User Registration
const registerForm = document.querySelector('#register-form');
registerForm.addEventListener('submit', async event => {
  event.preventDefault();
  
  const email = registerForm.querySelector('#email').value;
  const password = registerForm.querySelector('#password').value;
  
  try {
    const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
    console.log('Registration successful:', userCredential.user);
  } catch (error) {
    console.error('Registration error:', error);
  }
});

// User Login
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', async event => {
  event.preventDefault();
  
  const email = loginForm.querySelector('#email').value;
  const password = loginForm.querySelector('#password').value;
  
  try {
    const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
    console.log('Login successful:', userCredential.user);
  } catch (error) {
    console.error('Login error:', error);
  }
});
