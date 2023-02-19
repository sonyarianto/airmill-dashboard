<script lang="ts">
	import DashboardDesktopSideMenu from './DashboardDesktopSideMenu.svelte';
	import DashboardMobileSideMenu from './DashboardMobileSideMenu.svelte';

	interface DashboardSideMenuProps {
		isPagesMenuOpen: boolean;
		isSideMenuOpen: boolean;
	}

	export let props: DashboardSideMenuProps;
</script>

<!-- Desktop sidebar -->
<DashboardDesktopSideMenu {props} />
<!-- Mobile sidebar -->
{#if props.isSideMenuOpen}
	<DashboardMobileSideMenu {props} />
{/if}
