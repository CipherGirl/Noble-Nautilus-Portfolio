import Image from "next/image";
import Link from "next/link";
import logo from "../public/images/programming-svgrepo-com.svg";

export default function Home() {
  return (
    // Hero Section
    <div>
      <section className="flex items-center w-full h-screen">
        <div className="w-1/2 my-auto flex flex-col items-center justify-between">
          <Image src={logo} alt="logo for noble nautilus" width="300" />
          <h1 className="font-Cinzel text-5xl font-bold mb-20">
            Noble Nautilus
          </h1>
        </div>
        <div className="w-1/2 my-auto text-2xl flex flex-col gap-y-3">
          <p className="text-3xl font-bold leading-normal">
            Welcome to the portfolio of
            <br /> pod known as <br />
            <span className="font-Cinzel font-semibold">Noble Nautilus</span>
          </p>
          <p></p>

          <p>
            We are the awesome fellows of Spring 2022 batch of MLH Fellowship
            program.{" "}
            <em>
              This portfolio is also a project of Fellowship Orientation
              Hackathon of Spring 2022
            </em>
          </p>

          <a
            href="https://fellowship.mlh.io/"
            target="_blank"
            className="mr-auto mt-2 px-6 py-2 text-2xl text-black transition-colors duration-300 border-2 border-black rounded-full shadow-xl drop-shadow-md hover:drop-shadow-xl hover:bg-black hover:text-white"
          >
            Click to Explore MLH Fellowship Site &rarr;
          </a>
        </div>
      </section>
      <section>
        <h1></h1>
      </section>
    </div>
  );
}
