;
//
! function() {
    $.ajax({
        type: "get",
        url: "http://192.168.13.62/text/bobostor/bobostore/php/jieko.php",
        dataType: "JSON",
    }).done(function(data) {
        //新品板块推荐渲染
        let str_new = ""
        $.each(data, function(index, value) {
            // console.log(data)
            let pic = value.piclisturl.split(",")

            str_new += `<li>
                        <img src="${pic[0]}" alt="" class="">
                        <img src="${pic[1]}" alt="">
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
        let str_recommend = ` <img src="${data[18]["url"]}" alt="" class="active">
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
            <img src="${data[a]["url"]}" alt="" class="active">
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
            <img src="${data[a]["url"]}" alt="">
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
                    <img src="${data[a]["url"]}" alt="">
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
                <img src="${data[a]["url"]}" alt="">
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
                <img src="${data[a]["url"]}" alt="">
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
            <img src="${pic[0]}" alt="">
            <img src="${pic[1]}" alt="">
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
            <img src="${pic[0]}" alt="">
            <img src="${pic[1]}" alt="">
            <p class="product_title_clothing_content_p1">每满200减25券</p>
            <p class="product_title_clothing_content_p2">${data[a]["title"]}</p>
            <p class="product_title_clothing_content_p3">
                <span>¥${data[a]["price"]}</span>
                <del>¥${data[a]["oldprice"]}</del>
            </p>
        </li>`

        }
        $(".product_title_clothing_content").html(str_clothing)
    })
}();