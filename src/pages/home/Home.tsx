import { BookingCta } from "./sections/BookingCTA";
import { Careers } from "./sections/Careers";
import { Doctors } from "./sections/Doctors";
import { Faq } from "./sections/Faq";
import { Hero } from "./sections/Hero";
import { Inpatient } from "./sections/Inpatient";
import { NewsBlog } from "./sections/NewsBlog";
import { Polyclinics } from "./sections/Polyclinics";
import { SupportServices } from "./sections/SupportService";

const Home = () => {
  return (
    <>
      <Hero />
      <Polyclinics />
      <Doctors />
      <Inpatient />
      <SupportServices />
      <NewsBlog />
      <Careers />
      <Faq />
      <BookingCta />
    </>
  );
};

export default Home;
