<script lang="ts">
	import { inview } from '$lib/inview';
</script>

<section id="hero" class="px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto mb-32">
	<div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end">

		<!-- Title Area -->
		<div class="lg:col-span-7 pt-10 md:pt-20 fade-up" use:inview>
			<p class="font-serif italic text-2xl md:text-3xl text-ink-muted mb-4">
				By Peter, Khawton, Nico
			</p>
			<h1 class="font-serif text-[12vw] lg:text-[9vw] leading-[0.85] tracking-tighter text-ink mb-8 -ml-1 lg:-ml-2">
				Neural Link
			</h1>
			<p class="text-xl md:text-2xl text-ink-muted font-medium max-w-2xl leading-relaxed">
				Redesigning focus and belonging for international students with ADHD.
			</p>

			<!-- Metadata Bar -->
			<div class="mt-12 pt-6 border-t border-ink-light/40 flex flex-wrap gap-x-8 gap-y-4 text-sm tracking-wide uppercase text-ink-muted">
				<span class="flex items-center gap-2">
					<iconify-icon icon="lucide:search"></iconify-icon> UX Research & Design
				</span>
				<span class="flex items-center gap-2">
					<iconify-icon icon="lucide:map-pin"></iconify-icon> University of Washington
				</span>
				<span class="flex items-center gap-2">
					<iconify-icon icon="lucide:calendar"></iconify-icon> Oct–Dec 2025
				</span>
			</div>

			<!-- Course Attribution -->
			<div class="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-xs tracking-wide uppercase text-ink-light">
				<span class="flex items-center gap-2">
					<iconify-icon icon="lucide:book-open"></iconify-icon> HCDE 302 & HCDE 303
				</span>
				<span class="flex items-center gap-2">
					<iconify-icon icon="lucide:info"></iconify-icon> Not affiliated with Neuralink Corp.
				</span>
			</div>
		</div>

		<!-- Hero Visual -->
		<div class="lg:col-span-5 relative mt-12 lg:mt-0 fade-up delay-200" use:inview>
			<div class="relative aspect-[4/5] md:aspect-auto md:h-[600px] w-full rounded-2xl bg-cream-dark overflow-hidden">
				<img src="/images/hero-app.webp" alt="Neural Link App Interface" class="w-full h-full object-cover object-top mix-blend-darken" />
			</div>

			<!-- Video Thumbnail Overlay -->
			<div class="absolute -bottom-8 -left-4 md:-left-12">
				<a
					href="https://www.youtube.com/watch?v=Xnhi0m7zKBU"
					target="_blank"
					rel="noopener noreferrer"
					class="relative w-48 md:w-64 aspect-video bg-ink rounded-lg shadow-2xl overflow-hidden group hover:scale-105 transition-transform duration-300 origin-center block"
				>
					<img src="https://img.youtube.com/vi/Xnhi0m7zKBU/hqdefault.jpg" alt="Project Video" class="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity" />
					<div class="absolute inset-0 flex items-center justify-center">
						<div class="w-12 h-12 bg-cream rounded-full flex items-center justify-center pl-1 text-teal">
							<iconify-icon icon="lucide:play" class="text-2xl"></iconify-icon>
						</div>
					</div>
				</a>
				<a
					href="https://www.youtube.com/watch?v=TbRBkUwOiD8"
					target="_blank"
					rel="noopener noreferrer"
					class="mt-3 inline-flex items-center gap-1.5 text-xs text-ink-muted hover:text-teal transition-colors"
				>
					<iconify-icon icon="lucide:film" class="text-sm"></iconify-icon>
					Watch the artistic cut
				</a>
			</div>
		</div>
	</div>
</section>
