import Banner from "./banner";
import {
  robotic,
  product_1,
  product_2,
  product_3,
  lines,
  left_lines,
} from "src/common/Images";

export default function Home() {
  return (
    <>
      <Banner />
      <div className="relative max-sm:mt-[-200px]">
        <img src={lines} className="h-3/4 absolute right-0" />
        <img src={left_lines} className="h-1/2 absolute bottom-0 left-0 z-0" />
        <div className="container max-w-[1315px] mx-auto pb-32 px-[15px] relative">
          <div className="flex flex-row mt-[150px] max-sm:flex-col-reverse max-sm:mt-[270px] gap-x-8">
            <div className="xl:pr-10 my-auto text-center max-sm:mt-10">
              <img
                src={robotic}
                className="object-contain w-full mx-auto max-md:w-[80%]"
              />
            </div>
            <div className="my-auto">
              <div>
                <h1 className="text-[42px] leading-[43.26px] text-[#121212] gilroy-bold">
                Who We Serve?
                </h1>
                <p className="text-[#3A3A3A] mt-4 font-normal text-base leading-[25.89px] tracking-[-0.025em]">
                  Our platform is tailored to experts, enthusiasts, and students
                  in AI and neuroscience, as well as patients diagnosed with
                  neurological disorders seeking professional consultation. We
                  aim to bridge the gap between researchers, practitioners, and
                  patients, ultimately leading to better healthcare outcomes and
                  advancements in technology.
                </p>
              </div>
            </div>
          </div>
          {/* <div className="mt-[150px]">
            <h1 className="mb-[34px] text-[42px] text-center leading-[43.26px] text-[#121212] gilroy-bold">
              Information
            </h1>
            <div className="flex flex-row gap-[20px] justify-center max-md:flex-col max-md:items-center">
              <div>
                <div className="relative max-w-[350px] max-md:max-w-full max-md:w-[80vw]">
                  <div className="rounded-t-[11px] h-[70px] bg-primary w-[calc(100%-70px)]">
                    <span className="absolute h-[70px] w-[70px] top-0 right-0 bg-primary rounded-[11px] rounded-bl-none"></span>
                    <span className="bg-white absolute h-[72px] w-[72px] -top-px -right-[2px] rounded-[11px]"></span>
                  </div>
                  <div className="w-full px-10 py-10 rounded-[11px] rounded-tl-none bg-primary">
                    <h3 className="text-[52px] leading-[52px] text-[#fff] gilroy-bold">
                      500+
                    </h3>
                    <p className="text-[#FFFFFF] mt- text-2xl font-bold">
                      Members
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="relative max-w-[350px] max-md:max-w-full max-md:w-[80vw]">
                  <div className="rounded-t-[11px] h-[70px] bg-primary ml-auto w-[calc(100%-70px)]">
                    <span className="absolute h-[70px] w-[70px] top-0 left-0 bg-primary rounded-[11px] rounded-br-none"></span>
                    <span className="bg-white absolute h-[72px] w-[72px] -top-px -left-[2px] rounded-[11px]"></span>
                  </div>
                  <div className="w-full px-10 py-10 rounded-[11px] rounded-tr-none bg-primary">
                    <h3 className="text-[52px] leading-[52px] text-[#fff] gilroy-bold">
                      2000 M
                    </h3>
                    <p className="text-[#FFFFFF] mt- text-2xl font-bold">
                      Resigtration
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="relative max-w-[350px] max-md:max-w-full max-md:w-[80vw]">
                  <div className="rounded-t-[11px] h-[70px] bg-primary w-[calc(100%-70px)]">
                    <span className="absolute h-[70px] w-[70px] top-0 right-0 bg-primary rounded-[11px] rounded-bl-none"></span>
                    <span className="bg-white absolute h-[72px] w-[72px] -top-px -right-[2px] rounded-[11px]"></span>
                  </div>
                  <div className="w-full px-10 py-10 rounded-[11px] rounded-tl-none bg-primary">
                    <h3 className="text-[52px] leading-[52px] text-[#fff] gilroy-bold">
                      345k
                    </h3>
                    <p className="text-[#FFFFFF] mt- text-2xl font-bold">
                      Reviews
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          <div className="mt-[125px]">
            <h1 className="mb-[28px] text-[42px] text-center leading-[43.26px] text-[#121212] gilroy-bold">
              Our Products
            </h1>
            <div className="flex flex-row justify-center items-center gap-[30px] max-md:flex-col">
              <div className="flex justify-center">
                <img
                  src={product_1}
                  className="max-h-[1300px] object-cover w-full h-full max-md:w-[90%]"
                />
              </div>
              <div className="flex justify-center">
                <img
                  src={product_2}
                  className="max-h-[1300px] object-cover w-full h-full max-md:w-[90%]"
                />
              </div>
              <div className="flex justify-center">
                <img
                  src={product_3}
                  className="max-h-[1300px] object-cover w-full h-full max-md:w-[90%]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
