import HeroSection from "./components/HeroSection";
import { useProductContext } from "./context/productcontext";

const About = () => {
  const { myName } = useProductContext();
  
  const data = {
    name: "Mentors Academy",
    heading: "About",
    content: "We are the first company to provide mentorship to students who are confused or don't know how to start their carrer. We have 100+ world class industry level experienced mentors from Youtube and other platforms. Because we care about your Future 🙂"
  };

  return (
    <>
      {myName}
      <HeroSection myData={data} />
    </>
  );
};

export default About;