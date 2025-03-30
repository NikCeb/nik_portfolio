import Image from "next/image"
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";

const projects = [
  {
    title: "Discord Bot - KaChing Bot",
    description: "Social media for poker players",
    backgroundColor: "#7158E2",
    image: "/KaChingBot.PNG?height=400&width=600",
  },
  {
    title: "Lendscape",
    description: "Lend and Borrow Dashboard",
    backgroundColor: "#1E2A3B",
    image: "/temp.svg?height=400&width=600",
  },
]

export default function ProjectGrid() {
  return (
    <section id="works" className="py-12 sm:py-16">
      <h2 className="text-3xl font-bold mb-8">My Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <CardContainer className="inter-var" key={index}>
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {project.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {project.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={project.image || "/temp.svg"}
                  height="600"
                  width="600"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt={project.title}
                />
              </CardItem>
              <div className="flex justify-between items-center mt-5">
                <CardItem
                  translateZ={20}
                  as={Link}
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Sign up
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </section>
  )
}

