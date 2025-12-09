function login() {
    const u = document.getElementById('user').value;
    const p = document.getElementById('pass').value;
    if (u === 'user' && p === 'pass') {
        localStorage.setItem('logged', 'yes');
        window.location.href = 'portfolio.html';
    } else {
        alert('Incorrect login');
    }
}

if (window.location.pathname.includes('portfolio.html')) {
    if (localStorage.getItem('logged') !== 'yes') { window.location.href = 'login.html'; }
}

function logout() { localStorage.removeItem('logged'); window.location.href = 'login.html'; }