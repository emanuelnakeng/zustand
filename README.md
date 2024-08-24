# Introduction to Zustand

Zustand is a lightweight state management library specifically designed for React.
It provides a user-friendly API for creating and accessing global state within React components.
Zustand promotes the use of React hooks, like useState and useEffect, for state management and side effects handling.

# Installation

`npm install zustand`

Define a store using Zustand’s create() function, specifying the initial state and any actions or selectors. Don’t worry we will learn about what an action selector is and how to use it.

`import { create } from 'zustand';`
`const useStore \= create((set) \=> ({`
`count: 0,`
`increment: () \=> set((state) \=> ({ count: state.count + 1 })),`

` decrement: () \=> set((state) \=> ({ count: state.count \- 1 })),}));`
`export default useStore`
