import Image from "next/image"

export default function GlimpsePage() {
  const images = [
    "/glimpse/1.jpg",
    "/glimpse/2.jpg",
    "/glimpse/3.jpg",
    "/glimpse/4.jpg",
    "/glimpse/5.jpg",
    "/glimpse/6.jpg",
  ]

  return (
    <section className="py-24 bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Club Glimpse
          </h1>
          <p className="text-muted-foreground text-lg">
            Moments from Hacker Rank Club activities, workshops & events
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg"
            >
              <Image
                src={src}
                alt={`Club activity ${index + 1}`}
                width={600}
                height={400}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <p className="text-white font-semibold tracking-wide">
                  Hacker Rank Club
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
