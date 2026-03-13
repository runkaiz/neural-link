<script lang="ts">
	import { inview } from '$lib/inview';
</script>

<section class="bg-teal text-cream py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
	<div class="max-w-[1400px] mx-auto">
		<h2 class="font-serif text-3xl md:text-5xl lg:text-7xl text-cream mb-24 max-w-4xl fade-up" use:inview>
			Oliver Isn't Alone: <span class="italic opacity-70">The Invisible Wall</span>
		</h2>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">

			<!-- Stat 1 -->
			<div class="relative pt-8 border-t border-cream/20 fade-up" use:inview>
				<div class="absolute -top-10 right-0 w-24 h-24 bg-cream rounded-full flex items-center justify-center p-4 shadow-xl mix-blend-screen">
					<img src="/images/gpa-icon.webp" alt="ADHD Depression Overlap" class="w-full h-full object-contain grayscale invert" />
				</div>
				<span class="block text-sm font-medium tracking-widest uppercase mb-4 text-cream/60">The Overlap</span>
				<div class="font-serif text-6xl lg:text-8xl mb-6 leading-none">5.6%</div>
				<p class="text-lg lg:text-xl text-cream/80 leading-relaxed">
					of college students navigate ADHD, while <strong class="text-cream font-bold">44%</strong> manage depression symptoms.
				</p>
			</div>

			<!-- Stat 2 -->
			<div class="relative pt-8 border-t border-cream/20 fade-up delay-100" use:inview>
				<div class="absolute -top-10 right-0 w-24 h-24 bg-cream rounded-full flex items-center justify-center p-4 shadow-xl mix-blend-screen">
					<img src="/images/burden-icon.webp" alt="Burden Icon" class="w-full h-full object-contain grayscale invert" />
				</div>
				<span class="block text-sm font-medium tracking-widest uppercase mb-4 text-cream/60">The Double Hit</span>
				<div class="font-serif text-6xl lg:text-8xl mb-6 leading-none">24%</div>
				<p class="text-lg lg:text-xl text-cream/80 leading-relaxed">
					of students experience an overlap, where academic performance takes the hardest hit.
				</p>
			</div>

			<!-- Stat 3 -->
			<div class="relative pt-8 border-t border-cream/20 fade-up delay-200" use:inview>
				<div class="absolute -top-10 right-0 w-24 h-24 bg-cream rounded-full flex items-center justify-center p-4 shadow-xl mix-blend-screen">
					<img src="/images/extra-2.webp" alt="GPA Drop" class="w-full h-full object-contain grayscale invert" />
				</div>
				<span class="block text-sm font-medium tracking-widest uppercase mb-4 text-cream/60">The GPA Tax</span>
				<div class="font-serif text-6xl lg:text-8xl mb-6 leading-none">-0.49</div>
				<p class="text-lg lg:text-xl text-cream/80 leading-relaxed">
					average drop in GPA points associated with a depression diagnosis.
				</p>
			</div>
		</div>

		<div class="mt-24 pt-12 border-t border-cream/10 text-center">
			<p class="font-serif italic text-3xl md:text-5xl text-cream">
				"When depression scores go up, <br class="hidden md:block" />GPAs go down."
			</p>
		</div>
	</div>
</section>
