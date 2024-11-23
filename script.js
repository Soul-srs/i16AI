window.onload = function() {
    const aipe = document.getElementById('aipe');

    setTimeout(() => {
        let opacity = 1;
        const fadeInterval = setInterval(() => {
            opacity -= 0.05; 
            aipe.style.opacity = opacity;

            if (opacity <= 0) {
                clearInterval(fadeInterval); 
            }
        }, 30);
    }, 7500);
};
