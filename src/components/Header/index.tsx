import { Disclosure, Transition } from "@headlessui/react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import LinkTo from "../LinkTo";
import BrandLogo from "components/BrandLogo";
import { brain } from "src/common/Images";

export default function Header() {
  return (
    <Disclosure
      as="nav"
      className="bg-primary pt-[20px] max-md:pt-0 max-md:bg-white"
    >
      {({ open }) => (
        <>
          <div>
            <div
              className={`relative flex h-[65px] items-center max-md:justify-between`}
            >
              <NavLink to="/">
              <img
                src={brain}
                className="hidden max-md:block h-[40px] w-[45px] ml-4"
              />
              </NavLink>

              <div className="max-md:hidden w-[60%] bg-primary h-[82px] rounded-br-[10px]">
                <LinkTo
                  text=""
                  to="/"
                  className=""
                  prefix={
                    <BrandLogo className="block h-[70px] object-contain ml-[8%]" />
                  }
                />
              </div>
              <div className="max-md:hidden w-[35%] bg-[#f9f9f9] h-[82px] rounded-t-[10px] flex flex-row item-center justify-center gap-4">
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#F51010" : "#3A3A3A",
                  })}
                  to="/"
                  className="p-[10px] block items-center leading-[60px] text-[18px] font-normal hover:!text-primary"
                >
                  Home
                </NavLink>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#F51010" : "#3A3A3A",
                  })}
                  to="/team"
                  className="p-[10px] block leading-[60px] text-[18px] font-normal hover:!text-primary"
                >
                  Team
                </NavLink>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#F51010" : "#3A3A3A",
                  })}
                  to="/faqs"
                  className="uppercase p-[10px] block  leading-[60px] text-[18px] font-normal hover:!text-primary"
                >
                  FAQ
                </NavLink>
              </div>
              <div className="max-md:hidden w-[5%] bg-primary h-[82px] rounded-bl-[10px]"></div>
              <Disclosure.Button className="hidden max-md:inline-flex hover:text-white  items-center justify-center p-2 text-gray-400 rounded-md mr-3">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <FiX className="block h-8 w-8 text-[#3A3A3A]" />
                ) : (
                  <FiMenu className="block h-8 w-8 text-[#3A3A3A]" />
                )}
              </Disclosure.Button>
            </div>
          </div>
          {/* mobile navigation menu  */}
          <Transition
            enter="transition-all ease-in-out duration-300"
            enterFrom="h-[0px]"
            enterTo="h-[190px]"
            leave="transition-all ease-in-out duration-300"
            leaveFrom="h-[190px]"
            leaveTo="h-[0px]"
          >
            <Disclosure.Panel className="px-2 pt-2 pb-3 space-y-1 md:hidden overflow-hidden transition-all ease-in-out duration-300">
              {({close}) => (
                <>
                  <NavLink
                    style={({ isActive }) => ({
                      color: isActive ? "red" : "#3A3A3A",
                    })}
                    to="/"
                    className="p-[10px] block  leading-[31px] text-[18px] font-normal"
                    onClick={()=>{close()}}
                  >
                    Home
                  </NavLink>
                  <NavLink
                    style={({ isActive }) => ({
                      color: isActive ? "red" : "#3A3A3A",
                    })}
                    to="/team"
                    className="p-[10px] block  leading-[31px] text-[18px] font-normal"
                    onClick={()=>{close()}}
                  >
                    Team
                  </NavLink>
                  <NavLink
                    style={({ isActive }) => ({
                      color: isActive ? "red" : "#3A3A3A",
                    })}
                    to="/faqs"
                    className="uppercase p-[10px] block  leading-[31px] text-[18px] font-normal"
                    onClick={()=>{close()}}
                  >
                    FAQ
                  </NavLink>
                </>
              )}
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}

//  <div className="md:hidden absolute inset-y-0 right-0 flex items-center">
// {/* Mobile menu button*/}

// </div>
// <div className="flex items-center justify-start flex-1 ml-auto">
// <div className="flex items-center flex-shrink-0">
//   <LinkTo
//     text=""
//     to="/"
//     className=""
//     prefix={
//       <BrandLogo className="block h-[82px] object-contain" />
//     }
//   />
// </div>
// <div className="md:block hidden h-full ml-auto">
//   <div className="flex gap-x-[34px] items-center">
//     <NavLink
//       style={({ isActive }) => ({
//         color: isActive ? "#F51010" : "#3A3A3A",
//       })}
//       to="/"
//       className="p-[10px] block  leading-[31px] text-[18px] font-normal hover:!text-primary">
//       Home
//     </NavLink>
//     <NavLink
//       style={({ isActive }) => ({
//         color: isActive ? "#F51010" : "#3A3A3A",
//       })}
//       to="/team"
//       className="p-[10px] block  leading-[31px] text-[18px] font-normal hover:!text-primary">
//       Team
//     </NavLink>
//     <NavLink
//       style={({ isActive }) => ({
//         color: isActive ? "#F51010" : "#3A3A3A",
//       })}
//       to="/faqs"
//       className="uppercase p-[10px] block  leading-[31px] text-[18px] font-normal hover:!text-primary">
//       FAQ
//     </NavLink>
//     {/* <LinkTo
//       to="/"
//       text="Login"
//       className="text-white hover:text-white hover:bg-primary hover:opacity-70 text-[18px] h-[70px] w-[175px] leading-[31.5px] bg-primary font-normal justify-center flex items-center border-[1px] border-white rounded-full"
//     /> */}
//   </div>
// </div>
// </div>
