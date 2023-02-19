<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { lineChartConfig, pieChartConfig } from '../chart_config.js';
	import { Chart } from 'chart.js/auto'; // you can also use chart.js UMD CDN (I comment out on head side below)
	import DesktopSideMenu from '../components/DesktopSideMenu.svelte';
	import MobileSideMenu from '../components/MobileSideMenu.svelte';
	import HeaderMenu from '../components/HeaderMenu.svelte';
	import ContentHome from '../components/ContentHome.svelte';

	let isSideMenuOpen = false;
	let isPagesMenuOpen = false;
	let isNotificationsMenuOpen = false;
	let isProfileMenuOpen = false;
	let isDarkTheme = false;

	function getThemeFromLocalStorage() {
		if (window.localStorage.getItem('isDarkTheme')) {
			return JSON.parse(window.localStorage.getItem('isDarkTheme') as any);
		}

		return !!window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
	}

	function setThemeToLocalStorage(value: boolean) {
		window.localStorage.setItem('isDarkTheme', value as any);
	}

	function toggleTheme() {
		isDarkTheme = !isDarkTheme;
		document.documentElement.classList.toggle('dark');
		setThemeToLocalStorage(isDarkTheme);
	}

	function handleKeyDown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			isNotificationsMenuOpen = false;
			isProfileMenuOpen = false;
		}
	}

	onMount(() => {
		isDarkTheme = getThemeFromLocalStorage();

		const pieChartContext = document.getElementById('pie');
		new Chart(pieChartContext as any, pieChartConfig as any);

		const lineChartContext = document.getElementById('line');
		new Chart(lineChartContext as any, lineChartConfig as any);

		window.addEventListener('keydown', handleKeyDown);
	});

	onDestroy(() => {
		if (import.meta.env.SSR === false) {
			window.removeEventListener('keydown', handleKeyDown);
		}
	});
</script>

<svelte:head>
	<script>
		function getThemeFromLocalStorage() {
			if (window.localStorage.getItem('isDarkTheme')) {
				return JSON.parse(window.localStorage.getItem('isDarkTheme'));
			}

			return !!window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
		}

		let isDarkTheme = getThemeFromLocalStorage();

		if (isDarkTheme) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	</script>
	<title>Home</title>
	<!-- uncomment below if you want to use the UMD CDN version -->
	<!-- <script
		defer
		src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.2.1/chart.umd.min.js"
		integrity="sha512-GCiwmzA0bNGVsp1otzTJ4LWQT2jjGJENLGyLlerlzckNI30moi2EQT0AfRI7fLYYYDKR+7hnuh35r3y1uJzugw=="
		crossorigin="anonymous"
		referrerpolicy="no-referrer"
	></script> -->
</svelte:head>

<div class="flex h-screen bg-gray-50 dark:bg-gray-900" class:overflow-hidden={!isSideMenuOpen}>
	<!-- Desktop sidebar -->
	<DesktopSideMenu props={{ isPagesMenuOpen: isPagesMenuOpen }} />
	<!-- Mobile sidebar -->
	{#if isSideMenuOpen}
		<MobileSideMenu props={{ isPagesMenuOpen: isPagesMenuOpen }} />
	{/if}
	<div class="flex w-full flex-1 flex-col">
		<HeaderMenu
			props={{
				isSideMenuOpen: isSideMenuOpen,
				toggleTheme: toggleTheme,
				isDarkTheme: isDarkTheme,
				isNotificationsMenuOpen: isNotificationsMenuOpen,
				isProfileMenuOpen: isProfileMenuOpen
			}}
		/>
		<ContentHome />
	</div>
</div>
