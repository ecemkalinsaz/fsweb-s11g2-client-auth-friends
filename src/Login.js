import { useState } from "react";
import axios from "axios";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .post("http://localhost:9000/api/login", formData)
      .then((res) => {
        localStorage.setItem("token", res.data.token)
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }

  return (
    <>
    <h2 className="text-4xl font-bold p-2">LOGIN</h2>
      <form className="text-center" onSubmit={handleSubmit}>
        <label className="block mb-2">
          USERNAME
          <input
            onChange={handleChange}
            name="username"
            value={formData.username}
            type="text"
            className="p-1 ml-2 border border-zinc-400 w-56 rounded text-sm"
          />
        </label>
        <label className="block mb-2">
          PASSWORD
          <input
            onChange={handleChange}
            name="password"
            value={formData.password}
            type="password"
            className="p-1 ml-2 border border-zinc-400 w-56 rounded text-sm"
          />
        </label>
        <button type="submit" className="px-4 py-2 bg-yellow-500 rounded">
          SUBMIT
        </button>
      </form>
    </>
  );
}

