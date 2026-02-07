import Image from "next/image";

const specialties = [
  {
    title: "Anxiety",
    description: `Constant worry, tension, and overthinking can leave you feeling on edge, exhausted, or stuck in your own head.
                  Together, we’ll work to calm your nervous system and help you feel more grounded and present in daily life.`,
    image: "/specialties/anx.jpg",
    focal: "object-[14%_58%]",
  },
  {
    title: "Trauma",
    description: `Past experiences can continue to influence how safe you feel in your body and relationships.
                  Trauma may show up as emotional reactivity, numbness, or chronic stress.
                  I’m here to help you move at a steady pace toward stability and healing.`,
    image: "/specialties/traumaa.jpg",
    focal: "object-[54%_100%]",
  },
  {
    title: "Burnout",
    description: `Ongoing stress and high expectations can lead to exhaustion and disconnection.
                  Burnout often affects motivation, emotional balance, and wellbeing.
                  Therapy offers space to slow down, reconnect, and restore balance.`,
    image: "/specialties/burn2.jpg",
    focal: "object-center",
  },
];

export default function MySpecialties() {
  return (
    <section className="bg-primary min-h-25 pb-20 p-12">
      <div className="max-w-8xl mx-auto">

        {/* SECTION TITLE */}
        <div className="text-center mb-12.5">
          <p className="text-3xl md:text-5xl font-semibold tracking-wide"> My Specialties </p>
        </div>

        {/* GRID */}
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {specialties.map((item, index) => (
            <li key={index} className="bg-secondary p-4 flex flex-col items-start border">
              {/* TEXT */}
              <div className="w-full">
                <h2 className="text-[1.2rem] font-medium mb-[10%]"> {item.title} </h2>
                <p className="text-[0.9rem] leading-relaxed">{item.description}</p>
              </div>

              {/* IMAGE */}
              <div className="w-[75%] mx-auto mt-[10%]">
                <div className="relative aspect-square rounded-full overflow-hidden">
                  <Image src={item.image} alt={item.title} fill className={`object-cover ${item.focal}`} />
                </div>
              </div>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}
