<script lang="ts">
	import { inview } from '$lib/inview';

	const lowFiScreens = [
		'/images/low/3bo6c9yXiSsfY0K05sb0d43Qkeg.png.webp',
		'/images/low/9pH3d2YM3HGKPJrL5F2kdXmKPnA.png.webp',
		'/images/low/i6x29RbeBVEGLUDq4tLsVeh0SI.png.webp'
	];

	const midFiScreens = [
		'/images/mid/2gaZCDj0yzynLmkwkfpw2TB2It4.png.avif',
		'/images/mid/ey8C9oo7YXzrnwTLRUOZOtMo.png.avif',
		'/images/mid/zUiIsYWnGU0dtIvqvi7tV7YMk8.png.avif'
	];

	const hiFiScreens = [
		'/images/high/ByaZlG0bjDWG5BVFv5ke65HSlWk.png.webp',
		'/images/high/KN50M76qpbtfzmM998eKRnf9860.png.webp',
		'/images/high/PClrPzfVPniQBWsXmSLtbmE4.png.webp',
		'/images/high/i6HPHyWbiysJU5N98h1wmu0IFA.png.avif',
		'/images/high/PvumLk2JOtzV7jITqGbrRyec.png.avif',
		'/images/high/yaBU9WBGAhmqDDgQceHTpNjosvQ.png.avif',
		'/images/high/GyNmzQ2poFNQXhj1h32UpgIoMsw.png.webp'
	];
</script>

<section id="design" class="py-32 px-6 lg:pl-24 lg:pr-0 overflow-hidden">
	<div class="max-w-[1400px] mx-auto">
		<h2 class="font-serif text-teal text-5xl md:text-7xl mb-24 fade-up" use:inview>
			UX Design <span class="italic text-ink">& Iteration</span>
		</h2>

		<!-- A. Low-Fidelity Prototype -->
		<div class="mb-32">
			<div class="max-w-xl mb-12 lg:pr-24 fade-up" use:inview>
				<h3 class="font-serif text-3xl mb-4">A. Low-Fidelity Prototype</h3>
				<p class="text-ink-muted mb-6">Explored basic gamified productivity flows including task management, leaderboards, and a core focus mode.</p>
				<ul class="list-none space-y-3 text-sm">
					<li class="flex items-start gap-2">
						<iconify-icon icon="lucide:arrow-right" class="text-teal mt-1"></iconify-icon>
						<span class="text-ink-muted"><strong>Result:</strong> Canvas integration deemed absolutely critical.</span>
					</li>
					<li class="flex items-start gap-2">
						<iconify-icon icon="lucide:arrow-right" class="text-teal mt-1"></iconify-icon>
						<span class="text-ink-muted"><strong>Feedback:</strong> Camera tracking raised massive privacy concerns.</span>
					</li>
					<li class="flex items-start gap-2">
						<iconify-icon icon="lucide:arrow-right" class="text-teal mt-1"></iconify-icon>
						<span class="text-ink-muted"><strong>Reaction:</strong> Leaderboards had mixed reception (competitive anxiety).</span>
					</li>
				</ul>
			</div>

			<!-- Lo-Fi Carousel -->
			<div class="flex overflow-x-auto gap-8 pb-12 pr-6 snap-x snap-mandatory no-scrollbar">
				{#each lowFiScreens as src, i}
					<div class="w-[280px] h-[580px] rounded-[2.5rem] border-[10px] border-ink-light/30 bg-white shadow-xl relative shrink-0 snap-center overflow-hidden">
						<div class="absolute top-0 inset-x-0 h-5 bg-ink-light/30 rounded-b-xl w-1/3 mx-auto"></div>
						<img {src} alt="Lo-Fi Screen {i + 1}" class="w-full h-full object-cover object-top" />
					</div>
				{/each}
			</div>
		</div>

		<!-- B. Mid-Fidelity Prototype -->
		<div class="mb-32">
			<div class="max-w-xl mb-12 lg:pr-24 fade-up" use:inview>
				<h3 class="font-serif text-3xl mb-4">B. Mid-Fidelity Prototype</h3>
				<p class="text-ink-muted mb-6">Applied initial design system logic. Shifted away from punitive camera tracking towards positive reinforcement.</p>
				<ul class="list-none space-y-3 text-sm">
					<li class="flex items-start gap-2">
						<iconify-icon icon="lucide:alert-circle" class="text-orange-500 mt-1"></iconify-icon>
						<span class="text-ink-muted"><strong>Usability Issue:</strong> Inability to add non-Canvas tasks was highly frustrating.</span>
					</li>
					<li class="flex items-start gap-2">
						<iconify-icon icon="lucide:check-circle-2" class="text-teal mt-1"></iconify-icon>
						<span class="text-ink-muted"><strong>Success:</strong> Lock-screen focus feature was highly valued by testers.</span>
					</li>
					<li class="flex items-start gap-2">
						<iconify-icon icon="lucide:users" class="text-teal mt-1"></iconify-icon>
						<span class="text-ink-muted"><strong>Insight:</strong> Direct competition was "stressful"; users strongly preferred collaborative modes.</span>
					</li>
				</ul>
			</div>

			<!-- Mid-Fi Carousel -->
			<div class="flex overflow-x-auto gap-8 pb-12 pr-6 snap-x snap-mandatory no-scrollbar">
				{#each midFiScreens as src, i}
					<div class="w-[280px] h-[580px] rounded-[2.5rem] border-8 border-ink bg-[#f8f9fa] shadow-2xl relative shrink-0 snap-center overflow-hidden">
						<div class="absolute top-0 inset-x-0 h-6 bg-ink rounded-b-xl w-[40%] mx-auto z-10"></div>
						<img {src} alt="Mid-Fi Screen {i + 1}" class="w-full h-full object-cover object-top" />
					</div>
				{/each}
			</div>
		</div>

		<!-- C. High-Fidelity App -->
		<div>
			<div class="max-w-xl mb-12 lg:pr-24 fade-up" use:inview>
				<h3 class="font-serif text-3xl mb-4 text-teal">C. High-Fidelity App</h3>
				<p class="text-ink-muted mb-6">The final iteration balanced warm aesthetics with robust utility. Focused on peer accountability over clinical tracking.</p>
				<ul class="list-none space-y-3 text-sm">
					<li class="flex items-start gap-2">
						<iconify-icon icon="lucide:zap" class="text-teal mt-1"></iconify-icon>
						<span class="text-ink-muted"><strong>Change:</strong> Added manual "+" entry for personal, non-academic tasks (e.g., "do laundry").</span>
					</li>
					<li class="flex items-start gap-2">
						<iconify-icon icon="lucide:zap" class="text-teal mt-1"></iconify-icon>
						<span class="text-ink-muted"><strong>Change:</strong> Timer automatically links to estimated task lengths.</span>
					</li>
					<li class="flex items-start gap-2">
						<iconify-icon icon="lucide:zap" class="text-teal mt-1"></iconify-icon>
						<span class="text-ink-muted"><strong>Feature:</strong> Collaborative "Boss" competitions where pods unlock real UW Ave restaurant coupons.</span>
					</li>
				</ul>
			</div>

			<!-- Hi-Fi Carousel -->
			<div class="flex overflow-x-auto gap-8 pb-12 pr-6 snap-x snap-mandatory no-scrollbar">
				{#each hiFiScreens as src, i}
					<div class="w-[280px] h-[580px] rounded-[2.5rem] border-8 border-ink bg-white shadow-2xl relative shrink-0 snap-center overflow-hidden group cursor-pointer">
						<div class="absolute top-0 inset-x-0 h-6 bg-ink rounded-b-xl w-[40%] mx-auto z-10"></div>
						<img {src} alt="Hi-Fi Screen {i + 1}" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
					</div>
				{/each}
			</div>
		</div>

	</div>
</section>
