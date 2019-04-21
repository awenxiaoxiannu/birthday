$('#login-button').click(function (event) {
    var userName = document.getElementById("userName").value;
    var pwd = document.getElementById("pwd").value;
    //修改密码请改此处
    if (userName == "叶婧雯" && pwd == "258080") {
        event.preventDefault();
        $('form').fadeOut(500);
        $('.wrapper').addClass('form-success');
        requestFullScreen();
        setTimeout(function () {
            location.href = "fairy.html";
        }, 2000);
    } else {
        if (userName != "叶婧雯") {
            alert("姓名错误！这好像不是为你准备的");
        } else {
            alert("密码错误！\n提示：我手机密码");
        }
    }
});

function requestFullScreen(element) {
    var element = document.documentElement;
    var requestMethod = element.requestFullScreen || //W3C
        element.webkitRequestFullScreen || //Chrome等
        element.mozRequestFullScreen || //FireFox
        element.msRequestFullScreen; //IE11
    if (requestMethod) {
        requestMethod.call(element);
    } else if (typeof window.ActiveXObject !== "undefined") {//for Internet Explorer
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
            wscript.SendKeys("{F11}");
        }
    }
}