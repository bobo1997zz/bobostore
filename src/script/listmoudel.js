define(['jquery', 'jcookie', 'jlazyload', "pagination"], function() {
    return {
        init() {
            //列表页渲染
            render: ! function() {
                //声明排序数组
                let oarr = []
                let narr = []
                let price = null
                let prices = null
                    //第一次请求ajax
                $.ajax({
                        url: "http://192.168.1.108/text/bobostor/bobostore/php/listdata.php",
                        dataType: "JSON"
                    }).done(function(data) {
                        let str = ""
                        $(data).each(function(index, value) {
                            str += `<li><a href="http://192.168.1.108/text/bobostor/bobostore/src/detail.html?sid=${value["sid"]}">
                            <div class="content_pic">
                                <img class="lazy" data-original="${value["url"]}" alt="">
                            </div>
                            <p class="content_pic_biaoqina">新人特价</p>
                            <p class="content_pic_title">${value["title"]}</p>
                            <p class="content_pic_price">
                                <span class="np">￥${value["price"]}</span>
                                <del class="op">￥${value["oldprice"]}</del>
                            </p>
                            <hr>
                            <p class="content_pic_js">撑腰护颈，舒适就坐一整天</p></a>
                        </li>`

                        })
                        $("#content ul").html(str)

                        $("img.lazy").lazyload({
                            effect: "fadeIn" //图片显示方式
                        });
                        //重置数组
                        oarr = []
                        narr = []
                        price = null
                        prices = null
                        let li = $("#content ul li")
                        li.each(function(index, value) {
                            narr[index] = $(this)
                            oarr[index] = $(this)
                        })
                    })
                    //使分页的插件跟据页码请求AJAX
                $(".page").pagination({
                    pageCount: 3,
                    jump: true,
                    prevContent: '上一页',
                    nextContent: '下一页',
                    callback: function(api) {
                        $.ajax({
                            type: "get",
                            url: "http://192.168.1.108/text/bobostor/bobostore/php/listdata.php",
                            data: {
                                page: api.getCurrent()
                            },
                            dataType: "JSON"
                        }).done(function(data) {

                            let str = ""
                            $(data).each(function(index, value) {
                                str += `<li><a href="http://192.168.1.108/text/bobostor/bobostore/src/detail.html?sid=${value["sid"]}">
                                    <div class="content_pic">
                                        <img  src="${value["url"]}" alt="">
                                    </div>
                                    <p class="content_pic_biaoqina">新人特价</p>
                                    <p class="content_pic_title">${value["title"]}</p>
                                    <p class="content_pic_price">
                                        <span class="np">￥${value["price"]}</span>
                                        <del class="op">￥${value["oldprice"]}</del>
                                    </p>
                                    <hr>
                                    <p class="content_pic_js">撑腰护颈，舒适就坐一整天</p></a>
                                </li>`

                            })
                            $("#content ul").html(str)
                                //重置数组
                            oarr = []
                            narr = []
                            price = null
                            prices = null
                            let li = $("#content ul li")
                            li.each(function(index, value) {
                                narr[index] = $(this)
                                oarr[index] = $(this)
                            })
                        })

                    }
                });

                //升序排序
                $(".jaigepx").on("click", function() {
                        for (let a = 0; a < narr.length - 1; a++) {
                            for (let b = 0; b < narr.length - 1; b++) {
                                price = parseFloat(narr[b].find(".np").html().substring(1))
                                prices = parseFloat(narr[b + 1].find(".np").html().substring(1))
                                if (price < prices) {
                                    let temp = narr[b]
                                    narr[b] = narr[b + 1]
                                    narr[b + 1] = temp
                                }
                            }
                        }
                        $.each(narr, function(index, value) {
                            $('#content ul').append(value);
                        });

                    })
                    //默认排序
                $(".morenpx").on("click", function() {
                    $.each(oarr, function(index, value) {
                        $('#content ul').append(value);
                    });

                })
            }();
            //


            LRnavXG: ! function() {
                let leftnav = $("#left_nav")
                let rightnav = $("#right_nav")
                $(window).on("scroll", function() {
                        //滚动大于500 左右导航改为固定定位  正常相对定位
                        if ($(window).scrollTop() > 550) {
                            leftnav.css({
                                position: "fixed",
                                left: "50px",
                                top: "50px",
                            })
                            rightnav.css({
                                position: "fixed",
                                right: "0px",
                                top: "50px",
                            })

                        } else {
                            leftnav.css({
                                position: "absolute",
                                right: "50px",
                                top: "550px",
                            })
                            rightnav.css({
                                position: "absolute",
                                right: "0px",
                                top: "550px",
                            })
                        }
                    })
                    //左侧导航条改变字体颜色效果
                leftnav.on("mouseover", "li", function() {
                    $(this).css({
                        color: "#d4282d",
                    })
                })
                leftnav.on("mouseout", "li", function() {
                        $(this).css({
                            color: "black",
                        })
                    })
                    //移动错过180 隐藏头部导航条出现
                $(window).on("scroll", function() {
                        if ($(window).scrollTop() > 180) {
                            $("#search-scroll").css({
                                display: "block",
                                position: "fixed",
                                left: 0,
                                top: 0,
                                background: "white",
                                zIndex: 5,
                            })

                        } else {
                            $("#search-scroll").css({
                                display: "none",

                            })
                        }
                    })
                    // 右侧回到顶部按钮效果
                let top = $(".right_nav_last")
                top.on("click", function() {
                    $(window).scrollTop(0)
                })
                $(window).on("scroll", function() {
                    if ($(window).scrollTop() > 400) {
                        top.show()

                    } else {
                        top.hide()
                    }
                })
            }();
            //二级菜单
            headnav: ! function() {
                let li = $(".search_buttom>li")
                let centent = $(".search_buttom>li>div")
                    //头部导航条效果
                centent.each(function(index, value) {
                    $(value).on("mouseover", function() {
                        $(this).css({
                            visibility: "visible",
                        })
                        console.log(this)
                    })

                    $(value).on("mouseout", function() {
                        $(this).css({
                            visibility: "hidden",
                        })

                    })

                })

            }();

        }

    }
})