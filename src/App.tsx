import "./index.css";

function App() {
  const scrollToSection = (id: string): void => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const ctrlImages: string[] = [
    "/images/ctrl-main.png",
    "/images/ctrl-checkout.png",
    "/images/ctrl-stripe.png",
  ];
  let ctrlIndex = 0;

  const swipeLeft = (): void => {
    ctrlIndex = (ctrlIndex - 1 + ctrlImages.length) % ctrlImages.length;
    (document.querySelector(".project-photo-ctrl") as HTMLImageElement).src =
      ctrlImages[ctrlIndex];
  };

  const swipeRight = (): void => {
    ctrlIndex = (ctrlIndex + 1) % ctrlImages.length;
    (document.querySelector(".project-photo-ctrl") as HTMLImageElement).src =
      ctrlImages[ctrlIndex];
  };

  return (
    <>
      <nav>
        <div className="name-div">
          <p>Barrett Larson 🧑🏻‍💻</p>
        </div>
        <div className="nav-buttons">
          <button onClick={() => scrollToSection("home")}>Home</button>
          <button onClick={() => scrollToSection("about-me")}>About</button>
          <button onClick={() => scrollToSection("experience")}>Experience</button>
          <button onClick={() => scrollToSection("projects")}>Projects</button>
          <button onClick={() => scrollToSection("interests")}>
            Interests
          </button>
        </div>
      </nav>
      <main id="home">
        <div className="left">
          <h1>Hi, I'm Barrett.👋</h1>
          <p>
            CS @ Virginia Tech | SWE Intern @ Expedition Technology
          </p>
          <div className="cta">
            <a
              className="resume-btn"
              href="/BarrettLarsonResume2025.pdf"
              download
            >
              Resume
            </a>
            <a href="mailto:cbarrettl.jr@gmail.com" aria-label="Email Me">
              <img
                className="mail"
                src="https://icons.veryicon.com/png/o/business/oa-office/mail-227.png"
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
                  "_blank"
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
          I'm Barrett Larson, a rising senior studying Computer Science at Virginia
          Tech. I'm passionate about building full-stack web applications that
          are both functional and intuitive. I've always enjoyed the challenge
          of solving complex problems through code. Whether I'm debugging a
          tricky algorithm, designing a database schema, or deploying a web app
          to the cloud, I'm driven by the process of turning ideas into
          meaningful, working software that people can actually use.
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
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg" />
            <p>Java</p>
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
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" />
            <p>FastAPI</p>
          </div>
          <div className="items">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" />
            <p>React.js</p>
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
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg" />
            <p>MongoDB</p>
          </div>
          <div className="items">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" />
            <p>MySQL</p>
          </div>
          <div className="items">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" />
            <p>HTML5</p>
          </div>
          <div className="items">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" />
            <p>CSS3</p>
          </div>
          <div className="items">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg" />
            <p>Git</p>
          </div>
          <div className="items">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" />
            <p>AWS</p>
          </div>
          <div className="items">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg" />
            <p>GitLab CI/CD</p>
          </div>
          <div className="items">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" />
            <p>Flask</p>
          </div>
          <div className="items">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original-wordmark.svg" />
            <p>Spring Boot</p>
          </div>
          <div className="items">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg" />
            <p>Docker</p>
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
              <li>Implementing backend and full-stack features for Solis, a storefront platform for buying and selling AI training data.</li>
              <li>Developing a collaborative annotation editor prototype using WebSockets and FastAPI.</li>
            </ul>
            <div className="exp-tags">
              <span className="tag">Python</span>
              <span className="tag">FastAPI</span>
              <span className="tag">WebSockets</span>
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
              <li>Developed and deployed an AWS Lambda function that queried Salesforce and published results to respective AWS SNS topics.
              </li>
              <li>Upgraded Java/Spring Boot codebases, resolving runtime-breaking issues
                and addressing security vulnerabilities.
              </li>
              <li>Refactored legacy Node.js Lambda functions into Python,
                and improved reliability with pytest-based unit tests.
              </li>
              <li>
                Automated infrastructure using AWS CloudFormation and implemented CI/CD pipelines using GitLab CI/CD.
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
        <h2>What I built</h2>
        <div className="proj-grid">
          <div className="card">
            <div className="card-content">
              <h3>CtrlAltSwap</h3>
              <p>
                A full-stack e-commerce platform for buying used computer parts
                and accessories.
              </p>
              <div className="project-images">
                <img
                  className="arrow"
                  onClick={swipeLeft}
                  src="/images/left-arrow.png"
                  alt="Left Arrow"
                />
                <img
                  className="project-photo-ctrl"
                  src="/images/ctrl-main.png"
                  alt="CtrlAltSwap project image"
                />
                <img
                  className="arrow"
                  onClick={swipeRight}
                  src="/images/right-arrow.png"
                  alt="Right Arrow"
                />
              </div>
              <p>
                <strong>Tech Stack: </strong>React.js, Express.js, MongoDB,
                Node.js, Jest
              </p>
            </div>
            <a
              href="https://github.com/barrettlarson/ctrl-alt-swap"
              className="code-btn"
            >
              View On GitHub
            </a>
          </div>
        </div>
      </div>
      <div className="interests" id="interests">
        <h1>Interests</h1>
        <h2>A few things I enjoy outside of coding</h2>
        <div className="hobbies">
          <div className="items">
            <img src="/images/swimming.png"></img>
            <p>Swimming</p>
          </div>
          <div className="items">
            <img src="/images/weightlifting.png"/>
            <p>Weightlifting</p>
          </div>
          <div className="items">
            <img src="/images/strategy.png" />
            <p>Chess</p>
          </div>
          <div className="items">
            <img src="/images/guitar.png" />
            <p>Guitar</p>
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
            <img src="/images/wheat.png" />
            <p>Catan</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
