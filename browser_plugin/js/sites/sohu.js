/**
 * Created by Carlwang on 2017/2/6.
 * 联系方式 QQ:498191856
 */

(function () {
    'use strict';

    angular.element(document).ready(function () {

        var url = window.location.host;
        if (url.indexOf('film.sohu.com')>=0) {

            viData.url = window.location.href;
            if ($("div[class='movie-t']").length > 0){

                viData.title = $("div[class='movie-t']").text().trim();
            }

            //没有目录和描述
            if($("meta[name='category']").length > 0){

                viData.category = $("meta[name='category']").attr("content").trim();
            }
            if(isNull(viData.category) && $("meta[name='keywords']").length > 0){
                viData.category = $("meta[name='keywords']").attr("content").trim();
            }

            $("div[class='detailInfo_box'] >p").attr("ng-controller", 'InjectHtmlCtrl as ih');
            $("div[class='detailInfo_box'] >p").append('&nbsp;&nbsp;&nbsp;<a id="vipvideoLink" href="#" ng-click="ih.redirectVideoPage()" style="color:red;font-size:large;">{{LinkName}}</a>');
            angular.bootstrap($("div[class='detailInfo_box']"), ['injectModule']);

        }else if(url.indexOf('tv.sohu.com')>=0){

            viData.url = window.location.href;

            if($("meta[name='album']").length > 0){

                viData.title = $("meta[name='album']").attr("content").trim();
            }
            if(isNull(viData.title) && $("#crumbsBar >div[class='area cfix']>div[class='left']>h2").length > 0){
                viData.title = $("#crumbsBar >div[class='area cfix']>div[class='left']>h2").text().trim();
            }
            if($("meta[name='category']").length > 0){

                viData.category = $("meta[name='category']").attr("content").trim();
            }
            if (isNull(viData.category) && $("meta[name='keywords']").length > 0){
                viData.category = $("meta[name='keywords']").attr("content").trim();
            }
            if ($("meta[name='description']").length > 0) {

                viData.desc = $("meta[name='description']").attr("content").trim();
            }

            $("#crumbsBar >div[class='area cfix']>div[class='left']>h2").attr("ng-controller", 'InjectHtmlCtrl as ih');
            $("#crumbsBar >div[class='area cfix']>div[class='left']>h2").html(
                $("#crumbsBar >div[class='area cfix']>div[class='left']>h2").text()+'&nbsp;&nbsp;&nbsp;<a id="vipvideoLink" href="#" ng-click="ih.redirectVideoPage()" style="color:red;font-size:large;">{{LinkName}}</a>');
            angular.bootstrap($("#crumbsBar >div[class='area cfix']>div[class='left']>h2"), ['injectModule']);

        }

        if (url.indexOf('film.sohu.com') >= 0 || url.indexOf('tv.sohu.com') >= 0) {
            insertNavigateBar();
        }
    });
})();