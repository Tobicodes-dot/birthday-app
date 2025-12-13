import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { letters } from "../../data/letters";

const Letters = () => {
  const [activeLetter, setActiveLetter] = useState(null);

  return (
    <div className="h-screen bg-linear-to-b from-[#FFF6F9] to-[#FFE9F1] px-6 pt-12 pb-24">

      <h2 className="text-center text-2xl font-[Parisienne] text-pink-600 mb-12">
        Letters for You
      </h2>

      {/* LETTER TILES */}
      <div className="grid grid-cols-2 gap-6">
        {letters.map((letter, index) => (
          <motion.div
            key={letter.id}
            whileTap={{ scale: 0.96 }}
            style={{
              rotate: index % 2 === 0 ? "-2deg" : "2deg",
            }}
            onClick={() => setActiveLetter(letter)}
            className="bg-[#FFFDFE] rounded-3xl px-6 py-8 shadow-md cursor-pointer border border-pink-100"
          >
            <p className="text-pink-600 text-center font-medium leading-snug">
              {letter.title}
            </p>
          </motion.div>
        ))}
      </div>

      {/* FULL LETTER VIEW */}
      <AnimatePresence>
        {activeLetter && (
          <motion.div
            className="fixed inset-0 bg-[#FFF6F9] z-50 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="min-h-screen px-7 pt-14 pb-20">
              <button
                onClick={() => setActiveLetter(null)}
                className="text-pink-500 mb-10"
              >
                ← back
              </button>

              <motion.div
                initial={{ scale: 0.96, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="bg-[#FFFDFE] rounded-[2.5rem] px-7 py-10 shadow-lg border border-pink-100"
              >
                <h3 className="text-center text-pink-600 text-xl font-[Parisienne] mb-6">
                  {activeLetter.title}
                </h3>

                <p className="text-gray-600 whitespace-pre-line leading-relaxed text-sm">
                  {activeLetter.body}
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Letters;
