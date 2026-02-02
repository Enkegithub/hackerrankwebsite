import { id } from "date-fns/locale"

export default function Council() {
  const members = [
    { id: 1, name: "Newton Adhikari", role: "President", image: "/newton.png" },
    { id: 2, name: "Kishore Voodi", role: "Vice President", image: "/kishor.jpeg" },
    { id: 3, name: "Pushpa Bhandari ", role: "Secretary(GIRLS)", image: "/puspa.jpeg" },
    { id: 4, name: "Shreetirth Talpallikar", role: "Secretary(BOYS)", image: "/shree.jpeg" },
    { id: 5, name: " Pranshu Choudhary", role: " Treasurer", image: "/pranshu.jpeg" },
    { id: 6, name: "Nitesh Kushwaha", role: "Technical Head", image: "/enk.png" },
    { id: 7, name: " Jangam Ashwik", role: "Social Media Head ", image: "/aswik.jpeg" },
    { id: 8, name: " Sathish", role: "Creative head", image: "/rishav.jpeg" },
    { id: 9, name: " Bishal Bista", role: " Student Repesentative(BOYS)", image: "/bishal.jpeg" },
    { id: 10, name: "Yepuri Neha", role: " Student Repesentative(GIRLS)", image: "/neha.jpeg" },
    { id: 11, name: " Praveen Reddy", role: "Student Repesentative(BOYS)", image: "/sathish.jpeg" },
    { id: 12, name: "  Vishwasree", role: "Student Repesentative(GIRLS)", image: "/ankit.jpeg" },
  ]

  return (
    <section id="council" className="py-20 bg-background">
      <h2 className="text-4xl font-bold text-center mb-14">
        HACKER RANK CLUB – 2026
      </h2>

      <div className="flex justify-center">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-20 gap-y-20">
          {members.map((m, i) => (
            <div
              key={m.id}
              className={`flex flex-col items-center ${i % 2 !== 0 ? "mt-12" : ""
                }`}
            >
              {/* Hexagon Image */}
              <div
                className="
                  w-36 h-36
                  overflow-hidden
                  shadow-lg
                  ring-4 ring-primary/20
                  hover:scale-105
                  transition-transform
                "
                style={{
                  clipPath:
                    "polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)",
                }}
              >
                <img
                  src={m.image}
                  alt={m.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name & Role */}
              <h3 className="mt-4 text-lg font-bold text-foreground text-center">
                {m.name}
              </h3>
              <p className="text-sm font-semibold text-primary tracking-wide text-center">
                {m.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
