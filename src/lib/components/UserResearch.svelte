<script lang="ts">
	import { inview } from '$lib/inview';
</script>

<section id="research" class="py-24 md:py-32 border-t border-ink-light/20">
	<div class="px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto">

		<div class="mb-16 md:mb-24 text-center md:text-left fade-up" use:inview>
			<h2 class="font-serif text-teal text-lg md:text-xl tracking-widest uppercase mb-4">User Research</h2>
			<h3 class="font-serif italic text-4xl md:text-6xl text-ink">The Silent Struggle in the Ave</h3>
		</div>

		<div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
			<!-- Left Portrait Sticky -->
			<div class="lg:col-span-5 lg:sticky top-32">
				<div class="relative">
					<img src="/images/oliver-portrait.webp" alt="Portrait of Oliver" class="w-full h-auto ink-blend" />
					<div class="absolute -bottom-6 -right-6 w-32 h-32 md:w-48 md:h-48">
						<img src="/images/peer-community.webp" alt="Oliver stressed at cafe" class="w-full h-full object-contain ink-blend opacity-80" />
					</div>
				</div>
			</div>

			<!-- Right Flowing Narrative -->
			<div class="lg:col-span-7 lg:col-start-6 max-w-2xl text-lg md:text-xl leading-relaxed text-ink-muted space-y-8">
				<p class="drop-cap fade-up" use:inview>
					Meet Oliver. By day, he is the life of the Thai Student Association. He's social, creative, and always surrounded by friends on campus. To an outside observer, he is navigating the international student experience flawlessly.
				</p>
				<p class="fade-up" use:inview>
					But at night, the narrative fractures. When the social noise fades and he returns to his dorm, the "ADHD freeze" sets in. His phone lights up with Canvas notifications. Three assignments are due by midnight. Instead of starting, he feels a paralyzing wave of overwhelm.
				</p>

				<div class="my-12 flex justify-center py-8 border-y border-ink-light/20 fade-up" use:inview>
					<img src="/images/cloud-icon.webp" alt="Oliver overwhelmed dropping book" class="h-64 object-contain ink-blend" />
				</div>

				<p class="fade-up" use:inview>
					The traditional university advice is to visit the counseling center. But Oliver doesn't want clinical help. The idea of sitting in a sterile room explaining cultural nuances to a professional feels alienating.
				</p>
				<p class="text-2xl font-serif text-teal italic pl-6 border-l-2 border-teal fade-up" use:inview>
					He doesn't want to be "fixed." He wants a community that simply "gets it" without requiring him to translate his experience.
				</p>
			</div>
		</div>
	</div>
</section>
