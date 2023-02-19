<script lang="ts">
	import { fade } from 'svelte/transition';
	import { clickoutside } from '@svelte-put/clickoutside';

	interface HeaderProps {
		isSideMenuOpen: boolean;
		toggleTheme: () => void;
		isDarkTheme: boolean;
		isNotificationsMenuOpen: boolean;
		isProfileMenuOpen: boolean;
	}

	export let props: HeaderProps;
</script>

<header
	class="z-10 border-b-[1px] border-gray-200 bg-white py-4 shadow-sm dark:border-gray-700 dark:bg-gray-800"
>
	<div
		class="container mx-auto flex h-full items-center justify-between px-6 text-purple-600 dark:text-purple-300"
	>
		<!-- Mobile hamburger -->
		<button
			type="button"
			class="mr-5 -ml-1 rounded-md p-1 focus:outline-none focus:ring-[3px] focus:ring-purple-200 dark:focus:ring-gray-500 md:hidden"
			on:click={() => (props.isSideMenuOpen = !props.isSideMenuOpen)}
			aria-label="Menu"
		>
			<svg class="h-6 w-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
				<path
					fill-rule="evenodd"
					d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
					clip-rule="evenodd"
				/>
			</svg>
		</button>
		<!-- Search input -->
		<!-- <div class="flex flex-1 justify-center lg:mr-32"> -->
		<div class="flex flex-1 justify-center">
			<!-- <div class="relative mr-6 w-full max-w-xl focus-within:text-purple-500"> -->
			<div class="relative mr-6 w-full focus-within:text-purple-500">
				<div class="absolute inset-y-0 flex items-center pl-2">
					<svg class="h-4 w-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
						<path
							fill-rule="evenodd"
							d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
							clip-rule="evenodd"
						/>
					</svg>
				</div>
				<input
					class="form-input w-full rounded-md border-0 bg-gray-100 pl-8 pr-2 text-sm text-gray-700 placeholder-gray-600 focus:border-purple-300 focus:bg-white focus:placeholder-gray-500 focus:outline-none focus:ring-[3px] focus:ring-purple-200 dark:bg-gray-700 dark:text-gray-200 dark:placeholder-gray-500 dark:focus:placeholder-gray-600 dark:focus:ring-gray-500"
					type="text"
					placeholder="Search..."
					aria-label="Search..."
				/>
			</div>
		</div>
		<ul class="flex flex-shrink-0 items-center space-x-6">
			<!-- Theme toggler -->
			<li class="flex">
				<button
					class="rounded-md focus:outline-none focus:ring-[3px] focus:ring-purple-200 dark:focus:ring-gray-500"
					on:click={props.toggleTheme}
					aria-label="Toggle color mode"
				>
					{#if props.isDarkTheme}
						<svg class="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
							<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
						</svg>
					{/if}
					{#if !props.isDarkTheme}
						<svg class="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
							<path
								fill-rule="evenodd"
								d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
								clip-rule="evenodd"
							/>
						</svg>
					{/if}
				</button>
			</li>
			<!-- Notifications menu -->
			<li class="relative">
				<button
					use:clickoutside
					on:clickoutside={() => {
						if (props.isNotificationsMenuOpen) props.isNotificationsMenuOpen = false;
					}}
					class="relative rounded-md align-middle focus:outline-none focus:ring-[3px] focus:ring-purple-200 dark:focus:ring-gray-500"
					on:click={() => {
						props.isNotificationsMenuOpen = !props.isNotificationsMenuOpen;
					}}
					aria-label="Notifications"
					aria-haspopup="true"
				>
					<svg class="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
						<path
							d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"
						/>
					</svg>
					<!-- Notification badge -->
					<span
						aria-hidden="true"
						class="absolute top-0 right-0 inline-block h-3 w-3 translate-x-1 -translate-y-1 transform rounded-full border-2 border-white bg-red-600 dark:border-gray-800"
					/>
				</button>
				{#if props.isNotificationsMenuOpen}
					<ul
						transition:fade={{ duration: 150 }}
						class="absolute right-0 mt-2 w-56 space-y-2 rounded-md border border-gray-100 bg-white p-2 text-gray-600 shadow-md dark:border-gray-700 dark:bg-gray-700 dark:text-gray-300"
					>
						<li class="flex">
							<!-- svelte-ignore a11y-invalid-attribute -->
							<a
								class="inline-flex w-full items-center justify-between rounded-md px-2 py-1 text-sm font-semibold transition-colors duration-150 hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
								href=""
							>
								<span>Messages</span>
								<span
									class="inline-flex items-center justify-center rounded-full bg-red-100 px-2 py-1 text-xs font-bold leading-none text-red-600 dark:bg-red-600 dark:text-red-100"
								>
									13
								</span>
							</a>
						</li>
						<li class="flex">
							<!-- svelte-ignore a11y-invalid-attribute -->
							<a
								class="inline-flex w-full items-center justify-between rounded-md px-2 py-1 text-sm font-semibold transition-colors duration-150 hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
								href=""
							>
								<span>Sales</span>
								<span
									class="inline-flex items-center justify-center rounded-full bg-red-100 px-2 py-1 text-xs font-bold leading-none text-red-600 dark:bg-red-600 dark:text-red-100"
								>
									2
								</span>
							</a>
						</li>
						<li class="flex">
							<!-- svelte-ignore a11y-invalid-attribute -->
							<a
								class="inline-flex w-full items-center justify-between rounded-md px-2 py-1 text-sm font-semibold transition-colors duration-150 hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
								href=""
							>
								<span>Alerts</span>
							</a>
						</li>
					</ul>
				{/if}
			</li>
			<!-- Profile menu -->
			<li class="relative">
				<button
					use:clickoutside
					on:clickoutside={() => {
						if (props.isProfileMenuOpen) props.isProfileMenuOpen = false;
					}}
					class="rounded-full align-middle focus:outline-none focus:ring-[3px] focus:ring-purple-200 dark:focus:ring-gray-500"
					on:click={() => {
						props.isProfileMenuOpen = !props.isProfileMenuOpen;
					}}
					aria-label="Account"
					aria-haspopup="true"
				>
					<img
						class="h-8 w-8 rounded-full object-cover"
						src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82"
						alt=""
						aria-hidden="true"
					/>
				</button>
				{#if props.isProfileMenuOpen}
					<ul
						transition:fade={{ duration: 150 }}
						class="absolute right-0 mt-2 w-56 space-y-2 rounded-md border border-gray-100 bg-white p-2 text-gray-600 shadow-md dark:border-gray-700 dark:bg-gray-700 dark:text-gray-300"
						aria-label="submenu"
					>
						<li class="flex">
							<!-- svelte-ignore a11y-invalid-attribute -->
							<a
								class="inline-flex w-full items-center rounded-md px-2 py-1 text-sm font-semibold transition-colors duration-150 hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
								href=""
							>
								<svg
									class="mr-3 h-4 w-4"
									aria-hidden="true"
									fill="none"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
								</svg>
								<span>Profile</span>
							</a>
						</li>
						<li class="flex">
							<!-- svelte-ignore a11y-invalid-attribute -->
							<a
								class="inline-flex w-full items-center rounded-md px-2 py-1 text-sm font-semibold transition-colors duration-150 hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
								href=""
							>
								<svg
									class="mr-3 h-4 w-4"
									aria-hidden="true"
									fill="none"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
									/>
									<path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
								</svg>
								<span>Settings</span>
							</a>
						</li>
						<li class="flex">
							<!-- svelte-ignore a11y-invalid-attribute -->
							<a
								class="inline-flex w-full items-center rounded-md px-2 py-1 text-sm font-semibold transition-colors duration-150 hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
								href=""
							>
								<svg
									class="mr-3 h-4 w-4"
									aria-hidden="true"
									fill="none"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
									/>
								</svg>
								<span>Log out</span>
							</a>
						</li>
					</ul>
				{/if}
			</li>
		</ul>
	</div>
</header>
