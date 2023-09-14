import preactLogo from "@/src/assets/preact.svg"

type ResourceProps = {
	href: string
	title: string
	description: string
}
const Resource = (props: ResourceProps) => {
	return (
		<a
			href={props.href}
			target="_blank"
			class="px-6 py-3 rounded-lg text-left no-underline text-gray-800 bg-gray-100 border border-solid border-transparent hover:border-black hover:resource-shadow-hover dark:text-gray-50 dark:bg-gray-900 dark:hover:border-gray-300" rel="noreferrer"
		>
			<h2>{props.title}</h2>
			<p>{props.description}</p>
		</a>
	)
}

export const Home = () => {
	return (
		<div class="home">
			<a href="https://preactjs.com" target="_blank" rel="noreferrer">
				<img
					src={preactLogo}
					alt="Preact logo"
					height="160"
					width="160"
					class="mb-6 mx-auto hover:preact-log-hover"
				/>
			</a>
			<h1>Get Started building Vite-powered Preact Apps </h1>
			<section class="mt-20 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
				<Resource
					title="Learn Preact"
					description="If you're new to Preact, try the interactive tutorial to learn important concepts"
					href="https://preactjs.com/tutorial"
				/>
				<Resource
					title="Differences to React"
					description="If you're coming from React, you may want to check out our docs to see where Preact differs"
					href="https://preactjs.com/guide/v10/differences-to-react"
				/>
				<Resource
					title="Learn Vite"
					description="To learn more about Vite and how you can customize it to fit your needs, take a look at their excellent documentation"
					href="https://vitejs.dev"
				/>
			</section>
		</div>
	)
}
