export default function Banner() {
  return (
    <div className="w-full h-[370px] max-md:h-auto mt-[9px] bg-primary max-md:bg-white px-[10px] flex">
      <div className="flex-1 h-[380px] max-md:h-[250px] bg-[#f9f9f9] rounded-[10px] flex flex-col justify-center p-[8%] bg-[url(./groupbg-content.png)] bg-no-repeat bg-cover">
        <h1 className="text-[25px]/8  text-[#121212] gilroy-bold mb-2">
          Team
        </h1>
        <h1 className="text-[55px] max-md:text-[40px] leading-[63.86px] text-[#121212] gilroy-bold">
          Meet Our Team
        </h1>
      </div>
    </div>
  );
}
