import services from "@/data/services";

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 bg-slate-50"
    >
      <div className="container-custom">

        <h2 className="text-5xl font-bold text-center mb-14">
          Our Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold">
                {service.title}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}