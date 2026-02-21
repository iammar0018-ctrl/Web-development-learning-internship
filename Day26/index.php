<!DOCTYPE html>
<html>
<head>
    <title>Day 26 </title>
</head>
<body>

<h2>Simple Student Form</h2>

<form method="post">
    Name: <input type="text" name="name"><br><br>
    Email: <input type="text" name="email"><br><br>
    Age: <input type="number" name="age"><br><br>

    <input type="submit" name="btn" value="Submit">
</form>

<?php

if(isset($_POST['btn'])){

    $name = $_POST['name'];
    $email = $_POST['email'];
    $age = $_POST['age'];

    echo "<h3>Your Data:</h3>";
    echo "Name is: ".$name."<br>";
    echo "Email is: ".$email."<br>";
    echo "Age is: ".$age."<br><br>";

    // condition
    if($age > 18){
        echo "You are above 18<br>";
    }else{
        echo "You are below 18<br>";
    }

    echo "<br>Numbers from 1 to 3:<br>";

    // loop
    for($i=1; $i<=3; $i++){
        echo $i."<br>";
    }
}

?>

</body>
</html>