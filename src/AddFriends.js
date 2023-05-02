import { useState } from "react";
import axios from "axios";

export default function AddFriends() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
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
      .post("http://localhost:9000/api/friends", formData, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-4xl font-bold p-2">ADD FRIEND</h2>

      <form onSubmit={handleSubmit} className="w-1/2">
        <div class="mb-6">
          <label
           
            class="block mb-2 text-lg font-bold text-neutral-900"
          >
            Name
          </label>
          <input
           name="name"
            onChange={handleChange}
            type="text"
            id="name"
            value={formData.name}
            class="bg-neutral-800 border border-gray-300 text-slate-50 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>

        <div class="mb-6">
          <label
            for="email"
            class="block mb-2 text-lg font-bold text-neutral-900"
          >
            Email
          </label>
          <input
            onChange={handleChange}
            name="email"
            value={formData.email}
            type="email"
            id="email"
            class="bg-neutral-800 border border-gray-300 text-slate-50 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
        
        <button
          type="submit"
          class="text-white bg-neutral-800 hover:bg-neutral-950 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
}
