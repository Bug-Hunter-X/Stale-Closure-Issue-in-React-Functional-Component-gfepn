# Stale Closure Issue in React Functional Component

This repository demonstrates a common error in React functional components involving stale closures when updating state.  The `increment` function uses the value of `count` from its initial creation, not the updated value, resulting in incorrect increments.  The solution showcases the correct approach using the functional update pattern provided by `useState`.