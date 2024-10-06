"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function PrivacyPolicyComponent() {
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
      <main className="p-4 max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-green-300">
          Privacy Policy
        </h2>
        <div className="space-y-6">
          <section>
            <h3 className="text-xl font-semibold mb-2">
              1. Information We Collect
            </h3>
            <p>
              We collect information you provide directly to us when you create
              an account, such as your username and email address. We may also
              collect information about your gameplay, including scores and
              achievements.
            </p>
          </section>
          <section>
            <h3 className="text-xl font-semibold mb-2">
              2. How We Use Your Information
            </h3>
            <p>
              We use the information we collect to provide, maintain, and
              improve our services, to communicate with you, and to personalize
              your gaming experience.
            </p>
          </section>
          <section>
            <h3 className="text-xl font-semibold mb-2">
              3. Sharing of Information
            </h3>
            <p>
              We do not sell your personal information. We may share your
              information with third-party service providers who help us operate
              our platform or conduct our business.
            </p>
          </section>
          <section>
            <h3 className="text-xl font-semibold mb-2">4. Data Security</h3>
            <p>
              We implement appropriate technical and organizational measures to
              protect the security of your personal information.
            </p>
          </section>
          <section>
            <h3 className="text-xl font-semibold mb-2">5. Your Rights</h3>
            <p>
              You have the right to access, correct, or delete your personal
              information. You can manage your account settings or contact us
              for assistance.
            </p>
          </section>
          <section>
            <h3 className="text-xl font-semibold mb-2">6. Childrens Privacy</h3>
            <p>
              Our services are not intended for children under 13. We do not
              knowingly collect personal information from children under 13.
            </p>
          </section>
          <section>
            <h3 className="text-xl font-semibold mb-2">
              7. Changes to This Policy
            </h3>
            <p>
              We may update this privacy policy from time to time. We will
              notify you of any changes by posting the new policy on this page.
            </p>
          </section>
          <section>
            <h3 className="text-xl font-semibold mb-2">8. Contact Us</h3>
            <p>
              If you have any questions about this privacy policy, please
              contact us at privacy@playvera.co.
            </p>
          </section>
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
