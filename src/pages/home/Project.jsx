import React, { useState } from 'react';
import { motion } from 'framer-motion';
import portfolioProjects from '../../data/data';

const Portfolio = () => {
  const [flippedCard, setFlippedCard] = useState(null);

  const handleCardClick = (id) => {
    setFlippedCard(flippedCard === id ? null : id);
  };

  return (
    <section className="container mx-auto">
      <div className="my-10 flex items-center flex-col">
        <h1 className="text-white text-3xl mb-4 font-bold">Recent Projects</h1>
        <h2 className="text-lg text-gray-200 text-center">
          Sebagai pengembang front-end, saya fokus membangun antarmuka yang ramping, responsif, dan ramah pengguna. Setiap proyek menunjukkan hasrat saya terhadap desain yang bersih dan pengalaman pengguna yang lancar. Jelajahi karya terbaru saya di bawah ini!
        </h2>
      </div>
      <div className="flex flex-wrap justify-center">
        {portfolioProjects.map((item) => (
          <div key={item.id} className="md:p-2 p-1 w-1/2 sm:w-1/3 lg:w-1/4 group">
            <div className="relative perspective" onClick={() => handleCardClick(item.id)}>
              <motion.div
                className="relative w-full h-[320px] transform-style-3d"
                animate={{ rotateY: flippedCard === item.id ? 180 : 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Front Side - Image */}
                <div className="absolute w-full h-full backface-hidden">
                  <img
                    src={item.img}
                    alt={`Project ${item.id}`}
                    className="w-full h-full object-cover rounded-3xl"
                  />
                </div>

                {/* Back Side - Blur with Project Info */}
                <motion.div
                  className="absolute w-full h-full rounded-3xl flex flex-col justify-center items-center"
                  style={{ transform: 'rotateY(180deg)' }}  // Rotate back to normal
                  initial={{ opacity: 0 }}
                  animate={{ opacity: flippedCard === item.id ? 1 : 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="absolute w-full h-full">
                    <img
                      src={item.img}
                      alt={`Project ${item.id}`}
                      className="w-full h-full object-cover rounded-3xl shadowcostum"
                      style={{ filter: 'blur(2px)' }}  // Add blur effect
                    />
                  </div>
                  <div className="absolute z-10 px-5 text-white">
                    <h3 className="text-xl md:text-2xl font-bold">{item.title}</h3>
                    <p className="text-sm md:text-base mt-2 text-center">{item.deskripsi}</p>
                    <a
                      href={item.link}
                      className="block mt-4 text-gray-200 bg-gradient-to-r from-[#0872BF] to-[#0D92AF] w-1/3 p-2 text-center rounded-xl shadow-2xl shadow-black"
                    >
                      Lihat Project
                    </a>

                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
