"use client";

import { Typography, Button } from "@material-tailwind/react";
import {

    PuzzlePieceIcon,
    CursorArrowRaysIcon,
    ArrowRightIcon,
    PencilIcon,
    RocketLaunchIcon
} from "@heroicons/react/24/solid";
import { ResumeItem } from "@/components";

const RESUME_ITEMS = [
    {
        icon: RocketLaunchIcon,
        children: "Bachelor of Science in Physics",
    },
    {
        icon: PuzzlePieceIcon,
        children: "Certified Web Developer ",
    },
    {
        icon: CursorArrowRaysIcon,
        children: "Frontend Framework Proficiency Certification",
    },
    {
        icon: PencilIcon,
        children: "UI/UX Design Certification",
    },
    {
        icon: PencilIcon,
        children: "Full-stack MERN certification",
    }
];

export function Resume() {
    return (
        <section className="px-8 py-24">
            <div className="container mx-auto mb-20 text-center">
                <Typography color="blue-gray" className="mb-2 font-bold uppercase">
                    about me
                </Typography>
                <Typography variant="h1" color="blue-gray" className="mb-4">
                    Who am I
                </Typography>

            </div>
            <div className="container mx-auto grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2">
                <div className="col-span-1">
                    <Typography variant="h2" color="blue-gray">
                        My Resume
                    </Typography>
                    <Typography className="mb-4 mt-3 w-9/12 font-normal !text-gray-500">
                        Highly skilled and creative Web Developer with
                        experience in crafting visually stunning and functionally robust
                        websites and web applications.I&apos;m a passionate MERN stack developer specializing in building dynamic, responsive web applications. Experienced with MongoDB, Express.js, React, and Node.js, I focus on delivering clean, scalable code and seamless user experiences. I thrive on solving complex problems and continuously learning new technologies to stay ahead.
                    </Typography>

                </div>
                <div className="col-span-1 grid gap-y-6 lg:ml-auto pr-0 lg:pr-12 xl:pr-32">
                    {RESUME_ITEMS.map((props, idx) => (
                        <ResumeItem key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Resume;
