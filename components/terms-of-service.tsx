"use client";

import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "./ui/input";

export function TermsOfServiceComponent() {
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
          Terms of Service
        </h2>
        <div className="space-y-6">
          <section>
            <h3 className="text-xl font-semibold mb-2">
              1. Acceptance of Terms
            </h3>
            <p>
              By accessing or using PLAYVERA&apos;s services, you agree to be
              bound by these Terms of Service. If you do not agree to these
              terms, please do not use our services.
            </p>
          </section>
          <section>
            <h3 className="text-xl font-semibold mb-2">2. User Accounts</h3>
            <p>
              You are responsible for maintaining the confidentiality of your
              account and password. You agree to accept responsibility for all
              activities that occur under your account.
            </p>
          </section>
          <section>
            <h3 className="text-xl font-semibold mb-2">3. User Conduct</h3>
            <p>
              You agree not to use the service to upload, post, or otherwise
              transmit any content that is unlawful, harmful, threatening,
              abusive, harassing, defamatory, vulgar, obscene, or invasive of
              another&apos;s privacy.
            </p>
          </section>
          <section>
            <h3 className="text-xl font-semibold mb-2">
              4. Intellectual Property
            </h3>
            <p>
              The content, organization, graphics, design, and other matters
              related to PLAYVERA are protected under applicable copyrights and
              other proprietary laws. The copying, redistribution, use, or
              publication by you of any such content is strictly prohibited.
            </p>
          </section>
          <section>
            <h3 className="text-xl font-semibold mb-2">
              5. Termination of Service
            </h3>
            <p>
              We reserve the right to terminate or suspend your account and
              access to the Service immediately, without prior notice or
              liability, for any reason whatsoever, including without limitation
              if you breach the Terms.
            </p>
          </section>
          <section>
            <h3 className="text-xl font-semibold mb-2">
              6. Limitation of Liability
            </h3>
            <p>
              In no event shall VERA, its officers, directors, employees, or
              agents, be liable to you for any direct, indirect, incidental,
              special, punitive, or consequential damages whatsoever resulting
              from any use or inability to use the service.
            </p>
          </section>
          <section>
            <h3 className="text-xl font-semibold mb-2">7. Changes to Terms</h3>
            <p>
              We reserve the right to modify or replace these Terms at any time.
              Your continued use of the Service after any such changes
              constitutes your acceptance of the new Terms.
            </p>
          </section>
          <section>
            <h3 className="text-xl font-semibold mb-2">8. Governing Law</h3>
            <p>
              These Terms shall be governed and construed in accordance with the
              laws of the United States of America, without regard to its
              conflict of law provisions.
            </p>
          </section>
          <section>
            <h3 className="text-xl font-semibold mb-2">9. Contact Us</h3>
            <p>
              If you have any questions about these Terms, please contact us at
              legal@playvera.co.
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
