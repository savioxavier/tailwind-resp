import clsx from 'clsx';

const BREAKPOINT_PREFIXES = [
  'sm', //	640px
  'md', //	768px
  'lg', //	1024px
  'xl', //	1280px
  '2xl', //	1536px
];

function getClassData(segment) {
  segment = segment.trim();

  let breakpointMatch;
  const breakpointRegexp = /\[resp:(.{2,3})\]/g;

  if (segment.startsWith('[resp:')) {
    const matches = [...segment.matchAll(breakpointRegexp)];

    breakpointMatch = matches.map((m) => m[1])[0];

    // prettier-ignore
    if (!BREAKPOINT_PREFIXES.includes(breakpointMatch)) {
			throw new Error(`tailwind-resp: given resp breakpoint '${breakpointMatch}' does not match one of ${BREAKPOINT_PREFIXES.join(", ")}`);
		}
  }

  return {
    breakpoint: breakpointMatch,
    classes: segment.replace(breakpointRegexp, '').trim(),
  };
}

function buildClasses(str) {
  const classData = getClassData(str);

  const parsedClasses = classData.classes.split(/\s+/);

  const joinedClasses = parsedClasses
    .map((_class) =>
      classData.breakpoint ? `${classData.breakpoint}:${_class}` : _class,
    )
    .join(' ');

  return joinedClasses;
}

/**
 * Generate a joined string of TailwindCSS classnames with a given breakpoint
 * @param {string[]} classes - The set of classes to be applied for a given breakpoint (variadic)
 * @returns {string} - A singular string with the given breakpoint applied to each class
 * @example
 * resp('[resp:md] m-1 hover:bg-zinc-800 p-3') // returns 'md:m-1 md:hover:bg-zinc-800 md:p-3'
 * resp('bg-zinc-800 m-10', '[resp:sm] m-5') // returns 'bg-zinc-800 m-10 sm:m-5'
 */
function resp(...classes) {
  let allClasses = [];

  for (const _class of classes) {
    allClasses.push(buildClasses(_class));
  }

  return clsx(allClasses);
}

export default resp;
