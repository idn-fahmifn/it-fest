// About Section

const aboutImages = [
	"https://cdn.tutsplus.com/cdn-cgi/image/width=600/webdesign/uploads/legacy/tuts/183_rotatedThumbnails/tut/css_object.png",
	"https://i7x7p5b7.stackpathcdn.com/codrops/wp-content/uploads/2014/12/transform-origin-examples.png",
	"https://www.encodedna.com/css-tutorials/tilt-or-rotate-span-a-element-using-css-transform.png",
	"https://i.stack.imgur.com/egG1o.png"
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