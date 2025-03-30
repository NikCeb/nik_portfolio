import { link } from "fs";
import Image from "next/image"
import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";

const href_links = {
  github: "https://github.com/NikCeb",
  linkedin: "https://www.linkedin.com/in/nikceballos",
}

export default function Hero() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-white to-yellow-100/30 rounded-3xl"></div>
          <div className="relative z-10 space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              Hi, I'm Nikolai Ceballos.
            </h1>
            <p className="text-lg text-gray-600">
              a new developer with 2 years of experience.
            </p>
            <div className="space-y-4">
              <button className="bg-black text-white px-6 py-3 rounded-lg font-medium">Contact me</button>
              <div className="flex gap-4">
                {[
                  { Icon: FaGithub, link: href_links.github },
                  { Icon: FaLinkedin, link: href_links.linkedin },
                ].map(({ Icon, link }, index) => (
                  <a
                    key={index}
                    href={link}
                    target="_blank" // Opens in a new tab
                    rel="noopener noreferrer" // Security best practice
                    className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="relative aspect-square rounded-3xl overflow-hidden">
          <Image
            src="teemp.svg?height=600&width=600"
            alt="Main photo"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}

