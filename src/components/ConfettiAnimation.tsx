import { useEffect, useState } from "react";

const ConfettiAnimation = () => {
  const [confetti, setConfetti] = useState<Array<{ id: number; left: string; delay: number; color: string }>>([]);

  useEffect(() => {
    const colors = ['#e91e63', '#8e24aa', '#ffb300', '#ff6f00', '#f06292', '#ba68c8'];
    const newConfetti = [];
    
    for (let i = 0; i < 50; i++) {
      newConfetti.push({
        id: i,
        left: `${Math.random() * 100}%`,
        delay: Math.random() * 3,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
    
    setConfetti(newConfetti);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="absolute w-2 h-2 animate-confetti"
          style={{
            left: piece.left,
            backgroundColor: piece.color,
            animationDelay: `${piece.delay}s`,
            animationDuration: `${3 + Math.random() * 2}s`
          }}
        />
      ))}
    </div>
  );
};

export default ConfettiAnimation;