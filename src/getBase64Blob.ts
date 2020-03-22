export default function getBase64(blob: Blob) {
    var reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = function () {
        return reader.result;
    }
  }
  