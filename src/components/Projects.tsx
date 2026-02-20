import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Maximize, BedDouble, ChevronLeft, ChevronRight } from "lucide-react";
import { projects, type Project } from "@/data/content";

const INITIAL_COUNT = 3;

const ProjectCard = ({ project }: { project: Project }) => {
  const [currentImg, setCurrentImg] = useState(0);

  const nextImg = () => setCurrentImg((p) => (p + 1) % project.images.length);
  const prevImg = () => setCurrentImg((p) => (p - 1 + project.images.length) % project.images.length);

  return (
    <div className="card-luxury overflow-hidden p-0 group">
      {/* Image Carousel */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={project.images[currentImg]}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        {/* Badge */}
        <span className="absolute top-4 left-4 bg-gold text-accent-foreground text-xs font-semibold px-3 py-1.5 rounded-full">
          {project.badge}
        </span>
        {/* Arrows */}
        <button
          onClick={prevImg}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Previous image"
        >
          <ChevronLeft size={16} />
        </button>
        <button
          onClick={nextImg}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Next image"
        >
          <ChevronRight size={16} />
        </button>
        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {project.images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentImg(i)}
              className={`w-1.5 h-1.5 rounded-full transition-all ${
                i === currentImg ? "bg-white w-4" : "bg-white/50"
              }`}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 md:p-6">
        <p className="text-xs text-gold font-medium tracking-wider uppercase mb-1">{project.location}</p>
        <h3 className="font-display text-xl font-semibold mb-2">{project.name}</h3>
        <p className="text-body-sm line-clamp-2 mb-4">{project.description}</p>

        {/* Info Row */}
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground mb-5 border-t border-border pt-4">
          <span className="flex items-center gap-1.5"><Calendar size={14} className="text-gold" />{project.handover_year}</span>
          <span className="flex items-center gap-1.5"><Maximize size={14} className="text-gold" />{project.size_range}</span>
          <span className="flex items-center gap-1.5"><BedDouble size={14} className="text-gold" />{project.bedrooms_range}</span>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <a href="#contact" className="btn-primary flex-1 text-xs py-2.5 text-center">I'm Interested</a>
          <a href={project.brochure_link} className="btn-outline flex-1 text-xs py-2.5 text-center">Download Brochure</a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? projects : projects.slice(0, INITIAL_COUNT);

  return (
    <section id="projects" className="section-padding bg-secondary">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-gold text-sm font-semibold tracking-[0.15em] uppercase mb-4">Our Portfolio</p>
          <h2 className="heading-section">Latest Launches</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {!showAll && projects.length > INITIAL_COUNT && (
          <div className="text-center mt-10">
            <button onClick={() => setShowAll(true)} className="btn-outline">
              Load More Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
