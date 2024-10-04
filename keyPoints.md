## React General Notes

### App creation

---

**npm**  
`npm create vite jsx -- --template=react`  
`cd jsx`  
`npm install`  
`npm run dev`

**pnpm**  
`pnpm create vite@latest my-react-app --template react`  
`cd my-react-app`  
`pnpm install`  
`pnpm run dev`

#### Using Vite - file orientation

- main.jsx file (equivalent of old school index.js file), this takes gives control of the root element to the React app & renders it on screen
- index.html in the root directory is the first file read by the browser (containing a div where the React app is mounted), browser will make a request after reading this file to retrieve the bundled javascript files, and initially read main.jsx (or index.js)

#### Build & Styling

- bulma.io & tailwind are good CSS libraries
- Babel - turns JSX into normal JS code
- Webpack - create a single file from all project files (into a bundle.js file - named differently in practice)

### Imports

---

- Import statements exclude file extension when importing a jsx file, include for other types like images

### Props

---

_For custom components, anything you put between its tags will be available as a prop to the custom component called_ _children! This could be plain text, an HTML element, or another custom element_

- JSX - all prop names follow camelCase (normal HTML attributes need to be changed if they are snake case or two words combined as one)
- Use {} notation for all prop values, but can pass string literals directly in double quotes
- Objects can be prop values, but not used between jsx tags (like between h1 tags) - strings and numbers only between jsx tags
- To provide boolean true, just type prop name
- To provide boolean false, provide name={false}
- Use `className` as the prop name for a class (instead of HTML class)
- Inline styles are provided as objects, `style={{textDecoration: ‘none’}}`
- Props show up as the first argument to a child component - props is an OBJECT
- These can be destructured in the fn signature instead of receiving props

##### Passing data from child to parent involves props too:

- Pass a prop referencing a function in the parent element
- In the child element, destructure & reference the prop (by calling it) at the appropriate time (it might be in response to a native HTML element event)
- Any arguments passed can be accessed in the parent element function
- Call the prop “on” something and call the actual event handler function “handle” something - onClick & handleClick

### Dealing with Inputs (user input)

---

- Create an initial state for the input value using `useState`
- Inputs require a `value` prop (referencing the above state), and a `onChange` prop (referencing an event handler)
- The event handler should set the state by extracting it from `event.target.value`
- The event object is always accessible as the first argument in an event handler for an event triggered from a native HTML object

### Mapping over containers to create JSX lists

---

- When mapping, a `key` prop is needed on the top-most JSX element
- A number or string representing a unique value is needed
- Keys should be the same for each re-render (so no random number keys or anything)

### State

---

**Define event handlers in the same component as the state which it controls**

_When considering state, content is re-rendered where state is defined, plus all children. So define state in the lowest common parent_

#### useState

`import { useState } from 'react';`  
`const [counter, setCounter] = useState(0)`

#### context

`import { createContext } from 'react';` & `import { useContext } from 'react';`  
_When a component reaches into context, it causes a rerender as the custom provider sits at the top of the application_

1. Create file in a context directory within src & create context object with `const  BookContext = createContext();` - This context object can access the default provider component with BookContext.Provider

2. Create a custom Provider react component which will return the context object's default provider, with a value prop from the custom provider with state & functions to change state

```typescript
return (
  <BookContext.Provider value={{ currentPath, navigate }}>
    {children}
  </BookContext.Provider>
);
```

This custom provider should have:

- Some state (with useState)
- An object to share with the rest of the application, with the state itself, and function(s) to change its value, (which will reference the set fn from useState)
- Return value equal to the above, with the children prop between tags to pass all context

3. Export context object as default, and custom Provider as a named export, e.g.  
   `export { BookProvider };`  
   `export default BookContext;`

4. In main.jsx, wrap the App component (it & all children get access) in the custom provider component

5. Consume state by importing useContext from react, then assigning values, e.g.  
   `{ state, fntochange }  = useContext(ContextName)`

### Hooks

---

_Functions that add additional features to a component, often beginning with use -_
_Don’t put any jsx code into custom hooks, always only pure js relating to 1 or 2 pieces of state_

#### useEffect

- First arg: arrow function with code to call (could just be a function)
- Second arg:

  - empty array (code called after first render then never again)
  - nothing at all (code called after first and each subsequent re-render)
  - an array of elements (code called after first and subsequent re-renders if variables in array have changed (could be state)

- Return an anonymous arrow fn from useEffect to call on each subsequent call to useEffect (not the first time - it just receives a reference to the function the first time) to act as a cleanup function
- Within use effect you can run event listeners on the entire document

#### useRef

`import { useRef } from react`  
`const divEl  = useRef();`

- Allows a component to get a reference to a DOM element that it creates
- Give the DOM element you want to watch a prop of `ref={divEl}`, which gives the variable a pointer to the element (wrapped in an object)
- Access element directly with `divEl.current`

#### useCallback

- Hook to help you tell React that a function is not changing over time (as a new version of the function is created each time state changes and the component re-renders - it never runs your function, and is generally used when a fn is part of useEffect
- 2 args, a function, and an (could be empty) array - generally functions are just wrapped in useCallback
  After first render - returns the function
- Subsequent renders - if empty array, will return stable reference to original function from the first render

### classnames library

---

`import className from 'classnames';`, then use className() fn

- Use classnames library to parse a logical class name into a bunch of different tailwind styling classes
- Pass classes to apply always as first arguments (can just be one string or each one a separate string)
- Then an object with the key being the classes to apply (will need single quotes if they include dashes) and the prop name as the value - if prop name is truthy then it will be applied (if undefined it won’t be) specify multiple prop values with &&

### Conditional rendering

---

- In Js || (or operator) will return first truthy value
  && (and) will return the first falsy value, or last truthy value if no false
- Use the a boolean value to determine whether to render with && {some jsx} to conditionally render something

#### Rendering modals

If you need to cover the screen with a modal (like a warning with background greyed out), you can add a div to the main index.html file, then use ReactDOM from “react-dom” to call ReactDOM.createPortal() passing the HTML you want to render, then a query selector to select the new div as the second argument. This ensures the portal always covers the screen, irrespective of whether it has parent ancestors which are positioned ‘relative’ (as absolute elements can expand to fill last relative parent)

### Sorting in Javascript

---

_Sort method in js - always receives a & b arguments as next & initial (current) elements of container_

- Return a negative number to switch elements around
- Multiply calculations below by \* -1 for descending order, or 1 for ascending order-

For strings ascending:

```typescript
data.sort(a, b) => {
	return a.localeCompare(b);
```

For integers ascending:

```typescript
data.sort(a, b) => {
	return a - b
```

For objects:

Create a fn (e.g. getSortValue) which takes an object and returns the attribute (or attribute calculation) you want to sort on

```typescript
data.sort(a, b) => {
	const valueA = getSortValue(a)
	const valueB = getSortValue(b)
	return valueA - valueB
```

Note: change final line if the attribute isn’t a Number

### Next.js routing

---

- managed within an `/app` directory
- each directory (and subdirectory) creates the routing path - the path goes all the way to the filename, apart from the page.tsx file, which is the directory name/ (root)
- within each directory
  - the `page.tsx` file is rendered at that route
  - the `template.tsx` file is a reusable structure for pages, rendered each time with no state persistence, can access dynamic content/props - applies to pages in directory ONLY
  - the `layout.tsx` file defines a consistent static structure for pages, rendered once and maintaining state - applies to pages in directory & all pages in subdirectories too

### React (TanStack) query

---

- [TanStack](https://tanstack.com/query/latest/docs/framework/react/quick-start) documentation provides great code snippets for querying, mutations (modifying data on server), and invalidating cached queries

### Fragments

---

`import { Fragment } from ‘react’`

- Acts as a simple empty component in case you need to wrap something in a component (like to provide a key prop in a mapping fn)
