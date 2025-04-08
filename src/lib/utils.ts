function randomInRange(min: number, max: number) {
	return Math.random() * (max - min) + min;
}

export function getRandomPos(parent: HTMLElement, child: HTMLElement) {
	// Get the dimensions of child element
	const childWidth = child.offsetWidth;
	const childHeight = child.offsetHeight;
	
	// Get dimensions of parent element
	const parentWidth = parent.offsetWidth;
	const parentHeight = parent.offsetHeight;

    // Get position of parent element
    const parentTop = parent.offsetTop;
    const parentLeft = parent.offsetLeft;
	
	// Calculate range for placement
	const top = parentTop;
	const right = parentLeft + parentWidth - childWidth;
	const bottom = parentTop + parentHeight- childHeight;
	const left = parentLeft;
	
	// Calculate a random position
	const randomX = randomInRange(left, right);
	const randomY = randomInRange(top, bottom);
	
	return [randomX, randomY];
}