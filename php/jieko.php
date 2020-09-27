<?php
include "./conn.php";
$result = $conn->query("select * from taobaogoods");
$arr=Array();
for($a=0;$a<$result->num_rows;$a++){
        $arr[$a]=$result->fetch_assoc();
};
echo json_encode($arr);
