import { render } from "preact"
import { LocationProvider, Router, Route } from "preact-iso"

import { Header } from "./components/Header.jsx"
import { Home } from "./pages/Home/index.jsx"
import { NotFound } from "./pages/_404.jsx"
import "./index.css"

export const App = () => {
	return (
		<LocationProvider>
			<Header />
			<main class="flex-auto flex items-center max-w-[1280px] m-8 text-center md:mx-0 md:my-auto">
				<Router>
					<Route path="/" component={Home} />
					<Route default component={NotFound} />
				</Router>
			</main>
		</LocationProvider>
	)
}

render(<App />, document.getElementById("app")!)
