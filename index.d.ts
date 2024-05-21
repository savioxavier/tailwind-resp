export default resp;
/**
 * Generate a joined string of TailwindCSS classnames with a given breakpoint
 * @param {string[]} classes - The set of classes to be applied for a given breakpoint (variadic)
 * @returns {string} - A singular string with the given breakpoint applied to each class
 * @example
 * resp('[resp:md] m-1 hover:bg-zinc-800 p-3') // returns 'md:m-1 md:hover:bg-zinc-800 md:p-3'
 * resp('bg-zinc-800 m-10', '[resp:sm] m-5') // returns 'bg-zinc-800 m-10 sm:m-5'
 */
declare function resp(...classes: string[]): string;
