<?php

   if(isset($_POST['btn-send']))
   {
        $UserName = $_POST['name'];
        $Email = $_POST['email'];
        $Msg = $_POST['message'];

        if(empty($UserName) || empty($Email) || empty($Subject) || empty($Msg))
        {
            header('location:contact.php?error');
        }
        else
        {
            $to = "muktijindal5@gmail.com";

            if(mail($to,$Msg,$Email))
            {
                header("location:contact.php?success");
            }
        }

   }
   else
   {
     
        header('location:contact.php?success');
      
   }
?>
