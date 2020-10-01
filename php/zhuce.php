<?php
    include "./conn.php";
    if(isset($_POST["usename"]) || isset($_POST["submit"])){
        $yname=$_POST["usename"];
        $result = $conn->query("select * from registry where username='$yname'");
        if($result->fetch_assoc()){
            echo false;
        }else{
            echo true;
        };
    }else{
        exit("非法操作");   
    }
    if(isset($_POST["submit"])){
        $name=$_POST["usename"];
        $password=$_POST["password"];
        $email=$_POST["email"];
        $phone=$_POST["phone"];
        $conn->query("insert registry values(default,'$name',sha1('$password'),'$email',NOW(),'$phone')");
        header('location:http://192.168.1.108/text/bobostor/bobostore/src/login.html');
    };