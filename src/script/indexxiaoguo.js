;
//头部banner效果
! function() {
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
            pic.eq(num).animate({
                opacity: 1,
            }).siblings("img").animate({
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
            pic.eq(num).animate({
                opacity: 1,
            }).siblings("img").animate({
                opacity: 0,
            })
            li.eq(num).attr("class", "over").siblings().removeClass()

            num++
            console.log(num)
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
            pic.eq(num).animate({
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
        pic.eq(num).animate({
            opacity: 1,
        }).siblings("img").animate({
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
        pic.eq(num).animate({
            opacity: 1,
        }).siblings("img").animate({
            opacity: 0,
        })
        li.eq(num).attr("class", "over").siblings().removeClass()


    })

}()
//左右导航栏 和隐藏搜索框效果
;
! function() {
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

}()