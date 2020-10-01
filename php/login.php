<?php
    include "./conn.php";
    if(isset($_POST["usename"]) && isset($_POST["password"])){
        $name=$_POST["usename"];
        $password=$_POST["password"];
        $result = $conn->query("select * from registry where username='$name' and password=sha1('$password')");
        if($result->fetch_assoc()){
            echo true;
        }else{
            echo false;
        };
    }else{
        exit("非法操作");
    };