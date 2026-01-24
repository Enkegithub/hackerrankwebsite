export default function Council() {
  const members = [
    { id: 1, name: "Nitesh Kushwaha", role: "CLUB LEAD", image: "/nk.heic" },
    { id: 2, name: "Pushpa Bhandari", role: "VICE LEAD", image: "/member2.jpg" },
    { id: 3, name: "Newton Adhikari", role: "TECH HEAD", image: "/member3.jpg" },
    { id: 4, name: "Pranshu Chaudhary", role: "EVENT HEAD", image: "/member4.jpg" },
    { id: 5, name: "Kishor Vodi", role: "DESIGN HEAD", image: "/member5.jpg" },
    { id: 6, name: "Shreetrith ", role: "PR HEAD", image: "/member6.jpg" },
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
              className={`flex flex-col items-center ${
                i % 2 !== 0 ? "mt-12" : ""
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
