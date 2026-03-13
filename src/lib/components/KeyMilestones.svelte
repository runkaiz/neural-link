<script lang="ts">
	import { inview } from '$lib/inview';

	const milestones = [
		{
			num: '01',
			title: 'Identifying Help-Seeking Barriers',
			description: 'We discovered a crucial disconnect: international students heavily prefer peer-based support networks over professional, clinical psychologists due to fear of stigma and a desire for shared contextual understanding.',
			image: '/images/oliver-overwhelmed.webp',
			alt: 'Peer vs Pro Support'
		},
		{
			num: '02',
			title: 'Mapping Perception Pain Points',
			description: 'Through thematic analysis, we mapped how diverse cultural backgrounds heavily influence decisions about utilizing university mental health services, often viewing them as a "last resort" rather than proactive maintenance.',
			image: '/images/cultural-perceptions.webp',
			alt: 'Cultural Perceptions'
		},
		{
			num: '03',
			title: 'Synthesizing Trust Drivers',
			description: 'This pivotal moment shifted our entire design strategy: moving away from a clinical-focused tool toward a peer-led community model centered on mutual accountability and gamified focus.',
			image: '/images/oliver-cafe.webp',
			alt: 'Shifting to Peer Community'
		}
	];
</script>

<section class="py-32 px-6 md:px-12 lg:px-24 max-w-[1200px] mx-auto">
	<h2 class="font-serif text-4xl md:text-6xl text-center mb-24 fade-up" use:inview>Key Milestones</h2>

	<div class="space-y-16 md:space-y-0">
		{#each milestones as milestone, i}
			<div
				class="flex flex-col items-center gap-8 md:gap-16 fade-up {i > 0 ? 'md:mt-24' : ''} {i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}"
				use:inview
			>
				<div class="w-full md:w-1/2 aspect-square md:aspect-[4/3] bg-cream-dark rounded-2xl overflow-hidden p-8 flex items-center justify-center">
					<img src={milestone.image} alt={milestone.alt} class="w-full h-full object-contain ink-blend" />
				</div>
				<div class="w-full md:w-1/2 {i % 2 === 1 ? 'md:pl-12' : 'md:pr-12'}">
					<span class="text-teal font-medium tracking-widest text-sm uppercase mb-3 block">Milestone {milestone.num}</span>
					<h3 class="font-serif text-3xl md:text-4xl mb-6">{milestone.title}</h3>
					<p class="text-lg text-ink-muted">{milestone.description}</p>
				</div>
			</div>
		{/each}
	</div>
</section>
