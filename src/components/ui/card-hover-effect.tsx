import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { CardContainer, CardBody, CardItem } from "./3d-card";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-5 py-10 md:grid-cols-2 lg:grid-cols-3",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item?.title}
          className="group relative block h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
<<<<<<< HEAD
                className="absolute inset-0 h-full w-full bg-[#00AAE7]/10 block rounded-3xl"
=======
                className="absolute inset-0 block h-full w-full rounded-2xl bg-white/[0.04]"
>>>>>>> ee707cd74b33935e25fafac40d41dd434525ad26
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.2 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15 },
                }}
              />
            )}
          </AnimatePresence>
          <CardContainer containerClassName="w-full h-full p-0 flex items-center justify-center py-0">
            <CardBody className="w-full h-full">
              <Card>
                <CardItem translateZ="30" className="flex items-center">{item.icon}</CardItem>
                <CardItem translateZ="40"><CardTitle>{item.title}</CardTitle></CardItem>
                <CardItem translateZ="20"><CardDescription>{item.description}</CardDescription></CardItem>
              </Card>
            </CardBody>
          </CardContainer>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
<<<<<<< HEAD
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-white border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
=======
        "relative z-20 h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-neutral-950 p-6 transition duration-300 group-hover:-translate-y-1 group-hover:border-cyan-300/40",
>>>>>>> ee707cd74b33935e25fafac40d41dd434525ad26
        className
      )}
    >
      <div className="relative z-50">
        {children}
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
<<<<<<< HEAD
    <h4 className={cn("text-black font-bold tracking-wide mt-4", className)}>
=======
    <h4 className={cn("mt-5 text-xl font-semibold text-white", className)}>
>>>>>>> ee707cd74b33935e25fafac40d41dd434525ad26
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
<<<<<<< HEAD
        "mt-8 text-black/70 tracking-wide leading-relaxed text-sm",
=======
        "mt-3 text-sm leading-relaxed text-neutral-400",
>>>>>>> ee707cd74b33935e25fafac40d41dd434525ad26
        className
      )}
    >
      {children}
    </p>
  );
};
