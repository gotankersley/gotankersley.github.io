function Slider(name, min, max, val, step) {
	var slider = document.createElement('input');
    slider.id = name;
    slider.type = 'range';
    slider.min = min;
    slider.max = max;
    slider.value = val;
	slider.step = step;
	

	var lblSlider = document.createElement('span');
	lblSlider.textContent = name;
	var lineBreak = document.createElement('br');
	
	gui.appendChild(lblSlider);	
	gui.appendChild(slider);	
	gui.appendChild(lineBreak);	
	

	// Update the current slider value (each time you drag the slider handle)
	slider.oninput = function() {
		
		window['$' + name] = Number(this.value);
		console.log(window['$' + name])
		Render();
	}
	return val;
}

export {Slider}
