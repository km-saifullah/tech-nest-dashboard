import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  useCreateVariationMutation,
  useGetVariationsQuery,
} from "../../redux/apiSlice";

const Variation = () => {
  const [variations, setVariations] = useState([{ attribute: "", value: "" }]);
  const [productId, setProductId] = useState("");

  const [createProductVariation, { isLoading, isSuccess, isError, error }] =
    useCreateVariationMutation();
  const { data: variationData, isLoading: variationLoading } =
    useGetVariationsQuery();

  const handleAddVariation = () => {
    setVariations([...variations, { attribute: "", value: "" }]);
  };

  const handleRemoveVariation = (index) => {
    setVariations(variations.filter((_, idx) => idx !== index));
  };

  const handleVariationChange = (index, field, value) => {
    const updatedVariations = [...variations];
    updatedVariations[index][field] = value;
    setVariations(updatedVariations);
  };

  // handle create variation
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createProductVariation({ variations, productId }).unwrap();
      alert("Product variation created successfully");
      setVariations([{ attribute: "", value: "" }]);
      setProductId("");
    } catch (err) {
      console.error("Failed to create product variation:", err);
    }
  };

  useEffect(() => {
    console.log(variationData, variationLoading);
  }, [variationData, variationLoading]);
  return (
    <main className="bg-gray-200 mt-6 rounded-lg p-5">
      <section className="space-y-3">
        <h3 className="text-2xl text-primary font-semibold font-inter ">
          Product Dashboard
        </h3>
        <ul className="flex items-center gap-x-2">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "active"
                    : "text-primary text-base font-normal font-inter leading-[140%] capitalize"
                }  `
              }
            >
              Home
            </NavLink>
          </li>
          <li>/</li>
          <li>
            <NavLink
              to="/product-variations"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "active"
                    : "text-primary text-base font-normal font-inter leading-[140%] capitalize"
                } `
              }
            >
              Variation details
            </NavLink>
          </li>
        </ul>
      </section>
      <section className="bg-white mt-6 p-5 rounded">
        <form onSubmit={handleSubmit}>
          <div className="flex items-center justify-between flex-wrap">
            <div className="flex flex-col space-y-3">
              <label
                htmlFor="productId"
                className="text-primary text-base font-medium font-inter"
              >
                Product ID
              </label>
              <input
                type="text"
                placeholder="Enter Product ID"
                id="productId"
                value={productId}
                onChange={(e) => setProductId(e.target.value)}
                className="w-full outline-none border border-borderColor p-3 rounded-lg"
                required
              />
            </div>
            <div className="flex flex-col space-y-3">
              {variations.map((variation, index) => (
                <div key={index} className="flex flex-col space-y-3">
                  <label
                    htmlFor={`attribute-${index}`}
                    className="text-primary text-base font-medium font-inter"
                  >
                    Attribute
                  </label>
                  <input
                    type="text"
                    id={`attribute-${index}`}
                    value={variation.attribute}
                    placeholder="Variaiton Type e.g. color,form factor"
                    onChange={(e) =>
                      handleVariationChange(index, "attribute", e.target.value)
                    }
                    className="w-full outline-none border border-borderColor p-3 rounded-lg"
                    required
                  />

                  <label
                    htmlFor={`value-${index}`}
                    className="text-primary text-base font-medium font-inter"
                  >
                    Value
                  </label>
                  <input
                    type="text"
                    id={`value-${index}`}
                    value={variation.value}
                    placeholder="Variaiton Value e.g. 8gb,sm,red"
                    onChange={(e) =>
                      handleVariationChange(index, "value", e.target.value)
                    }
                    className="w-full outline-none border border-borderColor p-3 rounded-lg"
                    required
                  />

                  <button
                    type="button"
                    onClick={() => handleRemoveVariation(index)}
                    className="bg-secondary px-3 py-2 text-white rounded-lg hover:transition-all hover:duration-300 hover:ease-linear hover:bg-primary"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
            <div className="flex flex-col space-y-3">
              <button
                type="button"
                onClick={handleAddVariation}
                className="bg-secondary px-3 py-2 text-white rounded-lg hover:transition-all hover:duration-300 hover:ease-linear hover:bg-primary"
              >
                Add Variation
              </button>

              <button
                type="submit"
                disabled={isLoading}
                className="bg-green-600 px-3 py-2 text-white rounded-lg hover:transition-all hover:duration-300 hover:ease-linear hover:bg-primary"
              >
                {isLoading ? "Creating..." : "Create Variations"}
              </button>
            </div>

            {isSuccess && <p>Product variation created successfully!</p>}
            {isError && (
              <p>Error: {error?.data?.message || "Something went wrong"}</p>
            )}
          </div>
        </form>
      </section>
      <section className="bg-white mt-5 p-4 rounded-lg">
        <h2 className="text-heading font-bold font-inter text-xl pb-3">
          All Product Variations
        </h2>
        <ul className="w-full flex flex-col gap-y-4">
          {!variationLoading &&
            variationData?.data?.map((item, index) => (
              <div
                key={index}
                className="w-full flex items-center justify-between text-center gap-x-2"
              >
                <li className="w-[15%] flex-1 text-base text-primary font-normal font-inter">
                  {index + 1}
                </li>
                {item?.variations?.map((variation) => (
                  <div
                    key={variation._id}
                    className="flex items-center justify-between gap-x-5"
                  >
                    <li className="flex-1 text-base text-primary font-normal font-inter capitalize">
                      {variation.attribute}
                    </li>
                    <li className="flex-1 text-base text-primary font-normal font-inter capitalize">
                      {variation.value}
                    </li>
                  </div>
                ))}
                <button className="flex-1 py-2 px-4 bg-orange-400 text-white rounded hover:bg-orange-600">
                  Update
                </button>
                <button
                  className="flex-1 py-2 px-4 bg-red-400 text-white rounded hover:bg-red-600"
                  onClick={() => handleDeleteCategory(category._id)}
                >
                  Delete
                </button>
              </div>
            ))}
        </ul>
      </section>
    </main>
  );
};

export default Variation;
