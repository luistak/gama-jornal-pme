var gamaData = [];

gamaData.formSelector = '';

gamaData.firebaseConfig = {
    apiKey: "AIzaSyDQy4_O7bKkNaq3prkpd-bz8EALeREk_Gw",
    authDomain: "gama-jornal-pme.firebaseapp.com",
    databaseURL: "https://gama-jornal-pme.firebaseio.com",
    projectId: "gama-jornal-pme",
    storageBucket: "gama-jornal-pme.appspot.com",
    messagingSenderId: "961147787327"
};

gamaData.initialize = function() {
    gamaData.initializeApp();
}

gamaData.initializeApp = function () {
    if (!firebase.apps.length) {
        firebase.initializeApp(gamaData.firebaseConfig);
    }
}

gamaData.formListener = function () {
    
    $(document).on()
}

$(function() {
    gamaData.initialize();
});