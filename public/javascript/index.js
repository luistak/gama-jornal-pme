var gama = [];

gama.userIp = '127.0.0.1';

/**
 * Function get the actual user ip address
 * @param Object - Callback object to be handled
 * @example 
 *  gama.getIp(function (ip) {
 *      console.log(ip);
 *  })
 */
gama.getIp = function (callback) {
    function response(s) {
        callback(window.userip);

        s.onload = s.onerror = null;
        document.body.removeChild(s);
    }

    function trigger() {
        window.userip = false;

        var s = document.createElement("script");
        s.async = true;
        s.onload = function() {
            response(s);
        };
        s.onerror = function() {
            response(s);
        };

        s.src = "https://l2.io/ip.js?var=userip";
        document.body.appendChild(s);
    }

    if (/^(interactive|complete)$/i.test(document.readyState)) {
        trigger();
    } else {
        document.addEventListener('DOMContentLoaded', trigger);
    }
}

/**
 * Return actual date
 * @return {string} - Actual date formatted on 'YYYY-MM-DD hh:mm:ss'
 */
gama.now = function () {
    return moment().format('YYYY-MM-DD hh:mm:ss');
}

gama.setUserIp = function () {
    $(document).trigger('ip-loading');
    gama.getIp(function (ip) {
        $(document).trigger('ip-loaded');
        gama.userIp = ip;
    });
}

$(function() {
    gama.setUserIp();
});