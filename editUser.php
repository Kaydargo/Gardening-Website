<?php
session_start();
require 'includes/database.php';
if (!isset($_SESSION['userID'])) {
    header('Location: login.php');
}
$currentUser = $_SESSION['userID'];
if (isset($_POST['updateUser'])) {
    $username = htmlspecialchars(!empty($_POST['username']) ? trim($_POST['username']) : null);
    $firstName = htmlspecialchars(!empty($_POST['firstName']) ? trim($_POST['firstName']) : null);
    $lastName = htmlspecialchars(!empty($_POST['lastName']) ? trim($_POST['lastName']) : null);
    $email = htmlspecialchars(!empty($_POST['email']) ? trim($_POST['email']) : null);

    if (empty(trim($_POST["username"]))) {
        $_SESSION['errMsg'] = 'You must enter a username.';
        header('location:editUser_form.php');
        exit;
    } elseif (strlen($username) < 6) {
        $_SESSION['errMsg'] = 'Your username must be 6 characters long.';
        header('location:editUser_form.php');
        exit;
    }
    else{
            //Check if username is already in use
            $checkUsername = "SELECT COUNT(username) AS numb FROM users WHERE username = :uname NOT IN (SELECT username from users WHERE userID = $currentUser)";
            $stmt = $conn->prepare($checkUsername);
            $stmt->bindValue(':uname', $username);
            $stmt->execute();
            $row = $stmt->fetch(PDO::FETCH_ASSOC);

            if ($row['numb'] > 0) {
                $_SESSION['errMsg'] = 'That username is invalid';
                header('location:editUser_form.php');
                exit;
            }

            //Update user 
            if (!empty($username)) {
                $createUser = "UPDATE users SET 
                    username = :uname, 
                    firstName = :fname, 
                    lastName = :lname,
                    email = :mail
                    WHERE  userID = :userID";

                $stmt1 = $conn->prepare($createUser);
                $stmt1->bindValue(':userID', $currentUser);
                $stmt1->bindValue(':uname', $username);
                $stmt1->bindValue(':fname', $firstName);
                $stmt1->bindValue(':lname', $lastName);
                $stmt1->bindValue(':mail', $email);
                $result = $stmt1->execute();

                if ($result) {
                    $_SESSION['userID'] = $user['userID'];
                    header('Location: userProfile.php');
                    echo 'User profile updated!';

                }
            }
        }
    }