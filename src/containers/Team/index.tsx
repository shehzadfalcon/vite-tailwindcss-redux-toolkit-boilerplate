import Banner from "./banner";
import {
  left_lines,
} from "src/common/Images";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";

const team = [
  {name:'Hunter Hudsen',
   imageSrc:'/hunter-hudsen.png',
   role:'CEO/Founder',
   linkedIn:'https://www.linkedin.com/in/hunter-hudson-19094326a/'
},
  {name:'Ben Mai',
   imageSrc:'/ben-mai.png',
   role:'Lead Engineer',
   linkedIn:'https://www.linkedin.com/in/benjamin-mai/'
},
  {name:'Osama Asohail',
   imageSrc:'/osama-asohail.jpg',
   role:'Product Designer',

},
  {name:'Muhammad Umair',
   imageSrc:'/umair.jpg',
   role:'Fullstack Developer',
   linkedIn:'https://www.linkedin.com/in/muhammad-umair-943828241/'
},
  {name:'Benjamin Barrera',
   imageSrc:'/benjamin-barrera.png',
   role:'Fullstack Developer',
   linkedIn:'https://www.linkedin.com/in/joseph-benjamin-barrera-034a6024b'
},

  {name:'Edward Zhao',
   imageSrc:'/edward-zhao.jpg',
   role:'Markerter',
   linkedIn:'https://www.linkedin.com/in/edward-zhao-909107236'
}
,
  {name:'David Cardwell',
   imageSrc:'/david-cardwell.png',
   role:'Markerter',
   linkedIn:'https://www.linkedin.com/in/david-w-w-cardwell-078187270/'
}
,
  {name:'Mohamed Hassan',
   imageSrc:'/mohamed-hassan.jpg',
   role:'Markerter',
   linkedIn:'https://www.linkedin.com/in/mohamed-hassan-997bba200'
}
,
  {name:'Zahid Hossain',
   imageSrc:'/zahid-hossain.png',
   role:'Markerter',
   linkedIn:'https://www.linkedin.com/in/mdzahidhossain/'
},
  {name:'Berlin Sophy',
   imageSrc:'/berlin-sophy.png',
   role:'Markerter',
   linkedIn:'https://www.linkedin.com/in/berlin-sophy-39345b266/'
}
];
export default function Team() {
  return (
    <>
      <Banner />
      <div className="relative max-sm:mt-[-100px]">
        <img src={left_lines} className="h-1/2 absolute bottom-0 left-0 z-0" />
        <div className="container max-w-[1315px] pb-32 mx-auto px-[15px]">
          <div className="mt-[150px]">
            <div className="flex flex-wrap box-border justify-center">
              {team.map((i, idx) => (
                <div className={`lg:basis-1/3 md:basis-1/2 basis-full p-5 ${idx === 0 ? 'lg:basis-full':''}`} key={idx}>
                  <Link to={i.linkedIn} target="_blank" className={`group relative flex flex-col items-center justify-center`}>
                    <div className="rounded-t-[11px] px-5 py-2 h-[70px] group-hover:bg-primary border border-b-0 border-black group-hover:border-primary w-[300px] max-xs:w-[230px] max-xs:ml-[70px] ml-[80px]">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xl/6 max-xs:text-base group-hover:text-white font-bold text-black whitespace-nowrap">
                            {i.name}
                          </p>
                          <p className="text-[#3A3A3A] group-hover:text-white text-base/5 max-xs:text-sm mt-px">
                            {i.role}
                          </p>
                        </div>
                        <FaLinkedin className="group-hover:text-white text-xl text-black" />
                      </div>
                      <span className="absolute h-[70px] w-[70px] top-0 left-0 bg-white rounded-[11px] rounded-br-none"></span>
                      <span className="bg-white absolute h-[72px] w-[72px] -top-[2px] -left-[2px] rounded-[11px]"></span>
                    </div>
                    <div className="flex w-full px-5 py-5 max-h-[310px] max-w-[380px] max-xs:max-w-[300px] max-xs:max-h-[250px] rounded-[11px] rounded-tr-none group-hover:bg-primary border border-black group-hover:border-primary">
                      <img className="rounded-[11px] object-cover object-top" src={i.imageSrc} />
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-[150px]">
            {/* <div className="grid grid-cols-5 gap-[30px]">
              <div className="my-auto">
                <img
                  src={partner_2}
                  className="object-contain w-full max-w-[200px]"
                />
              </div>
              <div className="my-auto">
                <img
                  src={partner_1}
                  className="object-contain w-full max-w-[142px]"
                />
              </div>
              <div className="my-auto">
                <img
                  src={partner_3}
                  className="object-contain w-full max-w-[62px]"
                />
              </div>
              <div className="my-auto">
                <img
                  src={partner_4}
                  className="object-contain w-full max-w-[117px]"
                />
              </div>
              <div className="my-auto">
                <img
                  src={partner_5}
                  className="object-contain w-full max-w-[140px]"
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>{" "}
    </>
  );
}
