window.onload = function() {
    if (Date.now() > localStorage.accessTokenExpiration) {
        window.location.replace('/login')
    }
}

