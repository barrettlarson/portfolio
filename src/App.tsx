import { useEffect, useState } from "react";
import "./index.css";

type ProjectImage = { src: string; alt: string };

function ProjectCarousel({
  images,
  onImageClick,
}: {
  images: ProjectImage[];
  onImageClick: (image: ProjectImage) => void;
}) {
  const [index, setIndex] = useState(0);
  const [dragStart, setDragStart] = useState<number | null>(null);
  const [dragOffset, setDragOffset] = useState(0);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>): void => {
    setDragStart(e.clientX);
    setDragOffset(0);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>): void => {
    if (dragStart === null) return;
    setDragOffset(e.clientX - dragStart);
  };

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>): void => {
    if (dragStart === null) return;
    const delta = e.clientX - dragStart;
    if (delta < -50 && index < images.length - 1) {
      setIndex(index + 1);
    } else if (delta > 50 && index > 0) {
      setIndex(index - 1);
    } else if (Math.abs(delta) < 8) {
      onImageClick(images[index]);
    }
    setDragStart(null);
    setDragOffset(0);
  };

  return (
    <div className="carousel">
      <div className="carousel-viewport">
        <div
          className="carousel-track"
          style={{
            transform: `translateX(calc(${-index * 100}% + ${dragOffset}px))`,
            transition: dragStart === null ? "transform 0.3s ease" : "none",
          }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={() => {
            setDragStart(null);
            setDragOffset(0);
          }}
        >
          {images.map((image) => (
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              draggable={false}
            />
          ))}
        </div>
      </div>
      <div className="carousel-dots">
        {images.map((image, i) => (
          <button
            key={image.src}
            className={i === index ? "dot active" : "dot"}
            onClick={() => setIndex(i)}
            aria-label={`Go to photo ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState<ProjectImage | null>(
    null,
  );

  useEffect(() => {
    if (!fullscreenImage) return;
    const onKeyDown = (e: KeyboardEvent): void => {
      if (e.key === "Escape") setFullscreenImage(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [fullscreenImage]);

  const scrollToSection = (id: string): void => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const hydroImages: ProjectImage[] = [
    { src: "/images/hydro-main.png", alt: "HydroScript main dashboard" },
    { src: "/images/hydro-login.png", alt: "HydroScript login page" },
  ];

  const ticketImages: ProjectImage[] = [
    { src: "/images/ticket-main.png", alt: "Main ticket page" },
    { src: "/images/ticket-checkout.png", alt: "Checkout process" },
    { src: "/images/ticket-payment.png", alt: "Payment completion" },
  ];

  return (
    <>
      <nav>
        <div className="name-div">
          <p>Barrett Larson 🧑🏻‍💻</p>
        </div>
        <div className="nav-buttons">
          <button onClick={() => scrollToSection("home")}>Home</button>
          <button onClick={() => scrollToSection("about-me")}>About</button>
          <button onClick={() => scrollToSection("experience")}>
            Experience
          </button>
          <button onClick={() => scrollToSection("projects")}>Projects</button>
          <button onClick={() => scrollToSection("interests")}>
            Interests
          </button>
        </div>
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>
      {menuOpen && (
        <div className="mobile-menu">
          <button onClick={() => scrollToSection("home")}>Home</button>
          <button onClick={() => scrollToSection("about-me")}>About</button>
          <button onClick={() => scrollToSection("experience")}>
            Experience
          </button>
          <button onClick={() => scrollToSection("projects")}>Projects</button>
          <button onClick={() => scrollToSection("interests")}>
            Interests
          </button>
        </div>
      )}
      <main id="home">
        <div className="left">
          <h1>Hi, I'm Barrett.👋</h1>
          <p className="hero-subtitle">
            CS @ Virginia Tech | SWE Intern @ Expedition Technology
          </p>
          <div className="cta">
            <a
              className="resume-btn"
              href="/BarrettLarsonResume2026.pdf"
              download
            >
              <img className="resume" src="images/resume.png" alt="My Resume" />
            </a>
            <a href="mailto:cbarrettl.jr@gmail.com" aria-label="Email Me">
              <img
                className="mail"
                src="images/gmail.png"
                alt="Email Barrett"
              />
            </a>
            <img
              className="linkedin"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
              alt="LinkedIn Logo"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/barrett-larson/",
                  "_blank",
                )
              }
            />
            <img
              className="github"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt="GitHub Logo"
              onClick={() =>
                window.open("https://github.com/barrettlarson", "_blank")
              }
            />
          </div>
        </div>
        <div className="right">
          <img id="headshot" src="/images/headshot.jpg" alt="Headshot" />
        </div>
      </main>
      <div className="about-me" id="about-me">
        <h1>About Me</h1>
        <h2>A bit about me</h2>
        <p>
          I'm Barrett Larson, a rising senior studying Computer Science at
          Virginia Tech. I'm passionate about building full-stack web
          applications that are both functional and intuitive. I've always
          enjoyed the challenge of solving complex problems through code.
          Whether I'm debugging a tricky algorithm, designing a database schema,
          or deploying a web app to the cloud, I'm driven by the process of
          turning ideas into meaningful, working software that people can
          actually use.
        </p>
        <h2>Technologies and Tools</h2>
        <p>
          Using a combination of cutting-edge technologies and reliable
          open-source software, I build user-focused, performant web
          applications.
        </p>
        <div className="technologies">
          <div className="items">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg" />
            <p>Python</p>
          </div>
          <div className="items">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" />
            <p>FastAPI</p>
          </div>
          <div className="items">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
            <p>TypeScript</p>
          </div>
          <div className="items">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
            <p>JavaScript</p>
          </div>
          <div className="items">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" />
            <p>React.js</p>
          </div>
          <div className="items">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg" />
            <p>PostgreSQL</p>
          </div>
          <div className="items">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" />
            <p>AWS</p>
          </div>
          <div className="items">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlalchemy/sqlalchemy-original-wordmark.svg" />
            <p>SQLAlchemy</p>
          </div>
          <div className="items">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg" />
            <p>Express.js</p>
          </div>
          <div className="items">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" />
            <p>Node.js</p>
          </div>
          <div className="items">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" />
            <p>MySQL</p>
          </div>
          <div className="items">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg" />
            <p>MongoDB</p>
          </div>
          <div className="items">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg" />
            <p>Java</p>
          </div>
          <div className="items">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" />
            <p>HTML5</p>
          </div>
          <div className="items">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" />
            <p>CSS3</p>
          </div>
        </div>
      </div>
      <div className="experience" id="experience">
        <h1>Experience</h1>
        <h2>Where I've worked</h2>
        <div className="exp-list">
          <div className="exp-card">
            <div className="exp-header">
              <div className="exp-title">
                <h3>Software Engineer Intern</h3>
                <span className="exp-company">Expedition Technology</span>
              </div>
              <span className="exp-date">May 2026 – Present</span>
            </div>
            <ul className="exp-bullets">
              <li>
                Architecting a real-time collaborative annotation editor over
                WebSockets, backed by FastAPI and PostgreSQL, with live
                presence, shared annotation rendering, throttled autosave, and
                conflict resolution via annotation-level locking.
              </li>
              <li>
                Implemented frontend features for an AI training data platform,
                including metadata-driven image boundary rendering with
                axis-based fallback for missing metadata.
              </li>
              <li>
                Validated changes across the codebase with Playwright end-to-end
                and Vitest unit tests, covering regression cases in existing
                TypeScript and React logic.
              </li>
              <li>
                Added server-side validation rejecting incompatible annotation
                types before dataset ingestion.
              </li>
            </ul>
            <div className="exp-tags">
              <span className="tag">Python</span>
              <span className="tag">FastAPI</span>
              <span className="tag">WebSockets</span>
              <span className="tag">TypeScript</span>
              <span className="tag">React</span>
              <span className="tag">PostgreSQL</span>
            </div>
          </div>
          <div className="exp-card">
            <div className="exp-header">
              <div className="exp-title">
                <h3>Software Developer Intern</h3>
                <span className="exp-company">CARFAX</span>
              </div>
              <span className="exp-date">May 2025 – Aug 2025</span>
            </div>
            <ul className="carfax-bullets">
              <li>
                Developed and deployed an AWS Lambda function that queried
                Salesforce and published results to respective AWS SNS topics.
              </li>
              <li>
                Upgraded Java/Spring Boot codebases, resolving runtime-breaking
                issues and addressing security vulnerabilities.
              </li>
              <li>
                Refactored legacy Node.js Lambda functions into Python, and
                improved reliability with pytest-based unit tests.
              </li>
            </ul>
            <div className="exp-tags">
              <span className="tag">Java</span>
              <span className="tag">Spring Boot</span>
              <span className="tag">AWS Lambda</span>
              <span className="tag">Python</span>
            </div>
          </div>
        </div>
      </div>
      <div className="projects" id="projects">
        <h1>Projects</h1>
        <h2>What I've built</h2>
        <div className="project">
          <h3>HydroScript</h3>
          <p>
            A full-stack pool/spa automation system for Jandy iAqualink
            controller.
          </p>
          {hydroImages.length > 0 && (
            <ProjectCarousel
              images={hydroImages}
              onImageClick={setFullscreenImage}
            />
          )}
          <p>
            <strong>Tech Stack: </strong>Python, FastAPI, TypeScript React.js
          </p>
          <a
            href="https://github.com/barrettlarson/hydro-script"
            className="code-btn"
          >
            View On GitHub
          </a>
        </div>
        <div className="project">
          <h3>Fraternity Formals Ticket Platform</h3>
          <p>
            A complete ticket-purchasing platform as a fee-free alternative to
            third-party ticketing services.
          </p>
          <ProjectCarousel
            images={ticketImages}
            onImageClick={setFullscreenImage}
          />
          <p>
            <strong>Tech Stack: </strong>React.js, Express.js, MongoDB, Node.js
          </p>
          <a
            href="https://github.com/barrettlarson/formals-tix"
            className="code-btn"
          >
            View On GitHub
          </a>
        </div>
      </div>
      <div className="interests" id="interests">
        <h1>Interests</h1>
        <h2>A few things I enjoy outside of coding</h2>
        <div className="hobbies">
          <div className="items">
            <img src="/images/weightlifting.png" />
            <p>Weightlifting</p>
          </div>
          <div className="items">
            <img src="/images/strategy.png" />
            <p>Chess</p>
          </div>
          <div className="items">
            <img src="/images/piano.png" />
            <p>Piano</p>
          </div>
          <div className="items">
            <img src="/images/disc-golf.png" />
            <p>Disc Golf</p>
          </div>
          <div className="items">
            <img src="/images/swimming.png" />
            <p>Swimming</p>
          </div>

          <div className="items">
            <img src="/images/dunk.png" />
            <p>Basketball</p>
          </div>
          <div className="items">
            <img src="/images/arcade-machine.png" />
            <p>Gaming</p>
          </div>
          <div className="items">
            <img src="/images/reading-book.png" />
            <p>Reading</p>
          </div>
          <div className="items">
            <img src="/images/game.png" />
            <p>Golf</p>
          </div>
          <div className="items">
            <img src="/images/wheat.png" />
            <p>Catan</p>
          </div>
          <div className="items">
            <img src="/images/guitar.png" />
            <p>Guitar</p>
          </div>
          <div className="items">
            <img src="/images/pickle.png" />
            <p>Pickleball</p>
          </div>
        </div>
      </div>
      {fullscreenImage && (
        <div className="lightbox" onClick={() => setFullscreenImage(null)}>
          <img src={fullscreenImage.src} alt={fullscreenImage.alt} />
        </div>
      )}
      <footer>
        <p>© 2026 Barrett Larson · Built with React</p>
      </footer>
    </>
  );
}

export default App;
