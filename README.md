
# Course Registration 

This is a simple react project where people can Registrater their IT course.



## Feature
- People can select course from our website
- Anyone can take maximum 20 credit hours.
- After click 'select' course titlem credit hours, remaining credit hours and price will add to the cart section
- Any one select a course for single time.
- Display toast for already added course.
- display toast for not enogh credit hours.


## State Mangement

Here I use `useState` hook for state management. The React `useState` Hook allows us to track state in a function component.

For using `useState` hook we need to import it from react.

```bash
import { useState } from "react";
```

In this project I use total 4 `useState` hook, those are below.

1. Set courses in array
```bash
  const [courseName, setCourse] = useState([])
```

Initially declare state as a empty array.Then push object of corses and set by using setCourse veriable.

2. Set total credit hours.
```bash
  const [credit, setCredit] = useState(0);
```
Initially declare state as `0` . Then calculate total added credit and set by using setCredit veriable.

3. Set total Price.
```bash
 const [price, setPrice] = useState(0);
```
Initially declare state as `0` . Then calculate total added courses price and set by using setPrice veriable.

4. Set total remaining credit.
```bash
const [remaingCredit, setRemainingCredit]= useState(20);
```
Initially declare state as `20` . Then calculate total remaining credit hours and set by using setRemainingCreditveriable.





## Deploy Link

 Here is live deploy link of this project.

 [Live Project](https://rainbow-quokka-cb2a45.netlify.app)