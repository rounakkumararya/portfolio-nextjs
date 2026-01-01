import React from "react";
import {
    Navbar,
    Collapse,
    Typography,
    Button,
    IconButton,
    List,
    ListItem,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Card,
} from "@material-tailwind/react";
import {
    ChevronDownIcon,
    Bars3Icon,
    XMarkIcon,
} from "@heroicons/react/24/outline";



import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { PiHandWavingFill } from "react-icons/pi";
import { HiDocumentArrowDown } from "react-icons/hi2";
import Image from "next/image";
import Link from "next/link";
import { GiAstronautHelmet } from "react-icons/gi";
import { GiPush } from "react-icons/gi";
// import { link } from "fs";


const projectMenuItems = [
    {
        title: "Astra Rocketry Challenge",
        description: "Trajectory analysis & hardware engineering for D-class motor vehicles.",
        link: "#", // Add link if available
        image: "/image/rocket.jpg"
    },
    {
        title: "Solar System Simulation",
        description: "N-body problem simulation using Velocity Verlet algorithm in Python.",
        link: "https://github.com/rounakkumararya/solar-system-sim",
        image: "/image/n-body.png"
    },
    {
        title: "DOAS Data Pipeline",
        description: "Python/SciPy pipeline for quantifying stratospheric NO2 concentrations.",
        link: "#",
        image: "/image/physics-lab.png"
    },
    {
        title: "Spotify Clone",
        description: "Music streaming platform with chat feature and admin panel.",
        link: "https://github.com/rounakkumararya/spotify-clone",
        image: "/image/Spotify.png"
    },
    {
        title: "Lrn",
        description: "Learning Management System with admin panel.",
        link: "https://github.com/rounakkumararya/mern_lms",
        image: "/image/BlogHive.png"
    },
    {
        title: "BlogHive",
        description: "Blogging Platform with admin panel.",
        link: "https://github.com/rounakkumararya/blog-website",
        image: "/image/Lrn.png"
    },
    {
        title: "Estate",
        description: "Real estate platform with admin panel.",
        link: "https://github.com/rounakkumararya/video_app_backend",
        image: "/image/Spotify.png"
    },
    {
        title: "Youtube backend",
        description: "Video streaming app backend.",
        link: "https://github.com/rounakkumararya/video_app_backend",
        image: "/image/BlogHive.png"
    },
    {
        title: "Little Lemon",
        description: "Capstone Project for Meta Frontend Specialization.",
        link: "https://github.com/rounakkumararya/little-lemon-capstone",
        image: "/image/Spotify.png"
    },
    {
        title: "Todo App",
        description: "Simple todo app with admin panel.",
        link: "https://github.com/rounakkumararya/todo_app",
        image: "/image/BlogHive.png"
    },

];

function ProjectMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const renderItems = projectMenuItems.map(
        ({ title, description, image, link }, key) => (
            <Link href={link} key={key} target="_blank">
                <MenuItem className="flex  items-center gap-1 rounded-lg" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    {/* <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
                        {" "}
                        {React.createElement(icon, {
                            strokeWidth: 2,
                            className: "h-6 text-gray-900 w-6",
                        })}
                            .
                    </div> */}
                    <div className="">
                        <Image width={100} height={100} alt={title} src={image}></Image>
                    </div>
                    <div >
                        <Typography
                            variant="h6"
                            color="blue-gray"
                            className="flex items-center text-sm font-bold" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                        >
                            {title}
                        </Typography>
                        <Typography
                            variant="paragraph"
                            className="text-xs !font-medium text-blue-gray-500" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                        >
                            {description}
                        </Typography>
                    </div>
                </MenuItem>
            </Link>
        ),
    );

    return (
        <React.Fragment>
            <Menu
                open={isMenuOpen}
                handler={setIsMenuOpen}
                offset={{ mainAxis: 20 }}
                placement="bottom"
                allowHover={true}
            >
                <MenuHandler>
                    <Typography as="a" href="/#projects" variant="small" className="font-medium" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        <ListItem
                            className="group flex items-center gap-2 py-2    pr-4 font-medium text-gray-900"
                            selected={isMenuOpen || isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen((cur) => !cur)} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                        >
                            <GiPush className="group-hover:animate-pulse" />
                            My Projects
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`hidden h-3 w-3   transition-transform lg:block ${isMenuOpen ? "rotate-180" : ""
                                    }`}
                            />
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`block h-3 w-3 transition-transform lg:hidden ${isMobileMenuOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </ListItem>
                    </Typography>
                </MenuHandler>
                <MenuList className="hidden max-w-screen-xl rounded-xl lg:block" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
                        {renderItems}
                    </ul>
                </MenuList>
            </Menu>
            <div className="block lg:hidden">
                <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
            </div>
        </React.Fragment>
    );
}

function NavList() {
    return (
        <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <AboutMenu />
            <ProjectMenu />
            <Typography
                as="a"
                href="/#contact"
                variant="small"
                color="blue-gray"
                className="font-medium" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}            >
                <ListItem className=" group flex items-center gap-2 py-2 pr-4" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    <PiHandWavingFill className="group-hover:animate-wiggle    " />
                    Contact Me
                </ListItem>
            </Typography>
        </List>
    );
}


function AboutMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const renderItems =
        <React.Fragment>
            <div >
                <Typography variant="h6" color="blue-gray" className="mb-1" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    Rounak kumar arya
                </Typography>
                <Typography variant="small" color="gray" className="font-normal" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    A physics enthusiast and lifelong learner, driven by curiosity about the fundamental laws of nature. Currently a Master’s student in Physics at the University of Bremen, with a strong interest in theoretical foundations, computational modeling, and experimental techniques to understand complex physical systems.
                </Typography>

            </div>
            <div className="m-2 flex gap-2  ">
                <Typography as="a" href="https://www.linkedin.com/in/rounak-kumar-arya/" target="_blank" color="blue-gray" className="hover:text-blue-600 flex items-center gap-2   mb-1" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    <FaLinkedin />
                </Typography>
            </div>
        </React.Fragment>
        ;

    return (
        <React.Fragment>
            <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
                <MenuHandler>
                    <Typography as="a" href="/#about" variant="small" className="font-normal" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        <MenuItem className="group hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                            <GiAstronautHelmet className="group-hover:text-red-600 group-hover:animate-bounce" />{" "}
                            About Me{" "}
                            <ChevronDownIcon
                                strokeWidth={2}
                                className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </MenuItem>
                    </Typography>
                </MenuHandler>
                <MenuList className="hidden w-[36rem] cursor-text grid-cols-7 gap-3 overflow-visible lg:grid" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    <Card

                        shadow={false}

                        className="col-span-3  grid h-full w-full place-items-center rounded-md" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                    >
                        <Image
                            width={200}
                            height={200}

                            alt="team work"
                            src="/image/about-hover1.jpg"
                            className="h-full w-full object-cover grayscale transition hover:grayscale-0"
                        />

                    </Card>
                    <div className="col-span-4 flex w-fit flex-col gap-1">
                        {renderItems}
                    </div>
                </MenuList>
            </Menu>
            <MenuItem className="group flex items-center gap-2 font-medium text-blue-gray-900 lg:hidden" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <GiAstronautHelmet className="group-hover:text-red-600 group-hover:animate-bounce" />{" "}
                About Me{" "}
            </MenuItem>
            <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
                {renderItems}
            </ul>
        </React.Fragment>
    );
}

export function NavbarWithMegaMenu() {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    return (
        <Navbar fullWidth shadow={false} className="backdrop-blur-md border-0 sticky top-0 z-50 " placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <div className="text-black container mx-auto flex items-center justify-between" >
                <Link href="/"><Image
                    width={120}
                    height={120}
                    alt="team work"
                    src="/logos/logo1.svg"
                    className=""
                    quality={1}
                /></Link>
                <div className="hidden lg:block">


                    <NavList />

                </div>
                <div className="hidden gap-2 lg:flex">
                    <Link href="https://github.com/rounakkumararya/" target="_blank">

                        <Button className="flex align-middle gap-1 items-center text-center" variant="text" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}><FaGithub size={18} />Github</Button>
                    </Link>
                    <Link href="../Rounak-Kumar-Arya_.pdf" target="_blank">
                        <Button className="flex align-middle gap-1 items-center text-center" color="gray" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}><HiDocumentArrowDown size={18} /> Resume</Button>
                    </Link>
                </div>
                <IconButton
                    variant="text"
                    color="blue-gray"
                    className="lg:hidden"
                    onClick={() => setOpenNav(!openNav)} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                >
                    {openNav ? (
                        <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                    ) : (
                        <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                    )}
                </IconButton>
            </div >
            <Collapse open={openNav}>
                <NavList />
                <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
                    <Link href="https://github.com/rounakkumararya/" target="_blank">
                        <Button className="flex align-middle gap-1 items-center text-center" variant="text" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}><FaGithub size={16} />Github</Button>
                    </Link>
                    <Link href="" target="_blank">
                        <Button className="flex align-middle gap-1 items-center text-center" color="gray" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}><HiDocumentArrowDown size={16} /> Resume</Button>
                    </Link>
                </div>
            </Collapse>
        </Navbar >
    );
}