import Image from "next/image"

const skills = [
  "Test1",
  "Test2",
  "Test3",
  "Test4",
]

export default function About() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24">
      <h2 className="text-3xl font-bold mb-8">About Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <div className="space-y-6">
          <p className="text-lg text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Explicabo impedit qui amet enim voluptatum ipsam illo suscipit, ratione praesentium, maiores,
            nisi necessitatibus animi voluptatem ipsum sapiente debitis laboriosam cupiditate ut?
          </p>
          <div>
            <h3 className="text-xl font-semibold mb-4">Skills</h3>
            <div className="grid grid-cols-2 gap-2">
              {skills.map((skill, index) => (
                <div key={index} className="bg-gray-100 rounded-full px-3 py-1 text-sm">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="relative aspect-square rounded-3xl overflow-hidden">
          <Image src="/temp.svg?height=600&width=600" alt="Image" fill className="object-cover" />
        </div>
      </div>
    </section>
  )
}

