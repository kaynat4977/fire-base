
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js"; 
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,
 signInWithPopup, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail,} from
  "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js"; 
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebaseanalytics.js"; 

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCP7MMozyRhnQ1352vYCuHNdjWbOp4VJUo",
    authDomain: "fir-project-23a06.firebaseapp.com",
    projectId: "fir-project-23a06",
    storageBucket: "fir-project-23a06.firebasestorage.app",
    messagingSenderId: "913391268975",
    appId: "1:913391268975:web:6549844c2df0f5da02c99a",
    measurementId: "G-X4DETYKTWE"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  document.getElementById("signup-btn")?.addEventListener("click", () => {  
 const email = document.getElementById("signup-email").value;  
 const password = document.getElementById("signup-password").value;  
   createUserWithEmailAndPassword(auth, email, password)    
 .then(() => {       alert("Sign Up Successful!");   
     window.location.href = "welcome.html";   
      })    
       .catch((error) => {     
          alert(error.message);     
        });
     }); 

     document.getElementById("login-btn")?.addEventListener("click", () => { 
      const email = document.getElementById("login-email").value; 
      const password = document.getElementById("login-password").value;   
     signInWithEmailAndPassword(auth, email, password)   
    .then(() => {    
   alert("Login Successful!"); 
   window.location.href = "welcome.html";  
   })     
   .catch((error) => {     
  alert(error.message);   
  });
 });  
 document.getElementById("google-btn")?.addEventListener("click", () => { 
    signInWithPopup(auth, provider)    
     .then(() => {   
    alert("Login Successful!");   
    window.location.href = "welcome.html"; 
   })     
   .catch((error) => {   
     alert(error.message);   
      }); 
    }); 
    document.getElementById("logout-btn")?.addEventListener("click", () => 
    {   signOut(auth)    
     .then(() => {       
     alert("Logged Out Successfully!");     
      window.location.href = "index.html"; 
    })    
     .catch((error) => {   
    alert(error.message);  
   });
 }); 
 onAuthStateChanged(auth, (user) => {   
    if (user && window.location.pathname.includes("welcome.html"))
     {     document.getElementById("user-email").textContent = user.email; 
  } 
  else if (!user && window.location.pathname.includes("welcome.html"))
   {     window.location.href = "index.html";  
 } 
}
); 
















