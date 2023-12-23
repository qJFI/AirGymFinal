<?php

if ($_POST) {
        $email = $_POST['email'];
        $password = $_POST['password'];
        include_once 'databaseConfig.php';
        global $link;
        $conn = $link;
     //  send data to database
        $sql = "select * from member where email='" . $email . "' and password='" . $password. "'";
        $res = mysqli_query($conn, $sql);

        if ($res->num_rows > 0) {
            echo'<script>alert("user found")</script>';
            echo 'Welcome User';
            echo '<script>location.href="../about.html";</script>';
        } else {
            echo'<script>alert("error: user not found")</script>';
            echo 'User Not Found';
            echo '<script>location.href="../Sign Up.html";</script>'; //go back to sign up
        }
        
    }


