// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/9.9.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.9.1/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.

firebase.initializeApp({
    projectId: 'smartfarm-71472',
    appId: '1:888123966099:web:58d4b052394acacd5c4366',
    storageBucket: 'smartfarm-71472.appspot.com',
    apiKey: 'AIzaSyDkDnulwJ5z2rFLQDqe1hxuwcmE1KN9ZhA',
    authDomain: 'smartfarm-71472.firebaseapp.com',
    messagingSenderId: '888123966099',
    measurementId: 'G-NSH0GVTMCX',
    messagingSenderId: '888123966099'
});
// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();