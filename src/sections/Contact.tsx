import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
  return (
    <div className="py-16 pt-12">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center relative overflow-hidden z-0">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>
          <h2 className="font-serif text-2xl">
            Let’s build something extraordinary together
          </h2>
          <p className="text-sm mt-2">
            Got a project in mind? Let’s connect and see how we can bring your
            vision to life and help you reach your goals.
          </p>
          <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 mt-8">
            <span className="font-semibold">Get In Touch</span>
            <ArrowUpRightIcon className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
