<?php 
    $name=$_POST['name'];
    $email=$_POST['email'];
    $subject=$_POST['subject'];
    $mainsubject=$_POST['mainsubject'];


    $email_from="kshreyas495@gmail.com";
    $email_subject ="New Form Submission";
    $email_body = "User Name: $name. \n".
                    "User Email: $email.\n".
                        "User Message: $message.\n";


    
                        $to= "shreyas495@gmail.com";

                        $headers = "From: $email_from \r\n";

                        $headers .="Reply-To: $email \r\n"

                        mail($to,$email_subject, $email_body, $headers);

                        header("Location: index.html");

    //Database Connection
//     $conn =new mysqli('localhost','root','','form');
//     if($conn->connect_error)
//     {
//         die('Connection Failed: ' .$conn->connect_error);
//     }

//     else
//     {
//         $stmt=$conn->prepare("insert into registration(name,email,subject,mainsubject) 
//         values(? ? ? ?)");
//             $stmt->bind_param("ssss", $name, $email, $subject, $mainsubject);
//             $stmt->execute();
//             echo "Registration Successfully...";
        
//             $stmt->close();
//             $conn->close();
//     }
    
    ?>  
