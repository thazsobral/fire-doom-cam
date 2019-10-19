var video = document.querySelector("#videoElement");


if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
      video.srcObject = stream;
    })
    .catch(function (err0r) {
      console.log(err0r)

      let h1 = '<h1 class="videoFail">What The Hell<br>Camera Failure</h1>'
      document.querySelector('#contentVideo').innerHTML = h1
    })
}