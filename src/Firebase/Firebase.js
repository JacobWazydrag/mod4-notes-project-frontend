import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBWgX7vd2KDTHGY8V0FMOf8Yx5sOps015E",
    authDomain: "mod4-final-frontend.firebaseapp.com",
    databaseURL: "https://mod4-final-frontend.firebaseio.com",
    projectId: "mod4-final-frontend",
    storageBucket: "mod4-final-frontend.appspot.com",
    messagingSenderId: "199659556449",
    appId: "1:199659556449:web:d060c4facc31be1c932420",
    measurementId: "G-4JPBJEYXRR"
};

firebase.initializeApp(config);
firebase.firestore();

export default firebase;