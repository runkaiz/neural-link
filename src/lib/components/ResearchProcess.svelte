<script lang="ts">
	import { inview } from '$lib/inview';
</script>

<section class="py-24 bg-cream-dark px-6 md:px-12 lg:px-24">
	<div class="max-w-[1400px] mx-auto">
		<div class="flex flex-col md:flex-row justify-between items-baseline mb-16 fade-up" use:inview>
			<h2 class="font-serif text-4xl text-ink">Research Process</h2>
			<p class="text-ink-muted uppercase tracking-widest text-sm mt-4 md:mt-0">At a Glance</p>
		</div>

		<!-- Metric Cards Grid -->
		<div class="grid grid-cols-2 md:grid-cols-4 gap-px bg-ink-light/20 border border-ink-light/20 rounded-2xl overflow-hidden fade-up" use:inview>
			<div class="bg-cream p-8 flex flex-col items-center justify-center text-center">
				<iconify-icon icon="lucide:users" class="text-3xl text-teal mb-4"></iconify-icon>
				<div class="font-serif text-4xl md:text-5xl mb-2 text-ink">3</div>
				<div class="text-sm font-medium text-ink-muted uppercase tracking-wider">Interviews</div>
			</div>
			<div class="bg-cream p-8 flex flex-col items-center justify-center text-center">
				<iconify-icon icon="lucide:user-plus" class="text-3xl text-teal mb-4"></iconify-icon>
				<div class="font-serif text-4xl md:text-5xl mb-2 text-ink">8</div>
				<div class="text-sm font-medium text-ink-muted uppercase tracking-wider">Participants</div>
			</div>
			<div class="bg-cream p-8 flex flex-col items-center justify-center text-center">
				<iconify-icon icon="lucide:calendar-clock" class="text-3xl text-teal mb-4"></iconify-icon>
				<div class="font-serif text-4xl md:text-5xl mb-2 text-ink">20</div>
				<div class="text-sm font-medium text-ink-muted uppercase tracking-wider">Weeks</div>
			</div>
			<div class="bg-cream p-8 flex flex-col items-center justify-center text-center">
				<iconify-icon icon="lucide:layers" class="text-3xl text-teal mb-4"></iconify-icon>
				<div class="font-serif text-4xl md:text-5xl mb-2 text-ink">6</div>
				<div class="text-sm font-medium text-ink-muted uppercase tracking-wider">Methods</div>
			</div>
		</div>

		<!-- Description Text -->
		<div class="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 fade-up" use:inview>
			<div>
				<h4 class="font-serif text-xl mb-4">Methods & Methodology</h4>
				<p class="text-ink-muted leading-relaxed">
					We employed a mixed-methods approach to understand the dual burden of academic pressure and cultural displacement. This included semi-structured interviews (3), follow-up user testing (2), expert critique sessions (1), an initial screening survey, user journey mapping, thematic analysis, and storyboarding.
				</p>
			</div>
			<div>
				<h4 class="font-serif text-xl mb-4">Participants & Timeline</h4>
				<p class="text-ink-muted leading-relaxed">
					Over 20 weeks, we engaged with 8 international students primarily from East and Southeast Asia at the University of Washington. Participants were screened for high academic workloads and self-reported symptoms associated with ADHD, focusing on their specific daily friction points.
				</p>
			</div>
		</div>
	</div>
</section>
