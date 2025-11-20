// XSS_Test.js hosted on GitHub via jsDelivr
(function() {
    // 1. Change the page background to a visible color (e.g., red)
    document.body.style.backgroundColor = 'red';

    // 2. Insert a large, visible confirmation message
    var confirmationMessage = document.createElement('h1');
    confirmationMessage.innerHTML = 'CSP BYPASS SUCCESSFUL!';
    confirmationMessage.style.color = 'white';
    confirmationMessage.style.textAlign = 'center';
    document.body.prepend(confirmationMessage);

    // 3. Simple non-cookie alert for confirmation
    alert("XSS Payload Executed - Background Color Changed");
})();
