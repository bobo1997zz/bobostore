define(['jquery', 'jcookie', 'jlazyload', "pagination"], function() {
    return {
        init: function() {
            //用户名验证

            let nameid = true
            let passwordid = true
            let emailid = true
            let phoneid = true
                // $("#usename").on("")
            $("form").on("submit", function() {
                console.log(1)
                if ($("#usename").val() === "") {
                    $("#usename span").html("用户名不能为空")
                    nameid = false
                }
                if (!nameid || !passwordid || !emailid || !phoneid) {
                    return false;
                }
            })
        }
    }
})