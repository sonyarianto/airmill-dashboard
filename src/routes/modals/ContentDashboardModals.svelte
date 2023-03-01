<script lang="ts">
	let isModalOpen = false;
	let trapCleanup = null;

	function openModal() {
		isModalOpen = true;
		trapCleanup = focusTrap(document.querySelector('#modal'));
	}

	function closeModal() {
		isModalOpen = false;
		trapCleanup();
	}
</script>

<svelte:head>
	<title>Modals</title>
	<script defer src="/assets/js/focus-trap.js"></script>
</svelte:head>

<main class="h-full overflow-y-auto pb-16">
	<div class="container mx-auto grid px-6">
		<h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">Modals</h2>
		<!-- CTA -->
		<a
			class="mb-8 flex items-center justify-between rounded-lg bg-purple-600 p-4 text-sm font-semibold text-purple-100 shadow-md focus:outline-none focus:ring-[3px] focus:ring-purple-200"
			href="https://github.com/sonyarianto/airmill-dashboard"
		>
			<div class="flex items-center">
				<svg class="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
					<path
						d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
					/>
				</svg>
				<span>Star this project on GitHub</span>
			</div>
			<span>View more &RightArrow;</span>
		</a>

		<div class="mb-8 max-w-2xl rounded-lg bg-white px-4 py-3 shadow-md dark:bg-gray-800">
			<p class="mb-4 text-gray-600 dark:text-gray-400">
				This is possibly
				<strong>the most accessible a modal can get</strong>
				, using JavaScript. When opened, it uses
				<code>assets/js/focus-trap.js</code>
				to create a
				<em>focus trap</em>
				, which means that if you use your keyboard to navigate around, focus won't leak to the elements
				behind, staying inside the modal in a loop, until you take any action.
			</p>

			<p class="text-gray-600 dark:text-gray-400">
				Also, on small screens it is placed at the bottom of the screen, to account for larger
				devices and make it easier to click the larger buttons.
			</p>
		</div>

		<div>
			<button
				on:click={() => {
					// openModal();
				}}
				class="rounded-lg border border-transparent bg-purple-600 px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 hover:bg-purple-700 focus:outline-none focus:ring-[3px] focus:ring-purple-200 active:bg-purple-600"
			>
				Open Modal
			</button>
		</div>
	</div>
</main>
