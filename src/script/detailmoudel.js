define(['jquery', 'jcookie', 'jlazyload'], function() {
    return {
        init() {
            render: ! function() {
                let num = location.search.slice(1).split("=")[1]
                if (!num) {
                    num = 1
                }
                $.ajax({
                    type: "get",
                    url: "http://192.168.1.108/text/bobostor/bobostore/php/getsid.php",
                    data: {
                        sid: num
                    },
                    dataType: "JSON",
                }).done(function(data) {
                    let str1 = ""
                    let piclist = data["piclisturl"].split(",")
                    str1 += ` <img src="${data["url"]}" alt="" class="sp">
                    <div class="sf"></div>`
                    $(".content-glass").html(str1)
                    $(".bf").html(`<img src="${data["url"]}" alt="" class="bp">`)
                    let str3 = ""
                    str3 += `<div>
                    <img src="${piclist[0]}" alt="">
                    </div>
                    <div>
                    <img src="${piclist[1]}" alt="">
                    </div>
                    <div>
                    <img src="${piclist[2]}" alt="">
                    </div>
                    <div>
                    <img src="${piclist[3]}" alt="">
                    </div>
                    <div>
                    <img src="${piclist[4]}" alt="">
                    </div>`
                    $(".content-piclist").html(str3)

                    let str4 = ""
                    str4 += `<h3>${data["title"]}</h3>
                        <p class="content-right-title">多种热饮/果汁，高速搅打，不用开盖便可直接倾倒</p>
                        <div class="content-right-main">
                        <p class="price">
                            <span>活动价</span> ¥
                            <span>${data["price"]}</span>
                            <del>¥${data["oldprice"]}</del>
                        </p>
                        <p>
                            <span>限制</span>
                            <span>特价商品不可与优惠券叠加使用</span>
                        </p>
                        <p>
                            <span>邮费</span>
                            <span>满99元免邮</span>
                        </p>
                        <p>
                            <span>服务</span>
                            <span>
                                ･ 网易自营品牌･ 30天无忧退换･ 不可用券･ 国内部分地区不可配送
                            </span>
                        </p>
                        </div>
                        <div class="count">
                        <div class="count_title">数里</div>
                        <div class="count_add">+</div>
                        <input type="text" name="" value="1" class="carnum">
                        <div class="count_edd">-</div>
                        </div>
                        <div class="buy">
                        <div class="buy_1">立即购买</div>
                        <div class="buy_2">加入购物车</div>
                    </div>`
                    $(".content-right").html(str4)

                })
            }();
            glass: ! function() {

                let box = $(".content-glass")

                box.on("mouseover", function() {

                    $(".sf").show()
                    $(".bf").show()
                    $(box).on("mousemove", function(ev) {
                        let bili = $(".bp").width() / $(".sp").width()

                        let left1 = ev.pageX - box.offset().left - $(".sf").width() / 2
                        let top1 = ev.pageY - box.offset().top - $(".sf").height() / 2
                        if (left1 < 0) {
                            left1 = 0
                        } else if (left1 >= box.width() - $(".sf").width()) {
                            left1 = box.width() - $(".sf").width()
                        }
                        if (top1 < 0) {
                            top1 = 0
                        } else if (top1 >= box.height() - $(".sf").height()) {
                            top1 = box.height() - $(".sf").height()
                        }

                        $(".sf").css({
                            left: left1,
                            top: top1,
                        })
                        $(".bp").css({
                            left: -left1 * bili,
                            top: -top1 * bili,
                        })
                    })



                })
                box.on("mouseout", function() {

                    $(".sf").hide()
                    $(".bf").hide()

                })

            }();
            //点击换图
            click: ! function() {
                $(".content-piclist").on("click", "img", function() {
                    $(".bp").attr("src", $(this).attr("src"))
                    $(".sp").attr("src", $(this).attr("src"))
                    console.log(1)
                })
            }();
            //数量按钮点击
            numclick: ! function() {
                $(".content-right").on("click", ".count_add", function() {

                    let a = Number($(".carnum").val())
                    $(".carnum").val(a + 1)
                })
                $(".content-right").on("click", ".count_edd", function() {
                    let count = 1
                    if ($(".carnum").val() == 0) {
                        count = 0
                    } else {
                        count = 1
                    }
                    let a = Number($(".carnum").val())
                    $(".carnum").val(a - count)
                })
            }();
            //添加购物车 村cooke
            carclick: ! function() {
                $(".content-right").on("click", ".buy_2", function() {
                    //存cook
                    let sid = location.search.slice(1).split("=")[1]
                    let num = $(".carnum").val()
                    let sidarr = []
                    let numarr = []
                    if ($.cookie("sidarr")) {
                        sidarr = $.cookie("sidarr").split(",")
                    }
                    if ($.cookie("numarr")) {
                        numarr = $.cookie("numarr").split(",")
                    }

                    if (sidarr.indexOf(sid) == -1) {
                        sidarr.push(sid)
                        numarr.push(num)

                    } else {
                        numarr[sidarr.indexOf(sid)] = parseInt(numarr[sidarr.indexOf(sid)]) + parseInt(num)
                    }
                    $.cookie("sidarr", sidarr, { expires: 7 })
                    $.cookie("numarr", numarr, { expires: 7 })
                })
            }();
        }
    }
})