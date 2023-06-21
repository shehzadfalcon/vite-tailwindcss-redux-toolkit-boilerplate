export default function Banner() {
  return (
    // <div className="bg-primary px-4 pb-0">
    //   <div className="bg-banner object-cover w-full bg-no-repeat bg-cover -mt-[96px]">
    //     <div className="container max-w-[1315px] mx-auto px-[15px]">
    //       <div className="lg:h-[calc(100vh-30vh)] grid grid-cols-1">
    //         <div className="lg:pb-20 mt-auto">
    //           <h1 className="text-[30px]/8  text-[#121212] gilroy-bold mb-2">
    //             FAQ
    //           </h1>
    //           <h1 className="text-[62px] leading-[63.86px] text-[#121212] gilroy-bold">
    //             Frequently Asked Question
    //           </h1>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="w-full h-[330px] max-md:h-auto mt-[9px] bg-primary max-md:bg-white px-[10px] flex">
      <div className="flex-1 h-[340px] max-md:h-[250px] bg-[#f9f9f9] rounded-[10px] flex flex-col justify-center p-[8%] bg-[url(./groupbg-content.png)] bg-no-repeat bg-cover">
        <h1 className="text-[25px]/8  text-[#121212] gilroy-bold mb-2">
          FAQ
        </h1>
        <h1 className="text-[55px] max-md:text-[40px] leading-[63.86px] text-[#121212] gilroy-bold">
          Frequently Asked Question
        </h1>
      </div>
    </div>
  );
}
