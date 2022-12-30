// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAKPSD6K6MN-5GdFf-C-6toG7CAtDmawm4",
    authDomain: "samplemainsite.firebaseapp.com",
    projectId: "samplemainsite",
    storageBucket: "samplemainsite.appspot.com",
    messagingSenderId: "1019603605914",
    appId: "1:1019603605914:web:21f2664aaed7833c6c4223",
    measurementId: "G-NK8PB78KYJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export function FirebaseApp(){
    return initializeApp(firebaseConfig);
}
const storage = getStorage(app);
export {storage};
