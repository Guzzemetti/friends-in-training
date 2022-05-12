const loginFormHandler = async (event) => {
  event.preventDefault();

  const emailEl = document.querySelector('#login-email');
  const passwordEl = document.querySelector('#login-password');

  // if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email: emailEl.value, password: passwordEl.value }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/api/profile');
    } else {
      alert('Failed to log in');
    }
};

document
  .querySelector('#login-form')
  .addEventListener('submit', loginFormHandler);
