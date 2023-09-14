type Falsy = false | 0 | "" | null | undefined

/**
 * Utility for building value for class attribute where some of classes are conditional.
 *
 * @example
 *   classes(
 *     "foo",
 *     "bar",
 *     isActive && "active",
 *   )
 *   // "foo bar active" when isActive is truthy
 *   // "foo bar" when isActive is faisy
 *
 * @param classNames List of class names, or falsy values which are results of conditional class names and going to ignored
 * @returns String containing class names joined with spaces
 */
export const classes = (...classNames: (string | Falsy)[]): string =>
	classNames.filter((item) => item).join(" ")
