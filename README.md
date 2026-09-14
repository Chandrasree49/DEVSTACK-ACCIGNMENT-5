Name of your project-DEVSTACK
A little description-DevStack is a modern technology stack builder where users can explore popular web technologies and create their own development stack. Users can add technologies to their stack, remove them, and manage their selections easily.

Technology that you use-react,json,tailwind css,daisy ui,toastify,loading,vite.
3 features about your project-Build Your Own Stack,Explore Technologies,Interactive Notifications

React Questions & Answers

1. What is JSX, and why is it used in React?
   JSX is HTML-like syntax used in React to write and describe UI components easily.

2. What is the difference between props and state?
   Props are data passed from a parent to a child, while state is data managed and changed inside a component.

3. What does the `useState` hook do, and where did you use it in this project?
   `useState` stores and updates component data, and I used it to manage the selected stack and loading state.

4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
   `useEffect` runs side effects after rendering, and I used it to manage the loading process for the technology data.

5. Why does every item in a `.map()` list need a unique `key` prop?
   A unique `key` helps React identify each list item and update the UI efficiently.

6. What is conditional rendering? Show one place you used it.
   Conditional rendering shows UI based on a condition, such as displaying **"Your stack is empty"** when `stack.length === 0`.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
   A parent passes data through props, and a child can communicate back by calling a function passed through props.
