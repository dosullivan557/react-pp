# react-pp
![Publish to NPM](https://github.com/dosullivan557/react-pp/actions/workflows/publish.yml/badge.svg)
![License](https://img.shields.io/npm/l/react-pp)
![NPM version](https://img.shields.io/npm/v/react-pp)
![downloads](https://img.shields.io/npm/dm/react-pp)
![vulns](https://img.shields.io/snyk/vulnerabilities/github/dosullivan557/react-pp)

Like this Module? Consider Starring the repo
![https://img.shields.io/github/stars/dosullivan557/react-pp?style=social](https://img.shields.io/github/stars/dosullivan557/react-pp?style=social)

A library of enhanced and highly reusable React hooks for common tasks and functionality.

## Installation

To install the latest version of `react-pp`, run the following command:

```sh
npm install react-pp
```

## Hooks

### useToggle

```js
import { useToggle } from "react-pp";
function App() {
  const [value, toggleValue] = useToggle(false);
  return (
    <div className="App">
      <p>{JSON.stringify(value)}</p>
      <button onClick={toggleValue}>Toggle {value}</button>
      <div>{value}</div>
    </div>
  );
}

export default App;
```

### useAsyncHook

```js
import { useAsyncHook } from "react-pp";
function App(props) {
  const [result, error, isLoading] = useAsyncHook(props.processData);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong</div>;
  return (
    <div className="App">
      <p>{JSON.stringify(result)}</p>
      <div>{value}</div>
    </div>
  );
}

export default App;
```

### useDebounce

```js
import React, { useState } from "react";
import { useDebounce } from "react-pp";

const ExampleComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    // Make API call or perform search with debouncedSearchTerm
  }, [debouncedSearchTerm]);

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default ExampleComponent;
```

### useValidatedForm

There are a few regular expressions built in. See below how to use. See [here](#regular-expressions) what regular expressions are included.

```js
import React, { useState } from "react";
import { useValidatedForm, regex } from "react-pp";

function App() {
  const [value, setValue, isValid] = useValidatedForm(regex.emailAddress);
  return (
    <div className="App">
      <input onChange={(e) => setValue(e.target.value)} />
      <p>{JSON.stringify(isValid)}</p>
    </div>
  );
}

export default App;
```

### useFetch

```js
import React, { useState } from "react";
import { useFetch } from "react-pp";

function App() {
  const [value, setValue, isValid] = useFetch("www.google.com", { a: 1 }, 'Accept':"*/*");
  return (
    <div className="App">
      <p>{JSON.stringify(value)}</p>
    </div>
  );
}

export default App;
```

## Regular Expressions

- Postcode
- Email Address
- Complex Password
- Moderate Password
- AlphaNumeric Value
- Username
- Url
- International Phone Number

## Contributing

If you would like to contribute to the `react-pp` library, please fork the repository and submit a pull request. All contributions are welcome!

## License

The `react-pp` library is open-source software licensed under the [MIT license](https://opensource.org/licenses/MIT).
