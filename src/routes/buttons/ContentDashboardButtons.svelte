<svelte:head>
	<title>Buttons</title>
</svelte:head>

<main class="h-full overflow-y-auto">
	<div class="container mx-auto grid px-6">
		<h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">Buttons</h2>
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

		<!-- Button sizes -->
		<h4 class="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">Sizes</h4>
		<div class="mb-4 flex flex-col flex-wrap space-y-4 md:flex-row md:items-end md:space-x-4">
			<!-- Divs are used just to display the examples. Use only the button. -->
			<div>
				<button
					class="rounded-lg border border-transparent bg-purple-600 px-10 py-4 font-medium leading-5 text-white transition-colors duration-150 hover:bg-purple-700 focus:outline-none focus:ring-[3px] focus:ring-purple-200 active:bg-purple-600"
				>
					Larger button
				</button>
			</div>

			<!-- Divs are used just to display the examples. Use only the button. -->
			<div>
				<button
					class="rounded-lg border border-transparent bg-purple-600 px-5 py-3 font-medium leading-5 text-white transition-colors duration-150 hover:bg-purple-700 focus:outline-none focus:ring-[3px] focus:ring-purple-200 active:bg-purple-600"
				>
					Large button
				</button>
			</div>

			<!-- Divs are used just to display the examples. Use only the button. -->
			<div>
				<button
					class="rounded-lg border border-transparent bg-purple-600 px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 hover:bg-purple-700 focus:outline-none focus:ring-[3px] focus:ring-purple-200 active:bg-purple-600"
				>
					Regular
				</button>
			</div>

			<!-- Divs are used just to display the examples. Use only the button. -->
			<div>
				<!-- For disabled buttons ADD these classes: 
			opacity-50 cursor-not-allowed

			And REMOVE these classes:
			active:bg-purple-600 hover:bg-purple-700 focus:ring-[3px] focus:ring-purple-200
		  -->
				<button
					class="cursor-not-allowed rounded-lg border border-transparent bg-purple-600 px-4 py-2 text-sm font-medium leading-5 text-white opacity-50 transition-colors duration-150 focus:outline-none"
				>
					Disabled
				</button>
			</div>

			<!-- Divs are used just to display the examples. Use only the button. -->
			<div>
				<button
					class="rounded-md border border-transparent bg-purple-600 px-3 py-1 text-sm font-medium leading-5 text-white transition-colors duration-150 hover:bg-purple-700 focus:outline-none focus:ring-[3px] focus:ring-purple-200 active:bg-purple-600"
				>
					Small
				</button>
			</div>
		</div>
		<p class="mb-8 text-gray-700 dark:text-gray-400">
			Apply
			<code>w-full</code>
			to any button to create a block level button.
		</p>

		<!-- Buttons with icons -->
		<h4 class="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">Icons</h4>
		<div class="mb-8 flex flex-col flex-wrap space-y-4 md:flex-row md:items-end md:space-x-4">
			<!-- Divs are used just to display the examples. Use only the button. -->
			<div>
				<button
					class="flex items-center justify-between rounded-lg border border-transparent bg-purple-600 px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 hover:bg-purple-700 focus:outline-none focus:ring-[3px] focus:ring-purple-200 active:bg-purple-600"
				>
					<span>Icon right</span>
					<svg
						class="ml-2 -mr-1 h-4 w-4"
						fill="currentColor"
						aria-hidden="true"
						viewBox="0 0 20 20"
					>
						<path
							d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
							clip-rule="evenodd"
							fill-rule="evenodd"
						/>
					</svg>
				</button>
			</div>

			<!-- Divs are used just to display the examples. Use only the button. -->
			<div>
				<button
					class="flex items-center justify-between rounded-lg border border-transparent bg-purple-600 px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 hover:bg-purple-700 focus:outline-none focus:ring-[3px] focus:ring-purple-200 active:bg-purple-600"
				>
					<svg
						class="mr-2 -ml-1 h-4 w-4"
						fill="currentColor"
						aria-hidden="true"
						viewBox="0 0 20 20"
					>
						<path
							d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
							clip-rule="evenodd"
							fill-rule="evenodd"
						/>
					</svg>
					<span>Icon left</span>
				</button>
			</div>

			<!-- Divs are used just to display the examples. Use only the button. -->
			<div>
				<button
					class="flex items-center justify-between rounded-lg border border-transparent bg-purple-600 px-2 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 hover:bg-purple-700 focus:outline-none focus:ring-[3px] focus:ring-purple-200 active:bg-purple-600"
					aria-label="Like"
				>
					<svg class="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
						<path
							d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
							clip-rule="evenodd"
							fill-rule="evenodd"
						/>
					</svg>
				</button>
			</div>

			<!-- Divs are used just to display the examples. Use only the button. -->
			<div>
				<button
					class="flex items-center justify-between rounded-full border border-transparent bg-purple-600 px-2 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 hover:bg-purple-700 focus:outline-none focus:ring-[3px] focus:ring-purple-200 active:bg-purple-600"
					aria-label="Edit"
				>
					<svg class="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
						<path
							d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
						/>
					</svg>
				</button>
			</div>
		</div>
	</div>
</main>
