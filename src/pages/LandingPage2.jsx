import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
const LandingPage2 = () => {
  return (
    <>
      {/* Services Section */}
      <div className="flex flex-wrap  justify-center  gap-6 mt-20">
        {[
          { img: "/images/videoConsultation.png", label: "  Online video Consultation" },
          { img: "/images/LabTest.png", label: "Lab Test" },
          { img: "/images/orderMedicine.png", label: "Medicine Delivery" },
          { img: "/images/homeConsulation.png", label: "Home Consultation " },
          { img: "/images/BookonlineAppointment.png", label: " Online Book Appointment " },
          { img: "/images/FindBloodDonores.png", label: " Find Blood Doner " },
        
        ].map((service, index) => (
          <div key={index} className="text-center w-40 ">
            <img
              src={service.img}
              alt={service.label}
              className="w-32 h-32 mx-auto object-contain"
            />
            <p className="text-gray-600 font-medium mt-2">{service.label}</p>
          </div>
        ))}
      </div>

    <Swiper
      className="mySwiper w-full max-w-6xl mx-auto mb-20 rounded-2xl"
      modules={[Autoplay]}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      loop={true}
    >
      <SwiperSlide>
        <a href="#" aria-label="Download from Play Store">
          <img
            src="/images/downloadFromDb.jpg"
            alt="Download from Play Store"
            className="rounded-2xl w-full "
          />
        </a>
      </SwiperSlide>

      <SwiperSlide>
        <a href="#" aria-label="Download from App Store">
          <img
            src="/images/downloadFromDb.png"
            alt="Download from App Store"
            className="rounded-2xl w-full "
          />
        </a>
      </SwiperSlide>
    </Swiper>
    </>
  );
};

export default LandingPage2;
