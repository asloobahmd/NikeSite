import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import FooterLinks from "../components/FooterLinks";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <section className="pt-16 pb-5 text-white bg-black ">
      <div className="container p-3 flex flex-col gap-y-10 items-center justify-center">
        {/* top section */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-x-5 gap-y-10 w-full">
          {/* left section */}
          <div className="w-full md:w-2/5">
            <img src={footerLogo} alt="" className="w-[150px]" />
            <p className="text-slate-gray font-montserrat mt-5 max-w-[350px]">
              Get shoes ready for the new term at your nearest Nike store. Find
              Your perfect Size In Store. Get Rewards
            </p>
            <div className="mt-5 flex gap-x-4">
              {socialMedia.map((item, i) => (
                <img
                  key={i}
                  src={item.src}
                  className="bg-white rounded-full h-10 w-10 p-2"
                />
              ))}
            </div>
          </div>

          {/* right section */}
          <div className="w-full md:w-3/5 grid grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-8 ">
            {footerLinks.map((item, i) => (
              <FooterLinks key={i} {...item} />
            ))}
          </div>
        </div>

        {/* copyright section */}
        <div className="mt-5 max-sm:text-sm text-slate-300 w-full flex justify-between items-center">
          <div className="flex gap-1 ">
            <img src={copyrightSign} />
            <p>Copyright. All rights reserved.</p>
          </div>
          <p className="font-montserrat cursor-pointer max-sm:text-sm ">
            Terms & Conditions
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
