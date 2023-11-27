// Addformplay.js
import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate,Link } from 'react-router-dom';

const Addformplay = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    city: '',
    size:'',
    price:'',
    startTime: '',
    endTime: '',
    notice: '',
    images: Array(4).fill(''),
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e, index) => {
    const newImages = [...formData.images];
    newImages[index] = e.target.value;
    setFormData({
      ...formData,
      images: newImages,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3010/formbooking', {
        formbooking: [formData],
      });

      console.log(response);

      if (response.status === 200 || response.status === 201) {
        toast.success('Booking successful!', {
          position: 'top-center',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });

        // Use the navigate function to programmatically navigate to "/paymentform"
        navigate('/Price');
      } else {
        console.error('Booking failed with status:', response.status);
        toast.error(`Booking failed with status: ${response.status}`, {
          position: 'top-center',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    } catch (error) {
      console.error('Error during booking:', error);
      toast.error(`Error during booking: ${error.message}`, {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <div className="flex items-center justify-center p-12">
      <div className="mx-auto w-full max-w-[550px] bg-white mt-14">
        <form onSubmit={handleSubmit}>
          <h1 className="font-bold mt-5 text-2xl ">Welcome to Add PlayGruond Form</h1>
          <div className="mb-5 mt-7">
            <label
              htmlFor="fullName"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              placeholder="Full Name"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-emerald-500 outline-none focus:border-emerald-500 focus:shadow-md"
              onChange={handleChange}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="phone"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="Enter your phone number"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-emerald-500 outline-none focus:border-emerald-500 focus:shadow-md"
              onChange={handleChange}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="location"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Location
            </label>
            <input
              type="text"
              name="location"
              id="location"
              placeholder="Location"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-emerald-500 outline-none focus:border-emerald-500 focus:shadow-md"
              onChange={handleChange}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="city"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              City
            </label>
            <input
              type="text"
              name="city"
              id="city"
              placeholder="City"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-emerald-500 outline-none focus:border-emerald-500 focus:shadow-md"
              onChange={handleChange}
            />
          </div>
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="price"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  price
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  className="w-full rounded-md border border-emerald-500 bg-white py-3 px-6 text-base font-medium text-emerald-500 outline-none focus:border-emerald-500 focus:shadow-md"
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="size"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  size
                </label>
                <input
                  type="size"
                  name="size"
                  id="size"
                  className="w-full rounded-md border border-emerald-500 bg-white py-3 px-6 text-base font-medium text-emerald-500 outline-none focus:border-emerald-500 focus:shadow-md"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="startTime"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Start Time
                </label>
                <input
                  type="time"
                  name="startTime"
                  id="startTime"
                  className="w-full rounded-md border border-emerald-500 bg-white py-3 px-6 text-base font-medium text-emerald-500 outline-none focus:border-emerald-500 focus:shadow-md"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="endTime"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  End Time
                </label>
                <input
                  type="time"
                  name="endTime"
                  id="endTime"
                  className="w-full rounded-md border border-emerald-500 bg-white py-3 px-6 text-base font-medium text-emerald-500 outline-none focus:border-emerald-500 focus:shadow-md"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="mb-5">
            <label
              htmlFor="notice"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
             Descrption
            </label>
            <textarea
              name="notice"
              id="notice"
              placeholder="Any additional notes or requests?"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-emerald-500 outline-none focus:border-emerald-500 focus:shadow-md"
              onChange={handleChange}
            ></textarea>
          </div>
          {/* Image Upload Section */}
          <div className="mb-5">
            <label htmlFor="image1" className="mb-3 block text-base font-medium text-[#07074D]">
              Image 1
            </label>
            <input
              type="text"
              name="image1"
              id="image1"
              placeholder="Image URL 1"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-emerald-500 outline-none focus:border-emerald-500 focus:shadow-md"
              onChange={(e) => handleImageChange(e, 0)}
            />
          </div>
          {/* Add similar sections for image2, image3, and image4 */}
          {/* ... */}
          <Link to="/price">
          <button
            type="submit"
            className="hover:shadow-form w-full rounded-md bg-emerald-500 py-3 px-8 text-center text-base font-semibold text-white outline-none"
          >
            Next Step
          </button></Link>
          
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Addformplay;
