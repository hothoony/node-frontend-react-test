## useToggle
```javascript
import { useState } from "react";

export default function useToggle(defaultValue) {

    const [value, setValue] = useState(defaultValue);

    function toggleValue(value) {
        setValue(currentVaule => 
            typeof value === 'boolean' ? value : !currentVaule
        )
    }

    return [value, toggleValue];
}
```
