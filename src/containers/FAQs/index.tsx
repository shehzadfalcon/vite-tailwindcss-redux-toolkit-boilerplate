import { FiPlus, FiMinus } from "react-icons/fi";
import Banner from "./banner";
import { Disclosure, Transition } from "@headlessui/react";
import { lines } from "src/common/Images";

const faqs = [
  {
    question: "What is SynapMe?",
    answer:
      "SynapMe is a social media platform designed to connect individuals passionate about artificial intelligence (AI) and neuroscience. Our platform fosters collaboration, knowledge-sharing, and innovation within these rapidly evolving fields.",
  },
  {
    question: "Who can join SynapMe?",
    answer:
      "SynapMe is open to experts, enthusiasts, and students in AI and neuroscience, as well as patients diagnosed with neurological disorders seeking professional consultation. Our platform is designed to facilitate connections between researchers, practitioners, and patients.",
  },
  {
    question: "Is SynapMe free to use?",
    answer:
      "Yes, SynapMe offers free basic access to our platform. However, we also provide premium subscription plans with additional features and benefits for users seeking an enhanced experience.",
  },
  {
    question: "How do I create an account on SynapMe?",
    answer: `To create an account, simply visit our website, click on the "Sign Up" button, and follow the prompts to complete the registration process. Once your account is verified, you can start connecting with other users and exploring the platform.`,
  },
  {
    question: "How can I connect with other users on SynapMe?",
    answer:
      "After creating your account, you can search for users with similar interests, follow their profiles, and engage in conversations through our messaging system. Additionally, you can join relevant groups, participate in forums, and attend virtual events to expand your network.",
  },
  {
    question: "Can I share my research findings and resources on SynapMe?",
    answer:
      "Yes, SynapMe encourages users to share their research findings, articles, and other resources with the community. You can post links, upload documents, or create original content to contribute to the collective knowledge base of our platform.",
  },
  {
    question: "What is the online mentorship program?",
    answer:
      "Our online mentorship program connects professionals in AI and neuroscience with students and enthusiasts eager to learn from industry experts. Mentors and mentees can engage in one-on-one or group sessions, fostering personal growth and skill development.",
  },
  {
    question: "How can I upgrade my account to a premium subscription?",
    answer: `To upgrade your account, log in to your SynapMe account, navigate to the "Subscription" section, and choose the plan that best suits your needs. Follow the prompts to complete the payment process, and your account will be upgraded immediately.`,
  },
  {
    question: "What if I have more questions or need assistance with SynapMe?",
    answer:
      "If you have any questions or require assistance, please feel free to contact our support team at huntfounder@synapme.io . Our dedicated team is always ready to help you with any inquiries or concerns you may have.",
  },
];
export default function FAQs() {
  return (
    <>
      <Banner />
      <div className="relative max-sm:mt-[-100px]">
        <img src={lines} className="h-3/4 absolute right-0" />
        <div className="max-w-[1007px] mx-auto px-[15px] pb-32">
          <div className="mt-[150px] w-full border">
            <div className="rounded-2xl w-full p-2 mx-auto space-y-5 bg-white">
              {faqs.map((i, idx) => (
                <Disclosure key={idx}>
                  {({ open }) => (
                    <div
                      className={`transition-all ease-in-out duration-300 ${
                        !open ? "h-[74px]" : "h-auto"
                      }`}
                    >
                      <Disclosure.Button
                        className={`${
                          open
                            ? "bg-primary text-white rounded-br-none"
                            : "bg-[#EAEAEA] text-black "
                        } hover:bg-primary flex rounded-md items-center justify-between w-full text-[20px]/5 max-md:text-[18px] max-xs:text-[16px] font-bold text-left hover:text-white`}
                      >
                        <div
                          className={`${
                            open ? "rounded-bl-none" : ""
                          } flex items-center justify-center h-[74px] bg-black min-w-[50px] rounded-l-md`}
                        >
                          {open ? (
                            <FiPlus className="w-5 h-5 text-white" />
                          ) : (
                            <FiMinus className="w-5 h-5 text-white" />
                          )}
                        </div>
                        <span className="grow px-4">{i.question}</span>
                      </Disclosure.Button>
                      {/* <Transition
                      leave="transition-all ease-in-out duration-300"
                      > */}
                      <Disclosure.Panel className="bg-primary rounded-b-md py-5 pt-4 pl-20 pr-4">
                        <p className="text-base/6 font-normal text-white">
                         {i.answer}
                        </p>
                      </Disclosure.Panel>
                      {/* </Transition> */}
                    </div>
                  )}
                </Disclosure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
