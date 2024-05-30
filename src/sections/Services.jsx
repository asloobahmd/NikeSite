import { services } from "../constants";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
    <section className="pt-5 pb-16">
      <div className="container p-3 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
