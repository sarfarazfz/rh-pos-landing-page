import Image from "next/image";
import Partners from "./components/partners";
import Testimonial from "./components/testimonials";

export default function Home() {
  return (
    <>
      <main>
        <Partners />
        <Testimonial />
      </main>
    </>
  );
}
