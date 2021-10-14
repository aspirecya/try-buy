import React from "react";
import * as API from "../../api/api";
import * as Cookies from "../../api/cookies";
const CreateProduct = () => {
  const [categories, setCategories] = React.useState([]);
  const CreateProduct = async (e) => {
    e.preventDefault();

    let x = await API.CreateProduct(
      {
        seller: Cookies.getAuth(),
        title: e.target.elements.title.value,
        description: e.target.elements.description.value,
        price: e.target.elements.price.value,
        categories: e.target.elements.categories.value,
        image: [
          e.target.elements.image1.value,
          e.target.elements.image2.value,
          e.target.elements.image3.value,
        ],
      },
      Cookies.getAuth()
    );
    console.log(x);
  };
  const GetCateg = async () => {
    setCategories(await API.GetAllCateg());
    console.log(categories);
  };
  React.useEffect(() => {
    GetCateg();
  }, []);

  return (
    <>
      <form action="#" onSubmit={CreateProduct}>
        <div className="shadow sm:rounded-md sm:overflow-hidden">
          <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Create Selling
              </h3>
              {/* <p className="mt-1 text-sm text-gray-500">
                Use a permanent address where you can recieve mail.
              </p> */}
            </div>

            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-5">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700"
                >
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  autoComplete="given-name"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="col-span-6 sm:col-span-5">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Description
                </label>
                <div className="mt-1">
                  <textarea
                    id="description"
                    name="description"
                    rows={3}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                    // placeholder="you@example.com"
                    defaultValue={""}
                  />
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  Brief description for your profile. URLs are hyperlinked.
                </p>
              </div>
              <div className="col-span-3 sm:col-span-2">
                <label
                  htmlFor="price"
                  className="block text-sm font-medium text-gray-700"
                >
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  autoComplete="price"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="col-span-3 sm:col-span-3">
                <label
                  htmlFor="categories"
                  className="block text-sm font-medium text-gray-700"
                >
                  Categories
                </label>
                <select
                  id="categories"
                  name="categories"
                  autoComplete="categories"
                  className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  {categories.map((el) => {
                    return <option>{el}</option>;
                  })}
                </select>
              </div>

              <div className="col-span-4 sm:col-span-5 lg:col-span-5">
                <label
                  htmlFor="image1"
                  className="block text-sm font-medium text-gray-700"
                >
                  Link Image 1
                </label>
                <input
                  type="text"
                  name="image1"
                  id="image1"
                  value="https://images.pexels.com/photos/7690953/pexels-photo-7690953.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  autoComplete="image1"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="col-span-4 sm:col-span-5 lg:col-span-5">
                <label
                  htmlFor="image2"
                  className="block text-sm font-medium text-gray-700"
                >
                  Link Image 2
                </label>
                <input
                  type="text"
                  name="image2"
                  id="image2"
                  value="https://images.pexels.com/photos/7690865/pexels-photo-7690865.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  autoComplete="image1"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="col-span-4 sm:col-span-5 lg:col-span-5">
                <label
                  htmlFor="image3"
                  className="block text-sm font-medium text-gray-700"
                >
                  Link Image 3
                </label>
                <input
                  type="text"
                  name="image3"
                  id="image3"
                  autoComplete="image3"
                  value="https://images.pexels.com/photos/7690953/pexels-photo-7690953.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
          </div>
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              type="submit"
              className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default CreateProduct;
