 /* Here we are going to develop the website's 3D computer */
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>

      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        {/* Div for showing name and tagline */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Eastern Coal Field <span className='text-[#915EFF]'>Limited</span>
          </h1>
          <p className={`${styles.heroSubText} mt-1 text-white-10`}>
           Developed By  <br className='sm:block hidden' />
             System Department !
          </p>
        </div>
      </div>
      {/* Renderinf ComputerCanvas Component */}
      <ComputersCanvas />
      
      {/*Here we will develop the coll scrolling GIF that let people know that you can scroll down from here  */}

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        
        <a href='#about'>
            {/* Now let us develop the point which will move up and down in this "rectangular div"*/}
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
           {/*For developing this div we have used "Framer Motion" */}
      </div>



    </section>
  );
};

export default Hero;