import { useState } from 'react';

export default defaultValue => {
  const [value, setValue] = useState(defaultValue);

  const onChange = e => {
    const {
      target: { value }
    } = e;
    console.log(value);
    setValue(value);
  };

  return { value, onChange, setValue };
};
