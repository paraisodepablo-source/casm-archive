import { motion } from "framer-motion";

type PointerState = {
  x: number;
  y: number;
};

type HeroSculptureCanvasProps = {
  pointer: PointerState;
  reduceMotion: boolean;
};

export function HeroSculptureCanvas({ pointer, reduceMotion }: HeroSculptureCanvasProps) {
  const tiltX = reduceMotion ? 0 : pointer.y * -8;
  const tiltY = reduceMotion ? 0 : pointer.x * 9;

  return (
    <motion.div
      className="hero-loop-scene"
      animate={
        reduceMotion
          ? undefined
          : {
              rotateX: [tiltX, tiltX + 4, tiltX - 3, tiltX],
              rotateY: [tiltY, tiltY + 5, tiltY - 4, tiltY],
            }
      }
      transition={{ duration: 28, ease: "linear", repeat: Infinity }}
      style={{ rotateX: tiltX, rotateY: tiltY }}
    >
      <motion.div
        className="hero-loop-core"
        animate={reduceMotion ? undefined : { rotate: [0, 360] }}
        transition={{ duration: 64, ease: "linear", repeat: Infinity }}
      >
        <div className="hero-loop-chromatic" aria-hidden />
        <div className="hero-loop-inner" aria-hidden />
        <div className="hero-loop-rim" aria-hidden />
        <motion.div
          className="hero-loop-flow"
          animate={reduceMotion ? undefined : { rotate: [0, -360] }}
          transition={{ duration: 48, ease: "linear", repeat: Infinity }}
        />
      </motion.div>
      <div className="hero-loop-shadow" aria-hidden />
    </motion.div>
  );
}
