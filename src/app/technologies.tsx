"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";

const CLIENTS = [
    "html",
    "css",
    "javascript",
    "java",
    "react",
    "tailwind",
    "nextjs",
    "firebase",
    "node",
    "postgres",
    "python",
    "redux",
    "postman",
    "figma",
    "adobexd",
    "ps",
    "express",
    "mongo",
    "bootstrap",
    "git",
    "jquery",
];


const Technologies = () => {
    return (
        <section className="py-8 px-8 lg:py-20">
            <div className="container mx-auto grid items-center place-items-center">
                <div className="text-center">
                    <Typography variant="h6" className="mb-4 uppercase !text-gray-500">
                        POPULAR TECHNOLOGIES
                    </Typography>
                    <Typography variant="h2" color="blue-gray" className="mb-4">
                        Proficient in latest development<br /> technologies
                    </Typography>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
                    {CLIENTS.map((logo, key) => (
                        <Image
                            key={key}
                            alt={logo}
                            width={480}
                            height={480}
                            src={`/logos/${logo}.png`}
                            className="w-10 hover:scale-110 transition ease-in-out  opacity-75"
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Technologies