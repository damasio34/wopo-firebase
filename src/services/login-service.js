(function (angular) {
    'use strict';

    angular
        .module('wopo-firebase.services')
        .factory('LoginService', LoginService);

    function LoginService() {
        var self = this;

        var _service = {
            getToken: _getToken,
            setToken: _setToken,
            getUsuario: getUsuario,
            incluir: incluir,
            login: login,
            logout: logout,
            recuperarSenha: recuperarSenha,
            usuarioAutenticado: usuarioAutenticado
        };

        return _service;
    }

})(angular);
