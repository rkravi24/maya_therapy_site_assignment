import Image from "next/image";
import Reveal from "@/components/Reveal";

const specialties = [
  {
    title: "Anxiety",
    description:
      "Persistent worry and mental tension can make it difficult to feel calm or present. Together, we’ll work to reduce anxiety and help you feel more grounded in daily life.",
    image: "/specialties/anx.jpg",
    focal: "object-[14%_58%]",
  },
  {
    title: "Trauma",
    description:
      "Past experiences can continue to shape how safe you feel in your body and relationships. Therapy offers a steady, supportive space for healing and regulation.",
    image: "/specialties/traumaa.jpg",
    focal: "object-[54%_100%]",
  },
  {
    title: "Burnout",
    description:
      "Chronic stress and high expectations can lead to exhaustion and disconnection. Therapy can help you slow down, reconnect, and restore balance.",
    image: "/specialties/burn2.jpg",
    focal: "object-center",
  },
];

export default function MySpecialties() {
  return (
    <section className="bg-primary py-20 px-6 md:px-12">
      <div className="max-w-8xl mx-auto">

        {/* SECTION TITLE */}
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-semibold text-textDark">
              My Specialties
            </h2>
          </div>
        </Reveal>

        {/* GRID */}
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((item, index) => (
            <Reveal key={index} delay={index * 120}>
              <li className="bg-secondary p-6 flex flex-col items-start border border-textDark/10">

                {/* TEXT */}
                <div className="w-full">
                  <h3 className="text-[1.2rem] font-medium text-textDark mb-[10%]">
                    {item.title}
                  </h3>
                  <p className="text-[0.9rem] leading-relaxed text-[#3A4A32]">
                    {item.description}
                  </p>
                </div>

                {/* IMAGE */}
                <div className="w-[75%] mx-auto mt-[10%]">
                  <div className="relative aspect-square rounded-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className={`object-cover ${item.focal}`}
                    />
                  </div>
                </div>

              </li>
            </Reveal>
          ))}
        </ul>

      </div>
    </section>
  );
}
