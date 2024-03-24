import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { Button } from "./ui/button";

const FooterCTA = () => {
  return (
    <footer className="max-w-[1440px] mx-auto px-[112px] pt-[96px] pb-12 space-y-12 mt-12 relative">
      <div className="w-full absolute bottom-0 left-0 h-full overflow-hidden flex justify-center">
        <div className=" h-[914px] w-[914px] bg-lime-200 top-[400px] rounded-full relative blur-[12rem]" />
      </div>
      {/* <div className="rounded-[3.75rem] border-2 border-gray-200 flex items-start bg-gradient-to-tl  from-[#fff] backdrop-blur-lg from-50% to-[#ffff] to-0% h-96"></div> */}
      <div className="rounded-[3.75rem] border-2 border-gray-200 flex items-start bg-transparent backdrop-blur-lg z-[10] bg-gradient-to-t from-white from-2% to-transparent p-[7rem] flex-col gap-y-12">
        <h1 className="font-semibold text-6xl max-w-4xl">
          Ready to grow your business through empathic visual style? Let's make
          it happen
        </h1>
        <button className="rounded-[2.25rem] py-3 px-6 bg-black text-white">
          Start a project
        </button>

        <Button variant="outline">BUt</Button>
        <hr className="border-gray-200 border-1 w-full" />
        <div className="flex w-full flex-row justify-between items-start">
          <div className="space-y-2">
            <p className="text-slate-400 font-medium block">Connect</p>
            <a
              href="mailto:chianyung5@gmail.com"
              className="text-gray-950 font-medium block"
            >
              chianyung5@gmail.com
            </a>
          </div>
          <div className="space-y-2">
            <div className="flex gap-x-4">
              <div className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center">
                <FaFacebook size={28} />
              </div>
              <div className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center">
                <BsGithub size={28} />
              </div>
              <div className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center">
                <BsTwitterX size={28} />
              </div>
              <div className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center">
                <BsLinkedin size={28} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterCTA;
