import { jobExperience } from "../data/dummydata";
import { cn } from "../lib/utils";

const Hero = () => {
  return (
    <section className="mt-48 w-full max-w-[1216px] mx-auto space-y-8">
      <h1 className="text-3xl ml-16 font-semibold">About me</h1>
      <div className="space-y-20">
        <div className="grid grid-cols-8 ">
          <div className="flex justify-center col-span-2">
            <img
              src="https://avatars.githubusercontent.com/u/17928779?v=4"
              alt="Chian Yung"
              className="rounded-full  w-48 h-48 grayscale"
            />
          </div>
          <div className="col-span-6 grid grid-cols-6 gap-x-8">
            <div className="col-span-4 space-y-2">
              <h3 className="font-semibold text-xl">A few words to myself</h3>
              <p className="text-lg font-normal text-gray-400">
                I am a software engineer who loves to build things. I am
                passionate about web technologies and I am always looking for
                new challenges. I am a big fan of open source and I love to
                contribute to the community. I am also a big fan of the JAMstack
                and I love to build things with it.
              </p>
              <p className="text-lg text-gray-400 font-normal">
                I am a software engineer who loves to build things. I am
                passionate about web technologies and I am always looking for
                new challenges. I am a big fan of open source and I love to
                contribute to the community. I am also a big fan of the JAMstack
                and I love to build things with it.
              </p>
            </div>
            <div className="col-span-1 space-y-2">
              <h1 className="font-semibold text-lg">Socials</h1>
              <div className="space-y-1 font-medium flex flex-col">
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                  Facebook
                </a>
                <a href="https://linked.in" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                  Facebook
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                  Facebook
                </a>
              </div>
            </div>
            <div className="col-span-1 space-y-2">
              <h1 className="font-semibold text-lg">Contact</h1>
              <div className="space-y-1 font-medium flex flex-col">
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                  Facebook
                </a>
                <a href="https://linked.in" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-8">
          <div className="col-span-2">
            <h2 className="font-semibold text-2xl ml-12">Experience</h2>
          </div>
          <div className="col-span-6">
            <div className="flex flex-col gap-y-8">
              <ul className="space-y-12">
                {jobExperience.map((job) => (
                  <div className="space-y-1" key={job.title}>
                    <h1 className="text-xl font-medium">
                      {job.title} ({job.company})
                    </h1>
                    <p className="font-normal text-base">
                      {job.startDate} -{" "}
                      <span
                        className={cn(
                          "font-normal",
                          job.endDate === "Present"
                            ? "text-green-600 font-medium"
                            : ""
                        )}
                      >
                        {job.endDate}
                      </span>
                    </p>
                    <p className="text-gray-400 font-normal">
                      {job.description}
                    </p>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
