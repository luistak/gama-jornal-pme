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
gamaData.leadFormOptions = {
	rules: {
		email: {
			required: true,
			regx: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
		},
		nome: {
			required: true,
			regx: /^[a-zA-ZáÁéÉ][a-zA-ZáÁéÉ]+([ ][a-zA-ZáÁéÉ]+)*([ ][a-zA-ZáÁéÉ][a-zA-ZáÁéÉ]+)+([ ][a-zA-ZáÁéÉ]+)*$/,
			minlength: 3
		},
		empresa: {
			required: false,
			minlength: 4
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
			regx: "Seu nome deve conter no mínimo 2 palavras, e não deve conter caracteres especiais",
			minlength: "Seu nome deve ter no mínimo 3 caracteres",
			nome: "Digite seu nome para finalizar"
		},
		empresa: {
			minlength: "Seu empresa deve ter no mínimo 4 caracteres",
			empresa: "Digite seu empresa para finalizar"
		},
	},
};

gamaData.initialize = function() {
	$(document).on('ip-loaded', function () {
		gamaData.initializeApp();
		gamaData.setCustomValidation();
		gamaData.indexFormsListeners();
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

gamaData.indexFormsListeners = function () {
	// Footer Form
	var footerForm = $(gamaData.formSelector);
	footerForm.validate(gamaData.leadFormOptions);

	$(document).on('submit', gamaData.formSelector, function (event) {
		event.preventDefault();
		var formData = $(this).serializeArray();
		var nome, empresa, email;

		formData.forEach(function (data) {
			if (data.name == 'nome') {
				nome = data.value;
			} else if (data.name == 'empresa') {
				empresa = data.value;
			} else if (data.name == 'email') {
				email = data.value;
			}
		});

		var Lead = gamaData.formatLead(nome, empresa, email);
		gamaData.pushLead(Lead);

		$(document).on('push-response', function (response) {
			if (response) {
				// Success
				var eBookLink = gama.getBaseUrl() + '/includes/ebook.pdf'
				$('form').trigger('reset');
				gama.redirect(eBookLink);
				alert('Você foi inscrito com sucesso!');
				
				gama.closeModal();
				$(this).off('push-response');
			} else {
				// Error
				
								gama.closeModal();
				$(this).off('push-response');
				alert('Oops, houve algum erro, por favor tente mais tarde :(');
			}
		});
	});

	// Modal form
	var selector = '[data-gama-modal-form]';
	var modalForm = $(selector);
	modalForm.validate(gamaData.leadFormOptions);

	$(document).on('submit', selector, function (event) {
		event.preventDefault();
		var formData = $(this).serializeArray();
		var nome, empresa, email;
		var downloadFile = $(this).attr('data-gama-download');

		formData.forEach(function (data) {
			if (data.name == 'nome') {
				nome = data.value;
			} else if (data.name == 'empresa') {
				empresa = data.value;
			} else if (data.name == 'email') {
				email = data.value;
			}
		});

		var Lead = gamaData.formatLead(nome, empresa, email);
		gamaData.pushLead(Lead);

		$(document).on('push-response', function (response) {
			if (response) {
				// Success
				var link = downloadFile || '/includes/ebook.pdf';
				link = gama.getBaseUrl() + link
				gama.redirect(link);

				gama.closeModal();
				$('form').trigger('reset');
				$(this).off('push-response');
				alert('Você foi inscrito com sucesso!');
			} else {
				// Error
				gama.closeModal();
				$('form').trigger('reset');
				$(this).off('push-response');
				alert('Oops, houve algum erro, por favor tente mais tarde :(');
			}
		});
	});

	// News form
	var newsSelector = '[data-gama-news-form]';
	var newsForm = $(newsSelector);
	newsForm.validate(gamaData.leadFormOptions);

	$(document).on('submit', newsSelector, function (event) {
		event.preventDefault();
		var formData = $(this).serializeArray();
		var nome, empresa, email;

		formData.forEach(function (data) {
			if (data.name == 'nome') {
				nome = data.value;
			} else if (data.name == 'empresa') {
				empresa = data.value;
			} else if (data.name == 'email') {
				email = data.value;
			}
		});

		var Lead = gamaData.formatLead(nome, empresa, email);
		gamaData.pushLead(Lead);

		$(document).on('push-response', function (response) {
			if (response) {
				// Success
				gama.closeModal();
				$('form').trigger('reset');
				$(this).off('push-response');
				alert('Você foi inscrito com sucesso!');
			} else {
				// Error
				gama.closeModal();
				$('form').trigger('reset');
				$(this).off('push-response');
				alert('Oops, houve algum erro, por favor tente mais tarde :(');
			}
		});
	});

	// Landing form
	var landingSelector = '[data-gama-landing-form]';
	var landingForm = $(landingSelector);
	landingForm.validate(gamaData.leadFormOptions);

	$(document).on('submit', landingSelector, function (event) {
		event.preventDefault();
		var formData = $(this).serializeArray();
		var nome, empresa, email;
		var downloadFile = $(this).attr('data-gama-download');

		formData.forEach(function (data) {
			if (data.name == 'nome') {
				nome = data.value;
			} else if (data.name == 'empresa') {
				empresa = data.value;
			} else if (data.name == 'email') {
				email = data.value;
			}
		});

		var Lead = gamaData.formatLead(nome, empresa, email);
		gamaData.pushLead(Lead);

		$(document).on('push-response', function (response) {
			if (response) {
				// Success
				var link = downloadFile || '/includes/ebook.pdf';
				link = gama.getBaseUrl() + link
				gama.redirect(link);

				gama.closeModal();
				$('form').trigger('reset');
				$(this).off('push-response');
				alert('Você foi inscrito com sucesso!');
			} else {
				// Error
				gama.closeModal();
				$('form').trigger('reset');
				$(this).off('push-response');
				alert('Oops, houve algum erro, por favor tente mais tarde :(');
			}
		});
	});
}

gamaData.formatLead = function (nome, empresa, email) {
	nome = nome || '-';
	empresa = empresa || '-';
	email = email || '-';

	var Lead = {
		nome: nome,
		empresa: empresa,
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