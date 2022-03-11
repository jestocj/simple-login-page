function validateForm() {
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    var username = "admin";
    var password = "admin";
    if ((user == username) && (pass == password)) {
        Swal.fire({
          position: 'centre',
          icon: 'success',
          title: 'You have been successfully logged in',
          showConfirmButton: false,
          timer: 1500
        })
          window.location.href = 'JKBLemh6PA2lth59VzcQVQxZONU0I3J.html';
          return false;
        }
    else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          })
    }
  }
