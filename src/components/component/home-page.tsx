import Link from "next/link";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import Image from "next/image";
import heroImage from "../../../public/1.webp";

export function HomePage() {
  return (
    <div className="flex flex-col min-h-dvh">
      <section className="w-full pt-12 md:pt-24 lg:pt-20">
        <div className="container space-y-10 xl:space-y-10">
          <div className="grid gap-4 px-10 md:grid-cols-2 md:gap-16">
            <div>
              <h1 className="lg:tracking-normal mt-10  text-3xl font-extrabold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[5rem]">
                One Hub for All your Links
              </h1>
              <p className="mx-auto max-w-[700px] mt-10 text-gray-500 md:text-md dark:text-gray-400">
                Linkhub Your ultimate tool for managing online presence. Create
                a beautiful, customizable link hub to showcase your work, share
                links, and connect with your audience effortlessly.
              </p>
              <div className="space-x-7 mt-6">
                <Link href="auth/login">
                  <Button>Get Started</Button>
                </Link>
                <Link href="#">
                  <Button variant="secondary">Learn More</Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center ">
              <Image
                alt="image"
                className="mx-auto aspect-square  overflow-hidden rounded-xl object-contain"
                height="550"
                src={heroImage}
                width="550"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Pricing
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Choose the plan that fits your needs and budget.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Starter</CardTitle>
                <CardDescription>
                  Perfect for individuals and small businesses.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline justify-center space-x-2">
                  <span className="text-4xl font-bold">Free</span>
                  <span className="text-sm text-gray-500"></span>
                </div>
                <ul className="mt-8 space-y-3 text-sm text-gray-500 dark:text-gray-400">
                  <li className="flex items-center">
                    <CheckIcon className="mr-2 h-4 w-4 text-green-500" />1
                    Linked Hub
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                    Custom Domain
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                    Basic Analytics
                  </li>
                  <li className="flex items-center">
                    <XIcon className="mr-2 h-4 w-4 text-red-500" />
                    No Branded Themes
                  </li>
                  <li className="flex items-center">
                    <XIcon className="mr-2 h-4 w-4 text-red-500" />
                    Unlimited Integrations
                  </li>
                  <li className="flex items-center">
                  <XIcon className="mr-2 h-4 w-4 text-red-500" />
                    Dedicated Support
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Get Started</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Pro</CardTitle>
                <CardDescription>
                  Unlock more features for your growing business.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline justify-center space-x-2">
                  <span className="text-4xl font-bold">$19</span>
                  <span className="text-sm text-gray-500">/month</span>
                </div>
                <ul className="mt-8 space-y-3 text-sm text-gray-500 dark:text-gray-400">
                  <li className="flex items-center">
                    <CheckIcon className="mr-2 h-4 w-4 text-green-500" />3
                    Linked Hubs
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                    Custom Domain
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                    Advanced Analytics
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                    Branded Themes
                  </li>
                  <li className="flex items-center">
                    <XIcon className="mr-2 h-4 w-4 text-red-500" />
                    Unlimited Integrations
                  </li>
                  <li className="flex items-center">
                  <XIcon className="mr-2 h-4 w-4 text-red-500" />
                    Dedicated Support
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Get Started</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Enterprise</CardTitle>
                <CardDescription>
                  Tailored solutions for large businesses and teams.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline justify-center space-x-2">
                  <span className="text-4xl font-bold">$49</span>
                  <span className="text-sm text-gray-500">/month</span>
                </div>
                <ul className="mt-8 space-y-3 text-sm text-gray-500 dark:text-gray-400">
                  <li className="flex items-center">
                    <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                    Unlimited Linked Hubs
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                    Custom Domain
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                    Advanced Analytics
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                    Branded Themes
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                    Unlimited Integrations
                  </li>
                  <li className="flex items-center">
                    <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                    Dedicated Support
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Get Started</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Features
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Discover the powerful features that make LinkHub the ultimate
              solution for your online presence.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
                <LinkIcon className="h-8 w-8 text-gray-900 dark:text-gray-50" />
                <h3 className="text-lg font-semibold">Custom Links</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Create custom, branded links to showcase your work and connect
                  with your audience.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
                <PaletteIcon className="h-8 w-8 text-gray-900 dark:text-gray-50" />
                <h3 className="text-lg font-semibold">Customizable Themes</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Choose from a variety of professional, mobile-friendly themes
                  to match your brand.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
                <InfoIcon className="h-8 w-8 text-gray-900 dark:text-gray-50" />
                <h3 className="text-lg font-semibold">Advanced Analytics</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Get detailed insights into your audience and link performance
                  to optimize your online presence.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
                <ImportIcon className="h-8 w-8 text-gray-900 dark:text-gray-50" />
                <h3 className="text-lg font-semibold">Integrations</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Seamlessly connect LinkHub with your favorite tools and
                  platforms to streamline your workflow.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
                <SmartphoneIcon className="h-8 w-8 text-gray-900 dark:text-gray-50" />
                <h3 className="text-lg font-semibold">Mobile Optimization</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Ensure your link hub looks great and performs flawlessly on
                  any device.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
                <PowerIcon className="h-8 w-8 text-gray-900 dark:text-gray-50" />
                <h3 className="text-lg font-semibold">Dedicated Support</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Get personalized assistance from our knowledgeable support
                  team to help you succeed.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 dark:bg-gray-800 py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Get Started Now
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 mb-8">
              Join the thousands of users who trust LinkHub for their online
              presence.
            </p>
            <Link href="#">
              <Button>
                Get Started
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function ImportIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3v12" />
      <path d="m8 11 4 4 4-4" />
      <path d="M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4" />
    </svg>
  );
}

function InfoIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}

function LinkIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

function PaletteIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
      <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
      <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
      <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
    </svg>
  );
}

function PowerIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2v10" />
      <path d="M18.4 6.6a9 9 0 1 1-12.77.04" />
    </svg>
  );
}

function SmartphoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}


function ArrowRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
