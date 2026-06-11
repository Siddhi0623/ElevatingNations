import houseImg from "../assets/house.png";
import peopleImg from "../assets/people.png";
import plantImg from "../assets/leaf.png";
const HouseIcon = () => (
  <img src={houseImg} alt="Safe Transitional Housing" className="w-20 h-20 object-contain shrink-0" />
)

const PeopleIcon = () => (
  <img src={peopleImg} alt="Support Pathways" className="w-20 h-20 object-contain shrink-0" />
)

const PlantIcon = () => (
  <img src={plantImg} alt="Fresh Starts & Stability" className="w-20 h-20 object-contain shrink-0" />
)

const services = [
  {
    Icon: HouseIcon,
    title: 'Safe Transitional Housing',
    description:
      'Providing safe and stable accommodation for individuals and families transitioning from difficult circumstances.',
  },
  {
    Icon: PeopleIcon,
    title: 'Support Pathways',
    description:
      'Light-touch support, welfare check-ins, and signposting to specialist external services and community organisations.',
  },
  {
    Icon: PlantIcon,
    title: 'Fresh Starts & Stability',
    description:
      'Helping people move towards independence through safe environments, dignity, and long-term housing stability.',
  },
]

export default function WhatWeProvide() {
  return (
    <section id="what-we-do" className="bg-[#EAE4D8] py-12 px-6 sm:px-12 lg:px-20">
      <p className="label-gold text-center mb-10">What We Provide</p>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3">
        {services.map(({ Icon, title, description }, i) => (
          <div
            key={title}
            className={`flex flex-row items-start gap-4 px-8 py-4
              ${i !== 0 ? 'border-t md:border-t-0 md:border-l border-gray-400/30' : ''}
            `}
          >
            <Icon />
            <div>
              <h3 className="font-serif text-lg text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
