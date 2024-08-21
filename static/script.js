function renderButton(site, l = 26) {
    const tb = '+' + '-'.repeat(l) + '+';
    const mid = '|' + site.padStart(Math.floor((l + site.length) / 2)).padEnd(l) + '|';
    const but = [tb, mid, tb].join('\n');
    return but;
}

// Function to create menu
function createMenu() {
	const names = ["home", "music", "av", "coding"];
	const container = document.getElementById('menu');

	names.forEach(name => {
		// Create a button element
		const button = document.createElement('div');

		// Setup for button
		button.className = 'button';
		
		const link = document.createElement('a');
		link.href = name + '.html';
		
		const text = document.createElement('span');
		text.textContent = renderButton(name);
		link.appendChild(text);
		button.appendChild(link);
		
		// Append the button to the container
		container.appendChild(button);
	});
}

createMenu()
