"use client";

import { Typography } from "@material-tailwind/react";
import {

    PuzzlePieceIcon,
    CursorArrowRaysIcon,
    PencilIcon,
    RocketLaunchIcon
} from "@heroicons/react/24/solid";
import { ResumeItem } from "@/components";

const RESUME_ITEMS = [
    {
        icon: RocketLaunchIcon,
        children: "Master of Science in Physics",
    },
    {
        icon: PuzzlePieceIcon,
        children: "Bachelor of Science in Physics",
    },
    {
        icon: CursorArrowRaysIcon,
        children: "Full-Stack Web Development",
    },
    {
        icon: PencilIcon,
        children: "UI/UX Design Certification",
    }

];

export function Resume() {
    return (
        <section className="px-8 py-24" id="about">
            <div className="container mx-auto mb-20 text-center">
                <Typography color="blue-gray" className="mb-2 font-bold uppercase" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    about me
                </Typography>
                <Typography variant="h1" color="blue-gray" className="mb-4" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    Who am I
                </Typography>

            </div>
            <div className="container mx-auto grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2">
                <div className="col-span-1">
                    <Typography variant="h2" color="blue-gray" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        My Resume
                    </Typography>
                    <Typography className="mb-4 mt-3 w-9/12 font-normal !text-gray-500" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        A highly motivated and analytical physics student with a strong foundation in classical and quantum mechanics, statistical physics, and computational methods. Currently pursuing a Master’s degree in Physics at the University of Bremen, with a focus on computational physics and nanostructures. Experienced in scientific programming, numerical simulations, and data analysis, including spectroscopy-based research and physics-driven modeling projects. Passionate about solving complex physical problems, developing reproducible computational workflows, and continuously expanding expertise through research, experimentation, and interdisciplinary learning.
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
