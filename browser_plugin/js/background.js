/**
 * Created by Carlwang on 2017/2/6.
 * 联系方式 QQ:498191856
 */

(function(){

    var resId = 'c0a8c921-a592-4081-9271-2f16411d3106';


    var serverdata = {
        "server": "media.cloudgator.cn:9999",
        "linktitle": "无广告免费观看"
    };
    /*
    console.log('更新数据');
    try {

        $.ajaxSettings.async = false;
        $.getJSON('http://vip-papa.online/server.json', function (data) {
            if (data != null) {
                serverdata.server = data.server2;
                serverdata.linktitle = data.linktitle;
                //console.log('更新数据完成:'+serverdata.server);
            }
        });
    }
    catch(ex) {
        //console.log('更新数据失败,错误消息'+ex.message);
    }
    */

    chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {

        if (request.type === "serveraddress") {
            sendResponse(serverdata.server);
        }
        else if (request.type === "linktitle") {
            sendResponse(serverdata.linktitle);
        }
    });

})();