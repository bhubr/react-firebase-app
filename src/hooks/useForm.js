import { useState } from 'react';

export default function useForm() {
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const handleChange = ({ target: { name, value } }) =>
    setData((prevData) => ({ ...prevData, [name]: value }));

  return [data, setData, handleChange];
}
