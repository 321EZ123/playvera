"use client";

import { Github, Twitter, Twitch, Search, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

export function AboutMeComponent() {
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
            <Settings className="h-6 w-6" />
            <span className="sr-only">Settings</span>
          </Button>
        </div>
      </header>
      <main className="p-4 max-w-4xl mx-auto">
        <section className="mb-8">
          <div className="flex items-center space-x-4">
            <img
              src="./img/minecraft.svg"
              alt="Profile Picture"
              className="w-24 h-24 rounded-full border-2 border-green-300"
            />
            <div>
              <h2 className="text-2xl font-bold">Alex</h2>
              <p className="text-green-300">
                Founder & Lead Developer of PlayVera
              </p>
            </div>
          </div>
        </section>
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">About Me</h3>
          <p className="mb-4">
            Hey there! I&apos;m Alex, a passionate game developer and the
            creator of VERA. I&apos;ve been in love with video games since I was
            a kid, and now I&apos;m living my dream of making games accessible
            to everyone through our web platform.
          </p>
          <p className="mb-4">
            When I&apos;m not coding or playing games, you can find me exploring
            new game design concepts, participating in game jams, or mentoring
            aspiring developers in our community forums.
          </p>
          <p>
            I made this site, PlayVera to share my love of games. PlayVera is an
            innovative site dedicated to providing unfettered game access
          </p>
        </section>
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">My Favorite Games</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>The Legend of Zelda: Breath of the Wild</li>
            <li>Minecraft</li>
            <li>Stardew Valley</li>
            <li>Portal 2</li>
            <li>Hollow Knight</li>
          </ul>
        </section>
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Connect with Me</h3>
          <div className="flex space-x-4">
            <Button
              size="icon"
              variant="outline"
              className="text-amber-100 hover:text-green-300 hover:border-green-300"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
            <Button
              size="icon"
              variant="outline"
              className="text-amber-100 hover:text-green-300 hover:border-green-300"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Button>
            <Button
              size="icon"
              variant="outline"
              className="text-amber-100 hover:text-green-300 hover:border-green-300"
            >
              <Twitch className="h-5 w-5" />
              <span className="sr-only">Twitch</span>
            </Button>
          </div>
        </section>
        <section>
          <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2">
                Name
              </label>
              <Input
                id="name"
                className="bg-[#3A2314] text-amber-100 border-amber-400 focus:border-green-300"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">
                Email
              </label>
              <Input
                id="email"
                type="email"
                className="bg-[#3A2314] text-amber-100 border-amber-400 focus:border-green-300"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2">
                Message
              </label>
              <Textarea
                id="message"
                className="bg-[#3A2314] text-amber-100 border-amber-400 focus:border-green-300"
                rows={4}
              />
            </div>
            <Button className="bg-green-500 text-[#2C1A0E] hover:bg-green-400">
              Send Message
            </Button>
          </form>
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
