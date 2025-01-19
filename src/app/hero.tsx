"use client";

// import { LampContainer } from "@/components/ui/lamp";
// import { WavyBackground } from "@/components/ui/wavy-background";
// import Image from "next/image";
import { Typography } from "@material-tailwind/react";


function Hero() {

  return (
    <header className="bg-white " >


      <div className="container mx-auto flex flex-col lg:flex-row h-full my-20 min-h-[60vh] w-fit items-center ">


        <Typography
          variant="h1"
          color="blue-gray"
          className="mb-4 lg:text-9xl text-center  lg:text-end  text-5xl " placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}        >
          Hi, I&apos;m Rounak <br /> Kumar Arya!
        </Typography>


        <div className="flex text-center lg:text-start  w-fit">
          <Typography
            variant="lead"
            className="mb-4 inline-flex !text-gray-500 lg:ml-10 lg:mr-48" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}          >
            A passionate web developer based in India. Here,
            you&apos;ll get a glimpse of my journey in the world of web
            development, where creativity meets functionality.
          </Typography>
          {/* <div className="">
            <Typography
              variant="small"
              className="mb-2 text-gray-900 font-medium"
            >
              Your email
            </Typography>
            <div className="mb-2 flex flex-col gap-4 align-center justify-around md:flex-row"> */}

          {/* <Input color="gray" label="Enter your email" size="md" />
              <Button color="gray" className="w-full px-4 md:w-[12rem]">
                require offer
              </Button> */}

          {/* </div>
            <Typography variant="small" className="font-normal !text-gray-500">
              Read my{" "}
              <a href="#" className="font-medium underline transition-colors">
                Terms and Conditions
              </a>
            </Typography> */}

          {/* </div> */}
        </div>


        {/* <Image
          width={1024}
          height={1024}
          alt="team work"
          src="/image/image-7.svg"
          className="h-[36rem] w-full rounded-xl object-cover"
        /> */}

      </div>


    </header >
  );
}

export default Hero;
