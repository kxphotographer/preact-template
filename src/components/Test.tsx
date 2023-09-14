import { useEffect, useState } from "preact/hooks"

export default () => {
	const [count, setCount] = useState(0)

	useEffect(() => {
		setTimeout(() => {
			setCount(count + 1)
		}, 1000)
	}, [])

	return <div>{count}</div>
}
