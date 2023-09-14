import { FunctionComponent, isValidElement } from 'preact';
import { useLocation } from 'preact-iso';
import { classes } from '@/src/utils/classes';

type NavLinkProps = {
	href: string
}
const NavLink: FunctionComponent<NavLinkProps> = ({ href, children }) => {
	const { url } = useLocation();
	const isActive = url === href;

	return (
		<a href={href} class={classes(
			"p-3",
			"text-white",
			"no-underline",
			"hover:bg-black",
			"hover:bg-opacity-80",
			isActive && "bg-black bg-opacity-50",
		)}>
			{children}
		</a>
	)
}

export const Header = () => {
	const { url } = useLocation();

	return (
		<header class="flex justify-end bg-violet-800">
			<nav class="flex">
				<NavLink href="/">
					Home
				</NavLink>
				<NavLink href="/404">
					404
				</NavLink>
			</nav>
		</header>
	);
}
