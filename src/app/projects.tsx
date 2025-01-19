"use client";

// import { ProjectCard } from "@/components";
import { WobbleCard } from "@/components/ui/wobble-card";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";
// import Link from "next/link";

// const PROJECTS = [
//   {
//     img: "/image/blog-1.svg",
//     title: "Mobile App Development",
//     desc: "Mobile app designed to help users discover and explore local restaurants and cuisines.",
//   },
//   {
//     img: "/image/blog2.svg",
//     title: "Landing Page Development",
//     desc: "Promotional landing page for a  fitness website Summer Campaign. Form development included.",
//   },
//   {
//     img: "/image/blog3.svg",
//     title: "Mobile App Development",
//     desc: "Mobile app designed to help users discover and explore local restaurants and cuisines.",
//   },
//   {
//     img: "/image/blog4.svg",
//     title: "E-commerce development",
//     desc: "Ecommerce website offering  access to the latest and greatest gadgets and accessories.",
//   },
//   {
//     img: "/image/blog-1.svg",
//     title: "Mobile App Development",
//     desc: "Mobile app designed to help users discover and explore local restaurants and cuisines.",
//   },
//   {
//     img: "/image/blog2.svg",
//     title: "Landing Page Development",
//     desc: "Promotional landing page for a  fitness website Summer Campaign. Form development included.",
//   },
//   {
//     img: "/image/blog3.svg",
//     title: "Mobile App Development",
//     desc: "Mobile app designed to help users discover and explore local restaurants and cuisines.",
//   },
//   {
//     img: "/image/blog4.svg",
//     title: "E-commerce development",
//     desc: "Ecommerce website offering  access to the latest and greatest gadgets and accessories.",
//   },
// ];

export function Projects() {
  return (
    <section className="py-28 px-8" id="projects">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          My Projects
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}        >
          Whether you have a mobile app idea that needs to come to life or a
          website that requires a facelift, I&apos;m here to turn your digital
          dreams into reality.
        </Typography>
      </div>
      {/* <div className="container mx-auto grid grid-cols-1 gap-x-16 gap-y-20 md:grid-cols-2 xl:grid-cols-3">
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div> */}

      {/* animated card */}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-gray-200 min-h-[500px] lg:min-h-[300px]"
          className=""
        >
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-black">
              Spotify Clone
            </h2>
            <p className="mt-4 text-left  text-base/6 text-neutral-200">
              A clone of the popular music streaming platform called Spotify with chat feature and admin panel.
            </p>
          </div>
          <Image
            src="/linear.png"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-4 lg:-right-[10%]  -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 bg-gray-300  min-h-[300px]">
          <h2 className="max-w-80  text-left  text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-black">
            No shirt, no shoes, no weapons.
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            If someone yells “stop!”, goes limp, or taps out, the fight is over.
          </p>
        </WobbleCard>



        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-gray-200 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">

          <div className="max-w-sm">
            <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-black">
              Signup for blazing-fast cutting-edge state of the art Gippity AI
              wrapper today!
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
              With over 100,000 mothly active bot users, Gippity AI is the most
              popular AI platform for developers.
            </p>
          </div>
          <Image
            src="/linear.png"
            width={400}
            height={500}
            alt="linear demo image"
            className="absolute -right-10  -bottom-0 object-contain rounded-2xl"
          />


        </WobbleCard>

        <WobbleCard containerClassName="col-span-1 bg-gray-300  min-h-[300px]">
          <h2 className="max-w-80  text-left  text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-black">
            No shirt, no shoes, no weapons.
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            If someone yells “stop!”, goes limp, or taps out, the fight is over.
          </p>
        </WobbleCard>

        {/* <WobbleCard containerClassName="col-span-1 bg-gray-300  min-h-[300px]">
          <h2 className="max-w-80  text-left  text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-black">
            No shirt, no shoes, no weapons.
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            If someone yells “stop!”, goes limp, or taps out, the fight is over.
          </p>
        </WobbleCard> */}

        <WobbleCard containerClassName=" col-span-1   bg-gray-300  min-h-[300px]">
          <h2 className="max-w-80  text-left  text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-black">
            No shirt, no shoes, no weapons.
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            If someone yells “stop!”, goes limp, or taps out, the fight is over.
          </p>
        </WobbleCard>

        <WobbleCard containerClassName="col-span-1 bg-gray-300  min-h-[300px]">
          <h2 className="max-w-80  text-left  text-balance  text-3xl font-semibold tracking-[-0.015em] text-black">
            No shirt, no shoes, no weapons.
          </h2>
          <p className="mt-4 max-w-[26rem] text-left   text-base/6 text-neutral-200">
            If someone yells “stop!”, goes limp, or taps out, the fight is over.
          </p>
        </WobbleCard>
        <WobbleCard containerClassName=" group  col-span-1 lg:col-span-2 h-full bg-gray-200 min-h-[500px] lg:min-h-[300px]">
          <Image
            src="/linear.png"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-4 lg:-right-[10%] grayscale group-hover:grayscale-0  -bottom-10 object-contain rounded-2xl"
          />
          <div className="max-w-xs ">
            <h2 className="text-left text-balance text-2xl lg:text-3xl font-semibold tracking-[-0.015em] text-black">
              Gippity AI powers the entire universe
            </h2>
            <p className="mt-4 text-left  text-base/6 text-neutral-200">
              With over 100,000 mothly active bot users, Gippity AI is the most
              popular AI platform for developers.
            </p>
          </div>

        </WobbleCard>
      </div>
    </section>
  );
}

export default Projects;
