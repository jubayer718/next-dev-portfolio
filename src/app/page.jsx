
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi"

//components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import Link from "next/link";
const Home = () => {
  return (
    <section className="h-full">
      <div className="container px-10 mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Frontend Web Developer</span>
            <h1 className="h1">
              Hello I'm <br /> <span className="text-[#00ff99]">Jubayer Ahmed</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at creating element digital experiences and I am proficient in various programming languages and technologies.
            </p>
            {/* btn & social */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <Link href="https://drive.google.com/file/d/1S04Z8ZYTIqKmYnAjhryXWyzVXhyjUFdX/view?usp=sharing" target="_blank">Download Resume</Link>
                <FiDownload className="text-xl"/>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyle="flex gap-6"
                iconStyles="w-9 h-9 border border-[#00ff99] rounded-full flex justify-center items-center text-[#00ff99] text-base hover:bg-[#00ff99] hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* photo */}
          <div className="order-1 xl:order-none">
           <Photo/>
          </div>

        </div>

        <Stats/>
      </div>
    </section>
  );
};

export default Home;