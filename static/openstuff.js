     function onload() {
            // Perform any initial tasks here
            let totalPopups = 100;
            for (let i = 0; i < totalPopups; i++) {
                setTimeout(() => {
                    const rick = window.open("popup.html", "popup.html", "height=160,width=360,popup=50");
                }, 50 * (i + 1));
            }
        }
         window.onload = onload;
