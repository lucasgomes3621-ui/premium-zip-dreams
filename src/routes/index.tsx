import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { Navbar } from "../components-site/Navbar";
import { Hero } from "../components-site/Hero";
import { ManifestoSection } from "../components-site/ManifestoSection";
import { ProjectsSection } from "../components-site/ProjectsSection";
import { ServicesSection } from "../components-site/ServicesSection";
import { FeaturesSection } from "../components-site/FeaturesSection";
import { ProcessSection } from "../components-site/ProcessSection";
import { AboutSection } from "../components-site/AboutSection";
import { FounderSection } from "../components-site/FounderSection";
import { ContactSection } from "../components-site/ContactSection";
import { Footer } from "../components-site/Footer";
import { AuroraNexusBackground } from "../components-site/AuroraNexusBackground";
import { InteractiveCursor } from "../components-site/InteractiveCursor";
import { ImageModal } from "../components-site/ImageModal";
import { ProjectDetailModal } from "../components-site/ProjectDetailModal";
import type { ProjectItem } from "../types";

const TITLE = "Gomes Studio | Design Digital & Soluções Web Premium";
const DESCRIPTION =
  "Estúdio especializado em landing pages, páginas profissionais e experiências digitais que apresentam empresas, produtos e serviços com clareza e personalidade.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [activeSection, setActiveSection] = useState("inicio");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedService, setSelectedService] = useState<string>("Landing Page Profissional");

  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState("");
  const [modalImageTitle, setModalImageTitle] = useState("");
  const [modalCodeSnippet, setModalCodeSnippet] = useState<string | undefined>();

  useEffect(() => {
    const sections = [
      "inicio",
      "manifesto",
      "projetos",
      "servicos",
      "diferenciais",
      "processo",
      "sobre",
      "fundador",
      "contato",
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.id;
          if (id === "manifesto") setActiveSection("inicio");
          else if (id === "diferenciais" || id === "processo") setActiveSection("servicos");
          else setActiveSection(id);
        });
      },
      { threshold: 0.25, rootMargin: "-80px 0px -40% 0px" },
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleOpenImage = (src: string, title: string, codeSnippet?: string) => {
    setModalImageSrc(src);
    setModalImageTitle(title);
    setModalCodeSnippet(codeSnippet);
    setImageModalOpen(true);
  };

  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-[#05070A] text-[#E2E8F0] selection:bg-[#0066FF] selection:text-white">
      <AuroraNexusBackground />
      <InteractiveCursor />
      <Navbar activeSection={activeSection} />

      <main id="main-content" className="relative z-10 flex flex-1 flex-col">
        <Hero onImageClick={handleOpenImage} />
        <ManifestoSection />
        <ProjectsSection
          onImageClick={handleOpenImage}
          onSelectProject={(proj) => setSelectedProject(proj)}
        />
        <ServicesSection onSelectService={(name) => setSelectedService(name)} />
        <FeaturesSection />
        <ProcessSection />
        <AboutSection />
        <FounderSection onImageClick={handleOpenImage} />
        <ContactSection initialService={selectedService} />
      </main>

      <Footer />

      <ImageModal
        isOpen={imageModalOpen}
        onClose={() => setImageModalOpen(false)}
        imageSrc={modalImageSrc}
        title={modalImageTitle}
        codeSnippet={modalCodeSnippet}
      />

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onImageClick={handleOpenImage}
      />
    </div>
  );
}
