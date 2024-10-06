"use client";

import { Mail, Phone, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

export function ContactComponent() {
  return (
    <div className="min-h-screen bg-[#2C1A0E] text-amber-100 flex flex-col">
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
      <main className="flex-grow p-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-green-300">
            Contact Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <section>
                <h3 className="text-xl font-semibold mb-2">Get in Touch</h3>
                <p>
                  We&apos;d love to hear from you. Please fill out the form
                  below or use our contact information.
                </p>
              </section>
              <section>
                <h3 className="text-xl font-semibold mb-2">
                  Contact Information
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Mail className="h-5 w-5 mr-2 text-green-300" />
                    <span>support@playvera.co</span>
                  </li>
                  <li className="flex items-center">
                    <Phone className="h-5 w-5 mr-2 text-green-300" />
                    <span>+1 (555) 123-4567</span>
                  </li>
                </ul>
              </section>
            </div>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1">
                  Name
                </label>
                <Input
                  id="name"
                  className="bg-[#1E120A] border-amber-100/20 text-amber-100"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  className="bg-[#1E120A] border-amber-100/20 text-amber-100"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block mb-1">
                  Subject
                </label>
                <Input
                  id="subject"
                  className="bg-[#1E120A] border-amber-100/20 text-amber-100"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  rows={4}
                  className="bg-[#1E120A] border-amber-100/20 text-amber-100"
                />
              </div>
              <Button className="w-full bg-green-300 text-[#2C1A0E] hover:bg-green-400">
                Send Message
              </Button>
            </form>
          </div>
        </div>
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
