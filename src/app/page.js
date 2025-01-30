"use client";

import Footer from "@/components/organisms/Footer";
import Navbar from "@/components/organisms/Navbar";
import { useInformation } from "@/store/useInformation";

import Image from "next/image";
import Link from "next/link";
import { formatNumber, useCart } from "ecommerce-mxtech";
import { FaChevronRight, FaStar } from "react-icons/fa";

export default function Home() {
  const { dataSite } = useInformation();

  const { handleAddOrRemoveProduct, validateProductInCart } = useCart();

  console.log(dataSite);
  return (
    <main>
      <Navbar />

      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 container mx-auto px-4 my-20">
        <div className="flex flex-col">
          <div className="bg-gray-100 rounded-3xl p-8 mb-8">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 tracking-tight">
              Elevate Your Skills with Our Expert-Led Courses
            </h1>
            <p className="text-gray-600 text-xl mb-8 max-w-3xl">
              {dataSite.description}
            </p>

            <Link href="/#courses">
              <button className="bg-white text-black px-8 py-3 rounded-full text-lg transition-colors border border-gray-200">
                Shop Now
              </button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-100 rounded-3xl p-8">
              <h2 className="text-2xl font-bold mb-4">
                COMPREHENSIVE LEARNING
              </h2>
              <p className="text-gray-600">
                Gain in-depth knowledge from industry experts in Web Design,
                Graphic Design, Google AdWords, and more.
              </p>
            </div>

            <div className="bg-gray-100 rounded-3xl p-8">
              <h2 className="text-2xl font-bold mb-4">FLEXIBLE SCHEDULES</h2>
              <p className="text-gray-600">
                Learn at your own pace with our flexible course schedules
                designed to fit your lifestyle.
              </p>
            </div>
          </div>
        </div>

        {dataSite?.image_hero && (
          <div className="w-full h-full relative">
            <Image
              src={dataSite.image_hero}
              alt={dataSite.name}
              width={500}
              height={500}
              className="absolute w-full h-full object-cover rounded-lg"
            />
          </div>
        )}
      </section>

      {/* Services */}
      {dataSite?.services?.length > 0 && (
        <div
          className="my-10 bg-cover bg-center"
          id="our-services"
          style={{
            backgroundImage: `url(${dataSite.image_hero2})`,
          }}
        >
          <div className="w-full h-full bg-black bg-opacity-60 text-white py-36">
            <section className="container mx-auto px-4">
              <h2 className="text-lg font-semibold text-gray-300 mb-2">
                Best services
              </h2>
              <h1 className="text-3xl font-bold mb-4">
                GET AND ENJOY EVERYTHING WE HAVE FOR YOU
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
                {dataSite?.services?.map((service, i) => {
                  return (
                    <div
                      className="bg-white text-black rounded-xl border border-neutral-200 p-6"
                      key={i}
                    >
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2 mb-3">
                          <FaChevronRight />

                          <h2 className="text-xl font-bold uppercase">
                            {service.title}
                          </h2>
                        </div>

                        <p className="text-gray-800 text-justify">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
        </div>
      )}

      {/* Products */}
      <section className="container mx-auto px-4 my-20" id="courses">
        <h2 className="text-lg font-semibold text-gray-500 mb-2">
          Courses for you
        </h2>
        <h1 className="text-3xl font-bold mb-4">LEARN WITH PROFESSIONALS</h1>
        <p className="text-gray-600 mb-8">
          Our courses are designed to help you stand out in today&apos;s
          competitive market
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {dataSite?.products?.map?.((course, index) => {
            const existProduct = validateProductInCart(course.id);

            return (
              <div
                key={index}
                className="bg-white rounded-md border border-neutral-200 overflow-hidden flex flex-col"
              >
                <Image
                  src={course.image}
                  alt={course.name}
                  className="w-full h-72 object-cover object-center"
                  width={500}
                  height={500}
                />
                <div className="p-4 flex flex-col justify-between flex-1">
                  <div className="flex flex-col gap-4 mb-4">
                    <h3 className="text-xl font-bold">{course.name}</h3>

                    <p className="text-xl font-medium">
                      {formatNumber(course?.price)} MXN
                    </p>

                    <p className="text-gray-800 text-sm">
                      {course.description}
                    </p>
                  </div>

                  <div className="flex-1 flex flex-col justify-end ">
                    <div className="flex flex-wrap gap-2 mb-5">
                      {course.content
                        .split(",")
                        .slice(0, 5)
                        .map((badge, index) => (
                          <div
                            className="bg-primary text-white px-2 py-1"
                            key={index}
                          >
                            <span className="line-clamp-1 text-[10px]">
                              {badge.trim()}
                            </span>
                          </div>
                        ))}
                    </div>
                    <button
                      className="w-full px-4 py-2 transition-colors border border-black"
                      onClick={() => handleAddOrRemoveProduct(course.id)}
                      style={{
                        backgroundColor: !existProduct ? "black" : "white",
                        color: !existProduct ? "white" : "black",
                      }}
                    >
                      {!existProduct ? "Buy" : "Remove"} course
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* References */}
      <div className="bg-black py-24 my-10 text-white" id="references">
        <div className="container mx-auto px-4 my-20">
          <h2 className="text-lg font-semibold text-gray-500 mb-2">
            Our References
          </h2>
          <h1 className="text-3xl font-bold mb-4">
            Our costumers always recommend us
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
            {dataSite.references.map((customer, index) => (
              <div
                key={index}
                className="bg-white text-black shadow-md p-6 flex flex-col justify-between"
              >
                <div className="flex flex-col">
                  <div className="flex justify-between w-full items-center gap-5 mb-3">
                    <h3 className="text-xl font-semibold mb-2">
                      {customer.name}
                    </h3>
                  </div>

                  <p className="text-gray-600">{customer.description}</p>
                </div>

                <div className="flex items-center justify-end mt-5">
                  <div className="bg-primary text-white ml-2 px-2 py-1 flex items-center gap-4 text-xl">
                    <FaStar className="text-yellow-500" /> <span>4.5</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* More information */}
      {dataSite?.info?.length > 0 && (
        <div className="container mx-auto px-4 my-20">
          <h2 className="text-lg font-semibold text-gray-500 mb-2">More</h2>

          <h1 className="text-3xl font-bold mb-4">
            Know more information about us
          </h1>

          <section
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10"
            id="more"
          >
            {dataSite?.info?.map((info, i) => {
              return (
                <div
                  className="bg-white rounded-xl border border-neutral-200 p-6"
                  key={i}
                >
                  <div className="flex flex-col items-center">
                    <div className="text-4xl mb-4">✦</div>{" "}
                    <h2 className="text-xl font-bold mb-2 uppercase">
                      {info.title}
                    </h2>
                    <p className="text-gray-600 text-sm text-justify">
                      {info.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </section>
        </div>
      )}

      <Footer />
    </main>
  );
}
