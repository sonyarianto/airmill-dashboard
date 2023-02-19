<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import DashboardSideMenu from './DashboardSideMenu.svelte';
	import DashboardHeader from './DashboardHeader.svelte';

	interface DashboardPageProps {
		contentComponent: any;
	}

	export let props: DashboardPageProps;

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

		if (getThemeFromLocalStorage()) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	</script>
</svelte:head>

<div class="flex h-screen bg-gray-50 dark:bg-gray-900" class:overflow-hidden={!isSideMenuOpen}>
	<DashboardSideMenu props={{ isPagesMenuOpen: isPagesMenuOpen, isSideMenuOpen: isSideMenuOpen }} />

	<div class="flex w-full flex-1 flex-col">
		<DashboardHeader
			bind:isSideMenuOpen
			props={{
				toggleTheme: toggleTheme,
				isDarkTheme: isDarkTheme,
				isNotificationsMenuOpen: isNotificationsMenuOpen,
				isProfileMenuOpen: isProfileMenuOpen
			}}
		/>
		<svelte:component this={props.contentComponent} />
	</div>
</div>
