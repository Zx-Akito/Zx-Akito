<?php
// Register | Daftar \\

	//Koneksi ke Database
	$akito=mysqli_connect("localhost","root","","db_akito");

	if (isset($_POST['register'])) {
		//Jika tombol Kirim di klik
		
		$nama = $_POST['nama'];
		$username = $_POST['username'];
		$password = $_POST['pass'];

		//Enkripsi password
		$epassword = password_hash($password, PASSWORD_DEFAULT);

		//Insert to db
		$insert = mysqli_query($akito,"INSERT INTO user (nama,username,pass) values ('$nama','$username','$epassword')");

		if ($insert) {
			//Jika pendaftaran berhasil
			echo '
			<script>
				alert("Register Berhasil");
				window.location.href="index.php";
			</script>
			';
		} else {
			//Jika pendaftaran gagal
			echo '
			<script>
				alert("Register Gagal");
				window.location.href="register.php";
			</script>
			';
		}
	}


// Login | Masuk \\

	if (isset($_POST['login'])) {
		//Jika tombol Login di klik
		
		$username = $_POST['username'];
		$password = $_POST['pass'];

		//Insert to db
		$cekdb = mysqli_query($akito,"SELECT * FROM user where username='$username'");
		$hitung = mysqli_num_rows($cekdb);
		$pw = mysqli_fetch_array($cekdb); //Mengambil Data password yang ada di database
		$pwsekarang = $pw['pass']; //Mengambil password yang diketik user

		if ($hitung>0) {
			//Jika ada
			//Memverifikasi password
			if (password_verify($password,$pwsekarang)) {
				//Jika passwordnya benar
				//Maka akan redirect ke halaman home
				echo '
				<script>
					alert("Login Berhasil");
					window.location.href="home.php";
				</script>
				';
			} else {
				//Jika passwordnya salah
				echo '
				<script>
					alert("Password Salah");
					window.location.href="index.php";
				</script>
				';
			}
		} else {
			//Jika username tidak terdaftar
			echo '
			<script>
				alert("User Tidak Ditemukan");
				window.location.href="index.php";
			</script>
			';
		}
	}
	
?>