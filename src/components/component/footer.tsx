import Link from "next/link";
import { Button } from "../ui/button";

export function Footer() {
  return (
    <div>

      <footer className="dark:bg-gray-900 dark:text-gray-400 py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-medium dark:text-gray-300 mb-4">
                LinkHub
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    className="hover:text-gray-100 transition-colors duration-300"
                    href="#"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-gray-100 transition-colors duration-300"
                    href="#"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-gray-100 transition-colors duration-300"
                    href="#"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-gray-100 transition-colors duration-300"
                    href="#"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium dark:text-gray-300 mb-4">
                Resources
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    className="hover:text-gray-100 transition-colors duration-300"
                    href="#"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-gray-100 transition-colors duration-300"
                    href="#"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-gray-100 transition-colors duration-300"
                    href="#"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-gray-100 transition-colors duration-300"
                    href="#"
                  >
                    Community
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium dark:text-gray-300 mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    className="hover:text-gray-100 transition-colors duration-300"
                    href="#"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-gray-100 transition-colors duration-300"
                    href="#"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-gray-100 transition-colors duration-300"
                    href="#"
                  >
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-gray-100 transition-colors duration-300"
                    href="#"
                  >
                    Disclaimer
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium dark:text-gray-300 mb-4">
                Contact
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    className="hover:text-gray-100 transition-colors duration-300"
                    href="#"
                  >
                    Email
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-gray-100 transition-colors duration-300"
                    href="#"
                  >
                    Phone
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-gray-100 transition-colors duration-300"
                    href="#"
                  >
                    Address
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-gray-100 transition-colors duration-300"
                    href="#"
                  >
                    Social Media
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              © 2024 LinkHub. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
