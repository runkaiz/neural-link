<script lang="ts">
	import { inview } from '$lib/inview';
</script>

<section id="reflection" class="bg-ink text-cream py-32 px-6 md:px-12 lg:px-24">
	<div class="max-w-[1400px] mx-auto">

		<div class="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-24">

			<!-- Challenges -->
			<div class="lg:col-span-7 fade-up" use:inview>
				<h2 class="font-serif text-3xl md:text-5xl text-cream mb-8">Challenges <span class="italic opacity-50">& Surprises</span></h2>
				<div class="space-y-8">
					<div class="border-l border-cream/20 pl-6">
						<h4 class="font-sans text-sm tracking-widest uppercase text-teal-light mb-2">The Hardest Pivot</h4>
						<p class="text-lg leading-relaxed text-cream/80">
							Our biggest challenge was receiving critical feedback on our mid-point video presentation tone. We initially leaned too heavily into a "clinical productivity" aesthetic. Re-aligning the visual and product tone to feel empathetic rather than punitive required a complete teardown of our UI components.
						</p>
					</div>
					<div class="border-l border-cream/20 pl-6">
						<h4 class="font-sans text-sm tracking-widest uppercase text-teal-light mb-2">The Big Surprise</h4>
						<p class="text-lg leading-relaxed text-cream/80">
							We hypothesized that anonymity would be paramount. Surprisingly, the qualitative data showed a strong preference for identifiable social support over anonymous professional counselors. Students didn't want to hide; they wanted to struggle together, visibly.
						</p>
					</div>
				</div>
			</div>

			<!-- Next Steps -->
			<div class="lg:col-span-5 fade-up delay-200" use:inview>
				<h2 class="font-serif text-3xl md:text-5xl text-cream mb-8">Next Steps</h2>
				<ul class="space-y-6">
					<li class="bg-cream/5 p-6 rounded-2xl border border-cream/10">
						<p class="text-cream/90 leading-relaxed">
							If we had more time, we would have planned usability tests further in advance to secure a larger pool of participants (N>15) for quantitative significance.
						</p>
					</li>
					<li class="bg-cream/5 p-6 rounded-2xl border border-cream/10">
						<p class="text-cream/90 leading-relaxed">
							A second rigorous testing round is needed specifically on the manual "+" button flow and the redesigned icon labels, as these were last-minute high-fidelity changes.
						</p>
					</li>
				</ul>
			</div>

		</div>

		<!-- Footer -->
		<div class="pt-12 border-t border-cream/20 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
			<div>
				<p class="font-serif text-2xl mb-1">Team Collaboration</p>
				<p class="text-sm text-cream/50 max-w-xl">
					Our team seamlessly split the workload into three specialized parts (Research, Interaction, Visuals) while maintaining a core of collaborative, synchronous brainstorming sessions twice a week.
				</p>
			</div>
			<div class="text-right">
				<a href="#hero" class="inline-flex items-center gap-2 text-teal-light hover:text-white transition-colors uppercase tracking-widest text-sm font-bold">
					Back to Top <iconify-icon icon="lucide:arrow-up"></iconify-icon>
				</a>
			</div>
		</div>

		<!-- Course & Disclaimer Footer -->
		<div class="mt-12 pt-8 border-t border-cream/10 text-center">
			<p class="text-xs text-cream/30 leading-relaxed max-w-2xl mx-auto">
				An undergraduate student project from HCDE 302 & HCDE 303 at the University of Washington, Seattle.
				The team codename "Neural Link" is a humorous take and has no affiliation with Elon Musk's Neuralink brain interface device.
			</p>
		</div>

	</div>
</section>
