import { useState } from "react";

interface UserInfo {
  username: string;
  email: string;
}

export function Forms() {
  const [form, setFormData] = useState<UserInfo>({
    username: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      username: { value: string };
      password: { value: string };
    };

    console.log("Submitted form", target.username.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" value={form.username} onChange={handleChange} />
      <input
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}


// React.SyntheticEvent ->> Is the base class for all React events
// React.ChangeEvent | <HTMLInputElement> -> some changes
// other -> Textarea -> HTMLTextAreaElement
// Select -> HTMLSelectElement
// multipleinput -> React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>


// React.FormEvent | <HTMLFormElement> -> form user click submit
// React.MouseEvent | <HTMLButtonElement> -> mouse event
// React.InputEvent | <HTMLInputElement> -> input value

