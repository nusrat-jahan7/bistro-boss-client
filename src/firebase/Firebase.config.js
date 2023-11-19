import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD21UdZuwKmTc6pW2brEOfjcYBX9voXNJA",
  authDomain: "bistro-b-food.firebaseapp.com",
  projectId: "bistro-b-food",
  storageBucket: "bistro-b-food.appspot.com",
  messagingSenderId: "72816610795",
  appId: "1:72816610795:web:d96df5dbde91d71c8addae"
};

const app = initializeApp(firebaseConfig);  
export default app;