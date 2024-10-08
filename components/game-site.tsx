"use client";

import { Search, ChevronRight, ChevronLeft, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

interface GameCategory {
  title: string;
  games: {
    title: string;
    image: string;
    description: string;
    type: string;
    source: string;
  }[];
}

const gameCategories: GameCategory[] = [
  {
    title: "Popular",
    games: [
      {
        title: "Basketball Stars",
        image: "./img/basketball-stars.png",
        description:
          "Basketball Stars is a fun and addictive game where you have to control a basketball player and score as many points as you can. The game is simple, but it's hard to master.",
        type: "html",
        source: "./static/basketball-stars/index.html",
      },
      {
        title: "Slope",
        image: "./img/slope.png",
        description:
          "Slope, a new arcade game from Y8 games, engage you in a simple yet deadly challenge: roll down the slope for as long as possible without falling off the edge or hitting any obstacles along the way.",
        type: "html",
        source: "./static/slope/index.html",
      },
      {
        title: "Moto X3M",
        image: "./img/moto-x3m.png",
        description:
          "Moto X3M is an awesome bike game with 22 challenging levels. Choose a bike, put your helmet on, pass obstacles and get ready to beat the time on tons of off-road circuits. Have fun with Moto X3M!",
        type: "html",
        source: "./static/moto-x3m/index.html",
      },
      {
        title: "Retro Bowl",
        image: "./img/retro-bowl.png",
        description:
          "Retro Bowl emulates the gameplay of American football and was heavily influenced by the Tecmo Bowl series.",
        type: "html",
        source: "./static/retro-bowl/index.html",
      },
      {
        title: "Minecraft",
        image: "./img/minecraft.svg",
        description:
          "Minecraft is a game created by Mojang studios. It involves only blocks and is an extremely popular survival game with multiplayer.",
        type: "html",
        source: "./static/minecraft/index.html",
      },
      {
        title: "1v1.LOL",
        image: "./img/1v1-lol.png",
        description:
          "Fight to survive in this epic multiplayer battle royale build battle where only the last player standing wins and achieves the long-awaited master victory.",
        type: "html",
        source: "./static/1v1-lol/index.html",
      },
      {
        title: "Jetpack Joyride",
        image: "./img/jetpack-joyride.png",
        description:
          "Jetpack Joyride is a 2011 side-scrolling endless runner action video game developed by Halfbrick Studios and published by Halfbrick Studios.",
        type: "html",
        source: "./static/jetpack-joyride/index.html",
      },
      {
        title: "Crossy Road",
        image: "./img/crossy-road.png",
        description:
          "Crossy Road is the 8-bit endless arcade hopper that started it all. Collect custom characters and navigate freeways, railroads, rivers and much more.",
        type: "html",
        source: "./static/crossy-road/index.html",
      },
      {
        title: "Vex 3",
        image: "./img/vex-3.png",
        description:
          "Vex 3 is the third platform game in the Vex series. The game is full of twists and turns, with a labyrinth of deadly devices and traps to navigate on each level. Avoid the spinning blades, spikes, and traps to make your way to the next act!",
        type: "html",
        source: "./static/vex-3/index.html",
      },
    ],
  },
  {
    title: "Racing",
    games: [
      {
        title: "Subway Surfers",
        image: "./img/subway-surfers.png",
        description:
          "Subway Surfers is an endless runner mobile game co-developed by Kiloo, a private company based in Denmark and SYBO Games.",
        type: "html",
        source: "./static/subway-surfers/index.html",
      },
      {
        title: "Sonic 1",
        image: "./img/sonic-1.png",
        description:
          "Sonic 1 is a platform video game developed by Sonic Team and published by Sega.",
        type: "html",
        source: "./static/sonic-1/index.html",
      },
      {
        title: "Sonic 2",
        image: "./img/sonic-2.png",
        description:
          "Sonic 2 is a platform video game developed by Sonic Team and published by Sega.",
        type: "html",
        source: "./static/sonic-2/index.html",
      },
      {
        title: "Sonic the Hedgehog",
        image: "./img/sonic-original.png",
        description:
          "Race at lightning speeds across seven classic zones as Sonic the Hedgehog.",
        type: "html",
        source: "./static/sonic-the-hedgehog/index.html",
      },
      {
        title: "Crazy Taxi",
        image: "./img/crazy-taxi.png",
        description:
          "Crazy Taxi is a series of racing video games that was developed by Hitmaker and published by Sega.",
        type: "html",
        source: "./static/crazy-taxi/index.html",
      },
      {
        title: "Run 3",
        image: "./img/run-3.png",
        description:
          "Run 3 is the first Run game to introduce a storyline, mainly told through cutscenes.",
        type: "html",
        source: "./static/run-3/index.html",
      },
      {
        title: "Drift Hunters",
        image: "./img/drift-hunters.png",
        description:
          "Drift Hunters is a fun and addictive game where you have to control a car and drift around the track. The game is simple, but it's hard to master.",
        type: "html",
        source: "./static/drift-hunters/index.html",
      },
      {
        title: "Madalin Stunt Cars 2",
        image: "./img/madalin-sunt-cars-2.png",
        description:
          "Madalin Stunt Cars 2 is a fun and addictive game where you have a control a car and drift around the track.",
        type: "html",
        source: "./static/madalin-stunt-cars-2/index.html",
      },
      {
        title: "Eggy Car",
        image: "./img/eggy-car.png",
        description:
          "It's a vehicle with an egg in it! Your task is to carry the egg as far as possible without shattering it.",
        type: "html",
        source: "./static/eggy-car/index.html",
      },
    ],
  },
  {
    title: "Action",
    games: [
      {
        title: "Jetpack Joyride",
        image: "./img/jetpack-joyride.png",
        description:
          "Jetpack Joyride is a 2011 side-scrolling endless runner action video game developed by Halfbrick Studios and published by Halfbrick Studios.",
        type: "html",
        source: "./static/jetpack-joyride/index.html",
      },
      {
        title: "Rooftop Snipers",
        image: "./img/rooftop-snipers.png",
        description:
          "Rooftop Snipers is a chaotic two-button two-player sniper game.",
        type: "html",
        source: "./static/rooftop-snipers/index.html",
      },
      {
        title: "Sonic 1",
        image: "./img/sonic-1.png",
        description:
          "Sonic 1 is a platform video game developed by Sonic Team and published by Sega.",
        type: "html",
        source: "./static/sonic-1/index.html",
      },
      {
        title: "Sonic 2",
        image: "./img/sonic-2.png",
        description:
          "Sonic 2 is a platform video game developed by Sonic Team and published by Sega.",
        type: "html",
        source: "./static/sonic-2/index.html",
      },
      {
        title: "Vex 5",
        image: "./img/vex-5.png",
        description: "Vex is a fun game",
        type: "html",
        source: "./static/vex-5/index.html",
      },
      {
        title: "Bike Mania",
        image: "./img/bike-mania.png",
        description:
          "Ride your bike through the bumpy and challenging tracks. Do not hit the ground and show your skill!",
        type: "html",
        source: "./static/bike-mania/index.html",
      },
      {
        title: "Riddle School 5",
        image: "./img/riddle-school-5.png",
        description: "Riddle School is a 2006 flash based puzzle-solving game.",
        type: "flash",
        source: "./ruffle/riddle-school-5/riddle-school-5.swf",
      },
      {
        title: "Riddle School 4",
        image: "./img/riddle-school-4.png",
        description:
          "Riddle School 4 is a 2006 flash based puzzle-solving game.",
        type: "flash",
        source: "./ruffle/riddle-school-4/riddle-school-4.swf",
      },
      {
        title: "Portal 2",
        image: "./img/portal-2.jpg",
        description:
          "Portal 2 is a new single player and multiplayer game from Valve. Portal has been called one of the most innovative new games on the horizon and will offer gamers hours of unique gameplay.",
        type: "html",
        source: "./static/portal-2/index.html", // need
      },
    ],
  },
  {
    title: "Strategy",
    games: [
      {
        title: "Five Nights at Freddy's",
        image: "./img/fnaf.png",
        description:
          "FNAF is a survival horror game designed with simple gameplay. In Five Nights At Freddy's, the player takes the role of a night-time security employee.",
        type: "html",
        source: "./static/fnaf/index.html",
      },
      {
        title: "Five Nights at Freddy's 2",
        image: "./img/fnaf-2.png",
        description:
          "FNAF 2 is a survival horror game designed with simple gameplay. In Five Nights At Freddy's, the player takes the role of a night-time security employee.",
        type: "html",
        source: "./static/FNAF2/index.html",
      },
      {
        title: "Five Nights at Freddy's 3",
        image: "./img/fnaf-3.png",
        description:
          "FNAF 3 is a survival horror game designed with simple gameplay. In Five Nights At Freddy's, the player takes the role of a night-time security employee.",
        type: "html",
        source: "./static/FNAF3/index.html",
      },
      {
        title: "Five Nights at Freddy's 4",
        image: "./img/fnaf-4.png",
        description:
          "FNAF 4 is a survival horror game designed with simple gameplay. In Five Nights At Freddy's, the player takes the role of a night-time security employee.",
        type: "html",
        source: "./static/FNAF4/index.html",
      },
      {
        title: "Worlds Hardest Game",
        image: "./img/worlds-hardest-game.png",
        description:
          "The World's Hardest Game speaks for itself, when we say it is the hardest game we aren't kidding! If you have played World's Hardest Game before, you know how difficult the game can be. You will need to be quick and decisive with your movements, and have a strategy going into each level. Lucky for you, we have some helpful tips and tricks that will help you whether you are experienced or a complete beginner.",
        type: "html",
        source: "./ruffle/worlds-hardest-game/index.html",
      },
      {
        title: "Feudalism 2",
        image: "./img/feudalism2.png",
        description:
          "Feudalism 2 is a free fighter game. As they say, the world isn't going to conquer itself. In Feudalism 2, that's your job. In this strategy game with a helping of RPG fixings, select a character, bolster your army with a little gold, and then start conquering. ... Prove just how effective a little bit of feudalism can be.",

        type: "flash",
        source: "./ruffle/feudalism2/feudalism2.swf",
      },
      {
        title: "God's Playing Field",
        image: "./img/godsplayingfield.png",
        description:
          "God's Playing Field is a free strategy game. You decide who lives and dies. If you've ever wanted a chance to play God, this is it.",
        type: "flash",
        source: "./ruffle/gods-playing-field/gods-playing-field.swf",
      },
      {
        title: "Pandemic 2",
        image: "./img/pandemic2.png",
        description:
          "Pandemic 2 is a free game about the spread of a dangerous pandemic in the modern age. This is a strategy game about the danger and threat of an aggressive virus as it slowly spreads its way across the globe. By playing as the virus instead of as medics, researchers, or other members of the medical and scientific communities you will see the mechanisms by which a virus may spread. This is a casual game with simple mechanics that allow for deep meaningful choices on behalf of the player. As the game continues your objective will be to spread your virus as far, as wide, and as fat as you possibly can. As your virus evolves you'll gain experience points. With these experience points, you will be able to purchases upgrades. You can choose from a lit of different symptoms which all have their own ways of helping the virus spread. This is a casual time-management game so you'll have to upgrade and then wait and see if your disease is progressing before your time limit. As time passes, you'll gain evolution points which is what you can use to purchase upgrades.",
        type: "flash",
        source: "./ruffle/pandemic-2/pandemic2.swf",
      },
      {
        title: "Mind Games for 2 Player ",
        image: "./img/mindgamesdfor2player.png",
        description:
          "We collected some brain and board games that you can play as two player in a single game. We are presenting you eight brain / table game which are played by everyone fondly. You can play Chess, Tic Tac Toe, Checkers, Ludo, Connect 4, Snake and Ladders, Mancala and Math games in game box for free! If you cannot decide on which game you want to play, you can give a chance to spin the “Spin” to let it pick a game for you.",
        type: "html",
        source: "./static/mind-games-for-2-player/index.html",
      },
    ],
  },
  {
    title: "Apps (Coming Soon)",
    games: [
      {
        title: "Discord",
        image: "./img/discord.png",
        description: "",
        type: "",
        source: "",
      },
      {
        title: "Mathway",
        image: "./img/mathway.png",
        description: "",
        type: "",
        source: "",
      },
      {
        title: "Google",
        image: "./img/google.png",
        description: "",
        type: "",
        source: "",
      },
      {
        title: "Youtube",
        image: "./img/youtube.png",
        description: "",
        type: "",
        source: "",
      },
      {
        title: "Spotify",
        image: "./img/spotify.png",
        description: "",
        type: "",
        source: "",
      },
      {
        title: "TikTok",
        image: "./img/tiktok.png",
        description: "",
        type: "",
        source: "",
      },
      {
        title: "Reddit",
        image: "./img/reddit.png",
        description: "",
        type: "",
        source: "",
      },
      {
        title: "GeForce Now",
        image: "./img/geforce-now.png",
        description: "",
        type: "",
        source: "",
      },
      {
        title: "FlixHQ",
        image: "./img/flixhq.png",
        description: "",
        type: "",
        source: "",
      },
      {
        title: "Twitch",
        image: "./img/twitch.png",
        description: "",
        type: "",
        source: "",
      },
      {
        title: "Instagram",
        image: "./img/instagram.png",
        description: "",
        type: "",
        source: "",
      },
      {
        title: "Twitter",
        image: "./img/twitter.png",
        description: "",
        type: "",
        source: "",
      },
      {
        title: "HiAnime",
        image: "./img/hianime.png",
        description: "",
        type: "",
        source: "",
      },
    ],
  },
];

export function GameSiteComponent() {
  const handleNextClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const scrollContainer = event.currentTarget
      .closest("section")
      ?.querySelector(".overflow-x-auto");
    if (scrollContainer) {
      scrollContainer.scrollBy({
        left: 200,
        behavior: "smooth",
      });
    }
  };

  const handlePrevClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const scrollContainer = event.currentTarget
      .closest("section")
      ?.querySelector(".overflow-x-auto");
    if (scrollContainer) {
      scrollContainer.scrollBy({
        left: -200,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#2C1A0E] text-amber-100">
      <header className="flex items-center justify-between p-4 bg-[#1E120A]">
        <h1 className="text-2xl font-bold">
          <span className="text-green-300">PLAY</span>
          <span className="text-amber-100">VE</span>
          <span className="text-amber-100">RA</span>
          <span className="text-green-300">.CO</span>
        </h1>
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
      <section className="relative bg-gradient-to-r from-[#4A2511] to-[#2C1A0E] p-12 mb-8 overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-amber-100">
            Vera
          </h2>
          <p className="text-2xl mb-6 max-w-2xl">
            Experience gaming like never before with our lightning-fast
            platform. Join our discord for more links if this one gets blocked!
            (ps. bottom of the page)
          </p>
          <a href="/all">
            <Button className="bg-green-500 text-[#2C1A0E] hover:bg-green-600 text-lg px-8 py-3 rounded-full shadow-lg transform transition hover:scale-105">
              <Zap className="mr-2 h-5 w-5" />
              PLAY NOW!
            </Button>
          </a>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full">
          <div className="w-full h-full bg-gradient-to-l from-green-500/20 to-transparent transform skew-x-12"></div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1/2">
          <svg
            viewBox="0 0 1440 320"
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <path
              fill="rgba(52, 211, 153, 0.1)"
              fillOpacity="1"
              d="M0,32L48,80C96,128,192,224,288,224C384,224,480,128,576,90.7C672,53,768,75,864,96C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>
      <main className="p-4 space-y-8">
        {gameCategories.map((category, index) => (
          <section key={index}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">{category.title}</h2>
              <Button
                variant="link"
                className="text-green-300 hover:text-green-200"
                onClick={() => (window.location.href = "/all")}
              >
                View All
              </Button>
            </div>
            <div className="relative">
              <Button
                size="icon"
                variant="secondary"
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-green-500 text-[#2C1A0E] rounded-full p-2 hover:bg-green-400"
                onClick={handlePrevClick}
              >
                <ChevronLeft className="h-6 w-6" />
                <span className="sr-only">Previous</span>
              </Button>
              <div className="flex space-x-4 overflow-x-auto pb-4 no-scrollbar">
                {category.games.map((game, gameIndex) => (
                  <div key={gameIndex} className="flex-shrink-0 w-64">
                    <a
                      href={
                        "/player?title=" +
                        game.title +
                        "&description=" +
                        game.description +
                        "&img=" +
                        game.image +
                        "&source=" +
                        game.source +
                        "&type=" +
                        game.type
                      }
                      className="block"
                    >
                      <img
                        src={game.image}
                        alt={game.title}
                        className="w-full h-48 object-cover rounded-lg mb-2"
                      />
                      <h3 className="text-sm font-medium truncate">
                        {game.title}
                      </h3>
                    </a>
                  </div>
                ))}
              </div>
              <Button
                size="icon"
                variant="secondary"
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-green-500 text-[#2C1A0E] rounded-full p-2 hover:bg-green-400"
                onClick={handleNextClick}
              >
                <ChevronRight className="h-6 w-6" />
                <span className="sr-only">Next</span>
              </Button>
            </div>
          </section>
        ))}
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
