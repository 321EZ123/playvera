"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Search } from "lucide-react";
import Link from "next/link";

export function DmcaPage() {
  return (
    <div className="min-h-screen bg-[#2C1A0E] text-amber-100">
      <header className="flex items-center justify-between p-4 bg-[#1E120A]">
        <Link href="/" className="text-2xl font-bold">
          <span className="text-green-300">PLAY</span>
          <span className="text-amber-100">VE</span>
          <span className="text-amber-100">RA</span>
          <span className="text-green-300">.CO</span>
        </Link>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Input
              className="pl-8 pr-4 py-2 bg-[#3A2314] rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
              placeholder="Search games"
              type="search"
            />
            <Search
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-amber-400"
              size={20}
            />
          </div>
          <Button
            size="icon"
            variant="ghost"
            className="text-amber-100 hover:text-green-300"
          >
            <span className="sr-only">Settings</span>
          </Button>
        </div>
      </header>
      <main className="container mx-auto p-4 space-y-8 max-w-3xl">
        <h2 className="text-3xl font-semibold text-center mb-8">DMCA Policy</h2>
        <section className="space-y-4">
          <h3 className="text-xl font-semibold text-green-300">
            Copyright Infringement Notice
          </h3>
          <p>
            If you believe that content available on or through our site,
            PLAYVERA.CO, infringes one or more of your copyrights, please send a
            written notification (&apos;Takedown Notice&apos;) to our designated
            Copyright Agent containing the information described below.
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>
              Identification of the copyrighted work claimed to have been
              infringed.
            </li>
            <li>
              Identification of the material that is claimed to be infringing or
              to be the subject of infringing activity.
            </li>
            <li>
              Information reasonably sufficient to permit us to contact you,
              such as an address, telephone number, and email address.
            </li>
            <li>
              A statement that you have a good faith belief that use of the
              material in the manner complained of is not authorized by the
              copyright owner, its agent, or the law.
            </li>
            <li>
              A statement that the information in the notification is accurate,
              and under penalty of perjury, that you are authorized to act on
              behalf of the owner of an exclusive right that is allegedly
              infringed.
            </li>
            <li>
              A physical or electronic signature of a person authorized to act
              on behalf of the owner of an exclusive right that is allegedly
              infringed.
            </li>
          </ul>
        </section>
        <section className="space-y-4">
          <h3 className="text-xl font-semibold text-green-300">
            Submit a Takedown Notice
          </h3>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Your Name
              </label>
              <Input
                id="name"
                className="bg-[#3A2314] text-amber-100 border-green-300 focus:ring-green-300"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Your Email
              </label>
              <Input
                id="email"
                type="email"
                className="bg-[#3A2314] text-amber-100 border-green-300 focus:ring-green-300"
                required
              />
            </div>
            <div>
              <label
                htmlFor="content"
                className="block text-sm font-medium mb-1"
              >
                Copyrighted Content
              </label>
              <Input
                id="content"
                className="bg-[#3A2314] text-amber-100 border-green-300 focus:ring-green-300"
                required
              />
            </div>
            <div>
              <label
                htmlFor="infringing"
                className="block text-sm font-medium mb-1"
              >
                Infringing Material (URL)
              </label>
              <Input
                id="infringing"
                className="bg-[#3A2314] text-amber-100 border-green-300 focus:ring-green-300"
                required
              />
            </div>
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium mb-1"
              >
                Description of Infringement
              </label>
              <Textarea
                id="description"
                className="bg-[#3A2314] text-amber-100 border-green-300 focus:ring-green-300"
                rows={4}
                required
              />
            </div>
            <div>
              <label className="flex items-center space-x-2">
                <Input
                  type="checkbox"
                  className="bg-[#3A2314] text-green-300 border-green-300 focus:ring-green-300"
                  required
                />
                <span className="text-sm">
                  I affirm that the information provided is accurate and that I
                  am authorized to act on behalf of the copyright owner.
                </span>
              </label>
            </div>
            <a href="mailto:dmca@playvera.co">
              <Button
                type="submit"
                className="w-full bg-green-500 text-[#2C1A0E] hover:bg-green-400"
              >
                Submit DMCA Takedown Notice
              </Button>
            </a>
          </form>
        </section>
        <section className="space-y-4">
          <h3 className="text-xl font-semibold text-green-300">
            Contact Our Copyright Agent
          </h3>
          <p>
            DMCA Takedown Notices should be directed to our copyright agent at:
          </p>
          <address className="not-italic">
            VERA Copyright Agent
            <br />
            Email: copyright@playvera.co
            <br />
          </address>
        </section>
      </main>
      <footer className="bg-[#1E120A] text-amber-100 py-8">
        <div className="container mx-auto px-4">
          <nav className="flex flex-wrap justify-center gap-6 mb-4">
            <Link
              href="https://discord.gg/nova-949081080571494450"
              className="hover:text-green-300 transition-colors"
            >
              Discord
            </Link>
            <Link
              href="/about"
              className="hover:text-green-300 transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="hover:text-green-300 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/tos"
              className="hover:text-green-300 transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/privacy"
              className="hover:text-green-300 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/dmca"
              className="hover:text-green-300 transition-colors"
            >
              DMCA
            </Link>
          </nav>
          <p className="text-center text-sm text-amber-200">
            © {new Date().getFullYear()} PLAYVERA. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
