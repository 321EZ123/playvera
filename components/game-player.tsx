"use client";

import { Suspense, useState, useEffect } from "react";
import { Search, Maximize } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";

const adSpaces = [
  {
    title: "Advertisement 1",
    image:
      "https://cdn-images.threadless.com/~tms/electricfairy/products/1193813/shirt-1572544768-ae594c3b47ce6504ac46db8865bd82d9.png?v=3&d=g6NvcHOWk6R0cmltksLCgJOmcmVzaXplkIOld2lkdGjLQI8gAAAAAACmaGVpZ2h0y0CPIAAAAAAAqGFsbG93X3VwwpOvY2FudmFzX2NlbnRlcmVkks0EsM0EsIGqYmFja2dyb3VuZKYwMDAwMDCTpnJlc2l6ZZHNAyCAk69jYW52YXNfY2VudGVyZWSTzQMgzQMgpyNmZmZmZmaAk6ZlbmNvZGWSo2pwZ1WApWZvcmNlwqlvbmx5X21ldGHC&f=mp",
  },
  {
    title: "Advertisement 2",
    image:
      "https://cdn-images.threadless.com/~tms/electricfairy/products/1193813/shirt-1572544768-ae594c3b47ce6504ac46db8865bd82d9.png?v=3&d=g6NvcHOWk6R0cmltksLCgJOmcmVzaXplkIOld2lkdGjLQI8gAAAAAACmaGVpZ2h0y0CPIAAAAAAAqGFsbG93X3VwwpOvY2FudmFzX2NlbnRlcmVkks0EsM0EsIGqYmFja2dyb3VuZKYwMDAwMDCTpnJlc2l6ZZHNAyCAk69jYW52YXNfY2VudGVyZWSTzQMgzQMgpyNmZmZmZmaAk6ZlbmNvZGWSo2pwZ1WApWZvcmNlwqlvbmx5X21ldGHC&f=mp",
  },
  {
    title: "Advertisement 3",
    image:
      "https://cdn-images.threadless.com/~tms/electricfairy/products/1193813/shirt-1572544768-ae594c3b47ce6504ac46db8865bd82d9.png?v=3&d=g6NvcHOWk6R0cmltksLCgJOmcmVzaXplkIOld2lkdGjLQI8gAAAAAACmaGVpZ2h0y0CPIAAAAAAAqGFsbG93X3VwwpOvY2FudmFzX2NlbnRlcmVkks0EsM0EsIGqYmFja2dyb3VuZKYwMDAwMDCTpnJlc2l6ZZHNAyCAk69jYW52YXNfY2VudGVyZWSTzQMgzQMgpyNmZmZmZmaAk6ZlbmNvZGWSo2pwZ1WApWZvcmNlwqlvbmx5X21ldGHC&f=mp",
  },
  {
    title: "Advertisement 4",
    image:
      "https://cdn-images.threadless.com/~tms/electricfairy/products/1193813/shirt-1572544768-ae594c3b47ce6504ac46db8865bd82d9.png?v=3&d=g6NvcHOWk6R0cmltksLCgJOmcmVzaXplkIOld2lkdGjLQI8gAAAAAACmaGVpZ2h0y0CPIAAAAAAAqGFsbG93X3VwwpOvY2FudmFzX2NlbnRlcmVkks0EsM0EsIGqYmFja2dyb3VuZKYwMDAwMDCTpnJlc2l6ZZHNAyCAk69jYW52YXNfY2VudGVyZWSTzQMgzQMgpyNmZmZmZmaAk6ZlbmNvZGWSo2pwZ1WApWZvcmNlwqlvbmx5X21ldGHC&f=mp",
  },
];

function GamePlayer() {
  const searchParams = useSearchParams();

  const title = searchParams.get("title");
  const description = searchParams.get("description");
  const image = searchParams.get("img");
  const source = searchParams.get("source") || "undefined";
  const type = searchParams.get("type");
  const core = searchParams.get("core");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      if (type === "flash") {
        const embed = document.getElementById("player") as HTMLElement;
        const iframe = document.getElementById("frame") as HTMLElement;
        iframe.remove();
        const clone = embed.cloneNode(true) as HTMLElement;
        clone.setAttribute("src", source);
        embed.parentNode?.replaceChild(clone, embed);
      }
      if (type === "html") {
        const iframe = document.getElementById("frame") as HTMLElement;
        const clonex = iframe.cloneNode(true) as HTMLElement;
        clonex.setAttribute("src", source);

        iframe.parentNode?.replaceChild(clonex, iframe);
      }
    }
  }, [loading, type, source, core]);

  if (!title || !description || !image || !source) {
    return <h1>An error has occurred.</h1>;
  }

  const gameData = {
    title,
    description,
    image,
    source,
    type,
    core,
  };

  return (
    <div className="min-h-screen bg-[#2C1A0E] text-amber-100 flex flex-col">
      <header className="flex items-center justify-between p-4 bg-[#1E120A]">
        <a href="/">
          <h1 className="text-2xl font-bold">
            <span className="text-green-300">PLAY</span>
            <span className="text-amber-100">VE</span>
            <span className="text-amber-100">RA</span>
            <span className="text-green-300">.CO</span>
          </h1>
        </a>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Input
              className="pl-8 pr-4 py-2 bg-[#3A2314] rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
              placeholder="Search"
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
      <div className="flex flex-1">
        <aside className="w-80 bg-[#1E120A] p-4 hidden lg:block">
          <h2 className="text-xl font-bold mb-4 sr-only">Advertisements</h2>
          <div className="space-y-4">
            {adSpaces.slice(0, 2).map((ad, index) => (
              <div
                key={index}
                className="bg-[#3A2314] rounded-lg overflow-hidden"
              >
                <img src={ad.image} alt={ad.title} className="w-full h-auto" />
              </div>
            ))}
          </div>
        </aside>
        <main className="flex-1">
          <div className="aspect-video bg-black rounded-lg shadow-lg relative">
            {loading ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <img
                  src={gameData.image}
                  alt={gameData.title}
                  className="mb-4"
                />
                <div className="w-64 h-2 bg-[#3A2314] rounded-full overflow-hidden">
                  <div className="w-1/2 h-full bg-green-300 rounded-full animate-pulse"></div>
                </div>
              </div>
            ) : (
              <>
                <embed
                  src=""
                  id="player"
                  title={gameData.title}
                  className="w-full h-full absolute inset-0"
                />
                <iframe
                  src=""
                  id="frame"
                  className="w-full h-full absolute inset-0 overflow-y-scroll"
                  title={gameData.title}
                ></iframe>
              </>
            )}
          </div>
          <div className="mt-8 px-8 flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold">{gameData.title}</h2>
              <p className="text-sm text-amber-200 mt-2">
                {gameData.description}
              </p>
            </div>
            <Button size="icon" variant="ghost" aria-label="Fullscreen">
              <Maximize className="h-6 w-6" />
            </Button>
          </div>
        </main>
        <aside className="w-80 bg-[#1E120A] p-4 hidden xl:block">
          <h2 className="text-xl font-bold mb-4 sr-only">
            More Advertisements
          </h2>
          <div className="space-y-4">
            {adSpaces.slice(2, 4).map((ad, index) => (
              <div
                key={index}
                className="bg-[#3A2314] rounded-lg overflow-hidden"
              >
                <img src={ad.image} alt={ad.title} className="w-full h-auto" />
              </div>
            ))}
          </div>
        </aside>
      </div>
      <script src="https://unpkg.com/@ruffle-rs/ruffle" async></script>
    </div>
  );
}

export default function SuspenseGamePlayer() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GamePlayer />
    </Suspense>
  );
}
