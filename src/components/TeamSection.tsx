import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { Linkedin, Mail } from 'lucide-react';

const team = [
  { name: 'Vivek Upadhyay', role: 'Founder & CEO', expertise: 'SAP Strategy & Leadership', initials: 'VU' },
  { name: 'Aarti Yadav', role: 'Technical Head', expertise: 'S/4HANA Architecture', initials: 'AV' },
  { name: 'Rajat Mishra', role: 'VP - SAP Consulting', expertise: 'Head of AI & Innovation', initials: 'RM' },
];

const gradients = [
  'from-blue-500 to-cyan-500',
  'from-cyan-500 to-teal-500',
  'from-blue-600 to-blue-400',
  'from-violet-500 to-blue-500',
  'from-indigo-500 to-cyan-500',
  'from-emerald-500 to-cyan-500',
  'from-blue-500 to-indigo-500',
  'from-cyan-500 to-blue-500',
];

const TeamSection = () => (
  <section id="team" className="py-24 lg:py-36 relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-[0.02]"
      style={{ background: 'radial-gradient(circle, hsl(195 100% 50%), transparent 70%)' }} />

    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <AnimatedSection className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 mb-6">
          <span className="text-primary font-bold text-xs uppercase tracking-[0.15em]">Our Leadership</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-5">
          Meet Our <span className="gradient-text">Expert Team</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Industry veterans with decades of combined SAP experience driving digital transformation for global enterprises.
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {team.map((member, i) => (
          <AnimatedSection key={member.name} delay={i * 0.08} direction="scale">
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="glass-card overflow-hidden group"
            >
              {/* Avatar area */}
              <div className="relative h-48 flex items-center justify-center overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${gradients[i]} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
                <div className="absolute inset-0 opacity-[0.03]" style={{
                  backgroundImage: 'radial-gradient(circle at 50% 50%, hsl(195 100% 50%), transparent 70%)',
                }} />
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 3 }}
                  className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${gradients[i]} flex items-center justify-center shadow-lg relative z-10`}
                >
                  <span className="font-display text-2xl font-extrabold" style={{ color: 'hsl(0 0% 100%)' }}>
                    {member.initials}
                  </span>
                </motion.div>
              </div>

              {/* Info */}
              <div className="p-6 text-center">
                <h3 className="font-display text-lg font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-semibold text-sm mb-2">{member.role}</p>
                <p className="text-xs text-muted-foreground mb-4">{member.expertise}</p>
                <div className="flex justify-center gap-2">
                  <motion.button
                    whileHover={{ scale: 1.15 }}
                    className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.15 }}
                    className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
