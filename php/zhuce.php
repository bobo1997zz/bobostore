<?php
    include "./conn.php";
    if(isset($_POST["name"]) || isset($_POST["submit"])){
        $yname=$_POST["name"];
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
        echo  $name;
        echo  $password;
        echo  $email;
        $conn->query("insert registry values(default,'$name',sha1('$password'),'$email',NOW())");
        header('location:http://192.168.13.29/text/bobostor/bobostore/src/login.html');
    };