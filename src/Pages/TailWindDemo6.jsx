import React, { useState } from "react";

const TailWindDemo6 = () => {
  const [formData, setFormData] = useState({
    name: "",
    link: "",
    category: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const ourErrors = {};
    if (formData.name.length < 2 || formData.name.length > 50) {
      //     setErrors({
      //         ...errors,
      //         name:'Name must be between 2 and 50 characters'
      //     })
      //    return
      ourErrors.name = "Name must be between 2 and 50 characters";
    }
    if (
      !/^((https?|ftp):\/\/)?(www\.)?[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+(\/[\w./?%&=-]*)?$/.test(
        formData.link,
      )
    ) {
      ourErrors.link = "please enter a valid url";
      // setErrors({
      //     ...errors,
      //     link: 'Please enter a valid URL'
      // });
    }

    setErrors(ourErrors);
    return Object.keys(ourErrors).length === 0;
  };
  console.log(errors);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log("is form is valid?");
    } else {
      console.log("form is invalid");
    }

    console.log(formData);
  };

  return (
    <div className="fixed inset-0  flex items-center justify-center">
      <div className="bg-white rounded-t-2xl rounded-b-lg shadow-lg w-full max-w-md  ">
        <div className="bg-blue-700 rounded-t-2xl px-6 py-6 flex justify-between ">
          <h2 className=" text-white text-2xl font-semibold mx-auto ">
            Submit a tool
          </h2>
        </div>

        <form className="px-6 py-8 rounded-3xl" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label>Name:</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Name"
              className="w-full border-b border-gray-300 focus:border outline-none bg-transparent py-2"
              onChange={handleChange}
              value={formData.name}
              // required
              // pattern='.{2,50}'
              // title='Name must be between 2 and 50 characters'
            />
            {errors.name && <span className="text-red-500">{errors.name}</span>}
            <label>Link to resource:</label>
            <input
              id="link"
              name="link"
              // type='url'
              placeholder="Url"
              className="w-full border-b border-gray-300 outline-none bg-transparent py-2"
              onChange={handleChange}
              value={formData.link}
              required
              // pattern='^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+\.){1,}[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$'
              // title='Please enter a valid URL(http or https, optional www,domain extension)'
            />
            {errors.link && <span className="text-red-500">{errors.link}</span>}
          </div>
          <div className="mb-8">
            <label>Category:</label>
            <select
              id="category"
              name="category"
              className="w-full border-b border-gray-300  outline-none bg-transparent py-2"
              onChange={handleChange}
              value={formData.category}
              required>
              <option value="">Select a category</option>
              <option value="design">Design</option>
              <option value="development">Development</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-900 hover:bg-blue-700  text-white text-lg font-semibold rounded-full shadow-md transition">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default TailWindDemo6;
