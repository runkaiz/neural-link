<script lang="ts">
	import { inview } from '$lib/inview';
</script>

<section class="py-24 md:py-32 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto">
	<div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
		<div class="order-2 lg:order-1 relative fade-up" use:inview>
			<div class="aspect-square md:aspect-[4/3] bg-cream-dark rounded-3xl overflow-hidden">
				<img src="/images/uw-campus.webp" alt="UW Campus Context" class="w-full h-full object-cover mix-blend-multiply" />
			</div>
			<!-- Floating stat badge -->
			<div class="absolute -bottom-8 -right-4 md:right-8 bg-cream border border-ink-light/30 p-6 rounded-2xl shadow-xl max-w-xs">
				<p class="font-serif text-3xl text-teal mb-2">470+</p>
				<p class="text-sm text-ink-muted leading-tight">International students at UW estimated to live with ADHD-level symptoms.</p>
			</div>
		</div>

		<div class="order-1 lg:order-2 space-y-8 fade-up delay-200" use:inview>
			<h2 class="font-serif text-sm tracking-widest uppercase text-ink-muted">Bringing it Home to UW</h2>
			<blockquote class="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight text-ink">
				<span class="text-teal">"</span>How might we design a way to help international students with ADHD at UW to build communities and focus on daily tasks?<span class="text-teal">"</span>
			</blockquote>
		</div>
	</div>
</section>
