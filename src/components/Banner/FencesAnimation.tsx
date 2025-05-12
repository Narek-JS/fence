import Image from "next/image";

const configs = [
  { left: "10%", animationDelay: "0s", color: "white" },
  { left: "20%", animationDelay: "0.5s", color: "primary" },
  { left: "30%", animationDelay: "1s", color: "white" },
  { left: "40%", animationDelay: "1.5s", color: "primary" },
  { left: "50%", animationDelay: "2s", color: "white" },
  { left: "60%", animationDelay: "2.5s", color: "primary" },
  { left: "70%", animationDelay: "3s", color: "white" },
  { left: "80%", animationDelay: "3.5s", color: "primary" },
  { left: "85%", animationDelay: "4s", color: "white" },
];

const FencesAnimation: React.FC = () => {
  return configs.map(({ animationDelay, left, color }, idx) => (
    <Image
      className="hidden sm:inline absolute bottom-[-40px] animate-float-fence pointer-events-none text-white"
      src={`/images/fence-${color}.webp`}
      style={{ left, animationDelay }}
      alt="Floating fence"
      height={40}
      width={40}
      key={idx}
    />
  ));
};

export { FencesAnimation };
