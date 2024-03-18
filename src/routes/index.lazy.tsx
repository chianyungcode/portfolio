import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <section className="mt-48 w-full max-w-[1216px] mx-auto space-y-8">
      <h1 className="text-3xl ml-16 font-semibold ">About me</h1>
      <div className="grid grid-cols-8 ">
        <div className="flex justify-center col-span-2">
          <img
            src="https://avatars.githubusercontent.com/u/17928779?v=4"
            alt="Chian Yung"
            className="rounded-full  w-48 h-48 grayscale"
          />
        </div>
        <div className="col-span-4 space-y-2">
          <h3 className="font-semibold text-xl">A few words to myself</h3>
          <p className="text-lg font-normal text-gray-400">
            I am a software engineer who loves to build things. I am passionate
            about web technologies and I am always looking for new challenges. I
            am a big fan of open source and I love to contribute to the
            community. I am also a big fan of the JAMstack and I love to build
            things with it.
          </p>
          <p className="text-lg text-gray-400 font-normal">
            I am a software engineer who loves to build things. I am passionate
            about web technologies and I am always looking for new challenges. I
            am a big fan of open source and I love to contribute to the
            community. I am also a big fan of the JAMstack and I love to build
            things with it.
          </p>
        </div>
      </div>
    </section>
  );
}
