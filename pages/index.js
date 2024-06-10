import { useRef, useEffect, useCallback } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import HeroImages from "./HeroImages";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";
import Cursor from "../components/Cursor";
import Lottie from 'lottie-react';
import animationData from '../animations/lottie/animation.json';

// Local Data
import data from "../data/portfolio.json";

export default function Home() {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const teamRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

 
  const handleTeamScroll = () => {
    window.scrollTo({
      top: teamRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };
  

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);


  const options = {
    particles: {
      number: {
        value: 50, // Increase the number of particles
        density: {
          enable: true,
          area: 800 // Set a reasonable area for particle density
        }
      },
      color: {
        value: ["#2EB67D", "#ECB22E", "#E01E5B", "#36C5F0"]
      },
      shape: {
        type: "circle", // Use a default shape like "circle"
        stroke: {
          width: 0,
          color: "#000000"
        },
        polygon: {
          nb_sides: 5
        }
      },
      opacity: {
        value: 0.5, // Set the particle opacity to be more discrete
        random: true,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: { min: 2, max: 5 }, // Set smaller particle sizes
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false
        }
      },
      links: {
        enable: true,
        distance: 150,
        color: "#808080",
        opacity: 0.4, // Adjust the link opacity
        width: 1
      },
      move: {
        enable: true,
        speed: 1, // Adjust the speed to make movement more subtle
        direction: "none",
        random: true,
        straight: false,
        outModes: "out"
      }
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: "repulse"
        },
        onclick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3
        },
        repulse: {
          distance: 100, // Adjust the repulse distance to make interaction more subtle
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    }
  };
  

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className={`relative ${data.showCursor && "cursor-none"}`}>
      {data.showCursor && <Cursor />}
      
      <Head>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-PT617G9BRL"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-PT617G9BRL');
            `,
          }}
        />
        <title>{data.name}</title>
      </Head>
      <Particles options={options} init={particlesInit} />

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="container mx-auto mb-10">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
          handleTeamScroll={handleTeamScroll}
        />
        <div className="laptop:mt-20 mt-10">
          <div  className="hero mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-1">

          <div className="hero-text flex items-center">

          <div className="mt-5">
            <h1
              ref={textOne}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full"
              >
              {data.headerTaglineOne}
            </h1>
            <h1
              ref={textTwo}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
              >
              {data.headerTaglineTwo}
            </h1>
            <h1
              ref={textThree}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full"
            >
              {data.headerTaglineThree}
            </h1>
            <h1
              ref={textFour}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
              >
              {data.headerTaglineFour}
            </h1>
              </div>
                </div>
              <HeroImages />
          </div>
          <div className="lottie-divider">
          <Lottie animationData={animationData} />
          </div>
          <div className="lottie-divider2">
          <Lottie animationData={animationData} />
          </div>

          {/* <Socials className="mt-2 laptop:mt-5" /> */}
        </div>
        <div className="mt-10 laptop:mt-40 p-2 laptop:p-0" ref={workRef}>
          <h1 className="text-2xl text-bold">Services.</h1>

          <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-4 gap-1">
            {data.projects.map((project) => (
              <WorkCard
              key={project.id}
              img={project.imageSrc}
              name={project.title}
              description={project.description}
              onClick={() => window.open(project.url)}
              />
              ))}
          </div>
        </div>

        {/* This button should not go into production */}
        {process.env.NODE_ENV === "development" && (
          <div className="fixed bottom-5 right-5">
            <Link href="/edit">
              <Button type="primary">Edit</Button>
            </Link>
          </div>
        )}
        <div className="mt-10 laptop:mt-40 p-2 laptop:p-0" ref={aboutRef}>
          <h1 className="tablet:m-10 text-2xl text-bold">About.</h1>
          <p className="tablet:m-10 mt-2 text-xl laptop:text-3xl w-full laptop:w-3/5">
            {data.aboutpara}
          </p>
        </div>
        {/* <div className="mt-10 laptop:mt-40 p-2 laptop:p-0"  ref={teamRef}>
          <h1 className="tablet:m-10 text-2xl text-bold">Team.</h1>
          <div className="mt-5 tablet:m-10 grid grid-cols-2 laptop:grid-cols-5 gap-6">
          {data.services.map((service, index) => (
            <ServiceCard
                key={index}
                name={service.title}
                img={service.imageSrc}
                description={service.description}
              />
            ))}
          </div>
        </div> */}
        <div className="lottie-divider">
          <Lottie animationData={animationData} />
          </div>
          <div className="lottie-divider2">
          <Lottie animationData={animationData} />
          </div>
        <Footer />
      </div>
    </div>
  );
}
