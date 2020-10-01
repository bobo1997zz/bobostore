define(['jquery', 'jcookie', 'jlazyload', "pagination"], function() {
    return {
        init: function() {
            $("#button").on("click", function() {
                $.ajax({
                    type: "post",
                    url: "http://192.168.1.108/text/bobostor/bobostore/php/login.php",
                    data: {
                        usename: $("#usename").val(),
                        password: $("#password").val(),
                    },
                }).done(function(data) {
                    if (data) {
                        $.cookie("name", $("#usename").val(), { expires: 7 })
                        location.href = "http://192.168.1.108/text/bobostor/bobostore/src/index1.html"
                    } else {
                        $("#usename").val("")
                        $("#password").val("")
                    }
                })
            })
        }
    }
})