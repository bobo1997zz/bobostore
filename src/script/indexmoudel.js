define(['jquery', 'jcookie', 'jlazyload'], function() {
    return {
        init() {
            render: ! function() {
                $.ajax({
                    type: "get",
                    url: "http://192.168.13.62/text/bobostor/bobostore/php/jieko.php",
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
                        let str_recommend = ` <img class="lazy" data-original="${data[18]["url"]}" alt="" class="active">
                       <p class="recommend-pro-p1">新品尝鲜</p>
                       <p class="recommend-pro-p2">${data[18]["title"]}</p>
                       <p class="recommend-pro-p3">
                           <span class="recommend-pro-p3-span1" style="color:red;">￥${data[18]["price"]}</span>
                           <del class="recommend-pro-p3-span2">￥${data[18]["oldprice"]}</del>
                       </p>`
                        $(".recommend-pro-left").html(str_recommend)
                        let str_recommend_right = ""
                        for (let a = 10; a <= 15; a++) {
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
                        for (let a = 11; a <= 14; a++) {
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
                                <span>限时价￥${data[a]["price"]} </span>
                                <del>￥${data[a]["oldprice"]}</del>
                            </p>
                            <p class="limit_pro_center-pro-2-p4">立即抢购</p>
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
                            <p class="product_title_housr_content_p1">每满200减25券</p>
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
                        $("img.lazy").lazyload({
                            effect: "fadeIn" //图片显示方式
                        });
                    }

                })
            }();
            bannerXG: ! function() {
                let banner = $("#banner")
                let pic = $("#banner img")
                let num = null
                let timer = null
                let ul = $("#banner ul")
                let li = $("#banner ul li")

                li.each(function(index, value) {
                    $(value).attr("sid", index)
                    $(value).attr("class", "")
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

                        num++
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
                        backgroud: "#E2C199",
                    })
                    console.log(1)
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
            LRnavXG: ! function() {
                let leftnav = $("#left_nav")
                let rightnav = $("#right_nav")
                $(window).on("scroll", function() {
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
                $(window).on("scroll", function() {
                    if ($(window).scrollTop() > 180) {
                        $("#search-scroll").css({
                            display: "block",
                            position: "fixed",
                            left: 0,
                            top: 0,
                            background: "white",
                            zIndex: 2,
                        })

                    } else {
                        $("#search-scroll").css({
                            display: "none",

                        })
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
                                    backgroundColor: "#E2C199",
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
            headnav: ! function() {
                let li = $(".search_buttom>li")
                let centent = $(".search_buttom>li>div")

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
                let li_s = $(".search-scroll-main>ul>li")
                let centent_s = $(".search-scroll-main>ul>li>div")
                centent_s.each(function(index, value) {
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

            }()
            houserxg: ! function() {
                class HourPic {
                    constructor() {

                    }
                    init() {
                        let news = $(".product_title_housr_content")
                        news.on("mouseover", "li", function() {
                            console.log(this)
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
                class Hoursebanner {
                    constructor() {

                    }
                    init() {
                        let num = null
                        let hoursebtn = $(".product_title_housr_banner_btn li")
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
                                    // hoursebtn.each(function(index, value) {
                                    //     value.css({
                                    //         border: "none",
                                    //     })
                                    // })
                                $(this).css({
                                    border: "2px solid #cc9567",
                                }).siblings().css({
                                    border: "none",
                                })
                            })

                            // $(value).on("mouseout", function() {
                            //     $(this).css({
                            //         border: "none",
                            //     })
                            // })
                        })
                        let left = $("#product_title_housr .left")
                        let right = $("#product_title_housr .right")
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
                            }).siblings("li").css({
                                border: "none",
                            })
                        })
                        right.on("click", function() {
                            num++
                            if (num > 3) {
                                num = 0
                            }
                            housrsepic.eq(num).stop(true).animate({
                                opacity: 1,
                            }).siblings("li").stop(true).animate({
                                opacity: 0,
                            })
                            hoursebtn.eq(num).css({
                                border: "2px solid #cc9567",
                            }).siblings("li").css({
                                border: "none",
                            })
                            console.log(num)
                        })
                        let timer = null
                        timer = setInterval(function() {
                            num++
                            if (num > 3) {
                                num = 0
                            }
                            housrsepic.eq(num).stop(true).animate({
                                opacity: 1,
                            }).siblings("li").stop(true).animate({
                                opacity: 0,
                            })
                            hoursebtn.eq(num).css({
                                border: "2px solid #cc9567",
                            }).siblings("li").css({
                                border: "none",
                            })
                        }, 2000)
                        let hourse = $(".product_title_housr_banner")
                        hourse.on("mouseover", function() {
                            clearInterval(timer)
                        })
                        hourse.on("mouseout", function() {
                            timer = setInterval(function() {
                                num++
                                if (num > 3) {
                                    num = 0
                                }
                                housrsepic.eq(num).stop(true).animate({
                                    opacity: 1,
                                }).siblings("li").stop(true).animate({
                                    opacity: 0,
                                })
                                hoursebtn.eq(num).css({
                                    border: "2px solid #cc9567",
                                }).siblings("li").css({
                                    border: "none",
                                })
                            }, 2000)
                        })
                    }
                }
                new Hoursebanner().init()
            }()
        }
    }
})