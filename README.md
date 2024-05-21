<!-- markdownlint-disable MD010 MD033 MD001 -->

# tailwind-resp

> **Dynamically handle responsive breakpoints in TailwindCSS classes**

tailwind-resp is a small package to dynamically join your responsive TailwindCSS classes

Gone are the days where you would type the breakpoint for every TailwindCSS class

Instead of doing this...

`'md:m-3 md:hover:bg-zinc-800 md:p-3 md:text-green-400 md:font-bold md:border-2 md:border-red-400'`

you could just do:

`'[resp:md] m-3 hover:bg-zinc-800 p-3 text-green-400 font-bold border-2 border-red-400'`

This makes it easier to read, understand and maintain complex classes. It also supports multiple breakpoints and conditionally classes as well (see usage below)

## 🛠️ Install

Using [npm](https://www.npmjs.com/)

```text
npm i tailwind-resp
```

> This package is ESM only. Please check out [this guide](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c) on how to convert your project to ESM

---

## 🔗 Usage

tailwind-resp exports one function called `resp()`

```js
import resp from 'tailwind-resp'

resp('[resp:md] m-1 hover:bg-zinc-800 p-3') // returns 'md:m-1 md:hover:bg-zinc-800 md:p-3'

// handles multiple breakpoints as well
resp('bg-zinc-800 m-10', '[resp:sm] m-5', '[resp:lg] m-10 text-lg') // returns 'bg-zinc-800 m-10 sm:m-5 lg:m-10 lg:text-lg'

// resp comes built-in with clsx support, so you can join classnames conditionally as well
resp(selected ? '[resp:sm] text-green-400 font-bold', '[resp:sm] text-red-400') // returns 'sm:text-green-400 sm:font-bold' if selected is true else 'sm:text-green-400'
```

---

## 🔮 API

### `resp(...classes)`

#### ...classes

Type: `...string` (variadic)

An infinite number of strings with TailwindCSS classnames in them. These may or may not have a 'resp:breakpoint' in them.

## ❤️ Support

You can support further development of this project by **giving it a 🌟** and help me make even better stuff in the future by **buying me a ☕**

<a href="https://www.buymeacoffee.com/savioxavier">
<img src="https://cdn.buymeacoffee.com/buttons/v2/default-blue.png" height="50px">
</a>

<br>

**Also, if you liked this repo, consider checking out my other projects, that would be real cool!**

---

## 💫 Attributions and special thanks

- [clsx](https://github.com/lukeed/clsx)
