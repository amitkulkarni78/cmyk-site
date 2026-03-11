import React, { useState } from 'react'
import logo from './logo.png'
import cameraImage from './camera-gimble2.png'
import droneImage from './drone2.png'
import setupImage from './setbuilding2.png'
import photoImage from './photography2.png'
import videoImage from './videography.png'

const phoneNumbers = ['9960832761', '9373423380', '9860066964']

export const App: React.FC = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [videoFailed, setVideoFailed] = useState(false)

  return (
    <div className="site">
      <header className="site-header">
        <div className="logo-lockup">
          <img src={logo} alt="CMYK Media" className="logo-image" />
          <div className="logo-text">
            <span className="logo-title">CMYK Media</span>
          </div>
        </div>

        <nav className="site-nav">
          <a href="#about">About</a>
          <a href="#why">Why CMYK</a>
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </nav>
        <button
          type="button"
          className="mobile-nav-toggle"
          aria-label="Toggle navigation"
          aria-expanded={mobileNavOpen}
          onClick={() => setMobileNavOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      {mobileNavOpen && (
        <nav className="mobile-nav">
          <a href="#about" onClick={() => setMobileNavOpen(false)}>
            About
          </a>
          <a href="#why" onClick={() => setMobileNavOpen(false)}>
            Why CMYK
          </a>
          <a href="#services" onClick={() => setMobileNavOpen(false)}>
            Services
          </a>
          <a href="#process" onClick={() => setMobileNavOpen(false)}>
            Process
          </a>
          <a href="#work" onClick={() => setMobileNavOpen(false)}>
            Work
          </a>
          <a href="#contact" onClick={() => setMobileNavOpen(false)}>
            Contact
          </a>
        </nav>
      )}

      <main>
        <section className="hero">
          <div className="hero-content">
            <p className="eyebrow">MEDIA • CINEMATOGRAPHY • PHOTOGRAPHY</p>
            <h1>
              Create <span className="cmyk-highlight">Moments</span> That Matter
            </h1>
            <p className="hero-subtitle">
              CMYK Media is your premier partner for professional media services. From events
              and weddings to corporate films and brand promotions, we create content that
              builds your identity.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">
                Book a Consultation
              </a>
              <a href="#work" className="btn btn-ghost">
                View Our Work
              </a>
            </div>
          </div>
          <div className="video-content">
            <div className="video-frame">
              {videoFailed ? (
                <img
                  src="/poster.png"
                  alt="CMYK Media showreel poster"
                  className="hero-video"
                />
              ) : (
                <video
                  className="hero-video"
                  src="/sample_video.mp4"
                  controls
                  preload="metadata"
                  poster="/poster.png"
                  onError={() => setVideoFailed(true)}
                >
                  Sorry, your browser doesn&apos;t support embedded videos.
                </video>
              )}
            </div>
          </div>
          {/* <img src={cameraImage} className='hero-camera-image' alt="Professional camera on gimbal" style={{}}/> */}
          {/* <div className="hero-card">

           
            <div className="hero-card-header">
              <span className="badge badge-cyan">Videography</span>
              <span className="badge badge-magenta">Photography</span>
              <span className="badge badge-yellow">Branding</span>
            </div>
            <p className="hero-card-text">
              We are a one-stop marketing solution for positioning your brand in the market.
              Our team plans, shoots, and delivers content that speaks to your audience and
              supports your business goals.
            </p>
            <ul className="hero-list">
              <li>All types of events & corporate shoots</li>
              <li>Wedding cinematography & photography</li>
              <li>Stall & event setup design and fabrication</li>
              <li>Brand promotion with media planning & suggestions</li>
            </ul>
          </div> */}
        </section>

        <section id="focus" className="section section-focus">
          <div className="focus-inner">
            <div className="section-header">
              <h2>Videography, Photography &amp; Branding</h2>
              <p>
                We are a one-stop marketing solution for positioning your brand in the market. Our
                team plans, shoots, and delivers content that speaks to your audience and supports
                your business goals.
              </p>
            </div>
            <div className="section-header-image">
             {/*  <img
                src={droneImage}
                className="hero-drone-image"
                alt="Professional camera on gimbal"
                /> */}
                <img src={cameraImage} className='hero-camera-image' alt="Professional camera on gimbal" style={{}}/>
            </div>
          </div>
        {/*   <div className="focus-grid">
            <div className="focus-tags">
              <span className="badge badge-cyan">Videography</span>
              <span className="badge badge-magenta">Photography</span>
              <span className="badge badge-yellow">Branding</span>
            </div>

            <ul className="focus-list">
              <li>All types of events &amp; corporate shoots</li>
              <li>Wedding cinematography &amp; photography</li>
              <li>Stall &amp; event setup design and fabrication</li>
              <li>Brand promotion with media planning &amp; suggestions</li>
            </ul>
          </div> */}
        </section>

        <section id="about" className="section section-split">
          <div className="section-intro">
            <h2>Introduction</h2>
            <p>
              CMYK Media is your premier partner for professional media services. We specialize
              in all types of events, shoots, and brand promotion with strategic media planning
              and expert suggestions.
            </p>
            <p>
              Our goal is to deliver exceptional content that creates and strengthens your brand
              identity. With a dedicated team of experts, we manage your company image in a
              cohesive way to help you achieve your marketing goals.
            </p>
          </div>

          <div className="section-grid">
            <div className="info-card mission">
              <h3>Our Mission</h3>
              <p>
                To provide affordable solutions with clear targets and segmented risk, ensuring
                that every project delivers measurable results.
              </p>
            </div>
            <div className="info-card vision">
              <h3>Our Vision</h3>
              <p>To be as clear and sharp as a mirrorless lens in everything we deliver.</p>
            </div>
          </div>
        </section>

        <section id="why" className="section">
          <div className="section-header">
            <h2>Why Choose CMYK Media?</h2>
            <p>We are dedicated to exceeding your expectations at every stage of the journey.</p>
          </div>

          <div className="card-grid">
            <article className="card accent-cyan">
              <h3>Professional Team</h3>
              <p>
                Experienced supervision and technical support with updated equipment operators,
                committed to high-quality output every time.
              </p>
            </article>

            <article className="card accent-magenta">
              <h3>Customization</h3>
              <p>
                Tailored solutions designed to fit your specific project requirements, brand
                language, and creative vision.
              </p>
            </article>

            <article className="card accent-yellow">
              <h3>Reliability</h3>
              <p>
                On-time delivery and exceptional customer service for a smooth, stress-free
                experience from start to finish.
              </p>
            </article>

            <article className="card accent-black">
              <h3>State-of-the-Art Setup</h3>
              <p>
                In-house fabrication, designers, editors, laser and router facilities to execute
                even the finest production jobs with precision.
              </p>
            </article>
          </div>
        </section>

        <section id="services" className="section section-alt">
          <div className="section-header">
            <h2>What We Do</h2>
            <p>End-to-end media services for brands, corporates, and celebrations.</p>
          </div>

          <div className="service-card-grid">
            <article className="service-card service-card-video">
            <img src={videoImage} className='hero-setup-image' alt="Professional camera on gimbal" style={{}}/>
              <h3>Videography</h3>
              <p>
                Corporate and wedding films, event coverage, and promotional videos crafted to
                move your audience.
              </p>
            </article>

            <article className="service-card service-card-photo" style={{display: 'flex', flexDirection: 'column', overflow: 'visible', alignItems: 'center', justifyContent: 'center'}}>
            <img src={photoImage} className='hero-setup-image' alt="Professional camera on gimbal" style={{}}/>
              <h3>Photography</h3>
              <p>
                Corporate, event and wedding photography that captures every detail and emotion
                with clarity.
              </p>
            </article>

            <article className="service-card service-card-setup" style={{display: 'flex', flexDirection: 'column', overflow: 'visible', alignItems: 'center', justifyContent: 'center'}}>
              <img src={setupImage} className='hero-setup-image' alt="Professional camera on gimbal" style={{}}/>

              <h3>Design &amp; Setup</h3>
              <p>
                Stall design, event setups and branding collaterals that bring your visual
                identity to life.
              </p>
            </article>
          </div>
        </section>

        <section id="process" className="section section-process">
          <div className="section-header">
            <h2>Our Streamlined Process</h2>
            <p>From idea to final delivery, we keep it simple and transparent.</p>
          </div>

          <div className="process-layout">
            <div className="process-cards">
              <article className="process-item">
                <div className="process-icon">1</div>
                <div className="process-card">
                  <h3>Consultation</h3>
                  <p>We start by understanding your unique needs, objectives, and audience.</p>
                </div>
              </article>

              <article className="process-item">
                <div className="process-icon">2</div>
                <div className="process-card">
                  <h3>Planning</h3>
                  <p>
                    We create a custom plan tailored to your project scope, timelines, and budget.
                  </p>
                </div>
              </article>

              <article className="process-item">
                <div className="process-icon">3</div>
                <div className="process-card">
                  <h3>Execution</h3>
                  <p>
                    Our professional team handles on-ground production with expertise in each
                    specialized field.
                  </p>
                </div>
              </article>

              <article className="process-item">
                <div className="process-icon">4</div>
                <div className="process-card">
                  <h3>Editing &amp; Delivery</h3>
                  <p>
                    We polish every frame, finalize the content, and deliver ready-to-use media
                    assets.
                  </p>
                </div>
              </article>
            </div>

            <div className="process-track">
              <div className="process-track-line" />
              <div className="process-track-dots">
                <span className="process-dot" />
                <span className="process-dot" />
                <span className="process-dot" />
                <span className="process-dot" />
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="section section-alt">
          <div className="section-header">
            <h2>See Our Work</h2>
            <p>Explore real projects across branding, events, weddings, and corporate shoots.</p>
          </div>

          <div className="link-grid">
            <a
              className="link-card"
              href="https://drive.google.com/drive/folders/1y4YlFMW9zqlwwCW_KzBkudwDI60qTycI?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <div className="link-card-thumb">Preview</div>
              <h3>Branding Activity & FOC</h3>
              <p>Brand activations, on-ground marketing and focused outreach campaigns.</p>
            </a>

            <a
              className="link-card"
              href="https://drive.google.com/drive/folders/1tVLK3wdoOMpwomSMBN7ehtzzxyP-AKXD?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <div className="link-card-thumb">Preview</div>
              <h3>Event Videos</h3>
              <p>Dynamic coverage of corporate and social events.</p>
            </a>

            <a
              className="link-card"
              href="https://drive.google.com/drive/folders/1pYQHYdPBxo7dxkRunwxF7wbzKo4i6fm4?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <div className="link-card-thumb">Preview</div>
              <h3>Marriage & Décor</h3>
              <p>Beautiful decor, setups and thematic designs for weddings.</p>
            </a>

            <a
              className="link-card"
              href="https://drive.google.com/drive/folders/1geI4I-t3Jlsa-LNQz5kQvi0Nr54KSLV-?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <div className="link-card-thumb">Preview</div>
              <h3>Setup Pictures</h3>
              <p>Stage, exhibition and event setups executed by our team.</p>
            </a>

            <a
              className="link-card"
              href="https://drive.google.com/file/d/1dihw2wRCHBUdGrwvy8d2_IhKpaevyh1e/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <div className="link-card-thumb">Preview</div>
              <h3>Stall Designing</h3>
              <p>Exhibition stalls designed and fabricated end to end.</p>
            </a>

            <a
              className="link-card"
              href="https://drive.google.com/drive/folders/179rX1YLIsZJ2K9Yd6ZY0UdxZD1tVM-MJ"
              target="_blank"
              rel="noreferrer"
            >
              <div className="link-card-thumb">Preview</div>
              <h3>Corporate Cinematography</h3>
              <p>Story-led films that capture your brand&apos;s ethos.</p>
            </a>

            <a
              className="link-card"
              href="https://drive.google.com/drive/folders/1fYamxrY7d9edi-rZLWOg_2s8L7wVIJf"
              target="_blank"
              rel="noreferrer"
            >
              <div className="link-card-thumb">Preview</div>
              <h3>Corporate Photography</h3>
              <p>Professional imagery for teams, spaces and products.</p>
            </a>

            <a
              className="link-card"
              href="https://drive.google.com/drive/folders/1wdiCYs3wqw0I_VQBHY5BD2O4WDzamSlW"
              target="_blank"
              rel="noreferrer"
            >
              <div className="link-card-thumb">Preview</div>
              <h3>Wedding Cinematography</h3>
              <p>Emotion-rich wedding stories, beautifully captured.</p>
            </a>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="section-header">
            <h2>Get In Touch With Us</h2>
            <p>Let&apos;s plan your next shoot, event, or campaign.</p>
          </div>

          <div className="contact-grid">
            <div className="contact-card">
              <h3>Call Us</h3>
              <ul className="phone-list">
                {phoneNumbers.map((phone) => (
                  <li key={phone}>
                    <a href={`tel:${phone}`} className="phone-link">
                      {phone}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="contact-card">
              <h3>Locations</h3>
              <ul>
                <li>Shivne, Pune, Maharashtra</li>
                <li>Parvorim, Goa</li>
                <li>Yevlewadi, Pune, Maharashtra</li>
              </ul>
            </div>

            <div className="contact-card contact-cta">
              <h3>Ready to start?</h3>
              <p>
                Share your requirements and we&apos;ll recommend the right mix of branding,
                photography and cinematography for you.
              </p>
              <a href="#contact" className="btn btn-primary btn-full">
                Schedule a Call
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} CMYK Media. All rights reserved.</p>
      </footer>
    </div>
  )
}

