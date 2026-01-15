import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Testimonial = () => {
 
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(<FaStar key={`star-${i}`} className="text-yellow-400 inline-block mr-1" />);
      } else if (rating >= i - 0.5) {
        stars.push(<FaStarHalfAlt key={`half-${i}`} className="text-yellow-400 inline-block mr-1" />);
      } else {
        stars.push(<FaRegStar key={`empty-${i}`} className="text-yellow-400 inline-block mr-1" />);
      }
    }
    return stars;
  };


  const testimonials = [
    {
      id: 1,
      name: "Client One",
      role: "CEO, ExampleCorp",
      image: "https://i.pravatar.cc/100?img=1",
      review: "Iftekher delivered an outstanding solution for our web platform. Highly professional and great communication!",
      rating: 5
    },
    {
      id: 2,
      name: "Client Two",
      role: "CTO, TechFlow",
      image: "https://i.pravatar.cc/100?img=2",
      review: "We were impressed by his technical skills and clean code. The project was completed on time with excellent quality.",
      rating: 4.5
    },
    {
      id: 3,
      name: "Client Three",
      role: "Manager, StartUply",
      image: "https://i.pravatar.cc/100?img=3",
      review: "It was a pleasure working with Iftekher. He transformed our ideas into a fully functional web application.",
      rating: 4
    }
  ];

  return (
    <>
    <section id="testimonials" className="py-20 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 text-white">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-blue-600">Client Testimonials</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            What my clients say about my work and professionalism.
          </p>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
          className="max-w-3xl mx-auto"
        >
          {testimonials.map((client) => (
            <SwiperSlide key={client.id}>
              <div className="bg-zinc-800 p-8 rounded-xl shadow-lg text-center">
                <div className="flex justify-center mb-6">
                  <img
                    src={client.image}
                    alt={`${client.name}'s photo`}
                    className="w-20 h-20 rounded-full border-4 border-blue-600 object-cover shadow-md"
                  />
                </div>
                <p className="text-gray-300 mb-6 italic">“{client.review}”</p>
                <div className="text-blue-500 font-semibold">{client.name}</div>
                <div className="text-sm text-gray-400">{client.role}</div>
                <div className="flex justify-center mt-2">{renderStars(client.rating)}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  </>
  );
};

export default Testimonial;
