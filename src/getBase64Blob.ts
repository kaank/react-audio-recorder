export default function getBase64(blob: Blob) {
    var reader = new window.FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = function () {

        return reader.result;
    }
  }
  