async function loginFormHandler(event) {
    event.preventDefault();
  
    const email = document.getElementById('email').value.trim();        
    const password = document.getElementById('password').value.trim();  
  
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/party');
      } else {
        alert(response.statusText);
      }
    }
  }
  

    
    document.querySelector('#login-form').addEventListener('submit', loginFormHandler);
    
