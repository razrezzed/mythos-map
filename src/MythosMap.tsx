import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useSound from "use-sound";

const ambientSound = "/ambient-loop.mp3";

const nodes = [
  {
    id: "lost-civs",
    title: "Lost Civilizations",
    description: "Explore ancient knowledge, hidden cities, and forgotten cycles of human history.",
    x: 100,
    y: 200,
  },
  {
    id: "post-symbolic",
    title: "Post-Symbolic Consciousness",
    description: "A journey beyond language into raw perception and multi-sensory communication.",
    x: 400,
    y: 100,
  }
];

export default function MythosMap() {
  const [activeNode, setActiveNode] = useState(null);
  const [play] = useSound(ambientSound, { loop: true, volume: 0.4 });

  useEffect(() => {
    play();
  }, [play]);

  return (
    <div className="relative w-full h-screen bg-black text-white">
      {nodes.map((node) => (
        <motion.div
          key={node.id}
          className="absolute"
          style={{ left: node.x, top: node.y }}
        >
          <button
            onClick={() => setActiveNode(node)}
            className="rounded-full bg-white text-black px-4 py-2 shadow-lg"
          >
            {node.title}
          </button>
        </motion.div>
      ))}

      <AnimatePresence>
        {activeNode && (
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"
          >
            <div className="bg-white text-black p-4 rounded shadow-lg w-[300px]">
              <h2 className="text-xl font-bold mb-2">{activeNode.title}</h2>
              <p>{activeNode.description}</p>
              <button onClick={() => setActiveNode(null)} className="mt-3 underline text-blue-600">Close</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
