var login = $('#login');
//以检查用户名不能为空不能有特殊符号为例
var checkUserName = function (id,errorId){
    var username = document.getElementById(id);//获取username那个div
    var feedback = document.getElementById(errorId);
    //不能为空
    if(username.value==""){
        feedback.innerHTML = "用户名为空！";//修改username-feedback div中的内容
        username.classList.remove("is-valid");//清除合法状态
        username.classList.add("is-invalid");//添加非法状态
        return false;//onsubmit  return false阻止表单提交
    }
    //不能有特殊符号
    var patrn = /[@#\$%\^&\*]+/g;//正则表达式
    if(patrn.exec(username.value)){
        feedback.innerHTML = "用户名不能存在特殊符号！";
        username.classList.remove("is-valid");
        username.classList.add("is-invalid");
        return false;
    }
    //清除错误提示，改成成功提示
    username.classList.remove("is-invalid");
    username.classList.add("is-valid");
    feedback.innerHTML="";
    return true;
}
var checkPassword = function (id,errorId){
    var username = document.getElementById(id);
    var feedback = document.getElementById(errorId);
    //不能为空
    if(username.value==""){
        feedback.innerHTML = "密码为空！";
        username.classList.remove("is-valid");
        username.classList.add("is-invalid");
        return false;
    }
    username.classList.remove("is-invalid");
    username.classList.add("is-valid");
    feedback.innerHTML="";
    return true;
}
login.on('click',function(){
    if(checkUserName('login-username','username-error') && checkPassword('login-password','password-error')){
        window.location = 'home.html';
    }
});
$("#fileInput").fileinput({
    showUpload: false,
    showCaption: false,
    browseClass: "btn btn-primary",
    fileType: "any",
    previewFileIcon: ""
});
