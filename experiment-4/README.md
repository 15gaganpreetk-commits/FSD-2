📌 State Management in React
📖 Overview

State Management is the process of storing, updating, and controlling application data (state) so that the UI responds correctly to user interactions and events.

🧩 Local State

Local State is maintained within a single React component, usually managed using hooks like useState.

Key Points:

Limited to one component

Simple to implement

Not accessible by other components

Use Cases:
Form inputs, counters, toggles

🌐 Global State

Global State is used when data must be shared across multiple components in an application.

🔹 Context API

Context API is a built-in React feature that enables global state sharing without prop drilling.

Key Points:

Reduces unnecessary prop passing

Suitable for small to medium applications

Use Cases:
Theme handling, authentication, shared values

🔹 Redux

Redux is a third-party state management library designed for complex React applications.

Key Points:

Uses a centralized store

Ensures predictable state updates

Scales well for large applications

Use Cases:
Applications with complex and shared state logic

🎯 Learning Outcomes

Understood the concept of State Management in React

Differentiated between Local State and Global State

Learned to use Context API and Redux for global state

Compared Local State, Context API, and Redux to choose suitable use cases
