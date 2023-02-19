<svelte:head>
	<title>Forgot Password</title>
</svelte:head>

<div class="flex min-h-screen items-center bg-gray-50 p-6 dark:bg-gray-900">
	<div
		class="mx-auto h-full max-w-4xl flex-1 overflow-hidden rounded-lg bg-white shadow-xl dark:bg-gray-800"
	>
		<div class="flex flex-col overflow-y-auto md:flex-row">
			<div class="h-32 md:h-auto md:w-1/2">
				<img
					aria-hidden="true"
					class="h-full w-full object-cover dark:hidden"
					src="/assets/img/forgot-password-office.jpeg"
					alt="Office"
				/>
				<img
					aria-hidden="true"
					class="hidden h-full w-full object-cover dark:block"
					src="/assets/img/forgot-password-office-dark.jpeg"
					alt="Office"
				/>
			</div>
			<div class="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
				<div class="w-full">
					<h1 class="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
						Forgot password
					</h1>
					<label class="block text-sm">
						<span class="text-gray-700 dark:text-gray-400">Email</span>
						<input
							class="form-input mt-1 block w-full rounded-md border-gray-300 text-sm focus:border-purple-400 focus:outline-none focus:ring-[3px] focus:ring-purple-200 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:focus:ring-gray-500"
							placeholder="email@address.com"
						/>
					</label>

					<!-- You should use a button here, as the anchor is only used for the example  -->
					<button
						class="mt-4 block w-full rounded-lg border border-transparent bg-purple-600 px-4 py-2 text-center text-sm font-medium leading-5 text-white transition-colors duration-150 hover:bg-purple-700 focus:outline-none focus:ring-[3px] focus:ring-purple-200 active:bg-purple-600"
						on:click={() => (location.href = '/pages/login')}
					>
						Recover password
					</button>
				</div>
			</div>
		</div>
	</div>
</div>
