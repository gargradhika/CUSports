<?php
     $Username = $_POST['Username'];
     $Password = $_POST['Password'];

     $con = new mysqli("localhost","root","","tesst");
     if($con->connect_error) {
        die("Failed to connect : ".$conn->connect_error);
     } else {
        $stmt = $con->prepare("select * from login where Username = ?");
        $stmt->bind_param("i", $Username);
        $stmt->execute();
        $stmt_result = $stmt->get_result();
        if($stmt_result->num_rows > 0) {
            $data  = $stmt_result->fetch_assoc();
            if($data['Password'] === $Password) {
                echo "<h2>Login Successfully</h2>";
            }

        }else {
            echo "<h2>Invalid Email or password</h2>";
        }
     }
?>