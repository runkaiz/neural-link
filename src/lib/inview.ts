export function inview(node: HTMLElement) {
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					node.classList.add('visible');
					observer.unobserve(node);
				}
			});
		},
		{ threshold: 0.01, rootMargin: '200px 0px 200px 0px' }
	);

	// Check if already scrolled past or in viewport on mount
	requestAnimationFrame(() => {
		const rect = node.getBoundingClientRect();
		if (rect.top < window.innerHeight + 200) {
			node.classList.add('visible');
		} else {
			observer.observe(node);
		}
	});

	return {
		destroy() {
			observer.unobserve(node);
		}
	};
}
