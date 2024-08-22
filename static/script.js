function renderButton(site, l = 26) {
    const tb = '+' + '-'.repeat(l) + '+';
    const mid = '|' + site.padStart(Math.floor((l + site.length) / 2)).padEnd(l) + '|';
    const but = [tb, mid, tb].join('\n');
    return but;
}

// Function to create menu
function createMenu() {
	const pages = [
		["home", "index.html"],
		["music", "music.html"],
		["other", "other.html"]
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

function placeTextRandomly() {
	// Get the text element
	const textElement = document.getElementById('randomText');
	
	// Get the dimensions of the text element
	const textWidth = textElement.offsetWidth;
	const textHeight = textElement.offsetHeight;
	
	// Get the dimensions of the window (viewport)
	const windowWidth = window.innerWidth;
	const windowHeight = window.innerHeight;
	
	// Get height of´the menu
	const menuHeight = document.getElementById('menu').offsetHeight;
	
	// Calculate a random position within the window, ensuring the text is fully visible
	const randomX = Math.random() * (windowWidth - textWidth);
	const randomY = menuHeight + Math.random() * (windowHeight - menuHeight - textHeight);
	
	// Set the position of the text element
	textElement.style.left = `${randomX}px`;
	textElement.style.top = `${randomY}px`;
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
		button.style.heigth = `${divHeight}px`;
		button.style.top = `${divTop}px`;
		button.style.left = `${divLeft}px`;
		
		// Get the dimensions of the text element
		const link = button.getElementsByTagName('a')[0];
		const textWidth = link.offsetWidth;
		const textHeight = link.offsetHeight;
		
		// Calculate a random position within the containing div, ensuring the text is fully contained
		const randomX = Math.random() * (divWidth - textWidth);
		const randomY = Math.random() * (divHeight - textHeight);
		
		// Setting link position
		button.style.paddingLeft = `${randomX}px`;
		button.style.paddingTop = `${randomY}px`;
		
		// Update enumerator
		i = i + 1;
	});
}
