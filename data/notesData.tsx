// Update the
import { FaReact, FaCss3Alt, FaJsSquare, FaTerminal } from 'react-icons/fa';
import { SiC, SiNextdotjs, SiTailwindcss } from 'react-icons/si';
import type { IconType } from 'react-icons';

export interface Note {
  title: string;
  description: string;
  Icon: IconType;
  slug: string;
  content: string;
}

export const notesData: Note[] = [
  {
    title: 'Mastering React Hooks',
    description: 'A deep dive into useState, useEffect, and custom hooks for building efficient and scalable components.',
    Icon: FaReact,
    slug: 'mastering-react-hooks',
    content: `
      <p class="mb-4">React Hooks are functions that let you “hook into” React state and lifecycle features from function components. They were introduced in React 16.8 and have fundamentally changed how we write React components by allowing us to use state and other React features without writing a class.</p>
      
      <h3 class="text-2xl font-bold mt-6 mb-3 font-heading">The <code>useState</code> Hook</h3>
      <p class="mb-4">The <code>useState</code> hook is the most common hook and is used to add state to functional components. It returns a pair: the current state value and a function that lets you update it.</p>
      <pre><code class="language-jsx">
import React, { useState } from 'react';

function Counter() {
  // Declares a new state variable called "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
      </code></pre>

      <h3 class="text-2xl font-bold mt-6 mb-3 font-heading">The <code>useEffect</code> Hook</h3>
      <p class="mb-4">The Effect Hook, <code>useEffect</code>, lets you perform side effects in function components. Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects. It runs after every render by default, but you can control when it runs.</p>
      <pre><code class="language-jsx">
import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // This function runs after the component renders
    const intervalId = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    // This is the cleanup function
    return () => clearInterval(intervalId);
  }, []); // The empty array means this effect runs only once

  return <p>Timer: {seconds}s</p>;
}
      </code></pre>
      
      <h3 class="text-2xl font-bold mt-6 mb-3 font-heading">Custom Hooks</h3>
      <p class="mb-4">A custom hook is a JavaScript function whose name starts with ”use” and that may call other hooks. They allow you to extract component logic into reusable functions.</p>
       <pre><code class="language-jsx">
import { useState, useEffect } from 'react';

// Custom hook to fetch data
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
      setLoading(false);
    }
    fetchData();
  }, [url]);

  return { data, loading };
}
      </code></pre>
    `
  },
  {
    title: 'Modern CSS Layouts',
    description: 'Exploring the power of Flexbox and CSS Grid for creating complex, responsive layouts with ease.',
    Icon: FaCss3Alt,
    slug: 'modern-css-layouts',
    content: `
      <p class="mb-4">Modern CSS has given us powerful tools for creating complex and responsive layouts with much less code than before. The two main layout modules are Flexbox and CSS Grid.</p>
      
      <h3 class="text-2xl font-bold mt-6 mb-3 font-heading">Flexbox</h3>
      <p class="mb-4">The Flexible Box Layout Module, makes it easier to design flexible responsive layout structure without using float or positioning. It's ideal for distributing space along a single dimension (a row or a column).</p>
      <ul>
        <li><code>display: flex;</code> - Defines a flex container.</li>
        <li><code>justify-content</code> - Aligns items along the main axis.</li>
        <li><code>align-items</code> - Aligns items along the cross axis.</li>
        <li><code>flex-direction</code> - Establishes the main-axis, thus defining the direction flex items are placed in the flex container.</li>
      </ul>
      <pre><code class="language-css">
.container {
  display: flex;
  justify-content: space-between; /* Aligns items with space between them */
  align-items: center; /* Vertically centers items */
}
      </code></pre>
      
      <h3 class="text-2xl font-bold mt-6 mb-3 font-heading">CSS Grid</h3>
      <p class="mb-4">CSS Grid Layout is a two-dimensional layout system, meaning it can handle both columns and rows, unlike flexbox which is largely a one-dimensional system. It is the most powerful layout system available in CSS.</p>
      <ul>
        <li><code>display: grid;</code> - Defines a grid container.</li>
        <li><code>grid-template-columns</code> - Defines the columns of the grid.</li>
        <li><code>grid-template-rows</code> - Defines the rows of the grid.</li>
        <li><code>gap</code> - Defines the size of the gap between the rows and columns.</li>
      </ul>
      <pre><code class="language-css">
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Creates 3 equal-width columns */
  gap: 1rem; /* Adds a 1rem gap between grid items */
}
      </code></pre>
    `
  },
  {
    title: 'Asynchronous JavaScript Explained',
    description: 'Understanding Promises, async/await, and how to handle asynchronous operations in modern JavaScript.',
    Icon: FaJsSquare,
    slug: 'asynchronous-javascript',
    content: `
      <p class="mb-4">JavaScript is a single-threaded language, meaning it can only do one thing at a time. Asynchronous programming allows us to perform long-running tasks without blocking the main thread, ensuring a smooth user experience.</p>
      
      <h3 class="text-2xl font-bold mt-6 mb-3 font-heading">Promises</h3>
      <p class="mb-4">A <code>Promise</code> is an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason.</p>
      <pre><code class="language-javascript">
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success!");
  }, 1000);
});

myPromise
  .then(result => console.log(result)) // "Success!"
  .catch(error => console.error(error));
      </code></pre>

      <h3 class="text-2xl font-bold mt-6 mb-3 font-heading">Async/Await</h3>
      <p class="mb-4"><code>async/await</code> is modern syntax built on top of Promises that makes asynchronous code look and behave more like synchronous code. This makes it easier to read and write.</p>
      <p class="mb-4">An <code>async</code> function is a function declared with the <code>async</code> keyword, and the <code>await</code> keyword is permitted within it. The <code>await</code> keyword makes JavaScript wait until that promise settles and returns its result.</p>
      <pre><code class="language-javascript">
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

fetchData();
      </code></pre>
    `
  },
  {
    title: 'Essential CLI Commands',
    description: 'A curated list of command-line tools and shortcuts that can significantly boost your productivity.',
    Icon: FaTerminal,
    slug: 'essential-cli-commands',
    content: `
      <p class="mb-4">The Command Line Interface (CLI) is a powerful tool for developers. Mastering a few essential commands can significantly speed up your workflow and provide more control over your development environment.</p>
      
      <h3 class="text-2xl font-bold mt-6 mb-3 font-heading">File System Navigation</h3>
      <ul>
        <li><code>ls</code> - List files and directories in the current directory.</li>
        <li><code>cd [directory]</code> - Change the current directory. Use <code>cd ..</code> to go up one level.</li>
        <li><code>pwd</code> - Print the current working directory.</li>
        <li><code>mkdir [name]</code> - Create a new directory.</li>
        <li><code>touch [file]</code> - Create a new empty file.</li>
        <li><code>rm [file]</code> - Remove a file. Use <code>rm -r [directory]</code> to remove a directory.</li>
      </ul>
      
      <h3 class="text-2xl font-bold mt-6 mb-3 font-heading">Git Commands</h3>
      <ul>
        <li><code>git clone [url]</code> - Copy a remote repository to your local machine.</li>
        <li><code>git status</code> - Show the working tree status.</li>
        <li><code>git add .</code> - Stage all changes for the next commit.</li>
        <li><code>git commit -m "Your message"</code> - Record changes to the repository.</li>
        <li><code>git push</code> - Update remote refs along with associated objects.</li>
        <li><code>git pull</code> - Fetch from and integrate with another repository or a local branch.</li>
      </ul>

      <h3 class="text-2xl font-bold mt-6 mb-3 font-heading">Node/NPM Commands</h3>
      <ul>
        <li><code>npm install [package]</code> - Install a package.</li>
        <li><code>npm run [script]</code> - Run a script defined in your <code>package.json</code>.</li>
        <li><code>npx [package]</code> - Execute a package without installing it globally.</li>
      </ul>
    `
  },
  {
    title: 'Getting Started with Next.js',
    description: 'An introduction to the Next.js framework and its core features like SSR, SSG, and file-based routing.',
    Icon: SiNextdotjs,
    slug: 'getting-started-with-nextjs',
    content: `
      <p class="mb-4">Next.js is a popular open-source React framework that enables functionalities such as server-side rendering (SSR) and generating static websites (SSG). It provides a fantastic developer experience with features like file-based routing, automatic code splitting, and built-in CSS support.</p>
      
      <h3 class="text-2xl font-bold mt-6 mb-3 font-heading">Why Use Next.js?</h3>
      <ul>
        <li><strong>Server-Side Rendering (SSR):</strong> Render React components on the server, which can improve performance and SEO.</li>
        <li><strong>Static Site Generation (SSG):</strong> Pre-render pages at build time. This is great for blogs, portfolios, and marketing sites.</li>
        <li><strong>File-Based Routing:</strong> Pages are automatically routed based on their file name in the <code>pages</code> directory. No need for a separate routing library.</li>
        <li><strong>API Routes:</strong> Easily create API endpoints as Node.js serverless functions.</li>
      </ul>

      <h3 class="text-2xl font-bold mt-6 mb-3 font-heading">File-Based Routing</h3>
      <p class="mb-4">Next.js has a file-system based router built on the concept of pages. When a file is added to the <code>pages</code> directory, it's automatically available as a route.</p>
      <ul>
        <li><code>pages/index.js</code> → <code>/</code></li>
        <li><code>pages/about.js</code> → <code>/about</code></li>
        <li><code>pages/posts/[slug].js</code> → <code>/posts/:slug</code> (Dynamic Route)</li>
      </ul>

      <h3 class="text-2xl font-bold mt-6 mb-3 font-heading">Creating a New Page</h3>
      <p class="mb-4">To create a new page, simply create a new <code>.js</code>, <code>.jsx</code>, or <code>.tsx</code> file in the <code>pages</code> directory. Export a React component as the default export.</p>
      <pre><code class="language-jsx">
// pages/about.js

export default function AboutPage() {
  return (
    <div>
      <h1>About Us</h1>
      <p>This is the about page.</p>
    </div>
  );
}
      </code></pre>
      <p>Now, if you navigate to <code>/about</code> in your browser, this component will be rendered.</p>
    `
  },
  {
    title: 'Utility-First with Tailwind CSS',
    description: 'Understanding the utility-first approach and how Tailwind CSS can dramatically speed up your UI development.',
    Icon: SiTailwindcss,
    slug: 'utility-first-with-tailwind-css',
    content: `
      <p class="mb-4">Tailwind CSS is a utility-first CSS framework packed with classes like <code>flex</code>, <code>pt-4</code>, <code>text-center</code> and <code>rotate-90</code> that can be composed to build any design, directly in your markup.</p>
      
      <h3 class="text-2xl font-bold mt-6 mb-3 font-heading">Installing Tailwind CSS</h3>
      <p class="mb-4">You can set up Tailwind CSS in a Vite + React project using the following commands:</p>
  
      <pre><code class="language-bash">
  # Install Tailwind CSS and dependencies
  npm install -D tailwindcss@^3 postcss autoprefixer
  
  # Initialize Tailwind CSS and PostCSS config files
  npx tailwindcss init -p
      </code></pre>
  
      <p class="mb-4">This will create two new configuration files in your project root:</p>
      <ul class="list-disc list-inside mb-4">
        <li><code>tailwind.config.js</code> – Tailwind configuration file</li>
        <li><code>postcss.config.js</code> – PostCSS configuration file</li>
      </ul>
  
      <h3 class="text-2xl font-bold mt-6 mb-3 font-heading">What is "Utility-First"?</h3>
      <p class="mb-4">Instead of writing custom CSS classes like <code>.card</code> or <code>.button</code>, you build complex components by applying pre-existing, single-purpose utility classes directly in your HTML. This approach has several benefits:</p>
      <ul>
        <li>You aren't wasting energy inventing class names.</li>
        <li>Your CSS stops growing.</li>
        <li>Making changes feels safer because you're only changing HTML.</li>
      </ul>
      
      <h3 class="text-2xl font-bold mt-6 mb-3 font-heading">Example: Styling a Button</h3>
      <p class="mb-4">Let's see how you would style a button using Tailwind's utility classes versus traditional CSS.</p>
  
      <strong>Traditional CSS:</strong>
      <pre><code class="language-html">
  &lt;button class="btn-primary"&gt;Click Me&lt;/button&gt;
      </code></pre>
      <pre><code class="language-css">
  .btn-primary {
    background-color: #4f46e5;
    color: #ffffff;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    font-weight: 600;
  }
  .btn-primary:hover {
    background-color: #4338ca;
  }
      </code></pre>
      
      <strong class="mt-4 inline-block">Tailwind CSS:</strong>
      <pre><code class="language-html">
  &lt;button class="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700"&gt;
    Click Me
  &lt;/button&gt;
      </code></pre>
      <p class="mt-4">With Tailwind, all the styling is done directly in the HTML. While it might look verbose at first, it's incredibly productive once you get used to it, especially when building components in a framework like React or Vue.</p>
    `
  },
  {
    title: 'Introduction to C Programming',
    description:
      'Learn the fundamentals of the C programming language — variables, data types, control structures, and memory management.',
    Icon: SiC,
    slug: 'introduction-to-c-programming',
    content: `
    <p class="mb-4">This comprehensive roadmap covers over <strong>1000 topics</strong> in the C programming language — from its history and evolution to modern standards, compilation, and advanced memory concepts. Each section is structured hierarchically for easy navigation and progressive learning.</p>

    <h2 class="text-3xl font-bold mt-6 mb-3 font-heading">C Language Topic Roadmap: Over 1000 Comprehensive Topics</h2>
    <p class="mb-4">This roadmap is designed to guide you through every significant concept in the C programming language, from foundational principles to advanced techniques and standard library functions. Each topic is broken down into granular detail to ensure a thorough understanding.</p>

    <h3 class="text-2xl font-bold mt-6 mb-3 font-heading">1. Introduction to C Programming</h3>

    <h4 class="text-xl font-semibold mt-4 mb-2">1.1 History and Evolution of C</h4>
    <ul class="list-disc list-inside mb-4">
      <li><strong>1.1.1 Origins of C</strong>: Understanding its development at Bell Labs.
        <ul class="list-disc list-inside ml-6">
          <li>1.1.1.1 Role of Dennis Ritchie</li>
          <li>1.1.1.2 Influence of B language</li>
          <li>1.1.1.3 Early Unix development connection</li>
        </ul>
      </li>
      <li><strong>1.1.2 Standardization of C</strong>: Key standards and their impact.
        <ul class="list-disc list-inside ml-6">
          <li>1.1.2.1 ANSI C (C89/C90)</li>
          <li>1.1.2.2 ISO C (C99)</li>
          <li>1.1.2.3 C11 Standard</li>
          <li>1.1.2.4 C17 (C18) Standard</li>
          <li>1.1.2.5 C23 Standard (latest developments)</li>
        </ul>
      </li>
      <li><strong>1.1.3 Features and Advantages of C</strong>: Why C remains relevant.
        <ul class="list-disc list-inside ml-6">
          <li>1.1.3.1 Portability</li>
          <li>1.1.3.2 Efficiency and performance</li>
          <li>1.1.3.3 Memory management capabilities</li>
          <li>1.1.3.4 Foundation for other languages</li>
          <li>1.1.3.5 System programming applications</li>
          <li>1.1.3.6 Embedded systems development</li>
        </ul>
      </li>
      <li><strong>1.1.4 C vs. Other Languages</strong>: Brief comparisons (e.g., C++, Java, Python).
        <ul class="list-disc list-inside ml-6">
          <li>1.1.4.1 C vs. C++: Similarities and differences</li>
          <li>1.1.4.2 C vs. Java: JVM vs. direct compilation</li>
          <li>1.1.4.3 C vs. Python: Performance vs. rapid development</li>
        </ul>
      </li>
    </ul>

    <h4 class="text-xl font-semibold mt-4 mb-2">1.2 Setting Up Your C Development Environment</h4>
    <ul class="list-disc list-inside mb-4">
      <li><strong>1.2.1 Compilers</strong>: Understanding the role of a C compiler.
        <ul class="list-disc list-inside ml-6">
          <li>1.2.1.1 GCC (GNU Compiler Collection) installation and usage</li>
          <li>1.2.1.2 Clang/LLVM</li>
          <li>1.2.1.3 Microsoft Visual C++ Compiler (MSVC)</li>
          <li>1.2.1.4 Tiny C Compiler (TCC)</li>
        </ul>
      </li>
      <li><strong>1.2.2 Integrated Development Environments (IDEs)</strong>: Tools for coding.
        <ul class="list-disc list-inside ml-6">
          <li>1.2.2.1 Visual Studio Code with C/C++ extension</li>
          <li>1.2.2.2 Code::Blocks</li>
          <li>1.2.2.3 Eclipse CDT</li>
          <li>1.2.2.4 Dev-C++</li>
          <li>1.2.2.5 CLion</li>
        </ul>
      </li>
      <li><strong>1.2.3 Command-Line Interface (CLI)</strong>: Compiling and running programs manually.
        <ul class="list-disc list-inside ml-6">
          <li>1.2.3.1 Basic terminal commands (<code>ls</code>, <code>cd</code>, <code>mkdir</code>)</li>
          <li>1.2.3.2 Using <code>gcc</code> or <code>clang</code> from the command line</li>
          <li>1.2.3.3 Compilation flags (e.g., <code>-o</code>, <code>-Wall</code>, <code>-g</code>, <code>-std=c99</code>)</li>
          <li>1.2.3.4 Executing compiled programs</li>
        </ul>
      </li>
    </ul>

    <h4 class="text-xl font-semibold mt-4 mb-2">1.3 Structure of a C Program</h4>
    <ul class="list-disc list-inside mb-4">
      <li><strong>1.3.1 Basic Program Anatomy</strong>: The essential components of a C file.
        <ul class="list-disc list-inside ml-6">
          <li>1.3.1.1 Preprocessor directives (<code>#include</code>)</li>
          <li>1.3.1.2 Global declarations (variables, functions)</li>
          <li>1.3.1.3 The <code>main()</code> function: entry point of execution</li>
          <li>1.3.1.4 Function definitions</li>
        </ul>
      </li>
      <li><strong>1.3.2 Comments</strong>: Explaining code for readability.
        <ul class="list-disc list-inside ml-6">
          <li>1.3.2.1 Single-line comments (<code>//</code>)</li>
          <li>1.3.2.2 Multi-line comments (<code>/* ... */</code>)</li>
          <li>1.3.2.3 Importance of good commenting practices</li>
        </ul>
      </li>
      <li><strong>1.3.3 Whitespace</strong>: Using spaces, tabs, and newlines for clarity.
        <ul class="list-disc list-inside ml-6">
          <li>1.3.3.1 Indentation styles</li>
          <li>1.3.3.2 Spacing around operators</li>
          <li>1.3.3.3 Blank lines for logical separation</li>
        </ul>
      </li>
    </ul>

    <h4 class="text-xl font-semibold mt-4 mb-2">1.4 Compilation and Execution Process</h4>
    <ul class="list-disc list-inside mb-4">
      <li><strong>1.4.1 Preprocessing</strong>: First stage of compilation.
        <ul class="list-disc list-inside ml-6">
          <li>1.4.1.1 Macro expansion</li>
          <li>1.4.1.2 Header file inclusion</li>
          <li>1.4.1.3 Conditional compilation directives</li>
          <li>1.4.1.4 Output of the preprocessor (<code>.i</code> file)</li>
        </ul>
      </li>
      <li><strong>1.4.2 Compilation</strong>: Translating preprocessed code to assembly.
        <ul class="list-disc list-inside ml-6">
          <li>1.4.2.1 Semantic analysis</li>
          <li>1.4.2.2 Syntax analysis</li>
          <li>1.4.2.3 Code generation</li>
          <li>1.4.2.4 Output of the compiler (<code>.s</code> file)</li>
        </ul>
      </li>
      <li><strong>1.4.3 Assembly</strong>: Translating assembly to object code.
        <ul class="list-disc list-inside ml-6">
          <li>1.4.3.1 Assembler role</li>
          <li>1.4.3.2 Output of the assembler (<code>.o</code> file)</li>
        </ul>
      </li>
      <li><strong>1.4.4 Linking</strong>: Combining object files and libraries.
        <ul class="list-disc list-inside ml-6">
          <li>1.4.4.1 Static linking</li>
          <li>1.4.4.2 Dynamic linking</li>
          <li>1.4.4.3 Role of the linker</li>
          <li>1.4.4.4 Resolving external references</li>
          <li>1.4.4.5 Output of the linker (executable file)</li>
        </ul>
      </li>
      <li><strong>1.4.5 Execution</strong>: Running the final program.
        <ul class="list-disc list-inside ml-6">
          <li>1.4.5.1 Loading into memory</li>
          <li>1.4.5.2 CPU execution cycle</li>
        </ul>
      </li>
    </ul>
  `
  }
];
