<svelte:head>
	<title>Forms</title>
</svelte:head>

<main class="h-full overflow-y-auto pb-16">
	<div class="container mx-auto grid px-6">
		<h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">Forms</h2>
		<!-- CTA -->
		<a
			class="mb-8 flex items-center justify-between rounded-lg bg-purple-600 p-4 text-sm font-semibold text-purple-100 shadow-md focus:outline-none focus:ring-[3px] focus:ring-purple-200"
			href="https://github.com/sonyarianto/airmill-dashboard"
			target="_blank"
			rel="noreferrer"
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

		<!-- General elements -->
		<h4 class="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">Elements</h4>
		<div class="mb-8 rounded-lg bg-white px-4 py-3 shadow-md dark:bg-gray-800">
			<label class="block text-sm">
				<span class="text-gray-700 dark:text-gray-400">Name</span>
				<input
					class="form-input mt-1 block w-full rounded-md text-sm focus:border-purple-400 focus:outline-none focus:ring-[3px] focus:ring-purple-200 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:focus:ring-gray-500"
					placeholder="Jane Doe"
				/>
			</label>

			<div class="mt-4 text-sm">
				<span class="text-gray-700 dark:text-gray-400"> Account Type </span>
				<div class="mt-2">
					<label class="inline-flex items-center text-gray-600 dark:text-gray-400">
						<input
							type="radio"
							class="form-radio text-purple-600 focus:border-purple-400 focus:outline-none focus:ring-[3px] focus:ring-purple-200 dark:focus:ring-gray-500"
							name="accountType"
							value="personal"
						/>
						<span class="ml-2">Personal</span>
					</label>
					<label class="ml-6 inline-flex items-center text-gray-600 dark:text-gray-400">
						<input
							type="radio"
							class="form-radio text-purple-600 focus:border-purple-400 focus:outline-none focus:ring-[3px] focus:ring-purple-200 dark:focus:ring-gray-500"
							name="accountType"
							value="busines"
						/>
						<span class="ml-2">Business</span>
					</label>
				</div>
			</div>

			<label class="mt-4 block text-sm">
				<span class="text-gray-700 dark:text-gray-400"> Requested Limit </span>
				<select
					class="form-select mt-1 block w-full rounded-md text-sm focus:border-purple-400 focus:outline-none focus:ring-[3px] focus:ring-purple-200 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:focus:ring-gray-500"
				>
					<option>$1,000</option>
					<option>$5,000</option>
					<option>$10,000</option>
					<option>$25,000</option>
				</select>
			</label>

			<label class="mt-4 block text-sm">
				<span class="text-gray-700 dark:text-gray-400"> Multiselect </span>
				<select
					class="form-multiselect mt-1 block w-full rounded-md text-sm focus:border-purple-400 focus:outline-none focus:ring-[3px] focus:ring-purple-200 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:focus:ring-gray-500"
					multiple
				>
					<option>Option 1</option>
					<option>Option 2</option>
					<option>Option 3</option>
					<option>Option 4</option>
					<option>Option 5</option>
				</select>
			</label>

			<label class="mt-4 block text-sm">
				<span class="text-gray-700 dark:text-gray-400">Message</span>
				<textarea
					class="form-textarea mt-1 block w-full rounded-md text-sm focus:border-purple-400 focus:outline-none focus:ring-[3px] focus:ring-purple-200 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:focus:ring-gray-500"
					rows="3"
					placeholder="Enter some long form content."
				/>
			</label>

			<div class="mt-6 flex text-sm">
				<label class="flex items-center dark:text-gray-400">
					<input
						type="checkbox"
						class="form-checkbox text-purple-600 focus:border-purple-400 focus:outline-none focus:ring-[3px] focus:ring-purple-200 dark:focus:ring-gray-500"
					/>
					<span class="ml-2">
						I agree to the
						<span class="cursor-pointer underline">privacy policy</span>
					</span>
				</label>
			</div>
		</div>

		<!-- Validation inputs -->
		<h4 class="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">Validation</h4>
		<div class="mb-8 rounded-lg bg-white px-4 py-3 shadow-md dark:bg-gray-800">
			<!-- Invalid input -->
			<label class="block text-sm">
				<span class="text-gray-700 dark:text-gray-400"> Invalid input </span>
				<input
					class="form-input mt-1 block w-full rounded-md border-red-600 text-sm focus:border-red-400 focus:outline-none focus:ring-[3px] focus:ring-red-200 dark:bg-gray-700 dark:text-gray-300"
					placeholder=""
					type="password"
				/>
				<span class="text-xs text-red-600 dark:text-red-400"> Your password is too short. </span>
			</label>

			<!-- Valid input -->
			<label class="mt-4 block text-sm">
				<span class="text-gray-700 dark:text-gray-400"> Valid input </span>
				<input
					class="form-input mt-1 block w-full rounded-md border-green-600 text-sm focus:border-green-400 focus:outline-none focus:ring-[3px] focus:ring-green-200 dark:bg-gray-700 dark:text-gray-300"
					placeholder=""
					type="password"
				/>
				<span class="text-xs text-green-600 dark:text-green-400"> Your password is strong. </span>
			</label>

			<!-- Helper text -->
			<label class="mt-4 block text-sm">
				<span class="text-gray-700 dark:text-gray-400"> Helper text </span>
				<input
					class="form-input mt-1 block w-full rounded-md text-sm focus:border-purple-400 focus:outline-none focus:ring-[3px] focus:ring-purple-200 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:focus:ring-gray-500"
					placeholder=""
					type="password"
				/>
				<span class="text-xs text-gray-600 dark:text-gray-400">
					Your password must be at least 6 characters long.
				</span>
			</label>
		</div>

		<!-- Inputs with icons -->
		<h4 class="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">Icons</h4>
		<div class="mb-8 rounded-lg bg-white px-4 py-3 shadow-md dark:bg-gray-800">
			<label class="block text-sm">
				<span class="text-gray-700 dark:text-gray-400">Icon left</span>
				<!-- focus-within sets the color for the icon when input is focused -->
				<div
					class="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400"
				>
					<input
						class="form-input mt-1 block w-full rounded-md pl-10 text-sm text-black focus:border-purple-400 focus:outline-none focus:ring-[3px] focus:ring-purple-200 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:focus:ring-gray-500"
						placeholder="email@address.com"
					/>
					<div class="pointer-events-none absolute inset-y-0 ml-3 flex items-center">
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
								d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
							/>
						</svg>
					</div>
				</div>
			</label>

			<label class="mt-4 block text-sm">
				<span class="text-gray-700 dark:text-gray-400">Icon right</span>
				<!-- focus-within sets the color for the icon when input is focused -->
				<div
					class="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400"
				>
					<input
						class="form-input mt-1 block w-full rounded-md pr-10 text-sm text-black focus:border-purple-400 focus:outline-none focus:ring-[3px] focus:ring-purple-200 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:focus:ring-gray-500"
						placeholder="address@email.com"
					/>
					<div class="pointer-events-none absolute inset-y-0 right-0 mr-3 flex items-center">
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
								d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
							/>
						</svg>
					</div>
				</div>
			</label>
		</div>

		<!-- Inputs with buttons -->
		<h4 class="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">Buttons</h4>
		<div class="mb-8 rounded-lg bg-white px-4 py-3 shadow-md dark:bg-gray-800">
			<label class="block text-sm">
				<span class="text-gray-700 dark:text-gray-400"> Button left </span>
				<div class="relative">
					<input
						class="form-input mt-1 block w-full rounded-md pl-20 text-sm focus:border-purple-400 focus:outline-none focus:ring-[3px] focus:ring-purple-200 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:focus:ring-gray-500"
						placeholder="Jane Doe"
					/>
					<button
						class="absolute inset-y-0 rounded-l-md border border-transparent bg-purple-600 px-4 text-sm font-medium leading-5 text-white transition-colors duration-150 hover:bg-purple-700 focus:outline-none focus:ring-purple-200 active:bg-purple-600 dark:focus:ring-gray-500"
					>
						Click
					</button>
				</div>
			</label>

			<label class="mt-4 block text-sm">
				<span class="text-gray-700 dark:text-gray-400"> Button right </span>
				<div class="relative text-gray-500 focus-within:text-purple-600">
					<input
						class="form-input mt-1 block w-full rounded-md pr-20 text-sm text-black focus:border-purple-400 focus:outline-none focus:ring-[3px] focus:ring-purple-200 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:focus:ring-gray-500"
						placeholder="Jane Doe"
					/>
					<button
						class="absolute inset-y-0 right-0 rounded-r-md border border-transparent bg-purple-600 px-4 text-sm font-medium leading-5 text-white transition-colors duration-150 hover:bg-purple-700 focus:outline-none focus:ring-purple-200 active:bg-purple-600 dark:focus:ring-gray-500"
					>
						Click
					</button>
				</div>
			</label>
		</div>
	</div>
</main>
