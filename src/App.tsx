import { motion, Variants } from "motion/react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.4,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 300, damping: 24 },
  },
};

export default function App() {
  return (
    <div className="relative min-h-screen bg-graphite text-white overflow-x-hidden font-sans">
      {/* Background Image with Parallax/Slow Zoom */}
      <motion.div 
        className="fixed inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 20, ease: "easeOut", repeat: Infinity, repeatType: "reverse" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-graphite/90 z-10" />
        <img 
          src="https://cracks.agency/wp-content/uploads/2026/03/foto-fondo-.png" 
          alt="Luxury Padel Court" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {/* Navigation */}
      <nav className="relative z-20 flex justify-center md:justify-start items-center px-8 py-6 md:px-16 md:py-10">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="flex items-center"
        >
          <motion.img 
            whileHover={{ scale: 1.05, rotate: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            src="https://cracks.agency/wp-content/uploads/2026/03/padel.png" 
            alt="Padel Club Logo" 
            className="h-20 md:h-28 w-auto object-contain cursor-pointer"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </nav>

      {/* Main Content */}
      <main className="relative z-20 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-4 pb-32 md:pb-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.1, ease: "easeOut" }}
          className="text-center mb-16 md:mb-24 flex flex-col items-center"
        >
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-gold text-xs md:text-sm tracking-[0.4em] uppercase mb-0 relative z-10"
          >
            BIENVENIDO AL MEJOR CLUB
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.4 }}
            className="flex justify-center mb-8 md:mb-12 -mt-10 md:-mt-16 relative z-0"
          >
            <img 
              src="https://cracks.agency/wp-content/uploads/2026/03/APC.png" 
              alt="Ambato Padel Center" 
              className="w-[80vw] max-w-[400px] md:max-w-[600px] h-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="max-w-md mx-auto text-white/60 font-light tracking-widest text-sm leading-relaxed uppercase"
          >
            Un club donde el deporte y el lujo crean una comunidad única.
          </motion.p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full max-w-4xl justify-center items-center px-4"
        >
          <ActionButton 
            title="Pádel Clases" 
            subtitle="Información" 
            href="https://api.whatsapp.com/send?phone=593939084371&text=Hola%20me%20gustaria%20conocer%20sobre%20las%20clases%20de%20padel"
          />
          <ActionButton 
            title="Pádel Reservas" 
            subtitle="Información" 
            href="https://api.whatsapp.com/send?phone=593939084371&text=Hola%20me%20gustaria%20reservar%20una%20cancha"
          />
          <ActionButton 
            title="GYM" 
            subtitle="Información" 
            href="https://api.whatsapp.com/send?phone=593963714090&text=Hola%20me%20gustaria%20saber%20mas%20sobre%20los%20planes%20del%20gimnasio"
          />
          <ActionButton 
            title="Tarjeta de Fidelidad" 
            subtitle="Obtén tu pase" 
            href="https://app.cards.roma-systems.com/getpass/1025148?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAQ0xDSwQgEVxleHRuA2FlbQlxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAaf6YgZFavyxYNfffyKGvUOEplNrjGpEqGuU8O2Xz1Wj-HbtN8vCX-YxC0drgA_aem_EldO1RAzhWrofbg7N6gVVQ"
          />
        </motion.div>
      </main>
    </div>
  );
}

function ActionButton({ title, subtitle, href, featured = false }: { title: string, subtitle: string, href: string, featured?: boolean }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      variants={itemVariants}
      whileHover={{ scale: 1.03, y: -5 }}
      whileTap={{ scale: 0.95 }}
      className={`relative group w-full h-32 md:h-36 flex flex-col items-center justify-center border transition-all duration-700 overflow-hidden backdrop-blur-sm
        ${featured 
          ? 'border-gold/50 bg-gold/5 hover:bg-gold/15 hover:border-gold hover:shadow-[0_0_40px_rgba(212,175,55,0.2)]' 
          : 'border-white/10 bg-black/20 hover:border-gold/40 hover:bg-black/40 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)]'
        }
      `}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      <span className={`font-serif text-2xl md:text-3xl mb-2 md:mb-3 relative z-10 transition-colors duration-700 text-center px-4
        ${featured ? 'text-gold-light' : 'text-white group-hover:text-gold-light'}
      `}>
        {title}
      </span>
      
      <span className="text-[9px] tracking-[0.3em] uppercase text-white/50 relative z-10 group-hover:text-white/80 transition-colors duration-700 text-center px-2">
        {subtitle}
      </span>
      
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white/20 group-hover:border-gold transition-colors duration-700" />
      <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/20 group-hover:border-gold transition-colors duration-700" />
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-white/20 group-hover:border-gold transition-colors duration-700" />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-white/20 group-hover:border-gold transition-colors duration-700" />
    </motion.a>
  );
}
