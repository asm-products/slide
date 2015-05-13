timer = null
currentSlide = 1
totalSlides = 2
slideInterval = 10000

start = ->
	# document.getElementById('anchorID').onclick = ->
	# 	console.log 'Clicked!'

	timer = setTimeout slide, slideInterval


slide = (up = yes) ->
	console.log 'Slide!'

	document.getElementById('imgbox_' + currentSlide).style.display = 'none'
	document.getElementById('imgcontent_' + currentSlide).style.display = 'none'
	document.getElementById('imgdot_' + currentSlide).className = ''

	if up
		currentSlide++
		currentSlide = 1 if currentSlide > totalSlides
	else
		currentSlide--
		currentSlide = totalSlides if currentSlide < 1

	document.getElementById('imgbox_' + currentSlide).style.display = 'block'
	document.getElementById('imgcontent_' + currentSlide).style.display = 'block'
	document.getElementById('imgdot_' + currentSlide).className = 'active'

	timer = setTimeout slide, slideInterval