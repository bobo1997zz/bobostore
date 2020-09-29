define(['jquery', 'jcookie', 'jlazyload'], function() {
    return {
        init() {
            render: ! function() {
                //第一次
                let sid = $.cookie("sidarr").split(",").map(function(value, index) {
                    return Number(value)
                })

                let num = $.cookie("numarr").split(",").map(function(value, index) {
                    return Number(value)
                })
                $.ajax({
                    url: "http://192.168.13.29/text/bobostor/bobostore/php/jieko.php",
                    dataType: "JSON",
                }).done(function(data) {
                    let str = ""
                        // let allpic = null
                    for (let a of sid) {
                        let count = sid.indexOf(a)
                        str += `<div class="car_main_pro" sid="${a}">
                        <input type="checkbox" name="" id="" checked class="pro_of">
                        <img src="${data[a]["url"]}" alt="">
                        <p>${data[a]["title"]}</p>
                        <p class="price">¥${data[a]["price"]}</p>
                        <div class="num">
                            <div class="add">+</div>
                            <input type="text" value="${num[count]}" class="product_num">
                            <div class="edd">-</div>
                        </div>
                        <p class="allprice">¥${data[a]["price"]*num[count]}</p>
                        <span class="remove">删除</span>
                    </div>`

                    }
                    // $(".priceall1").html(allpic)
                    // $(".priceall2").html(allpic)
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
                setInterval(function() {
                    //定时器局部刷新
                    let sid = $.cookie("sidarr").split(",").map(function(value, index) {
                        return Number(value)
                    })

                    let num = $.cookie("numarr").split(",").map(function(value, index) {
                        return Number(value)
                    })
                    $.ajax({
                        url: "http://192.168.13.29/text/bobostor/bobostore/php/jieko.php",
                        dataType: "JSON",
                    }).done(function(data) {
                        let str = ""
                            // let allpic = null
                        for (let a of sid) {
                            let count = sid.indexOf(a)
                            str += `<div class="car_main_pro" sid="${a}">
                            <input type="checkbox" name="" id="" checked class="pro_of">
                            <img src="${data[a]["url"]}" alt="">
                            <p>${data[a]["title"]}</p>
                            <p class="price">¥${data[a]["price"]}</p>
                            <div class="num">
                                <div class="add">+</div>
                                <input type="text" value="${num[count]}" class="product_num">
                                <div class="edd">-</div>
                            </div>
                            <p class="allprice">¥${data[a]["price"]*num[count]}</p>
                            <span class="remove">删除</span>
                        </div>`

                        }
                        // $(".priceall1").html(allpic)
                        // $(".priceall2").html(allpic)
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
                }, 2000)

            }();

            //全选效果
            // focu: ! function() {
            //     let of1 = $(".allfocus1")
            //     let of2 = $(".allfocus2")
            //     of1.on()
            //     if (of1.attr("checked")) {

            //     } else {

            //     }
            // };
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
                        let tt = $(this).parents(".car_main_pro").attr("sid")
                        console.log(tt)
                        let index = sid.indexOf(tt)
                        sid.splice(index, 1)
                        num.splice(index, 1)
                        $.cookie("sidarr", sid, { expires: 7 })
                        $.cookie("numarr", num, { expires: 7 })

                    })
                    //数量郑家
                $(".car_main").on("click", ".add", function() {
                        let a = parseInt($(this).parents(".car_main_pro").find(".product_num").val())
                        $(this).parents(".car_main_pro").find(".product_num").val(a + 1)
                        let tt = $(this).parents(".car_main_pro").attr("sid")
                        let index = sid.indexOf(parseInt(tt))
                        num[index] = parseInt($(this).parents(".car_main_pro").find(".product_num").val())
                        $.cookie("numarr", num, { expires: 7 })
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
                    let tt = $(this).parents(".car_main_pro").attr("sid")
                    let index = sid.indexOf(parseInt(tt))
                    num[index] = parseInt($(this).parents(".car_main_pro").find(".product_num").val())
                    $.cookie("numarr", num, { expires: 7 })


                })
            }();

        }
    }
})