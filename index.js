// About Section

const aboutImages = [
	"https://lh3.google.com/u/0/d/1oCOs-SFUm-pwInil8mpoZw1hjVi5yHFv=w3000-h6492-iv1",
	"https://lh3.google.com/u/0/d/1xDwi5_bxM-f2rGM-f9mtInUfqZ8KpZWj=w3000-h6492-iv1",
	"https://lh3.google.com/u/0/d/1dkzrV0_GVrxK1gT0P_LrBpblQSfkM5L7=w3000-h6492-iv1",
	"https://lh3.google.com/u/0/d/1dkzrV0_GVrxK1gT0P_LrBpblQSfkM5L7=w3000-h6492-iv1"
]

const displayImage = (n) => {
	const imageContainer = document.querySelector(".slideshow__images")

	if (n > aboutImages.length) slideIndex = 1
	if (n < 1) slideIndex = aboutImages.length

	imageContainer.innerHTML = `<img src="${aboutImages[slideIndex - 1]}" alt="slideshow image" class="slideshow__image">`
}

const changeImage = (n) => {
	displayImage(slideIndex += n)
}

let slideIndex = 1
displayImage(slideIndex)

document.getElementById("move-left").addEventListener('click', (e) => {
	e.stopPropagation()
	changeImage(-1)
})

document.getElementById("move-right").addEventListener('click', (e) => {
	e.stopPropagation()
	changeImage(1)
})