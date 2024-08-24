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

Detailed Explanation
Async Actions
Asynchronous actions in Zustand involve performing operations that require waiting for something to happen—usually data fetching—before updating the global state. Zustand does not natively support async actions within the store, but this can be handled effectively using custom hooks or by integrating async processes within actions.

import create from 'zustand'
const useStore = create((set) => ({
data: [],
fetch: async () => {
const response = await fetch('https://api.example.com/data');
const json = await response.json();
set({ data: json });
}
}));
Middleware
Middleware in Zustand acts as a layer that intercepts and potentially modifies actions going to the store. It’s particularly useful for debugging, adding logging capabilities, or integrating with tools like Redux DevTools.

Using Built-in Middleware
Zustand comes with some built-in middleware, such as devtools and logger.

Using DevTools Middleware
import create from 'zustand';
import { devtools } from 'zustand/middleware';
const useStore = create(devtools((set) => ({
count: 0,
increment: () => set((state) => ({ count: state.count + 1 })),
})));
Using Logger Middleware

import create from 'zustand';
import { logger } from 'zustand/middleware';
const useStore = create(logger((set) => ({
count: 0,
increment: () => set((state) => ({ count: state.count + 1 })),
})));
Creating Custom Middleware
You can also create your own middleware to extend Zustand’s functionality. Custom middleware can intercept actions, log them, modify state, or perform any other side effects.

const loggingMiddleware = (config) => (set, get, api) => config((args) => {
console.log('Previous State:', get());
set(args);
console.log('Next State:', get());
}, get, api);
const useStore = create(loggingMiddleware((set) => ({
count: 0,
increment: () => set((state) => ({ count: state.count + 1 })),
})));
Example: Auth Middleware

const authMiddleware = (config) => (set, get, api) => config((args) => {
const state = get();
if (state.isAuthenticated) {
set(args);
} else {
console.warn('Action blocked: User is not authenticated');
}
}, get, api);
const useStore = create(authMiddleware((set) => ({
isAuthenticated: false,
count: 0,
login: () => set({ isAuthenticated: true }),
increment: () => set((state) => ({ count: state.count + 1 })),
})));
Persistence
Persistence in Zustand involves saving the state to a storage medium like localStorage or sessionStorage and rehydrating it when the application starts. This ensures that the state is maintained across sessions even when the browser is refreshed and restarted, improving user experience.

Using Built-in Persistence Middleware
Zustand provides a built-in persist middleware to handle state persistence.

Example: Persisting State with localStorage

import create from 'zustand';
import { persist } from 'zustand/middleware';
const useStore = create(persist(
(set) => ({
count: 0,
increment: () => set((state) \=> ({ count: state.count + 1 })),
resetCount: () => set({ count: 0 })
}),
{
name: 'counter-storage', // unique name
getStorage: () => localStorage, // default is localStorage can be a sessionStorage too
}
));
