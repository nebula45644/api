let checkEnabled = true;

function checkPopupsAndRedirects() {
  setTimeout(() => {
    const popupWindow = window.open("about:blank", "_blank");

    if (!popupWindow || popupWindow.closed || popupWindow.innerHeight === 0) {
      const popupResult = window.confirm(
        "Enable popups and redirects in your browser settings, then please click 'OK' to continue."
      );

      if (popupResult) {
        checkEnabled = false;
        checkPopupsAndRedirects();
      } else {
        setTimeout(checkPopupsAndRedirects, 1);
      }
    }
  }, 1);
}

checkPopupsAndRedirects();
