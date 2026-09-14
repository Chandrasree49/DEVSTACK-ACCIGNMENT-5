import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import technologies from "../data/technologies.json";

const Technologies = () => {
  const [stack, setStack] = useState([]);

  // Add technology to stack
  const addToStack = (technologies) => {
    const alreadyAdded = stack.some(
      (item) => item.id === technologies.id
    );

    // Duplicate warning
    if (alreadyAdded) {
      toast.warning(
        `${technologies.name} is already in your stack!`
      );
      return;
    }

    // Add technology
    setStack((prevStack) => [
      ...prevStack,
      technologies,
    ]);

    // Success notification
    toast.success(
      `${technologies.name} added to your stack!`
    );
  };

  // Remove one technology
  const removeFromStack = (id) => {
    const technology = stack.find(
      (item) => item.id === id
    );

    setStack((prevStack) =>
      prevStack.filter((item) => item.id !== id)
    );

    if (technology) {
      toast.info(
        `${technology.name} removed from your stack.`
      );
    }
  };

  const removeAll = () => {
    if (stack.length === 0) {
      return;
    }

    setStack([]);

    toast.info("All technologies removed.");
  };

  return (
    <>
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">

        
          <div className="mb-10">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Technologies
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500">
              Explore technologies and build your ideal
              development stack.
            </p>
          </div>

         
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_300px]">

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">

              {technologies.map((technology) => {
                const isAdded = stack.some(
                  (item) => item.id === technology.id
                );

                return (
                  <div
                    key={technology.id}
                    className="flex flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
                  >

                 
                    <div className="flex items-start justify-between">

                     
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-50">
                        <img
                          src={technology.icon}
                          alt={technology.name}
                          className="h-8 w-8 object-contain"
                        />
                      </div>

                     
                      <span className="rounded-full bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-600">
                        {technology.badge}
                      </span>

                    </div>

                  
                    <h3 className="mt-5 text-lg font-semibold text-gray-900">
                      {technology.name}
                    </h3>

                    {/* Description */}
                    <p className="mt-2 min-h-[72px] text-sm leading-6 text-gray-500">
                      {technology.description}
                    </p>

                    {/* Category */}
                    <div className="mt-3">
                      <span className="inline-flex rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600">
                        {technology.category}
                      </span>
                    </div>

                  
                    <div className="mt-5 flex items-center justify-between">

                      {/* Difficulty */}
                      <span className="text-xs text-gray-500">
                        {technology.difficulty}
                      </span>

                      {/* Rating */}
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-400">
                          ★
                        </span>

                        <span className="text-sm font-semibold text-gray-700">
                          {technology.rating}
                        </span>
                      </div>

                    </div>

                    {/* Add To Stack Button */}
                    <button
                      type="button"
                      onClick={() => addToStack(technology)}
                      disabled={isAdded}
                      className={`mt-5 w-full rounded-lg px-4 py-2.5 text-sm font-semibold transition ${
                        isAdded
                          ? "cursor-not-allowed bg-gray-100 text-gray-400"
                          : "bg-gray-900 text-white hover:bg-purple-600"
                      }`}
                    >
                      {isAdded
                        ? "✓ Added to Stack"
                        : "Add to Stack"}
                    </button>

                  </div>
                );
              })}

            </div>

      
            <aside className="h-fit rounded-xl border border-gray-200 bg-white p-5 shadow-sm">

       
              <div className="flex items-start justify-between gap-4">

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Your Stack
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    {stack.length}{" "}
                    {stack.length === 1
                      ? "Technology"
                      : "Technologies"}{" "}
                    Selected
                  </p>
                </div>

             
                {stack.length > 0 && (
                  <button
                    type="button"
                    onClick={removeAll}
                    className="shrink-0 text-xs font-semibold text-red-500 transition hover:text-red-700"
                  >
                    Remove All
                  </button>
                )}

              </div>

          
              {stack.length === 0 && (
                <div className="mt-8 rounded-lg border border-dashed border-gray-200 p-6 text-center">

            

                  <p className="mt-3 text-sm font-medium text-gray-600">
                    Your stack is empty
                  </p>

                 

                </div>
              )}

              {stack.length > 0 && (
                <div className="mt-6 flex flex-col gap-3">

                  {stack.map((technology) => (
                    <div
                      key={technology.id}
                      className="flex items-center gap-3 rounded-lg border border-gray-100 bg-gray-50 p-3"
                    >

                     
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-white">
                        <img
                          src={technology.icon}
                          alt={technology.name}
                          className="h-6 w-6 object-contain"
                        />
                      </div>

                      <div className="min-w-0 flex-1">

                        <p className="truncate text-sm font-semibold text-gray-800">
                          {technology.name}
                        </p>

                        <p className="text-xs text-gray-400">
                          {technology.category}
                        </p>

                      </div>

                     
                      <button
                        type="button"
                        onClick={() =>
                          removeFromStack(technology.id)
                        }
                        aria-label={`Remove ${technology.name}`}
                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-gray-400 transition hover:bg-red-50 hover:text-red-500"
                      >
                        ✕
                      </button>

                    </div>
                  ))}

                </div>
              )}

            </aside>

          </div>

        </div>
      </section>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />
    </>
  );
};

export default Technologies;