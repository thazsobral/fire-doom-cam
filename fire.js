const firePixelsArray = []
const fireWidth = 2, fireHeight = 2

function start() {
  createdFireDataStructure()
  renderFire()
}

function createdFireDataStructure () {
  const numberOfPixels = fireHeight * fireWidth

  for (let i = 0; i < numberOfPixels; i++) {
    firePixelsArray[i] = 0
  }
}

function calculateFirePropagation () {

}

function renderFire () {

}
start()
