<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCPL0I5MLkkFsdbzIJIsPgbHtI2cSa2gdw",
    authDomain: "it-support-ac1da.firebaseapp.com",
    projectId: "it-support-ac1da",
    storageBucket: "it-support-ac1da.firebasestorage.app",
    messagingSenderId: "567057294883",
    appId: "1:567057294883:web:189d5909861dee3e4eb396",
    measurementId: "G-HDWCENSBRT"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>