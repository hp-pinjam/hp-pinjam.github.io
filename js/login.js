$(document).ready(function () {
    // Event listener untuk form login
    $(".login-form form").on("submit", function (event) {
      event.preventDefault(); // Menghentikan pengiriman formulir
  
      var email = $("input[type='text']").val(); 
      var password = $("input[type='password']").val(); 
  
      // Gantilah kondisi ini dengan logika validasi yang sesuai
      if (email === "contoh@email.com" && password === "riziq") {
        // Login berhasil
        Swal.fire({
          icon: 'success',
          title: 'Login Berhasil',
          text: 'Anda telah berhasil login',
          showConfirmButton: false,
          timer: 1500
        });
  
        // Redirect ke halaman dashboard
        window.location.href = '#';
      } else {
        // Login gagal
        Swal.fire({
          icon: 'error',
          title: 'Login Gagal',
          text: 'Email atau password salah',
          showConfirmButton: false,
          timer: 1500
        });
      }
    });
  
    // Event listener untuk form signup
    $(".signup-form form").on("submit", function (event) {
      event.preventDefault(); // Menghentikan pengiriman formulir
  
      var name = $(".signup-form input[name='name']").val();
      var email = $(".signup-form input[name='email']").val();
      var password = $(".signup-form input[name='password']").val();
  
      // Gantilah kondisi ini dengan logika validasi yang sesuai
      if (name && email && password) {
        // Sign-up berhasil
        Swal.fire({
          icon: 'success',
          title: 'Sign-up Berhasil',
          text: 'Anda telah berhasil mendaftar',
          showConfirmButton: false,
          timer: 1500
        });
        // Anda dapat melakukan tindakan lain yang sesuai dengan sign-up yang berhasil
      } else {
        // Sign-up gagal
        Swal.fire({
          icon: 'error',
          title: 'Sign-up Gagal',
          text: 'Mohon isi semua kolom dengan benar',
          showConfirmButton: false,
          timer: 1500
        });
      }
    });
  });
  