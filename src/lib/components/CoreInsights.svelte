<script lang="ts">
	import { inview } from '$lib/inview';

	const findings = [
		{
			image: '/images/barrier-card.webp',
			alt: 'Barrier',
			tagColor: 'bg-red-100 text-red-800',
			tag: 'Barrier',
			title: 'Systemic Distrust',
			description: 'Students actively avoid seeking official help due to perceived high costs, limited awareness of resources, and a deep-seated distrust of clinical counselors understanding their background.'
		},
		{
			image: '/images/extra-1.webp',
			alt: 'Inspiration',
			tagColor: 'bg-teal-light/20 text-teal-light',
			tag: 'Inspiration',
			title: 'Cultural Comfort',
			description: 'Comfort and psychological safety are predominantly found within informal peer-led communities and cultural student organizations, rather than official university channels.'
		},
		{
			image: '/images/inspiration-card.webp',
			alt: 'Pain Point',
			tagColor: 'bg-orange-100 text-orange-800',
			tag: 'Pain Point',
			title: 'The Academic Freeze',
			description: 'Chronic procrastination and sudden academic "freezes" are the most severe daily impacts, severely damaging academic performance and creating a cycle of guilt and avoidance.'
		}
	];
</script>

<section class="py-24 border-y border-ink-light/20 px-6 md:px-12 lg:px-24">
	<div class="max-w-[1400px] mx-auto">
		<h2 class="font-serif text-3xl text-center mb-16 fade-up" use:inview>Core Insights</h2>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			{#each findings as finding, i}
				<div
					class="bg-white rounded-3xl p-8 shadow-sm border border-ink-light/10 hover:shadow-xl transition-shadow duration-300 fade-up {i === 1 ? 'delay-100' : i === 2 ? 'delay-200' : ''}"
					use:inview
				>
					<div class="h-40 mb-8 flex justify-center items-center">
						<img src={finding.image} alt={finding.alt} class="h-full object-contain ink-blend" />
					</div>
					<span class="inline-block px-3 py-1 {finding.tagColor} text-xs font-bold uppercase tracking-wider rounded-full mb-4">
						{finding.tag}
					</span>
					<h4 class="font-serif text-xl mb-3">{finding.title}</h4>
					<p class="text-ink-muted text-sm leading-relaxed">{finding.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
