define(['jquery', 'jcookie', 'jlazyload'], function() {
    return {
        init() {
            //首页渲染效果
            render: ! function() {
                $.ajax({
                    type: "get",
                    url: "http://192.168.1.108/text/bobostor/bobostore/php/jieko.php",
                    dataType: "JSON",
                }).done(function(data) {
                    //新品板块推荐渲染
                    if (data) {
                        let str_new = ""
                        $.each(data, function(index, value) {
                            // console.log(data)
                            let pic = value.piclisturl.split(",")

                            str_new += `<li>
                                        <img src="${pic[0]}" alt="" class="">
                                        <img  src="${pic[1]}" alt="">
                                        <p class="new-pro-p1">新品尝鲜</p>
                                        <p class="new-pro-p2">${value["title"]}</p>
                                        <p class="new-pro-p3">
                                            <span class="new-pro-p3-span1">￥${value["price"]}</span>
                                            <del class="new-pro-p3-span2">￥${value["oldprice"]}</del>
                                        </p>
                                    </li>`;
                            if (index > 10) {
                                return false
                            }

                        })
                        $("#product_title_new .new-pro").html(str_new)
                            //人气推荐板块渲染
                        let str_recommend = ` <img class="lazy" data-original="${data[1]["url"]}" alt="" class="active">
                       <p class="recommend-pro-p1">新品尝鲜</p>
                       <p class="recommend-pro-p2">${data[1]["title"]}</p>
                       <p class="recommend-pro-p3">
                           <span class="recommend-pro-p3-span1" style="color:red;">￥${data[1]["price"]}</span>
                           <del class="recommend-pro-p3-span2">￥${data[1]["oldprice"]}</del>
                       </p>`
                        $(".recommend-pro-left").html(str_recommend)
                        let str_recommend_right = ""
                        for (let a = 29; a <= 34; a++) {
                            str_recommend_right += `<li>
                            <img class="lazy active" data-original="${data[a]["url"]}" alt="" >
                            <p class="recommend-pro-p1">新品尝鲜</p>
                            <p class="recommend-pro-p2">${data[a]["title"]}</p>
                            <p class="recommend-pro-p3">
                                <span class="recommend-pro-p3-span1">￥${data[a]["price"]}</span>
                                <del class="recommend-pro-p3-span2">￥${data[a]["oldprice"]}</del>
                            </p>
                            </li>`
                        }
                        $(".recommend-pro-right").html(str_recommend_right)
                            //限时购板块渲染
                        let str_limit = ""
                        for (let a = 0; a <= 3; a++) {
                            str_limit += `<div>
                            <div class="limit_pro_center-pro-1">
                            <img class="lazy" data-original="${data[a]["url"]}"  alt="">
                            </div>
                            <div class="limit_pro_center-pro-2">
                            <p class="limit_pro_center-pro-2-p1">15分钟缓解颈椎酸痛，EMS颈椎按摩仪</p>
                            <p class="limit_pro_center-pro-2-p2">全新升级款，5分钟消灭螨虫</p>
                            <div class="limit_pro_center-pro-2-p5">
                                <div class="numBarIn"></div> 
                            </div>
                            <p class="limit_pro_center-pro-2-p3">
                                <span>限时价</span><span>￥${data[a]["price"]} </span>
                                <del>￥${data[a]["oldprice"]}</del>
                            </p>
                            <p class="limit_pro_center-pro-2-p4">立即抢购</p>
                            <span class="slaenum">还剩89件<span>
                            </div></div>`
                        }
                        $(".limit_pro_right").html(str_limit)
                            //福利社渲染-中间部分渲染
                        let str_welfare_center = ""
                        for (let a = 20; a < 24; a++) {
                            str_welfare_center += `
                                <div>
                                <div class="welfare_pro_center-pro-1">
                                    <img class="lazy" data-original="${data[a]["url"]}"  alt="">
                                </div>
                                <div class="welfare_pro_center-pro-2">
                                    <p class="welfare_pro_center-pro-2-p1">${data[a]["title"]}</p>
                                    <p class="welfare_pro_center-pro-2-p2">
                                        <span class="welfare_pro_center-pro-2-p2-span1">限时价 </span>
                                        <span class="welfare_pro_center-pro-2-p2-span2">¥${data[a]["price"]}</span>
                                    </p>
                                    <del class="welfare_pro_center-pro-2-p3">¥${data[a]["oldprice"]}</del>
                                    <p class="welfare_pro_center-pro-2-p4">立即抢购</p>
                                </div>
                                </div>`

                        }
                        $(".welfare_pro_center-pro").html(str_welfare_center)
                            //福利社渲染-右边部分渲染
                        let str_welfare_right_1 = ""
                        for (let a = 25; a < 27; a++) {
                            str_welfare_right_1 += `<div>
                                <img class="lazy" data-original="${data[a]["url"]}" alt="">
                                <div class="">
                                    <p>${data[a]["title"]}</p>
                                    <p>
                                        <span>￥${data[a]["price"]}</span>
                                        <span class="iconfont icon-qicheqianlian-select"></span>
                                    </p>
                                </div>
                            </div>`
                        }
                        $(".welfare_pro_right_1_content").html(str_welfare_right_1)
                            //福利社渲染-右边部分渲染
                        let str_welfare_right_2 = ""
                        for (let a = 28; a < 30; a++) {
                            str_welfare_right_2 += `<div>
                                <img class="lazy" data-original="${data[a]["url"]}"  alt="">
                                <div class="">
                                    <p>${data[a]["title"]}</p>
                                    <p>
                                        <span>￥${data[a]["price"]}</span>
                                        <span class="iconfont icon-qicheqianlian-select"></span>
                                    </p>
                                </div>
                            </div>`
                        }
                        $(".welfare_pro_right_2_content").html(str_welfare_right_2)
                            //相同板块渲染（居家生活开始）
                        let str_hourse = ""
                        for (let a = 20; a < 24; a++) {
                            let pic = data[a].piclisturl.split(",")
                            str_hourse += `<li>
                            <img class="lazy" data-original="${pic[0]}" alt="">
                            <img class="lazy" data-original="${pic[1]}" alt="">
                            <p class="product_title_exercise_content_p1">每满200减25券</p>
                            <p class="product_title_housr_content_p2">${data[a]["title"]}</p>
                            <p class="product_title_housr_content_p3">
                                <span>¥${data[a]["price"]}</span>
                                <del>¥${data[a]["oldprice"]}</del>
                            </p>
                            </li>`

                        }
                        $(".product_title_housr_content").html(str_hourse)
                            //服饰鞋包
                        let str_clothing = ""
                        for (let a = 0; a < 4; a++) {
                            let pic = data[a].piclisturl.split(",")
                            str_clothing += `<li>
                            <img class="lazy" data-original="${pic[0]}" alt="">
                            <img class="lazy" data-original="${pic[1]}" alt="">
                            <p class="product_title_clothing_content_p1">每满200减25券</p>
                            <p class="product_title_clothing_content_p2">${data[a]["title"]}</p>
                            <p class="product_title_clothing_content_p3">
                                <span>¥${data[a]["price"]}</span>
                                <del>¥${data[a]["oldprice"]}</del>
                            </p>
                        </li>`


                        }
                        $(".product_title_clothing_content").html(str_clothing)
                            //美食酒水
                        let str_liquor = ""
                        for (let a = 4; a < 8; a++) {
                            let pic = data[a].piclisturl.split(",")
                            str_liquor += `<li>
                            <img class="lazy" data-original="${pic[0]}" alt="">
                            <img class="lazy" data-original="${pic[1]}" alt="">
                            <p class="product_title_liquor_content_p1">每满200减25券</p>
                            <p class="product_title_liquor_content_p2">${data[a]["title"]}</p>
                            <p class="product_title_liquor_content_p3">
                                <span>¥${data[a]["price"]}</span>
                                <del>¥${data[a]["oldprice"]}</del>
                            </p>
                            </li>`


                        }
                        $(".product_title_liquor_content").html(str_liquor)
                            //个护清洁

                        let str_clean = ""
                        for (let a = 8; a < 12; a++) {
                            let pic = data[a].piclisturl.split(",")
                            str_clean += `<li>
                             <img class="lazy" data-original="${pic[0]}" alt="">
                             <img class="lazy" data-original="${pic[1]}" alt="">
                             <p class="product_title_clean_content_p1">每满200减25券</p>
                             <p class="product_title_clean_content_p2">${data[a]["title"]}</p>
                             <p class="product_title_clean_content_p3">
                                 <span>¥${data[a]["price"]}</span>
                                 <del>¥${data[a]["oldprice"]}</del>
                             </p>
                            </li>`


                        }
                        $(".product_title_clean_content").html(str_clean)
                            //母婴亲子
                        let str_infant = ""
                        for (let a = 12; a < 16; a++) {
                            let pic = data[a].piclisturl.split(",")
                            str_infant += `<li>
                             <img class="lazy" data-original="${pic[0]}" alt="">
                             <img class="lazy" data-original="${pic[1]}" alt="">
                             <p class="product_title_infant_content_p1">每满200减25券</p>
                             <p class="product_title_infant_content_p2">${data[a]["title"]}</p>
                             <p class="product_title_infant_content_p3">
                                 <span>¥${data[a]["price"]}</span>
                                 <del>¥${data[a]["oldprice"]}</del>
                             </p>
                            </li>`


                        }
                        $(".product_title_infant_content").html(str_infant)
                            //运动
                        let str_exercise = ""
                        for (let a = 16; a < 20; a++) {
                            let pic = data[a].piclisturl.split(",")
                            str_exercise += `<li>
                             <img class="lazy" data-original="${pic[0]}" alt="">
                             <img class="lazy" data-original="${pic[1]}" alt="">
                             <p class="product_title_exercise_content_p1">每满200减25券</p>
                             <p class="product_title_exercise_content_p2">${data[a]["title"]}</p>
                             <p class="product_title_exercise_content_p3">
                                 <span>¥${data[a]["price"]}</span>
                                 <del>¥${data[a]["oldprice"]}</del>
                             </p>
                            </li>`


                        }
                        $(".product_title_exercise_content").html(str_exercise)
                            //3c
                        let str_3c = ""
                        for (let a = 20; a < 24; a++) {
                            let pic = data[a].piclisturl.split(",")
                            str_3c += `<li>
                             <img class="lazy" data-original="${pic[0]}" alt="">
                             <img class="lazy" data-original="${pic[1]}" alt="">
                             <p class="product_title_3c_content_p1">每满200减25券</p>
                             <p class="product_title_3c_content_p2">${data[a]["title"]}</p>
                             <p class="product_title_3c_content_p3">
                                 <span>¥${data[a]["price"]}</span>
                                 <del>¥${data[a]["oldprice"]}</del>
                             </p>
                                </li>`


                        }
                        $(".product_title_3c_content").html(str_3c)
                            //quanqiu
                        let str_global = ""
                        for (let a = 20; a < 24; a++) {
                            let pic = data[a].piclisturl.split(",")
                            str_global += `<li>
                                 <img class="lazy" data-original="${pic[0]}" alt="">
                                 <img class="lazy" data-original="${pic[1]}" alt="">
                                 <p class="product_title_global_content_p1">每满200减25券</p>
                                 <p class="product_title_global_content_p2">${data[a]["title"]}</p>
                                 <p class="product_title_global_content_p3">
                                     <span>¥${data[a]["price"]}</span>
                                     <del>¥${data[a]["oldprice"]}</del>
                                 </p>
                             </li>`


                        }
                        $(".product_title_global_content").html(str_global)

                        $("img.lazy").lazyload({
                            effect: "fadeIn" //图片显示方式
                        });
                    }

                })
            }();
            //头部新闻轮播
            headxg: ! function() {
                let timer = null
                let num = null
                let ul = $(".head-main-left")
                timer = setInterval(function() {
                        num++
                        if (num > 3) {
                            num = 1
                            ul[0].style.marginTop = "0px"
                        }
                        ul.animate({
                            marginTop: -36 * num,
                        })





                    }, 2000)
                    //app图片显示
                $(".head_app").on("mouseover", function() {
                    $(".head-erweima").show()
                    $(".head_shanjiao").show()
                })
                $(".head_app").on("mouseout", function() {
                    $(".head-erweima").hide()
                    $(".head_shanjiao").hide()
                })
                $(".head-erweima").on("mouseover", function() {
                    $(".head-erweima").show()
                    $(".head_shanjiao").show()
                })
                $(".head-erweima").on("mouseout", function() {
                    $(".head-erweima").hide()
                    $(".head_shanjiao").hide()
                })
            }();
            //banner
            bannerXG: ! function() {
                let banner = $("#banner")
                let pic = $("#banner img")
                let num = 0
                let timer = null
                let ul = $("#banner ul")
                let li = $("#banner ul li")
                li.each(function(index, value) {
                    $(value).attr("sid", index)
                        //  $(value).attr("class", "")
                    $(value).on("mouseover", () => {
                        li.removeClass()
                        $(this).attr("class", "over")
                        num = $(this).attr("sid")
                        pic.eq(num).stop(true).animate({
                            opacity: 1,
                        }).siblings("img").stop(true).animate({
                            opacity: 0,
                        })

                    })

                })

                //自动滚动
                timer = setInterval(function() {
                        num++
                        if (num > 6) {
                            num = 0
                        }
                        pic.attr("class", "")
                        pic.eq(num).stop(true).animate({
                            opacity: 1,
                        }).siblings("img").stop(true).animate({
                            opacity: 0,
                        })
                        li.eq(num).attr("class", "over").siblings().removeClass()
                    }, 2000)
                    //鼠标移入
                banner.on("mouseover", function() {
                        clearInterval(timer)
                    })
                    //鼠标移出
                banner.on("mouseout", function() {
                    timer = setInterval(function() {
                        if (num > 6) {
                            num = 0

                        }
                        pic.attr("class", "")
                        pic.eq(num).stop(true).animate({
                            opacity: 1,
                        }).siblings("img").animate({
                            opacity: 0,
                        })
                        li.eq(num).attr("class", "over").siblings().removeClass()

                        num++

                    }, 2000)
                })
                let rightbtn = $("#banner .btn-right")
                    //右按钮移入
                rightbtn.on("mouseover", function() {
                    rightbtn.css({

                        backgroudColor: "#E2C199",
                    })
                    clearInterval(timer)
                })

                rightbtn.on("click", function() {
                    num++
                    if (num > 6) {
                        num = 0

                    }
                    pic.attr("class", "")
                    pic.eq(num).stop(true).animate({
                        opacity: 1,
                    }).siblings("img").stop(true).animate({
                        opacity: 0,
                    })
                    li.eq(num).attr("class", "over").siblings().removeClass()


                })
                let leftbtn = $("#banner .btn-left")
                    //左按钮移入
                leftbtn.on("mouseover", function() {
                    leftbtn.css({
                        "backgroudColor": "#E2C199",

                    })
                    clearInterval(timer)
                })
                leftbtn.on("click", function() {
                    num--
                    if (num < 0) {
                        num = 6

                    }
                    pic.attr("class", "")
                    pic.eq(num).stop(true).animate({
                        opacity: 1,
                    }).siblings("img").stop(true).animate({
                        opacity: 0,
                    })
                    li.eq(num).attr("class", "over").siblings().removeClass()


                })

            }();
            //左右nav
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
            //新品板块效果
            newXG: ! function() {

                //商品左右移动
                class News {
                    constructor() {

                    }
                    init() {
                        let num = 0
                        let left = $("#product_title_new .btn-left")
                        let right = $("#product_title_new .btn-right")
                        let ul = $(".new-pro")
                        let news = $("#product_title_new")
                        let n1 = 1090;
                        left.on("click", function() {
                                if (ul.position().left + 1 < -news.width()) {
                                    n1 = 0
                                } else {
                                    n1 = 1090
                                }

                                num -= n1

                                ul.stop(true).animate({
                                    left: num,

                                })
                                left.css({
                                    backgroudColor: "#E2C199",
                                })


                            })
                            // left.on("mouseover", function() {

                        // })
                        right.on("click", function() {
                            // console.log(ul.position().left - 1, -news.width())
                            if (ul.position().left - 1 > -news.width()) {
                                n1 = 0
                            } else {
                                n1 = 1090
                            }
                            num += n1
                            ul.stop(true).animate({
                                left: num,
                            })
                        })
                    }
                }
                new News().init()
                    //移入改变背景色
                class Pic {
                    constructor() {

                    }
                    init() {
                        let news = $("#product_title_new")

                        news.on("mouseover", "li", function() {
                            $(this).css({
                                    backgroudColor: "#f4f0ea",
                                })
                                // this.style.backgroudColor = "#f4f0ea"

                            $(this).children("img").eq(1).css({
                                opacity: 1,
                            })
                        })
                        news.on("mouseout", "li", function() {
                            $(this).css({
                                    backgroudColor: "white",
                                })
                                // this.style.backgroudColor = "#f4f0ea"

                            $(this).children("img").eq(1).css({
                                opacity: 0,
                            })
                        })

                    }
                }
                new Pic().init()
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

                        })

                        $(value).on("mouseout", function() {
                            $(this).css({
                                visibility: "hidden",
                            })

                        })

                    })
                    //隐藏头部导航条效果
                let li_s = $(".search-scroll-main>ul>li")
                let centent_s = $(".search-scroll-main>ul>li>div")
                centent_s.each(function(index, value) {
                    $(value).on("mouseover", function() {
                        $(this).css({
                            visibility: "visible",
                        })
                    })

                    $(value).on("mouseout", function() {
                        $(this).css({
                            visibility: "hidden",
                        })

                    })
                })

            }();
            //居家板块（后面几块要做就复制这个）
            houserxg: ! function() {
                //鼠标移入切换图片 改变背景色
                class HourPic {
                    constructor() {

                    }
                    init() {
                        let news = $(".product_title_housr_content")
                        news.on("mouseover", "li", function() {
                            $(this).css({
                                backgroundColor: "#f4f0ea",

                            })
                            $(this).children("img").eq(1).css({
                                opacity: 1,
                            })
                        })
                        news.on("mouseout", "li", function() {
                            $(this).css({
                                    backgroundColor: "white",
                                })
                                // this.style.backgroudColor = "#f4f0ea"

                            $(this).children("img").eq(1).css({
                                opacity: 0,
                            })
                        })

                    }
                }
                new HourPic().init()
                    //轮播
                class Hoursebanner {
                    constructor() {

                    }
                    init() {
                        let num = null
                        let hoursebtn = $(".product_title_housr_banner_btn div")
                        let housrsepic = $(".product_title_housr_banner li")
                            //banner 按钮效果
                        hoursebtn.each(function(index, value) {
                            $(value).attr("sid", index)
                            $(value).on("mouseover", function() {
                                num = $(this).attr("sid")
                                housrsepic.eq($(this).attr("sid")).stop(true).animate({
                                    opacity: 1,
                                }).siblings("li").stop(true).animate({
                                    opacity: 0,
                                })
                                $(this).css({
                                    border: "2px solid #cc9567",
                                }).siblings("div").css({
                                    border: "none",
                                })
                            })


                        })
                        let left = $("#product_title_housr .left")
                        let right = $("#product_title_housr .right")
                            //左箭头点击事件
                        left.on("click", function() {
                                num--
                                if (num < 0) {
                                    num = 4
                                }
                                housrsepic.eq(num).stop(true).animate({
                                    opacity: 1,
                                }).siblings("li").stop(true).animate({
                                    opacity: 0,
                                })
                                hoursebtn.eq(num).css({
                                    border: "2px solid #cc9567",
                                }).siblings("div").css({
                                    border: "none",
                                })
                            })
                            //右点击事件
                        right.on("click", function() {
                                num++
                                if (num > 4) {
                                    num = 0
                                }
                                housrsepic.eq(num).stop(true).animate({
                                    opacity: 1,
                                }).siblings("li").stop(true).animate({
                                    opacity: 0,
                                })
                                hoursebtn.eq(num).css({
                                    border: "2px solid #cc9567",
                                }).siblings("div").css({
                                    border: "none",
                                })
                                console.log(num)
                            })
                            //自动轮播
                        let timer = null
                        timer = setInterval(function() {
                            num++
                            if (num > 4) {
                                num = 0
                            }
                            housrsepic.eq(num).stop(true).animate({
                                opacity: 1,
                            }).siblings("li").stop(true).animate({
                                opacity: 0,
                            })
                            hoursebtn.eq(num).css({
                                border: "2px solid #cc9567",
                            }).siblings("div").css({
                                border: "none",
                            })
                        }, 2000)
                        let hourse = $(".product_title_housr_banner")
                            //移入移出
                        hourse.on("mouseover", function() {
                            clearInterval(timer)
                        })

                        hourse.on("mouseout", function() {
                            timer = setInterval(function() {
                                num++
                                if (num > 4) {
                                    num = 0
                                }
                                housrsepic.eq(num).stop(true).animate({
                                    opacity: 1,
                                }).siblings("li").stop(true).animate({
                                    opacity: 0,
                                })
                                hoursebtn.eq(num).css({
                                    border: "2px solid #cc9567",
                                }).siblings("div").css({
                                    border: "none",
                                })
                            }, 2000)
                        })
                    }
                }
                new Hoursebanner().init()
            }();
            //服饰鞋包
            colthingxg: ! function() {
                //鼠标移入切换图片 改变背景色
                class HourPic {
                    constructor() {

                    }
                    init() {
                        let news = $(".product_title_clothing_content")
                        news.on("mouseover", "li", function() {
                            $(this).css({
                                backgroundColor: "#f4f0ea",

                            })
                            $(this).children("img").eq(1).css({
                                opacity: 1,
                            })
                        })
                        news.on("mouseout", "li", function() {
                            $(this).css({
                                    backgroundColor: "white",
                                })
                                // this.style.backgroudColor = "#f4f0ea"

                            $(this).children("img").eq(1).css({
                                opacity: 0,
                            })
                        })

                    }
                }
                new HourPic().init()
                    //轮播
                class Hoursebanner {
                    constructor() {

                    }
                    init() {
                        let num = null
                        let hoursebtn = $(".product_title_clothing_banner_btn div")
                        let clothingsepic = $(".product_title_clothing_banner li")
                            //banner 按钮效果
                        hoursebtn.each(function(index, value) {
                            $(value).attr("sid", index)
                            $(value).on("mouseover", function() {
                                num = $(this).attr("sid")
                                clothingsepic.eq($(this).attr("sid")).stop(true).animate({
                                    opacity: 1,
                                }).siblings("li").stop(true).animate({
                                    opacity: 0,
                                })
                                $(this).css({
                                    border: "2px solid #cc9567",
                                }).siblings("div").css({
                                    border: "none",
                                })
                            })


                        })
                        let left = $("#product_title_clothing .left")
                        let right = $("#product_title_clothing .right")
                            //左箭头点击事件
                        left.on("click", function() {
                                num--
                                if (num < 0) {
                                    num = 1
                                }
                                clothingsepic.eq(num).stop(true).animate({
                                    opacity: 1,
                                }).siblings("li").stop(true).animate({
                                    opacity: 0,
                                })
                                hoursebtn.eq(num).css({
                                    border: "2px solid #cc9567",
                                }).siblings("div").css({
                                    border: "none",
                                })
                            })
                            //右点击事件
                        right.on("click", function() {
                                num++
                                if (num > 1) {
                                    num = 0
                                }
                                clothingsepic.eq(num).stop(true).animate({
                                    opacity: 1,
                                }).siblings("li").stop(true).animate({
                                    opacity: 0,
                                })
                                hoursebtn.eq(num).css({
                                    border: "2px solid #cc9567",
                                }).siblings("div").css({
                                    border: "none",
                                })
                                console.log(num)
                            })
                            //自动轮播
                        let timer = null
                        timer = setInterval(function() {
                            num++
                            if (num > 1) {
                                num = 0
                            }
                            clothingsepic.eq(num).stop(true).animate({
                                opacity: 1,
                            }).siblings("li").stop(true).animate({
                                opacity: 0,
                            })
                            hoursebtn.eq(num).css({
                                border: "2px solid #cc9567",
                            }).siblings("div").css({
                                border: "none",
                            })
                        }, 2000)
                        let hourse = $(".product_title_clothing_banner")
                            //移入移出
                        hourse.on("mouseover", function() {
                            clearInterval(timer)
                        })

                        hourse.on("mouseout", function() {
                            timer = setInterval(function() {
                                num++
                                if (num > 1) {
                                    num = 0
                                }
                                clothingsepic.eq(num).stop(true).animate({
                                    opacity: 1,
                                }).siblings("li").stop(true).animate({
                                    opacity: 0,
                                })
                                hoursebtn.eq(num).css({
                                    border: "2px solid #cc9567",
                                }).siblings("div").css({
                                    border: "none",
                                })
                            }, 2000)
                        })
                    }
                }
                new Hoursebanner().init()
            }();
            //美食酒水
            liquorxg: ! function() {
                //鼠标移入切换图片 改变背景色
                class HourPic {
                    constructor() {

                    }
                    init() {
                        let news = $(".product_title_liquor_content")
                        news.on("mouseover", "li", function() {
                            $(this).css({
                                backgroundColor: "#f4f0ea",

                            })
                            $(this).children("img").eq(1).css({
                                opacity: 1,
                            })
                        })
                        news.on("mouseout", "li", function() {
                            $(this).css({
                                    backgroundColor: "white",
                                })
                                // this.style.backgroudColor = "#f4f0ea"

                            $(this).children("img").eq(1).css({
                                opacity: 0,
                            })
                        })

                    }
                }
                new HourPic().init()
                    //轮播
                class Hoursebanner {
                    constructor() {

                    }
                    init() {
                        let num = null
                        let hoursebtn = $(".product_title_liquor_banner_btn div")
                        let liquorsepic = $(".product_title_liquor_banner li")
                            //banner 按钮效果
                        hoursebtn.each(function(index, value) {
                            $(value).attr("sid", index)
                            $(value).on("mouseover", function() {
                                num = $(this).attr("sid")
                                liquorsepic.eq($(this).attr("sid")).stop(true).animate({
                                    opacity: 1,
                                }).siblings("li").stop(true).animate({
                                    opacity: 0,
                                })
                                $(this).css({
                                    border: "2px solid #cc9567",
                                }).siblings("div").css({
                                    border: "none",
                                })
                            })


                        })
                        let left = $("#product_title_liquor .left")
                        let right = $("#product_title_liquor .right")
                            //左箭头点击事件
                        left.on("click", function() {
                                num--
                                if (num < 0) {
                                    num = 3
                                }
                                liquorsepic.eq(num).stop(true).animate({
                                    opacity: 1,
                                }).siblings("li").stop(true).animate({
                                    opacity: 0,
                                })
                                hoursebtn.eq(num).css({
                                    border: "2px solid #cc9567",
                                }).siblings("div").css({
                                    border: "none",
                                })
                            })
                            //右点击事件
                        right.on("click", function() {
                                num++
                                if (num > 3) {
                                    num = 0
                                }
                                liquorsepic.eq(num).stop(true).animate({
                                    opacity: 1,
                                }).siblings("li").stop(true).animate({
                                    opacity: 0,
                                })
                                hoursebtn.eq(num).css({
                                    border: "2px solid #cc9567",
                                }).siblings("div").css({
                                    border: "none",
                                })
                                console.log(num)
                            })
                            //自动轮播
                        let timer = null
                        timer = setInterval(function() {
                            num++
                            if (num > 3) {
                                num = 0
                            }
                            liquorsepic.eq(num).stop(true).animate({
                                opacity: 1,
                            }).siblings("li").stop(true).animate({
                                opacity: 0,
                            })
                            hoursebtn.eq(num).css({
                                border: "2px solid #cc9567",
                            }).siblings("div").css({
                                border: "none",
                            })
                        }, 2000)
                        let hourse = $(".product_title_liquor_banner")
                            //移入移出
                        hourse.on("mouseover", function() {
                            clearInterval(timer)
                        })

                        hourse.on("mouseout", function() {
                            timer = setInterval(function() {
                                num++
                                if (num > 3) {
                                    num = 0
                                }
                                liquorsepic.eq(num).stop(true).animate({
                                    opacity: 1,
                                }).siblings("li").stop(true).animate({
                                    opacity: 0,
                                })
                                hoursebtn.eq(num).css({
                                    border: "2px solid #cc9567",
                                }).siblings("div").css({
                                    border: "none",
                                })
                            }, 2000)
                        })
                    }
                }
                new Hoursebanner().init()
            }();
            //个人洁护
            cleanxg: ! function() {
                //鼠标移入切换图片 改变背景色
                class HourPic {
                    constructor() {

                    }
                    init() {
                        let news = $(".product_title_clean_content")
                        news.on("mouseover", "li", function() {
                            $(this).css({
                                backgroundColor: "#f4f0ea",

                            })
                            $(this).children("img").eq(1).css({
                                opacity: 1,
                            })
                        })
                        news.on("mouseout", "li", function() {
                            $(this).css({
                                    backgroundColor: "white",
                                })
                                // this.style.backgroudColor = "#f4f0ea"

                            $(this).children("img").eq(1).css({
                                opacity: 0,
                            })
                        })

                    }
                }
                new HourPic().init()
                    //轮播
                class Hoursebanner {
                    constructor() {

                    }
                    init() {
                        let num = null
                        let hoursebtn = $(".product_title_clean_banner_btn div")
                        let cleansepic = $(".product_title_clean_banner li")
                            //banner 按钮效果
                        hoursebtn.each(function(index, value) {
                            $(value).attr("sid", index)
                            $(value).on("mouseover", function() {
                                num = $(this).attr("sid")
                                cleansepic.eq($(this).attr("sid")).stop(true).animate({
                                    opacity: 1,
                                }).siblings("li").stop(true).animate({
                                    opacity: 0,
                                })
                                $(this).css({
                                    border: "2px solid #cc9567",
                                }).siblings("div").css({
                                    border: "none",
                                })
                            })


                        })
                        let left = $("#product_title_clean .left")
                        let right = $("#product_title_clean .right")
                            //左箭头点击事件
                        left.on("click", function() {
                                num--
                                if (num < 0) {
                                    num = 4
                                }
                                cleansepic.eq(num).stop(true).animate({
                                    opacity: 1,
                                }).siblings("li").stop(true).animate({
                                    opacity: 0,
                                })
                                hoursebtn.eq(num).css({
                                    border: "2px solid #cc9567",
                                }).siblings("div").css({
                                    border: "none",
                                })
                            })
                            //右点击事件
                        right.on("click", function() {
                                num++
                                if (num > 4) {
                                    num = 0
                                }
                                cleansepic.eq(num).stop(true).animate({
                                    opacity: 1,
                                }).siblings("li").stop(true).animate({
                                    opacity: 0,
                                })
                                hoursebtn.eq(num).css({
                                    border: "2px solid #cc9567",
                                }).siblings("div").css({
                                    border: "none",
                                })
                                console.log(num)
                            })
                            //自动轮播
                        let timer = null
                        timer = setInterval(function() {
                            num++
                            if (num > 4) {
                                num = 0
                            }
                            cleansepic.eq(num).stop(true).animate({
                                opacity: 1,
                            }).siblings("li").stop(true).animate({
                                opacity: 0,
                            })
                            hoursebtn.eq(num).css({
                                border: "2px solid #cc9567",
                            }).siblings("div").css({
                                border: "none",
                            })
                        }, 2000)
                        let hourse = $(".product_title_clean_banner")
                            //移入移出
                        hourse.on("mouseover", function() {
                            clearInterval(timer)
                        })

                        hourse.on("mouseout", function() {
                            timer = setInterval(function() {
                                num++
                                if (num > 4) {
                                    num = 0
                                }
                                cleansepic.eq(num).stop(true).animate({
                                    opacity: 1,
                                }).siblings("li").stop(true).animate({
                                    opacity: 0,
                                })
                                hoursebtn.eq(num).css({
                                    border: "2px solid #cc9567",
                                }).siblings("div").css({
                                    border: "none",
                                })
                            }, 2000)
                        })
                    }
                }
                new Hoursebanner().init()
            }();
            //母婴亲子
            infantxg: ! function() {
                //鼠标移入切换图片 改变背景色
                class HourPic {
                    constructor() {

                    }
                    init() {
                        let news = $(".product_title_infant_content")
                        news.on("mouseover", "li", function() {
                            $(this).css({
                                backgroundColor: "#f4f0ea",

                            })
                            $(this).children("img").eq(1).css({
                                opacity: 1,
                            })
                        })
                        news.on("mouseout", "li", function() {
                            $(this).css({
                                    backgroundColor: "white",
                                })
                                // this.style.backgroudColor = "#f4f0ea"

                            $(this).children("img").eq(1).css({
                                opacity: 0,
                            })
                        })

                    }
                }
                new HourPic().init()
                    //轮播
                class Hoursebanner {
                    constructor() {

                    }
                    init() {
                        let num = null
                        let hoursebtn = $(".product_title_infant_banner_btn div")
                        let infantsepic = $(".product_title_infant_banner li")
                            //banner 按钮效果
                        hoursebtn.each(function(index, value) {
                            $(value).attr("sid", index)
                            $(value).on("mouseover", function() {
                                num = $(this).attr("sid")
                                infantsepic.eq($(this).attr("sid")).stop(true).animate({
                                    opacity: 1,
                                }).siblings("li").stop(true).animate({
                                    opacity: 0,
                                })
                                $(this).css({
                                    border: "2px solid #cc9567",
                                }).siblings("div").css({
                                    border: "none",
                                })
                            })


                        })
                        let left = $("#product_title_infant .left")
                        let right = $("#product_title_infant .right")
                            //左箭头点击事件
                        left.on("click", function() {
                                num--
                                if (num < 0) {
                                    num = 4
                                }
                                infantsepic.eq(num).stop(true).animate({
                                    opacity: 1,
                                }).siblings("li").stop(true).animate({
                                    opacity: 0,
                                })
                                hoursebtn.eq(num).css({
                                    border: "2px solid #cc9567",
                                }).siblings("div").css({
                                    border: "none",
                                })
                            })
                            //右点击事件
                        right.on("click", function() {
                                num++
                                if (num > 4) {
                                    num = 0
                                }
                                infantsepic.eq(num).stop(true).animate({
                                    opacity: 1,
                                }).siblings("li").stop(true).animate({
                                    opacity: 0,
                                })
                                hoursebtn.eq(num).css({
                                    border: "2px solid #cc9567",
                                }).siblings("div").css({
                                    border: "none",
                                })
                                console.log(num)
                            })
                            //自动轮播
                        let timer = null
                        timer = setInterval(function() {
                            num++
                            if (num > 4) {
                                num = 0
                            }
                            infantsepic.eq(num).stop(true).animate({
                                opacity: 1,
                            }).siblings("li").stop(true).animate({
                                opacity: 0,
                            })
                            hoursebtn.eq(num).css({
                                border: "2px solid #cc9567",
                            }).siblings("div").css({
                                border: "none",
                            })
                        }, 2000)
                        let hourse = $(".product_title_infant_banner")
                            //移入移出
                        hourse.on("mouseover", function() {
                            clearInterval(timer)
                        })

                        hourse.on("mouseout", function() {
                            timer = setInterval(function() {
                                num++
                                if (num > 4) {
                                    num = 0
                                }
                                infantsepic.eq(num).stop(true).animate({
                                    opacity: 1,
                                }).siblings("li").stop(true).animate({
                                    opacity: 0,
                                })
                                hoursebtn.eq(num).css({
                                    border: "2px solid #cc9567",
                                }).siblings("div").css({
                                    border: "none",
                                })
                            }, 2000)
                        })
                    }
                }
                new Hoursebanner().init()
            }();
            //运动旅行
            exercise: ! function() {
                //鼠标移入切换图片 改变背景色
                class HourPic {
                    constructor() {

                    }
                    init() {
                        let news = $(".product_title_exercise_content")
                        news.on("mouseover", "li", function() {
                            $(this).css({
                                backgroundColor: "#f4f0ea",

                            })
                            $(this).children("img").eq(1).css({
                                opacity: 1,
                            })
                        })
                        news.on("mouseout", "li", function() {
                            $(this).css({
                                    backgroundColor: "white",
                                })
                                // this.style.backgroudColor = "#f4f0ea"

                            $(this).children("img").eq(1).css({
                                opacity: 0,
                            })
                        })

                    }
                }
                new HourPic().init()
                    //轮播
                class Hoursebanner {
                    constructor() {

                    }
                    init() {
                        let num = null
                        let hoursebtn = $(".product_title_exercise_banner_btn div")
                        let exercisesepic = $(".product_title_exercise_banner li")
                            //banner 按钮效果
                        hoursebtn.each(function(index, value) {
                            $(value).attr("sid", index)
                            $(value).on("mouseover", function() {
                                num = $(this).attr("sid")
                                exercisesepic.eq($(this).attr("sid")).stop(true).animate({
                                    opacity: 1,
                                }).siblings("li").stop(true).animate({
                                    opacity: 0,
                                })
                                $(this).css({
                                    border: "2px solid #cc9567",
                                }).siblings("div").css({
                                    border: "none",
                                })
                            })


                        })
                        let left = $("#product_title_exercise .left")
                        let right = $("#product_title_exercise .right")
                            //左箭头点击事件
                        left.on("click", function() {
                                num--
                                if (num < 0) {
                                    num = 2
                                }
                                exercisesepic.eq(num).stop(true).animate({
                                    opacity: 1,
                                }).siblings("li").stop(true).animate({
                                    opacity: 0,
                                })
                                hoursebtn.eq(num).css({
                                    border: "2px solid #cc9567",
                                }).siblings("div").css({
                                    border: "none",
                                })
                            })
                            //右点击事件
                        right.on("click", function() {
                                num++
                                if (num > 2) {
                                    num = 0
                                }
                                exercisesepic.eq(num).stop(true).animate({
                                    opacity: 1,
                                }).siblings("li").stop(true).animate({
                                    opacity: 0,
                                })
                                hoursebtn.eq(num).css({
                                    border: "2px solid #cc9567",
                                }).siblings("div").css({
                                    border: "none",
                                })
                                console.log(num)
                            })
                            //自动轮播
                        let timer = null
                        timer = setInterval(function() {
                            num++
                            if (num > 2) {
                                num = 0
                            }
                            exercisesepic.eq(num).stop(true).animate({
                                opacity: 1,
                            }).siblings("li").stop(true).animate({
                                opacity: 0,
                            })
                            hoursebtn.eq(num).css({
                                border: "2px solid #cc9567",
                            }).siblings("div").css({
                                border: "none",
                            })
                        }, 2000)
                        let hourse = $(".product_title_exercise_banner")
                            //移入移出
                        hourse.on("mouseover", function() {
                            clearInterval(timer)
                        })

                        hourse.on("mouseout", function() {
                            timer = setInterval(function() {
                                num++
                                if (num > 2) {
                                    num = 0
                                }
                                exercisesepic.eq(num).stop(true).animate({
                                    opacity: 1,
                                }).siblings("li").stop(true).animate({
                                    opacity: 0,
                                })
                                hoursebtn.eq(num).css({
                                    border: "2px solid #cc9567",
                                }).siblings("div").css({
                                    border: "none",
                                })
                            }, 2000)
                        })
                    }
                }
                new Hoursebanner().init()
            }();
            //3c
            shumaxg: ! function() {
                //鼠标移入切换图片 改变背景色
                class HourPic {
                    constructor() {

                    }
                    init() {
                        let news = $(".product_title_3c_content")
                        news.on("mouseover", "li", function() {
                            $(this).css({
                                backgroundColor: "#f4f0ea",

                            })
                            $(this).children("img").eq(1).css({
                                opacity: 1,
                            })
                        })
                        news.on("mouseout", "li", function() {
                            $(this).css({
                                    backgroundColor: "white",
                                })
                                // this.style.backgroudColor = "#f4f0ea"

                            $(this).children("img").eq(1).css({
                                opacity: 0,
                            })
                        })

                    }
                }
                new HourPic().init()
                    //轮播
                class Hoursebanner {
                    constructor() {

                    }
                    init() {
                        let num = null
                        let hoursebtn = $(".product_title_3c_banner_btn div")
                        let c3 = $(".product_title_3c_banner li")
                            //banner 按钮效果
                        hoursebtn.each(function(index, value) {
                            $(value).attr("sid", index)
                            $(value).on("mouseover", function() {
                                num = $(this).attr("sid")
                                c3.eq($(this).attr("sid")).stop(true).animate({
                                    opacity: 1,
                                }).siblings("li").stop(true).animate({
                                    opacity: 0,
                                })
                                $(this).css({
                                    border: "2px solid #cc9567",
                                }).siblings("div").css({
                                    border: "none",
                                })
                            })


                        })
                        let left = $("#product_title_3c .left")
                        let right = $("#product_title_3c .right")
                            //左箭头点击事件
                        left.on("click", function() {
                                num--
                                if (num < 0) {
                                    num = 1
                                }
                                c3.eq(num).stop(true).animate({
                                    opacity: 1,
                                }).siblings("li").stop(true).animate({
                                    opacity: 0,
                                })
                                hoursebtn.eq(num).css({
                                    border: "2px solid #cc9567",
                                }).siblings("div").css({
                                    border: "none",
                                })
                            })
                            //右点击事件
                        right.on("click", function() {
                                num++
                                if (num > 1) {
                                    num = 0
                                }
                                c3.eq(num).stop(true).animate({
                                    opacity: 1,
                                }).siblings("li").stop(true).animate({
                                    opacity: 0,
                                })
                                hoursebtn.eq(num).css({
                                    border: "2px solid #cc9567",
                                }).siblings("div").css({
                                    border: "none",
                                })
                                console.log(num)
                            })
                            //自动轮播
                        let timer = null
                        timer = setInterval(function() {
                            num++
                            if (num > 1) {
                                num = 0
                            }
                            c3.eq(num).stop(true).animate({
                                opacity: 1,
                            }).siblings("li").stop(true).animate({
                                opacity: 0,
                            })
                            hoursebtn.eq(num).css({
                                border: "2px solid #cc9567",
                            }).siblings("div").css({
                                border: "none",
                            })
                        }, 2000)
                        let hourse = $(".product_title_3c_banner")
                            //移入移出
                        hourse.on("mouseover", function() {
                            clearInterval(timer)
                        })

                        hourse.on("mouseout", function() {
                            timer = setInterval(function() {
                                num++
                                if (num > 1) {
                                    num = 0
                                }
                                c3.eq(num).stop(true).animate({
                                    opacity: 1,
                                }).siblings("li").stop(true).animate({
                                    opacity: 0,
                                })
                                hoursebtn.eq(num).css({
                                    border: "2px solid #cc9567",
                                }).siblings("div").css({
                                    border: "none",
                                })
                            }, 2000)
                        })
                    }
                }
                new Hoursebanner().init()
            }();
            globalxg: ! function() {
                //鼠标移入切换图片 改变背景色
                class HourPic {
                    constructor() {

                    }
                    init() {
                        let news = $(".product_title_global_content")
                        news.on("mouseover", "li", function() {
                            $(this).css({
                                backgroundColor: "#f4f0ea",

                            })
                            $(this).children("img").eq(1).css({
                                opacity: 1,
                            })
                        })
                        news.on("mouseout", "li", function() {
                            $(this).css({
                                    backgroundColor: "white",
                                })
                                // this.style.backgroudColor = "#f4f0ea"

                            $(this).children("img").eq(1).css({
                                opacity: 0,
                            })
                        })

                    }
                }
                new HourPic().init()
                    //轮播
                class Hoursebanner {
                    constructor() {

                    }
                    init() {
                        let num = null
                        let hoursebtn = $(".product_title_global_banner_btn div")
                        let globalsepic = $(".product_title_global_banner li")
                            //banner 按钮效果
                        hoursebtn.each(function(index, value) {
                            $(value).attr("sid", index)
                            $(value).on("mouseover", function() {
                                num = $(this).attr("sid")
                                globalsepic.eq($(this).attr("sid")).stop(true).animate({
                                    opacity: 1,
                                }).siblings("li").stop(true).animate({
                                    opacity: 0,
                                })
                                $(this).css({
                                    border: "2px solid #cc9567",
                                }).siblings("div").css({
                                    border: "none",
                                })
                            })


                        })
                        let left = $("#product_title_global .left")
                        let right = $("#product_title_global .right")
                            //左箭头点击事件
                        left.on("click", function() {
                                num--
                                if (num < 0) {
                                    num = 4
                                }
                                globalsepic.eq(num).stop(true).animate({
                                    opacity: 1,
                                }).siblings("li").stop(true).animate({
                                    opacity: 0,
                                })
                                hoursebtn.eq(num).css({
                                    border: "2px solid #cc9567",
                                }).siblings("div").css({
                                    border: "none",
                                })
                            })
                            //右点击事件
                        right.on("click", function() {
                                num++
                                if (num > 4) {
                                    num = 0
                                }
                                globalsepic.eq(num).stop(true).animate({
                                    opacity: 1,
                                }).siblings("li").stop(true).animate({
                                    opacity: 0,
                                })
                                hoursebtn.eq(num).css({
                                    border: "2px solid #cc9567",
                                }).siblings("div").css({
                                    border: "none",
                                })
                                console.log(num)
                            })
                            //自动轮播
                        let timer = null
                        timer = setInterval(function() {
                            num++
                            if (num > 4) {
                                num = 0
                            }
                            globalsepic.eq(num).stop(true).animate({
                                opacity: 1,
                            }).siblings("li").stop(true).animate({
                                opacity: 0,
                            })
                            hoursebtn.eq(num).css({
                                border: "2px solid #cc9567",
                            }).siblings("div").css({
                                border: "none",
                            })
                        }, 2000)
                        let hourse = $(".product_title_global_banner")
                            //移入移出
                        hourse.on("mouseover", function() {
                            clearInterval(timer)
                        })

                        hourse.on("mouseout", function() {
                            timer = setInterval(function() {
                                num++
                                if (num > 4) {
                                    num = 0
                                }
                                globalsepic.eq(num).stop(true).animate({
                                    opacity: 1,
                                }).siblings("li").stop(true).animate({
                                    opacity: 0,
                                })
                                hoursebtn.eq(num).css({
                                    border: "2px solid #cc9567",
                                }).siblings("div").css({
                                    border: "none",
                                })
                            }, 2000)
                        })
                    }
                }
                new Hoursebanner().init()
            }();
            //评价板块效果
            ourtitleXG: ! function() {
                let num = 0
                let time = null
                    //轮播
                time = setInterval(() => {

                    let li = $(".product_title_our_content li")
                    let ul = $(".product_title_our_content")

                    ul.append(`<li>${li.eq(num).html()}</li>`)
                    num++

                    ul.stop(true).animate({
                        left: -(num * (li.eq(1).outerWidth() + 20)),
                    })

                }, 2000)
                let left = $("#product_title_our .btn-left")
                let right = $("#product_title_our .btn-right")
                $(".product_title_our_content").on("mouseover", function() {
                    clearInterval(time)
                })

                $(".product_title_our_content").on("mouseout", function() {
                    time = setInterval(() => {

                        let li = $(".product_title_our_content li")
                        let ul = $(".product_title_our_content")

                        ul.append(`<li>${li.eq(num).html()}</li>`)
                        num++

                        ul.stop(true).animate({
                            left: -(num * (li.eq(1).outerWidth() + 20)),
                        })

                    }, 2000)
                })
                left.on("mouseover", function() {
                    clearInterval(time)

                })
                left.on("mouseout", function() {
                    time = setInterval(() => {

                        let li = $(".product_title_our_content li")
                        let ul = $(".product_title_our_content")

                        ul.append(`<li>${li.eq(num).html()}</li>`)
                        num++

                        ul.stop(true).animate({
                            left: -(num * (li.eq(1).outerWidth() + 20)),
                        })

                    }, 2000)
                })
                right.on("mouseover", function() {
                    clearInterval(time)
                })
                right.on("mouseout", function() {
                    time = setInterval(() => {
                        let li = $(".product_title_our_content li")
                        let ul = $(".product_title_our_content")
                        ul.append(`<li>${li.eq(num).html()}</li>`)
                        num++

                        ul.stop(true).animate({
                            left: -(num * (li.eq(1).outerWidth() + 20)),
                        })

                    }, 2000)
                })
                right.on("click", function() {
                    let li = $(".product_title_our_content li")
                    let ul = $(".product_title_our_content")
                    ul.append(`<li>${li.eq(num).html()}</li>`)
                    num++

                    ul.stop(true).animate({
                        left: -(num * (li.eq(1).outerWidth() + 20)),
                    })

                })
                let rightconut = 0

                left.on("click", function() {

                        let ul = $(".product_title_our_content")
                        let li = $(".product_title_our_content li")

                        num--

                        if (num < 0) {
                            console.log(ul.position().left)
                            ul.css({
                                left: -1890,
                            })
                            num = 4
                        }
                        ul.stop(true).animate({
                            left: ul.position().left + (li.eq(1).outerWidth() + 20),
                        })

                    })
                    //
                    // let num = 0
                    // let ul = $(".product_title_our_content")
                    // let li = $(".product_title_our_content li")
                    // let left = $("#product_title_our .btn-left")
                    // let right = $("#product_title_our .btn-right")
                    // right.on("click", function() {
                    //     if (num == 5) {
                    //         ul.css({
                    //             left: 0,
                    //         })
                    //         num = 0
                    //     }
                    //     num++

                //     ul.stop(true).animate({
                //         left: -(num * (li.eq(1).outerWidth() + 20)),
                //     })
                // })
                // left.on("click", function() {
                //     if (num == 0) {
                //         num = 1
                //     }
                //     if (num == 1) {
                //         ul.css({
                //             left: "-2645px",
                //         })
                //         num = 5
                //     }
                //     num--
                //     ul.stop(true).animate({
                //         left: -(num * (li.eq(1).outerWidth() + 20)),
                //     })

                // })
                // let timer = null
                // timer = setInterval(function() {
                //     if (num == 5) {
                //         ul.css({
                //             left: 0,
                //         })
                //         num = 0
                //     }
                //     num++

                //     ul.stop(true).animate({
                //         left: -(num * (li.eq(1).outerWidth() + 20)),
                //     })
                // }, 2000)
                // ul.on("mouseover", function() {
                //     clearInterval(timer)
                // })
                // ul.on("mouseout", function() {
                //     timer = setInterval(function() {
                //         if (num == 5) {
                //             ul.css({
                //                 left: 0,
                //             })
                //             num = 0
                //         }
                //         num++

                //         ul.stop(true).animate({
                //             left: -(num * (li.eq(1).outerWidth() + 20)),
                //         })
                //     }, 2000)
                // })
                // left.on("mouseover", function() {
                //     clearInterval(timer)
                // })
                // left.on("mouseout", function() {
                //     timer = setInterval(function() {
                //         if (num == 5) {
                //             ul.css({
                //                 left: 0,
                //             })
                //             num = 0
                //         }
                //         num++

                //         ul.stop(true).animate({
                //             left: -(num * (li.eq(1).outerWidth() + 20)),
                //         })
                //     }, 2000)
                // })
                // right.on("mouseover", function() {
                //     clearInterval(timer)
                // })
                // right.on("mouseout", function() {
                //     timer = setInterval(function() {
                //         if (num == 5) {
                //             ul.css({
                //                 left: 0,
                //             })
                //             num = 0
                //         }
                //         num++

                //         ul.stop(true).animate({
                //             left: -(num * (li.eq(1).outerWidth() + 20)),
                //         })
                //     }, 2000)
                // })
            }();
            //限时购倒计时效果
            limit: ! function() {
                function zifu(n) {
                    return n < 10 ? "0" + n : n
                }

                function djs() {
                    let futuretime = new Date('2020-10-15 20:00:00'); //未来时间
                    let currenttime = new Date(); //当前时间。
                    let time = parseInt((futuretime - currenttime) / 1000); //秒


                    let days = zifu(parseInt(time / 86400)); //天
                    let hours = zifu(parseInt(time % 86400 / 3600)); //小时
                    let mins = zifu(parseInt(time % 3600 / 60)); //分
                    let secs = zifu(time % 60);
                    let box = $(".limit_pro_left span")
                    box.eq(0).html(hours);
                    box.eq(1).html(mins);
                    box.eq(2).html(secs);
                }
                djs()

                //2020-10-1 12:23:45
                setInterval(function() {
                    djs();
                }, 1000);
            }();
            //登入退出效果
            login: ! function() {

                if ($.cookie("name")) {
                    $(".uid").show()
                    $(".noneid").hide()
                    $(".idname").html($.cookie("name"))
                } else {
                    $(".uid").hide()
                    $(".noneid").show()
                }
                $(".tuichu").on("click", function() {
                    $(".uid").hide()
                    $(".noneid").show()
                    $.cookie("name", null, { expires: -1 })
                })
            }();

        }
    }
})