import { useState } from "react";
import { memories } from "../../data/timeline";
import { motion, AnimatePresence } from "framer-motion";

const Timeline = () => {
  const [videoSrc, setVideoSrc] = useState(null);

  return (
    <div className="min-h-screen bg-linear-to-b from-[#FFF6F9] to-[#FFE9F1] px-5 pb-24 pt-6">

      <h2 className="text-center text-2xl font-[Parisienne] text-pink-600 mb-8">
        Our Moments Through Time
      </h2>

      <div className="space-y-10">
        {memories.map((m, index) => {
          const isVideo = Boolean(m.video);

          return (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${
                index % 2 === 0 ? "items-start" : "items-end"
              }`}
            >
              <div className="w-[85%] bg-white rounded-3xl shadow-md p-3 border border-pink-100">
                
                {/* VIDEO CARD */}
                {isVideo ? (
                  <div
                    className="relative rounded-2xl overflow-hidden cursor-pointer"
                    onClick={() => setVideoSrc(m.video)}
                  >
                    <img
                      src={m.image}
                      className="w-full h-48 object-cover opacity-70"
                    />

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/70 p-3 rounded-full shadow">
                        <svg width="28" height="28" viewBox="0 0 24 24">
                          <path
                            fill="#ff4fa5"
                            d="M8 5v14l11-7z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                ) : (
                  // NORMAL IMAGE CARD
                  <img
                    src={m.image}
                    className="w-full h-48 object-cover rounded-2xl"
                  />
                )}

                <div className="mt-3">
                  <h3 className="text-pink-600 font-semibold">{m.title}</h3>
                  <p className="text-gray-500 text-sm mt-1">{m.desc}</p>
                  <p className="text-pink-400 text-xs mt-1">{m.date}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* FULLSCREEN VIDEO PLAYER */}
      <AnimatePresence>
        {videoSrc && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setVideoSrc(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="w-full h-full max-w-[600px]"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                src={videoSrc}
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            </motion.div>

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setVideoSrc(null)}
              className="absolute top-5 right-5 text-white text-3xl"
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Timeline;
