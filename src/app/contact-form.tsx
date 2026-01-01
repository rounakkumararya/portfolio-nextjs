"use client";

import {
  Typography,
  Card,
  CardBody,
  Radio,
  Input,
  Textarea,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { CiLinkedin } from "react-icons/ci";
import { useState } from "react";


export function ContactForm() {
  const [status, setStatus] = useState("");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function handleSubmit(e: any) {
    e.preventDefault();

    setStatus("")
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "c47355b6-e2b0-4188-b1b6-d76f8921af8b",
        Firstname: e.target.firstname.value,
        Lastname: e.target.lastname.value,
        category: e.target.type.value,
        email: e.target.email.value,
        message: e.target.message.value,
      }),
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
      setStatus("true");

    }

  }

  return (
    <section className="px-8 py-16" id="contact">
      <hr className="mb-10" />
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h1" color="blue-gray" className="mb-4" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          Contact Me
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full lg:w-5/12 !text-gray-500" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}        >
          Ready to get started? Feel free to reach out through the contact form,
          and let&apos;s embark on a journey of innovation and success.
        </Typography>
      </div>
      <div>
        <Card shadow={true} className="container mx-auto border border-gray/50" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          <CardBody className="grid grid-cols-1 lg:grid-cols-7 md:gap-10" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <div className="w-full col-span-3 rounded-lg h-full py-8 p-5 md:p-16 bg-gray-900">
              <Typography variant="h4" color="white" className="mb-2" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                Contact Information
              </Typography>
              <Typography
                variant="lead"
                className="mx-auto mb-8 text-base !text-gray-500" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}              >
                Fill out the form, and I will get back to you within 24 hours.
              </Typography>
              <div className="flex gap-5">
                <PhoneIcon className="h-6 w-6 text-white" />
                <Typography variant="h6" color="white" className="mb-2" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                  +49 15510866433
                </Typography>
              </div>
              <div className="flex my-2 gap-5">
                <EnvelopeIcon className="h-6 w-6 text-white" />
                <Typography variant="h6" color="white" className="mb-2" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                  rounakkumar040@gmail.com
                </Typography>
              </div>
              <div className="flex mb-10 gap-5">
                <CiLinkedin className="h-6 w-6 text-white" />
                <Typography variant="h6" color="white" className="mb-2" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                  @rounakkumararya
                </Typography>
              </div>
              <div className="flex items-center gap-5">
                <IconButton variant="text" color="white" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                  <i className="fa-brands fa-facebook text-lg" />
                </IconButton>
                <IconButton variant="text" color="white" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                  <i className="fa-brands fa-instagram text-lg" />
                </IconButton>
                <IconButton variant="text" color="white" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                  <i className="fa-brands fa-github text-lg" />
                </IconButton>
              </div>
            </div>
            <div className="w-full mt-8 md:mt-0 md:px-10 col-span-4 h-full p-5">
              <form onSubmit={handleSubmit}>
                <div className=" mb-8 grid gap-4 lg:grid-cols-2">


                  <Input
                    color="gray"
                    size="lg"
                    variant="static"
                    label="First Name"
                    name="firstname"
                    placeholder="eg. Lucas"
                    required
                    containerProps={{
                      className: "!min-w-full mb-3 md:mb-0",
                    }} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined} />

                  <Input
                    color="gray"
                    size="lg"
                    variant="static"
                    label="Last Name"
                    name="lastname"
                    placeholder="eg. Jones"
                    containerProps={{
                      className: "!min-w-full",
                    }} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined} />
                </div>

                <Input
                  color="gray"
                  size="lg"
                  variant="static"
                  label="Email"
                  name="email"
                  required
                  placeholder="eg. lucas@mail.com"
                  containerProps={{
                    className: "!min-w-full mb-8",
                  }} crossOrigin={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />
                <Typography
                  variant="lead"
                  className="!text-blue-gray-500 text-sm mb-2" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                >
                  What are you interested on?
                </Typography>
                <div className="-ml-3 mb-14 "  >

                  <Radio
                    color="gray"
                    name="type"
                    label="Design"
                    defaultChecked
                    value={"design"} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined} />

                  <Radio color="gray" value={"development"} name="type" label="Development" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined} />

                  <Radio color="gray" name="type" value={"support"} label="Support" crossOrigin={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />

                  <Radio color="gray" name="type" value={"other"} label="Other" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined} />
                </div>

                <Textarea
                  color="gray"
                  size="lg"
                  variant="static"
                  label="Your Message"
                  name="message"
                  required

                  containerProps={{
                    className: "!min-w-full mb-8",
                  }} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />
                <div className="w-full flex justify-end">
                  <Button type="submit" className="w-full md:w-fit" color="gray" size="md" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    Send message
                  </Button>
                </div>
                <div hidden={!status} className="text-green-500">Message sent successfully</div>
              </form>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default ContactForm;
