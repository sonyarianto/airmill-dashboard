<script lang="ts">
	import { fly } from 'svelte/transition';

	interface MobileSideMenuProps {
		isPagesMenuOpen: boolean;
	}

	export let props: MobileSideMenuProps;
</script>

<!-- Backdrop -->
<div
	class="fixed inset-0 z-10 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center"
/>
<aside
	class="fixed inset-y-0 z-20 mt-16 w-64 flex-shrink-0 overflow-y-auto bg-white dark:bg-gray-800 md:hidden"
	in:fly|global={{ x: -200, duration: 200 }}
	out:fly|global={{ x: -200, duration: 100 }}
>
	<div class="py-4 text-gray-500 dark:text-gray-400">
		<!-- svelte-ignore a11y-invalid-attribute -->
		<a class="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200" href="/">Airmill</a>
		<ul class="mt-6">
			<li class="relative px-6 py-3">
				<span
					class="absolute inset-y-0 left-0 w-1 rounded-tr-lg rounded-br-lg bg-purple-600"
					aria-hidden="true"
				/>
				<a
					class="inline-flex w-full items-center text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:text-gray-100 dark:hover:text-gray-200"
					href="/"
				>
					<svg
						class="h-5 w-5"
						aria-hidden="true"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
						/>
					</svg>
					<span class="ml-4">Dashboard</span>
				</a>
			</li>
		</ul>
		<ul>
			<li class="relative px-6 py-3">
				<a
					class="inline-flex w-full items-center text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
					href="/forms"
				>
					<svg
						class="h-5 w-5"
						aria-hidden="true"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
						/>
					</svg>
					<span class="ml-4">Forms</span>
				</a>
			</li>
			<li class="relative px-6 py-3">
				<a
					class="inline-flex w-full items-center text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
					href="/cards"
				>
					<svg
						class="h-5 w-5"
						aria-hidden="true"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
						/>
					</svg>
					<span class="ml-4">Cards</span>
				</a>
			</li>
			<li class="relative px-6 py-3">
				<a
					class="inline-flex w-full items-center text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
					href="/charts"
				>
					<svg
						class="h-5 w-5"
						aria-hidden="true"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
						<path d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
					</svg>
					<span class="ml-4">Charts</span>
				</a>
			</li>
			<li class="relative px-6 py-3">
				<a
					class="inline-flex w-full items-center text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
					href="/buttons"
				>
					<svg
						class="h-5 w-5"
						aria-hidden="true"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
						/>
					</svg>
					<span class="ml-4">Buttons</span>
				</a>
			</li>
			<li class="relative px-6 py-3">
				<a
					class="inline-flex w-full items-center text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
					href="/modals"
				>
					<svg
						class="h-5 w-5"
						aria-hidden="true"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
						/>
					</svg>
					<span class="ml-4">Modals</span>
				</a>
			</li>
			<li class="relative px-6 py-3">
				<a
					class="inline-flex w-full items-center text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
					href="/tables"
				>
					<svg
						class="h-5 w-5"
						aria-hidden="true"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path d="M4 6h16M4 10h16M4 14h16M4 18h16" />
					</svg>
					<span class="ml-4">Tables</span>
				</a>
			</li>
			<li class="relative px-6 py-3">
				<button
					class="inline-flex w-full items-center justify-between text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
					on:click={() => (props.isPagesMenuOpen = !props.isPagesMenuOpen)}
					aria-haspopup="true"
				>
					<span class="inline-flex items-center">
						<svg
							class="h-5 w-5"
							aria-hidden="true"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
							/>
						</svg>
						<span class="ml-4">Pages</span>
					</span>
					<svg class="h-4 w-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
						<path
							fill-rule="evenodd"
							d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
							clip-rule="evenodd"
						/>
					</svg>
				</button>
				{#if props.isPagesMenuOpen}
					<ul
						class="mt-2 space-y-2 overflow-hidden rounded-md bg-gray-50 p-2 text-sm font-medium text-gray-500 shadow-inner dark:bg-gray-900 dark:text-gray-400"
						aria-label="submenu"
						in:fly|global={{ y: -20, duration: 250 }}
						out:fly|global={{ duration: 50 }}
					>
						<li
							class="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
						>
							<a class="w-full" href="/pages/login">Login</a>
						</li>
						<li
							class="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
						>
							<a class="w-full" href="/pages/create-account"> Create account </a>
						</li>
						<li
							class="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
						>
							<a class="w-full" href="/pages/forgot-password"> Forgot password </a>
						</li>
						<li
							class="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
						>
							<a class="w-full" href="/pages/404">404</a>
						</li>
						<li
							class="px-2 py-1 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
						>
							<a class="w-full" href="/pages/blank">Blank</a>
						</li>
					</ul>
				{/if}
			</li>
		</ul>
		<div class="my-6 px-6">
			<button
				class="flex items-center justify-between rounded-lg border border-transparent bg-purple-600 px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 hover:bg-purple-700 focus:outline-none focus:ring-[3px] focus:ring-purple-200 active:bg-purple-600"
			>
				Create account
				<span class="ml-2" aria-hidden="true">+</span>
			</button>
		</div>
	</div>
</aside>
