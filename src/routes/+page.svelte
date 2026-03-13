<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import UserResearch from '$lib/components/UserResearch.svelte';
	import Statistics from '$lib/components/Statistics.svelte';
	import LocalContext from '$lib/components/LocalContext.svelte';
	import ResearchProcess from '$lib/components/ResearchProcess.svelte';
	import KeyMilestones from '$lib/components/KeyMilestones.svelte';
	import CoreInsights from '$lib/components/CoreInsights.svelte';
	import DesignIteration from '$lib/components/DesignIteration.svelte';
	import Reflection from '$lib/components/Reflection.svelte';
</script>

<svelte:head>
	<title>Neural Link — UX Case Study</title>
	<meta name="description" content="Redesigning focus and belonging for international students with ADHD. A UX case study from HCDE 302 & HCDE 303 at the University of Washington." />
</svelte:head>

<div class="min-h-screen relative w-full overflow-x-hidden bg-noise bg-cream text-ink font-sans antialiased selection:bg-teal selection:text-cream">
	<Nav />

	<main class="pt-24 md:pt-32 relative z-10">
		<Hero />
		<UserResearch />
		<Statistics />
		<LocalContext />
		<ResearchProcess />
		<KeyMilestones />
		<CoreInsights />
		<DesignIteration />
		<Reflection />
	</main>
</div>
