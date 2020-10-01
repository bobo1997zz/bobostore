//渲染的函数
function renderzz() {
    let sid = $.cookie("sidarr").split(",").map(function(value, index) {
        return Number(value)
    })

    let num = $.cookie("numarr").split(",").map(function(value, index) {
        return Number(value)
    })
    $.ajax({
        url: "http://192.168.1.108/text/bobostor/bobostore/php/jieko.php",
        dataType: "JSON",
    }).done(function(data) {
        let str = ""
        for (let a of sid) {
            let count = sid.indexOf(a)
            str += `<div class="car_main_pro" sid="${a}">
            <input type="checkbox" name="" id=""  checked class="pro_of">
            <img src="${data[a-1]["url"]}" alt="">
            <p>${data[a-1]["title"]}</p>
            <p class="price">¥${data[a-1]["price"]}</p>
            <div class="num">
                <div class="add">+</div>
                <input type="text" value="${num[count]}" class="product_num">
                <div class="edd">-</div>
            </div>
            <p class="allprice">¥${parseFloat(data[a-1]["price"]*num[count]).toFixed(2) }</p>
            <span class="remove">删除</span>
            </div>`

        }
        $(".car_main").html(str)

        //计算总价哥
        let allprice = null
        $(".car_main_pro").each(function(index, valeue) {
            if ($(this).find(".pro_of").is(":checked")) {
                allprice += parseFloat($(this).find(".allprice").html().substring(1))
            }
        })


        $(".priceall1").html(parseFloat(allprice).toFixed(2))
        $(".priceall2").html(parseFloat(allprice).toFixed(2))

    })
}
define(['jquery', 'jcookie', 'jlazyload'], function() {
    return {
        init() {
            render: ! function() {
                renderzz()
            }();

            //全选效果
            focu: ! function() {
                let of1 = $(".allfocus1")
                let of2 = $(".allfocus2")
                of1.on("change", function() {
                    console.log(of1.prop("checked"))
                    if (of1.prop("checked")) {
                        $(".car_main .pro_of").prop("checked", true)
                    } else {
                        $(".car_main .pro_of").removeAttr("checked")

                    }
                    let allprice = null

                    $(".car_main_pro").each(function(index, valeue) {
                        if ($(this).find(".pro_of").is(":checked")) {
                            allprice += parseFloat($(this).find(".allprice").html().substring(1))
                        }
                        console.log($(this).find(".allprice").html())
                    })

                    $(".priceall1").html(parseFloat(allprice).toFixed(2))
                    $(".priceall2").html(parseFloat(allprice).toFixed(2))

                })
                $(".car_main").on("change", ".pro_of", function() {
                    console.log($(".car_main .pro_of:checked").size(), $(".car_main .pro_of").size())
                    if ($(".car_main .pro_of:checked").size() != $(".car_main .pro_of").size()) {
                        of1.removeAttr("checked")
                    } else {
                        of1.attr("checked", true)
                    }
                    let allprice = null

                    $(".car_main_pro").each(function(index, valeue) {
                        if ($(this).find(".pro_of").is(":checked")) {
                            allprice += parseFloat($(this).find(".allprice").html().substring(1))
                        }
                        console.log($(this).find(".allprice").html())
                    })

                    $(".priceall1").html(parseFloat(allprice).toFixed(2))
                    $(".priceall2").html(parseFloat(allprice).toFixed(2))

                })

            }();
            //删除和增加数量
            addnum: ! function() {
                let sid = $.cookie("sidarr").split(",").map(function(value, index) {
                    return Number(value)
                })

                let num = $.cookie("numarr").split(",").map(function(value, index) {
                        return Number(value)
                    })
                    //商品删除
                $(".car_main").on("click", ".remove", function() {
                        $(this).parents(".car_main_pro").remove()
                        let allprice = null

                        $(".car_main_pro").each(function(index, valeue) {
                            if ($(this).find(".pro_of").is(":checked")) {
                                allprice += parseFloat($(this).find(".allprice").html().substring(1))
                            }
                            console.log($(this).find(".allprice").html())
                        })

                        $(".priceall1").html(parseFloat(allprice).toFixed(2))
                        $(".priceall2").html(parseFloat(allprice).toFixed(2))


                    })
                    //数量郑家
                $(".car_main").on("click", ".add", function() {
                        let a = parseInt($(this).parents(".car_main_pro").find(".product_num").val())
                        $(this).parents(".car_main_pro").find(".product_num").val(a + 1)

                        //重新计算商品价格
                        let zjb = Number($(this).parents(".car_main_pro").find(".price").html().substring(1))
                        let zzm = Number($(this).parents(".car_main_pro").find(".product_num").val())
                            // console.log(zjb, zzm)

                        $(this).parents(".car_main_pro").find(".allprice").html("￥" + Number(parseFloat(zzm * zjb).toFixed(2)))
                            //重新计算总价
                        let allprice = null

                        $(".car_main_pro").each(function(index, valeue) {
                            if ($(this).find(".pro_of").is(":checked")) {
                                allprice += parseFloat($(this).find(".allprice").html().substring(1))
                            }
                            console.log($(this).find(".allprice").html())
                        })

                        $(".priceall1").html(parseFloat(allprice).toFixed(2))
                        $(".priceall2").html(parseFloat(allprice).toFixed(2))
                    })
                    //数量减少
                $(".car_main").on("click", ".edd", function() {
                    let count = 1
                    let a = parseInt($(this).parents(".car_main_pro").find(".product_num").val())
                    if (a <= 0) {
                        count = 0
                    } else {
                        count = 1
                    }
                    $(this).parents(".car_main_pro").find(".product_num").val(a - count)
                        //重新计算商品价格
                    let zjb = Number($(this).parents(".car_main_pro").find(".price").html().substring(1))
                    let zzm = Number($(this).parents(".car_main_pro").find(".product_num").val())
                    console.log(zjb, zzm)
                    $(this).parents(".car_main_pro").find(".allprice").html("￥" + Number(parseFloat(zzm * zjb).toFixed(2)))
                        //重新计算总价
                    let allprice = null
                    $(".car_main_pro").each(function(index, valeue) {
                        if ($(this).find(".pro_of").is(":checked")) {
                            allprice += parseFloat($(this).find(".allprice").html().substring(1))
                        }
                    })
                    $(".priceall1").html(parseFloat(allprice).toFixed(2))
                    $(".priceall2").html(parseFloat(allprice).toFixed(2))


                })
            }();

        }
    }
})