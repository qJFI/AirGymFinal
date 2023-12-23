<?php
  //check if variables Posted
if ($_POST) {

     
          $fname = $_POST['fname'];
          $lname = $_POST['lname'];
          $email = $_POST['email'];
          $password =$_POST['password'];
          
          // connect to database
          include_once 'databaseConfig.php';
          global $link;
          $conn = $link;

          // send data to database
          $sql="INSERT INTO member (Fname, Lname, Email, Password)"
              . " VALUES ('" . $fname . "' , '" . $lname . "', '" . $email . "', '" . $password . "')";
          echo $sql;
          echo '<br>';
          $result =mysqli_query($conn, $sql);
          if ($result == TRUE) {
          echo "New record created successfully";
          echo '<script>location.href="../SignIn.html";</script>';
          } else {
          echo "Error: " . $sql . "<br>" . $conn->error;
          } 
    
} 
