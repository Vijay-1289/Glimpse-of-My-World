"use client";

import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import LinkedInIcon from "@/assets/icons/linkedin.svg";
import GitHubIcon from "@/assets/icons/github.svg";
import InstagramIcon from "@/assets/icons/instagram.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarBorder from "@/components/StarBorder";

export const ContactSection = () => {
  const handleEmailClick = () => {
    window.location.href =
      "mailto:vijay.siruvuru@gmail.com?subject=Contact Request";
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: LinkedInIcon,
      url: "https://www.linkedin.com/in/vijay1289",
    },
    {
      name: "GitHub",
      icon: GitHubIcon,
      url: "https://github.com/Vijay-1289",
    },
    {
      name: "Instagram",
      icon: InstagramIcon,
      url: "https://www.instagram.com/urstruly_vijju",
    },
  ];

  return (
    <section id="contact" className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div className="relative z-0 overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-400 to-cyan-400 px-10 py-12 text-center text-gray-900 md:text-left">
          <div
            className="absolute inset-0 -z-10 opacity-5"
            style={{
              backgroundImage: `url(${grainImage.src}))`,
            }}
          ></div>
          <div className="flex flex-col items-center gap-8 md:flex-row md:gap-16">
            <div className="flex-1">
              <h2 className="font-serif text-2xl md:text-3xl">
                Let&apos;s Connect and Create Something Amazing
              </h2>
              <p className="mt-4 text-sm md:text-base">
                Whether you&apos;re interested in collaboration, have a project in mind, or just want to say hello,
                I&apos;m always open to new opportunities and connections.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4 md:justify-start">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 items-center gap-2 rounded-xl border border-gray-900/20 bg-white/10 px-6 backdrop-blur-sm transition-colors hover:bg-white/20"
                  >
                    <link.icon className="size-5" />
                    <span className="font-medium">{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <StarBorder as="button" color="cyan" speed="5s" className="inline-flex h-12 w-max items-center gap-2 rounded-xl border border-gray-900 bg-gray-900 px-6 text-white transition-colors hover:bg-gray-800" onClick={handleEmailClick}>
                <span className="font-semibold">Send Email</span>
                <ArrowUpRightIcon className="size-4" />
              </StarBorder>
              <div className="text-center text-sm">
                <span className="font-medium">vijay.siruvuru@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
