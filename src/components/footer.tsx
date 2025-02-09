import { Typography } from "@material-tailwind/react";

// const LINKS = ["Home", "About Us", "Blog", "Service"];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-10 px-8 pt-20">
      <div className="container mx-auto">
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 border-t border-gray-200 py-6 ">
          <Typography className="text-center font-normal !text-gray-700" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            &copy; {CURRENT_YEAR} Made with{" "}
            <a href="https://nextjs.org/" target="_blank">
              NextJs
            </a>{" "}
            by{" "}

            Rounak kumar arya.
          </Typography>
          {/* <ul className="flex gap-8 items-center">
            {LINKS.map((link) => (
              <li key={link}>
                <Typography
                  as="a"
                  href="#"
                  variant="small"
                  className="font-normal text-gray-700 hover:text-gray-900 transition-colors" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                >
                  {link}
                </Typography>
              </li>
            ))}
            <Button color="gray" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>subscribe</Button>
          </ul> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
