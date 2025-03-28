function generateQRCode() {
    const url = document.getElementById('ar-url').value;
    const canvas = document.getElementById('qr-canvas');
  
    if (url) {
      QRCode.toCanvas(canvas, url, function (error) {
        if (error) console.error(error);
        console.log('QR Code generated!');
      });
    } else {
      alert("Please enter the URL for the AR experience.");
    }
  }
// Add event listener to the button
document.getElementById('generate-button').addEventListener('click', generateQRCode);  