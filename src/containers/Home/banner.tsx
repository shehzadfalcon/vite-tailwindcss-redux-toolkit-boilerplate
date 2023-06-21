import { brain } from "src/common/Images";
import Buttonlink from "src/components/ButtonLink";

export default function Banner() {
  return (
    <div className="w-full h-[400px] mt-[9px] bg-primary max-sm:h-auto max-md:bg-white px-[10px] flex">
      <div className="flex-1 h-[410px] bg-[#f9f9f9] rounded-[10px] px-3 flex flex-row items-center justify-around max-sm:flex-col max-sm:h-auto max-sm:pt-2 gap-8 bg-[url(./groupbg-content.png)] bg-no-repeat bg-cover">
        <div className="pt-10 my-auto">
          <div className="max-w-[392px]  max-sm:max-w-full">
            <h1 className="text-[65px] leading-[74.16px] text-[#121212] gilroy-bold max-xs:text-[30px] max-md:text-[45px]">
              Welcome to synapme
            </h1>
            <p className="text-[#3A3A3A] mt-4 font-normal text-base leading-[25.89px] tracking-[-0.025em] text-justify">
              Mission- to develop a platform that democratizes the ethics of
              artificial intelligence and neurotechnology by providing a
              comfortable and user-friendly space{" "}
            </p>
            {/* <Buttonlink
                  onClick={() => alert(true)}
                  text="Login"
                  className="text-white mt-8 hover:text-white hover:bg-primary hover:opacity-70 text-[18px] h-[70px] w-[175px] leading-[31.5px] bg-primary font-normal justify-center flex items-center border-[1px] border-white rounded-full"
                /> */}
          </div>
        </div>
        <div className="my-auto text-center">
          <img
            src={brain}
            className="object-contain pt-10 lg:w-[350px] lg:h-[350px] h-[300px] w-[300px] mx-auto max-md:mb-[70px]"
          />
        </div>
      </div>
    </div>
  );
}
