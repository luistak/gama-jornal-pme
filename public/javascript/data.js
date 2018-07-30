var gamaData = [];

gamaData.formSelector = '[data-gama-form]';
gamaData.tipoPadrao = 'B2B';
gamaData.firebaseConfig = {
    apiKey: "AIzaSyDQy4_O7bKkNaq3prkpd-bz8EALeREk_Gw",
    authDomain: "gama-jornal-pme.firebaseapp.com",
    databaseURL: "https://gama-jornal-pme.firebaseio.com",
    projectId: "gama-jornal-pme",
    storageBucket: "gama-jornal-pme.appspot.com",
    messagingSenderId: "961147787327"
};
gamaData.database = null;
gamaData.leadCollection = 'jinchuuriki/kurama/leads';

gamaData.initialize = function() {
    $(document).on('ip-loaded', function () {
        gamaData.initializeApp();
        gamaData.setCustomValidation();
        gamaData.formListener();
        gamaData.databaseSetup();
    });
}

gamaData.initializeApp = function () {
    if (!firebase.apps.length) {
        firebase.initializeApp(gamaData.firebaseConfig);
    }
}

gamaData.databaseSetup = function () {
    if (!firebase.apps.length) {
        gamaData.initializeApp();
    }

    gamaData.database = firebase.database();
}

gamaData.formListener = function () {
    var form = $(gamaData.formSelector);
    form.validate({
        rules: {
            email: {
                required: true,
                regx: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            },
            nome: {
                required: true,
                minlength: 3
            },
            cargo: {
                required: true,
                minlength: 3
            }
        },
        messages: {
            email: {
                required: "Digite seu e-mail para finalizar",
                regx: "Seu email deve estar no formato nome@dominio.com",
                email: "Digite seu e-mail para finalizar"
            },
            nome: {
                required: "Digite seu nome para finalizar",
                minlength: "Seu nome deve ter no mínimo 3 caracteres",
                nome: "Digite seu nome para finalizar"
            },
            cargo: {
                required: "Digite seu cargo para finalizar",
                minlength: "Seu cargo deve ter no mínimo 3 caracteres",
                cargo: "Digite seu cargo para finalizar"
            },
        },
    });

    $(document).on('submit', gamaData.formSelector, function (event) {
        event.preventDefault();
        var formData = $(this).serializeArray();
        var nome, cargo, email;

        formData.forEach(function (data) {
            if (data.name == 'nome') {
                nome = data.value;
            } else if (data.name == 'cargo') {
                cargo = data.value;
            } else if (data.name == 'email') {
                email = data.value;
            }
        });

        var Lead = gamaData.formatLead(nome, cargo, email);
        gamaData.pushLead(Lead);

        $(document).on('push-response', function (response) {
            if (response) {
                // Success
                console.log('Inseriu no banco com sucesso')
                $(this).off('push-response');
            } else {
                // Error
                console.error('Houve algum erro')
                $(this).off('push-response');
            }
        });
    });
}

gamaData.formatLead = function (nome, cargo, email) {
    nome = nome || 'Empresa Padrão';
    cargo = cargo || 'CEO';
    email = email || 'contato@empresa-padrao.com.br';

    var Lead = {
        nome: nome,
        cargo: cargo,
        email: email,
        ip: gama.userIp,
        data_hora: gama.now(),
        tipo: gamaData.tipoPadrao,
    };

    return Lead;
}

gamaData.setCustomValidation = function () {
    $.validator.addMethod("regx", function(value, element, regexpr) {
        return regexpr.test(value);
    }, "Verifique o valor digitado.");
}

/**
 * Push lead to database
 * @param {Object} lead 
 */
gamaData.pushLead = function (lead) {
    if (!lead) {
        return false;
    }

    gamaData.database
        .ref(gamaData.leadCollection)
        .push(lead)
        .then(function(response) {
            $(document).trigger('push-response', true);
        })
        .catch(function(error) {
            $(document).trigger('push-response', false);
        });
}

$(function() {
    gamaData.initialize();
});