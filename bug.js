```javascript
//Incorrect way to handle state updates in functional component
import React, { useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1); //This will cause a stale closure issue.
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default MyComponent;
```