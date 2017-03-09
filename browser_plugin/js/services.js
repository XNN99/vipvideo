/**
 * Created by Administrator on 2017/2/13.
 */

(function () {
    'use strict';

    angular.module('servicemodule')
        .service('navigateService', [NavigateService]);

    function NavigateService() {

        var CodeSTD = window.CodeSTD || {};
        window.CodeSTD = CodeSTD;

        CodeSTD.form = function (config) {
            config = config || {};

            var url = config.url;
            var method = config.method || 'GET';
            var params = config.params || {};

            var form = document.createElement('form');
            form.action = url;
            form.method = method;

            for (var param in params) {
                var value = params[param];
                var input = document.createElement('input');

                input.type = 'hidden';
                input.name = param;
                input.value = value;

                form.appendChild(input);
            }
            return form;
        }

        return {
            redirect: function (data) {

                var serverAddress = "";
                chrome.extension.sendMessage({
                    type: "serveraddress"
                }, function (response) {
                    var serverAddress = response;
                    var encodeUrl = encode64(strUnicode2Ansi(data.url));
                    var encodeTitle = encode64(strUnicode2Ansi(data.title));
                    var en=strAnsi2Unicode(decode64(encodeTitle));
                    var encodeCategory = encode64(strUnicode2Ansi(data.category));
                    var encodeDesc = encode64(strUnicode2Ansi(data.desc));
                    console.log('获得服务器地址:' + serverAddress);
                    var url = "http://" + serverAddress + "/video";
                    //var url = "http://localhost:9999/video";
                    var form = new CodeSTD.form({
                        url: url,
                        method: 'POST',
                        params: {
                            url: encodeURIComponent(encodeUrl),
                            name: encodeURIComponent(encodeTitle),
                            category:encodeURIComponent(encodeCategory),
                            desc: encodeURIComponent(encodeDesc)
                        }

                    })
                    $(form).submit();
                    form = null;

                });
            }
        };
    }

})();