define(['jquery', 'jcookie', 'jlazyload', "pagination"], function() {
    return {
        init: function() {


            let nameid = true
            let passwordid = true
            let emailid = true
            let phoneid = true
                //用户名验证
            $("#usename").on("focus", function() {
                $("#usename").siblings("span").html("请输入用户名")
                $("#usename").siblings("span").css({
                    color: "red",
                })
            })
            $("#usename").on("blur", function() {
                if ($("#usename").val() != "") {
                    let strlen = $("#usename").val().replace(/[\u4e00-\u9fa5]/g, '**').length
                    let reg = /^[a-zA-Z\u4e00-\u9fa5]+$/;
                    console.log(strlen)
                    if (!(strlen > 14)) {
                        if (reg.test($("#usename").val())) {
                            $.ajax({
                                type: "post",
                                url: "http://192.168.1.108/text/bobostor/bobostore/php/zhuce.php",
                                data: {
                                    usename: $("#usename").val(),
                                },

                            }).done(function(data) {
                                if (data) {
                                    $("#usename").siblings("span").html("√")
                                    $("#usename").siblings("span").css({
                                        color: "green",
                                    })
                                    nameid = true
                                } else {
                                    $("#usename").siblings("span").html("用户名已被注册")
                                    $("#usename").siblings("span").css({
                                        color: "red",
                                    })
                                    nameid = false
                                }
                            })

                        } else {
                            $("#usename").siblings("span").html("用户名只能用英文和中文")
                            $("#usename").siblings("span").css({
                                color: "red",
                            })
                            nameid = false
                        }
                    } else {
                        $("#usename").siblings("span").html("用户名不能超过14个字符")
                        $("#usename").siblings("span").css({
                            color: "red",

                        })
                        nameid = false
                    }
                } else {
                    $("#usename").siblings("span").html("用户名不能为空")
                    $("#usename").siblings("span").css({
                        color: "red",

                    })
                    nameid = false
                }
            })
            $("#usename").on("blur", function() {

                })
                //密码验证
            $("#password").on("focus", function() {
                $("#password").siblings("span").html("请输入用户名")
                $("#password").siblings("span").css({
                    color: "red",
                })

            })
            $("#password").on("input", function() {
                if ($("#password").val().length > 6 && $("#password").val().length < 14) {
                    let count = 0
                    let reg1 = /\d+/
                    let reg2 = /[a-z]+/
                    let reg3 = /[A-Z]+/
                    var reg4 = /[\W\_]+/

                    if (reg1.test($("#password").val())) {
                        count++
                    }
                    if (reg2.test($("#password").val())) {
                        count++
                    }
                    if (reg3.test($("#password").val())) {
                        count++
                    }
                    if (reg4.test($("#password").val())) {
                        count++
                    }
                    switch (count) {
                        case 1:
                            $("#password").siblings("span").html("弱")
                            $("#password").siblings("span").css({
                                color: "red",

                            })
                            passwordid = false
                            break;
                        case 2:
                        case 3:
                            $("#password").siblings("span").html("中")
                            $("#password").siblings("span").css({
                                color: "yellow",

                            })
                            passwordid = true
                            break;
                        case 4:
                            $("#password").siblings("span").html("强")
                            $("#password").siblings("span").css({
                                color: "green",

                            })
                            passwordid = true
                            break;
                    }

                } else {
                    $("#password").siblings("span").html("密码长度需6-16位")
                    $("#password").siblings("span").css({
                        color: "red",

                    })
                    passwordid = false
                }


            })
            $("#password").on("blur", function() {
                    if ($("#password").val() != "") {
                        if (passwordid) {
                            $("#password").siblings("span").html("√")
                            $("#password").siblings("span").css({
                                color: "green",

                            })
                        } else {
                            $("#password").siblings("span").html("密码格式不正确")
                            $("#password").siblings("span").css({
                                color: "red",

                            })
                        }
                    } else {
                        $("#password").siblings("span").html("密码格式不能为空")
                        $("#password").siblings("span").css({
                            color: "red",

                        })
                    }

                })
                //在次输入密码
            $("#passwordagn").on("focus", function() {
                $("#passwordagn").siblings("span").html("请在此输入密码")
                $("#passwordagn").siblings("span").css({
                    color: "red",

                })
            })
            $("#passwordagn").on("blur", function() {
                    if ($("#passwordagn").val() == $("#password").val()) {
                        $("#passwordagn").siblings("span").html("√")
                        $("#passwordagn").siblings("span").css({
                            color: "green",

                        })
                    } else {
                        $("#passwordagn").siblings("span").html("密码不一致")
                        $("#passwordagn").siblings("span").css({
                            color: "red",

                        })
                    }
                })
                //手机验证

            $("#phone").on("focus", function() {
                $("#phone").siblings("span").html("请输入手机")
                $("#phone").siblings("span").css({
                    color: "red",

                })
            })
            $("#phone").on("blur", function() {
                    if ($("#phone").val() != "") {
                        if (!($("#phone").val().length > 13)) {
                            $("#phone").siblings("span").html("√")
                            $("#phone").siblings("span").css({
                                color: "green",

                            })
                            phoneid = true
                        } else {
                            $("#phone").siblings("span").html("手机格式不正确")
                            $("#phone").siblings("span").css({
                                color: "red",

                            })
                            phoneid = false
                        }
                    } else {
                        $("#phone").siblings("span").html("手机不能为空")
                        $("#phone").siblings("span").css({
                            color: "red",

                        })
                        phoneid = false
                    }
                })
                //邮箱验证
            $("#email").on("focus", function() {
                $("#email").siblings("span").html("请输入邮箱")
                $("#email").siblings("span").css({
                    color: "red",

                })
            })
            $("#email").on("blur", function() {
                    if ($("#email").val() != "") {
                        let reg = /^(\w+([-+.]\w+)*)@(\w+([-.]\w+)*)\.(\w+([-.]\w+)*)$/
                        if (reg.test($("#email").val())) {
                            $("#email").siblings("span").html("√")
                            $("#email").siblings("span").css({
                                color: "green",

                            })
                            emailid = true
                        } else {
                            $("#email").siblings("span").html("邮箱格式不正确")
                            $("#email").siblings("span").css({
                                color: "red",

                            })
                            emailid = false
                        }
                    } else {
                        $("#email").siblings("span").html("邮箱 不能为空")
                        $("#email").siblings("span").css({
                            color: "red",

                        })
                        emailid = false
                    }
                })
                //提交验证
            $("form").on("submit", function() {
                if ($("#usename").val() == "") {
                    $("#usename").siblings("span").html("用户名不能为空")
                    $("#usename").siblings("span").css({
                        color: "red",
                    })

                    nameid = false
                }
                if ($("#password").val() == "") {

                    passwordid = false
                    $("#password").siblings("span").html("密码不能为空")
                }
                if ($("#phone").val() == "") {

                    phoneid = false
                    $("#phone").siblings("span").html("手机不能为空")
                }
                if ($("#email").val() == "") {

                    emailid = false
                    $("#email").siblings("span").html("邮箱不能为空")
                }
                if (!nameid || !passwordid || !emailid || !phoneid) {
                    return false;
                }
            })
        }
    }
})