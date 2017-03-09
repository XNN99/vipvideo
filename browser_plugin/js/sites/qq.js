/**
 * Created by Carlwang on 2017/2/6.
 * 联系方式 QQ:498191856
 */

(function () {
    'use strict';

    angular.element(document).ready(function () {

        var url = window.location.host;
        if (url.indexOf('film.qq.com') >= 0 || url.indexOf('v.qq.com') >= 0) {

            viData.url = window.location.href;
            if($("h2[class='player_title']").length>0){

            }
            viData.title = $("h2[class='player_title']").text().trim();
            if($("meta[name='category']").length > 0){

                viData.category = $("meta[name='category']").attr("content").trim();
            }
            if(isNull(viData.category) && $("meta[name='keywords']").length > 0){
                viData.category = $("meta[name='keywords']").attr("content").trim();
            }
            if($("meta[name='description']").length > 0){

                viData.desc = $("meta[name='description']").attr("content").trim();
            }

            $("h1[class='video_title']").attr("ng-controller", 'InjectHtmlCtrl as ih');
            $("h1[class='video_title']").append('&nbsp;&nbsp;&nbsp;<a id="vipvideoLink" href="#" ng-click="ih.redirectVideoPage()" style="color:red;font-size:large;">{{LinkName}}</a>');
            angular.bootstrap($("h1[class='video_title']"), ['injectModule']);
        }

        if (url.indexOf('film.qq.com') >= 0 || url.indexOf('v.qq.com') >= 0) {
            insertNavigateBar();
        }
    });
})();