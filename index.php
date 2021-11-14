<?php require "function/function.php"; ?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Halaman Masuk</title>
    <!-- Bootstrap 4 -->
    <link rel="stylesheet" href="css/style.css?<?php echo time(); ?>">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
</head>
<body class="bg">
    <section>
        <div class="global-container">  
            <div class="card login-form"> 
                <div class="card-body">
                    <img class="img" src="assets/logo.png" alt="logo">
                    <h3 class="card-title text-center">Selamat Datang<br> Programmer!</h3>
                    <div class="card-text">  
                        <form method="post" autocomplete='off'>  
                            <div class="form-group">  
                                <label for="exampleInputEmail1"> Username </label>  
                                <input name="username" type="text" class="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp">  
                            </div>  
                            <div class="form-group">  
                                <label for="exampleInputPassword1"> Password </label>  
                                <a href="#" style="float:right;font-size:12px;"> Lupa password? </a>  
                                <input name="pass" type="password"  class="form-control form-control-sm" id="inputPassword">
                                <input type="checkbox" class="mt-2 mr-2" onclick="myFunction()">Tampilkan Password
                            </div>  
                            <button name="login" type="submit" class="btn btn-primary btn-block"> Masuk </button>
                            <p class="mt-4 text-center">Belum punya akun?<a href="register.php"> Buat disini </a></p>  
                        </form>  
                    </div>  
                </div>
            </div>
        </div>
    </section>
    
    <script>
        function myFunction() {
            var x = document.getElementById("inputPassword");
            if (x.type === "password") {
                x.type = "text";
            } else {
                x.type = "password";
            }
        }
    </script>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</body>
</html>