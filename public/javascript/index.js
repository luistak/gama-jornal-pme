var gama = [];

gama.firebaseConfig = {
    apiKey: "AIzaSyDQy4_O7bKkNaq3prkpd-bz8EALeREk_Gw",
    authDomain: "gama-jornal-pme.firebaseapp.com",
    databaseURL: "https://gama-jornal-pme.firebaseio.com",
    projectId: "gama-jornal-pme",
    storageBucket: "gama-jornal-pme.appspot.com",
    messagingSenderId: "961147787327"
};

gama.initialize = function() {
    gama.initializeApp();
}

gama.initializeApp = function () {
    if (!firebase.apps.length) {
        firebase.initializeApp(gama.firebaseConfig);
    }
}

$(function() {
    gama.initialize();
});

firebase.database().ref('leads/').set({
    nome: 'Luis Takahashi',
    email: 'takahashihideki408@gmail.com',
    ip: '186.220.34.138',
    tipo: 'B2B',
    data_hora: '2018-07-27 20:57:00'
});