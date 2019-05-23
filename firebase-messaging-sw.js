importScripts('https://www.gstatic.com/firebasejs/6.0.3/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/6.0.3/firebase-messaging.js');

firebase.initializeApp({
    'messagingSenderId': "426089701038"
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log('Received background message ', payload);
    return self.registration.showNotification({}, {});
});
