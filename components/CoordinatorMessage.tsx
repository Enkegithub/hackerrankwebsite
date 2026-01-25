import Image from "next/image"

export default function CoordinatorMessage() {
  const coordinators = [
    {
      name: "Dr. B. Santhosh Kumar",
      role: "Faculty Coordinator & HOD, CSE",
      message:
        "The Hacker Rank Club plays a vital role in nurturing problem-solving skills and preparing students for real-world technical challenges. I am proud of the enthusiasm and innovation demonstrated by our students.",
      image: "/coordinators/santhosh.jpg",
    },
    {
      name: "Mrs. B. Ranjitha",
      role: "Faculty Coordinator, CSE",
      message:
        "Through continuous learning, coding culture, and collaborative activities, the club empowers students to become confident professionals ready for industry and research excellence.",
      image: "/coordinators/ranjitha.jpg",
    },
    {
      name: "Mr. K. Vigneshwar",
      role: "Faculty Coordinator, CSE",
      message:
        "The club encourages creativity, discipline, and innovation. Such initiatives bridge the gap between academics and industry expectations, shaping students into capable engineers.",
      image: "/coordinators/vigneshwar.jpg",
    },
  ]

  return (
    <section id="coordinator-message" className="py-24 bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-6 space-y-20">

        {/* Section Heading */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Message from Coordinators</h2>
          <p className="text-muted-foreground text-lg">
            Guidance and inspiration from our faculty leaders
          </p>
        </div>

        {/* Coordinator Blocks */}
        {coordinators.map((person, index) => (
          <div
            key={index}
            className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Text */}
            <div className={index % 2 !== 0 ? "md:order-2" : ""}>
              <h3 className="text-2xl font-bold mb-2">{person.name}</h3>
              <p className="text-primary font-semibold mb-4">{person.role}</p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {person.message}
              </p>
            </div>

            {/* Image */}
            <div className={index % 2 !== 0 ? "md:order-1" : ""}>
              <div className="relative w-full max-w-sm mx-auto aspect-square rounded-xl overflow-hidden shadow-xl">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        ))}

      </div>
    </section>
  )
}
