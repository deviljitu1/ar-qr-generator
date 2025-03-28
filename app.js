function generateQRCode() {
  const input = document.getElementById('code-input').value;
  const canvas = document.getElementById('qr-canvas');
  
  if (input) {
    // Generate the QR Code using QRCode.js
    QRCode.toCanvas(canvas, input, function (error) {
      if (error) {
        console.error(error);
        alert("There was an error generating the QR code.");
      } else {
        console.log('QR Code generated successfully!');
      }
    });
  } else {
    alert("Please enter text or URL.");
  }
}
