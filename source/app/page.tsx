import Hero from "@/components/Hero";
import { NavBar } from "@/components/ui/NavBar";
import { FaHome } from "react-icons/fa";
import { Grid } from "@/components/Grid";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col
    overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <NavBar navItems={[
          {name: 'Home', link: '/', icon: <FaHome/>}
        ]} />
        <Hero />
        <Grid/>
      </div>
    </main>
  );
}
