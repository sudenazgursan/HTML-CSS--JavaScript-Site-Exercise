document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".urunler .item .buttons button").forEach(function(button) {
        button.addEventListener("click", function() {
            document.querySelector('.sepet-popup').style.display = 'flex';
        });
    });
    
    document.querySelector("#girisYapButton").addEventListener("click", function() {
        document.querySelector('.login-popup').style.display = 'flex';
    });
    
    function sepetKapat() {
        document.querySelector('.sepet-popup').style.display = 'none';
    }
    
    function loginKapat() {
        document.querySelector('.login-popup').style.display = 'none';
    }
    
    setInterval(sepetKapat, 4000);
    
    document.querySelectorAll(".login .item button").forEach(function(button) {
        button.addEventListener("click", function() {
            document.querySelector('.login-popup .login').style.display = 'none';
            document.querySelector('.login-popup .login-success').style.display = 'flex';
            setInterval(loginKapat, 2000);
        });
    });

    document.querySelector(".sepet-popup .close").addEventListener("click", function() {
        sepetKapat();
    });
});