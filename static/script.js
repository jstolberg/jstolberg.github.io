function renderButton(site, l = 26) {
    const tb = '+' + '-'.repeat(l) + '+';
    const mid = '|' + site.padStart(Math.floor((l + site.length) / 2)).padEnd(l) + '|';
    const but = [tb, mid, tb].join('\n');
    return but;
}

// Function to create menu
function createMenu() {
	const pages = [
		["home", "index"],
		["music", "music"],
		["other", "other"]
	];
	const container = document.getElementById('menu');

	pages.forEach(page => {
		// Create a button element
		const button = document.createElement('div');

		// Setup for button
		button.className = 'button';
		
		const link = document.createElement('a');
		link.href = page[1];
		
		const text = document.createElement('span');
		text.textContent = renderButton(page[0]);
		link.appendChild(text);
		button.appendChild(link);
		
		// Append the button to the container
		container.appendChild(button);
	});
}

// Return random number in range (min,max)
function randomInRange(min, max) {
	return Math.random() * (max - min) + min;
}

// Place a child object fully visibly within a parent object.
// Possibly with a offset of [top, right, bottom, left]
function placeItemRandomly(parent, child, offset=[0,0,0,0]) {
	// Get the dimensions of the text element
	const childWidth = child.offsetWidth;
	const childHeight = child.offsetHeight;
	
	// Get the dimensions of the window (viewport)
	const parentWidth = parent.offsetWidth;
	const parentHeight = parent.offsetHeight;
	
	// Calculate range for placement
	const top = offset[0];
	const right = parentWidth - offset[1] - childWidth;
	const bottom = parentHeight - offset[2] - childHeight;
	const left = offset[3];
	
	// Calculate a random position
	const randomX = randomInRange(left, right);
	const randomY = randomInRange(top, bottom);
	
	// Set the position of the text element
	child.style.left = `${randomX}px`;
	child.style.top = `${randomY}px`;
}

function listLinks() {
	const items = [
		["✨ UNFOLDING HORSES ✨", "https://soundcloud.com/spraklitani/unfolding-horses"],
		["DZ XX", "https://soundcloud.com/spraklitani/dz-xx"],
		["HAPPY EVER AFTER 💖", "https://soundcloud.com/spaekltini/sparkletini-b2b-yen3k-happy-ever-after"],
		["KARAOKE SUPER MIX", "https://soundcloud.com/spaekltini/sparkletini-karaoke-super-mix"],
		["SICK FRIDAY MINI MIX", "https://soundcloud.com/spaekltini/spakeltine-sick-friday-mini-mix"],
		["LIIT BDAY MIX", "https://soundcloud.com/spaekltini/sparkletini-liit-bday-mix"]
	];
	const container = document.getElementById('content');

	items.forEach(item => {
		// Create a button element
		const button = document.createElement('div');

		// Setup for button
		button.className = 'linkContainer';
		
		const link = document.createElement('a');
		link.href = item[1];
		link.target = "_blank";
		link.rel = "noopener noreferrer";
		link.className = 'musicLink';
		
		const text = document.createElement('span');
		text.textContent = item[0];
		link.appendChild(text);
		button.appendChild(link);
		
		// Append the button to the container
		container.appendChild(button);
	});
}

function setLinksPosition() {
	const items = Array.from(document.getElementsByClassName('linkContainer'));
	
	var i = 0;
	items.forEach(button => {
		// Get dimensions of menu
		const menuWidth = document.getElementById('menu').offsetWidth;
		const menuHeight = document.getElementById('menu').offsetHeight;
		
		// Get the dimensions of the window (viewport)
		const windowWidth = window.innerWidth; 
		const windowHeight = window.innerHeight;
		
		// Setting dimensions and position of containing div
		const divWidth = menuWidth;
		const divHeight = 70;
		const divTop = i * divHeight + menuHeight;
		const divLeft = (windowWidth - menuWidth)/2;
		button.style.width = `${divWidth}px`;
		button.style.height = `${divHeight}px`;
		button.style.top = `${divTop}px`;
		button.style.left = `${divLeft}px`;
		
		// Place link randomly within containing div
		const link = button.getElementsByTagName('a')[0];
		placeItemRandomly(button, link);
		
		// Update enumerator
		i = i + 1;
	});
}

function setBlankPosition() {
		// Get dimensions of menu
		const menuWidth = document.getElementById('menu').offsetWidth;
		const menuHeight = document.getElementById('menu').offsetHeight;
		
		// Get the dimensions of the window (viewport)
		const windowWidth = window.innerWidth;
		const windowHeight = window.innerHeight;
		
		const blank = document.getElementById('blank');
		const blankWidth = blank.offsetWidth;
		const blankHeight = blank.offsetHeight;
		blank.style.position = `absolute`;
		blank.style.left = `${(windowWidth-blankWidth)/2}px`;
		blank.style.top = `${menuHeight + (windowHeight - menuHeight - blankHeight)/2}px`;
}
