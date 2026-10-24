export default function Home() {
  return (
    <main>
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="brand" href="#top">MEK<span>.</span></a>
        <div className="nav-links"><a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a></div>
        <a className="nav-status" href="mailto:Mhmd.9winner@gmail.com"><i /> Open to work</a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Computer Science Graduate <span>/</span> Full-Stack &amp; AI Integration</p>
          <h1>Software that<br /><em>moves work</em> forward.</h1>
          <p className="hero-intro">I&apos;m Mohamad El Kassem, a Beirut-based developer building practical web products, reliable data systems, and thoughtful AI integrations.</p>
          <div className="hero-actions"><a className="button button-dark" href="#work">Explore my work <span>↘</span></a><a className="text-link" href="mailto:Mhmd.9winner@gmail.com">Let&apos;s talk <span>↗</span></a></div>
        </div>
        <div className="hero-mark" aria-hidden="true"><div className="mark-ring ring-one" /><div className="mark-ring ring-two" /><div className="mark-core">MEK</div><span className="mark-caption">BUILD / LEARN / SHIP</span></div>
        <div className="hero-footer"><span>Based in Beirut, Lebanon</span><span>Available for Canada / Remote / Relocation</span><span className="scroll-note">Scroll to explore ↓</span></div>
      </section>

      <section className="statement" id="about"><p className="section-kicker">01 / Profile</p><div><h2>Turning complex requirements into <span>clear digital products.</span></h2><p className="statement-body">Dedicated and results-oriented Computer Science graduate with a foundation in software engineering, database optimization, and practical AI application integration. I care about clean code, useful interfaces, and systems that hold up when real people depend on them.</p></div></section>

      <section className="skills-band"><div className="section-kicker">02 / Toolkit</div><div className="skill-grid"><div><span className="skill-number">01</span><h3>Build</h3><p>JavaScript (ES6+), Python, Java, C++, HTML5, CSS3</p></div><div><span className="skill-number">02</span><h3>Connect</h3><p>React.js, Node.js, Express.js, RESTful APIs, AI APIs</p></div><div><span className="skill-number">03</span><h3>Structure</h3><p>PostgreSQL, MySQL, normalization, SQL query optimization</p></div><div><span className="skill-number">04</span><h3>Deliver</h3><p>Git, GitHub, VS Code, Postman, Agile / Scrum</p></div></div></section>

      <section className="work-section" id="work"><div className="section-heading"><p className="section-kicker">03 / Selected work</p><p className="heading-note">Two projects from the studio</p></div>
        <article className="project project-primary"><div className="project-visual pharmacy-visual"><span className="visual-label">PH / 01</span><div className="pharmacy-card"><span>INVENTORY / LIVE</span><strong>1,284</strong><small>items monitored</small><div className="chart"><i /><i /><i /><i /><i /><i /><i /></div></div></div><div className="project-info"><p className="project-type">Full-Stack Web Application</p><h2>Pharmacy Management<br /><em>System</em></h2><p>Admin-focused operations platform for medication stock, pricing, and supplier records. An integrated AI chatbot turns inventory questions into fast, useful answers and flags reorder needs before shelves go empty.</p><div className="tag-list"><span>Node.js / Express</span><span>React.js</span><span>SQL</span><span>AI Integration</span></div></div></article>
        <article className="project project-secondary"><div className="project-info"><p className="project-type">Database Architecture Project</p><h2>Enterprise Database<br /><em>Management</em></h2><p>A normalized relational foundation for corporate operations and transaction handling, with a focus on data integrity, maintainability, and query performance.</p><div className="tag-list"><span>PostgreSQL</span><span>MySQL</span><span>3NF Design</span><span>Stored Procedures</span></div></div><div className="project-visual database-visual"><span className="visual-label">DB / 02</span><div className="schema-lines"><span /><span /><span /><span /><span /></div><div className="schema-node node-a">USERS</div><div className="schema-node node-b">ORDERS</div><div className="schema-node node-c">PRODUCTS</div></div></article>
      </section>

      <section className="credentials"><div className="section-kicker">04 / Credentials</div><div className="credential-columns"><div><p className="small-label">Education</p><h3>Bachelor of Science<br />in Computer Science</h3><p>Lebanese International University (LIU)</p></div><div><p className="small-label">Languages</p><h3>Arabic <span>Native</span><br />English <span>Professional</span></h3></div><div><p className="small-label">Focus</p><h3>Full-Stack<br />AI Integration</h3><p>Web apps · APIs · Data systems</p></div></div></section>

      <footer id="contact"><div className="footer-top"><p className="section-kicker">05 / Contact</p><h2>Let&apos;s build something<br /><em>useful.</em></h2><a className="contact-email" href="mailto:Mhmd.9winner@gmail.com">Mhmd.9winner@gmail.com <span>↗</span></a></div><div className="footer-bottom"><span>© 2026 Mohamad El Kassem</span><span>Beirut, Lebanon</span><div><a href="tel:+96181959041">+961 81 959 041</a><a href="https://github.com/12332479-tech" target="_blank" rel="noreferrer">GitHub ↗</a></div></div></footer>
    </main>
  );
}
