import { useState } from "react";

export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);

  const onResetForm = () => {
    setFormState(initialForm);
  }
  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({ ...formState, [name]: value });
  };

  return { onInputChange, ...formState, onResetForm  };
};

// {
//     user: "",
//     email: "",
//     password: "",t
//   }
