import React from "react";
// import Image from "next/image";
import { FaReact, FaGitAlt, FaGithubAlt } from "react-icons/fa";
import { RiJavascriptFill, RiHtml5Fill } from "react-icons/ri";
import {
  SiTypescript,
  SiCss3,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
} from "react-icons/si";
import { TbBrandNextjs, TbSql, TbBrandCpp } from "react-icons/tb";

const skills = [
  { skill: "Html" },
  { skill: "Css" },
  { skill: "Javascript" },
  { skill: "Typescript" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "Node" },
  { skill: "SQL" },
  { skill: "Mongo DB" },
  { skill: "C++" },
  //   { skill: "Python" },
];

const skillIcons = [
  { skill: <RiHtml5Fill /> },
  { skill: <SiCss3 /> },
  { skill: <RiJavascriptFill /> },
  { skill: <SiTypescript /> },
  { skill: <FaReact /> },
  { skill: <TbBrandNextjs /> },
  { skill: <SiTailwindcss /> },
  { skill: <FaGitAlt /> },
  { skill: <FaGithubAlt /> },
  { skill: <SiNodedotjs /> },
  { skill: <TbSql /> },
  { skill: <SiMongodb /> },
  { skill: <TbBrandCpp /> },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
        </h1>
        <div className="flex flex-col space-y-10 items-strech justify-center align-top md:flex-row md:text-left md:p-4 md:space-x-10 md:space-y-0">
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Saurabh Siddharth and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> software engineer
              based in Varanasi, India.
            </p>
            <br />
            <p>
              I am pursuing Integrated Dual Degree (B.Tech + M.Tech) in
              Metallurgical Engineering from Indian Institute of Technology
              (BHU), Varanasi. I have been working in the software field ever
              since joining my college in 2019.
            </p>
            <br />
            <p>
              I have a wide range of hobbies and passions that keep me busy.
              From reading, playing sports, traveling, to making designs, I am
              always seeking new experiences and love to keep myself engaged and
              learning new things.
            </p>
            <br />
            <p>
              I believe that one should{" "}
              <span className="font-bold">never stop growing</span> and
              that&#39;s what I strive to do. I have a passion for technology
              and a desire to always push the limits of what is possible. I am
              excited to see where my career takes me and am always open to new
              opportunities. 🙂
            </p>
          </div>
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              My Skills
            </h1>
            <div className="flex flex-wrap flex-row justify-center justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
            <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
            <div className="flex flex-wrap flex-row justify-center justify-start">
              {skillIcons.map((item, idx) => {
                return (
                  <div
                    key={idx}
                    className="flex items-center bg-white px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold text-7xl"
                  >
                    {typeof item.skill === "string" ? (
                      <span>{item.skill}</span>
                    ) : (
                      <span style={{ color: "red" }}>{item.skill}</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
