import React from "react";
import { Element } from "react-scroll";
import { Button } from "antd";
import {
  HiOutlineClipboardDocumentList,
  HiOutlineChartBar,
  HiOutlineDevicePhoneMobile,
  HiPlay,
} from "react-icons/hi2";
import { RiScissorsCutFill, RiShirtLine, RiDraftLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import WebLandingNav from "./WebLandingNav";
import FooterSection from "./FooterSection";
import "./WebLandingPage.css";

const IMAGES = {
  hero: "https://images.unsplash.com/photo-1558171813-4c088753af8f?auto=format&fit=crop&w=1920&q=80",
  aboutA: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80",
  aboutB: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80",
  aboutC: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=600&q=80",
  skills: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80",
  contactBg:
    "https://images.unsplash.com/photo-1521587760476-6c12a4b0402b?auto=format&fit=crop&w=1920&q=80",
  blogFeatured:
    "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1200&q=80",
};

const SERVICES = [
  {
    icon: <RiShirtLine />,
    title: "Measurement Profiles",
    text: "Structured fields for kameez, shalwar, shirts, and trousers— fewer mistakes, faster fittings.",
  },
  {
    icon: <HiOutlineClipboardDocumentList />,
    title: "Order lifecycle",
    text: "Track status from pending to delivered with dates, notes, and customer context in one place.",
  },
  {
    icon: <RiDraftLine />,
    title: "Design & notes",
    text: "Capture style preferences, button types, collar choices, and special instructions per order.",
  },
  {
    icon: <RiScissorsCutFill />,
    title: "Multi-garment flows",
    text: "Guided steps adapt to cloth type so every job follows the right sequence for your workshop.",
  },
  {
    icon: <HiOutlineChartBar />,
    title: "Insights & exports",
    text: "Dashboard-friendly summaries and PDF-friendly records for day-end reconciliation.",
  },
  {
    icon: <HiOutlineDevicePhoneMobile />,
    title: "Work from anywhere",
    text: "Responsive workspace so managers can confirm orders and lookups on phone or desktop.",
  },
];

const SKILLS = [
  { label: "Fitting & alterations", pct: 92 },
  { label: "Order accuracy", pct: 88 },
  { label: "Customer retention", pct: 85 },
  { label: "Workshop throughput", pct: 90 },
];

const TESTIMONIALS = [
  {
    quote:
      "We cut rework dramatically—the forms mirror how our master tailors actually think.",
    name: "Ahmed Raza",
    role: "Owner, Raza Tailors",
    face: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
  },
  {
    quote:
      "Finally one ledger for measurements and jobs. My boutique staff onboarded in a single afternoon.",
    name: "Sarah Khan",
    role: "Boutique Manager",
    face: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
  },
  {
    quote:
      "Scaling to three branches without losing stitch quality felt impossible before this system.",
    name: "Bilal Hussain",
    role: "Multi-branch tailor",
    face: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&q=80",
  },
  {
    quote:
      "Clients trust us more when returns and revisions are predictable—this portal makes that visible.",
    name: "Fatima Noor",
    role: "Studio lead",
    face: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=120&q=80",
  },
];

const TEAM = [
  {
    name: "Hassan Imran",
    role: "Head of Product",
    photo:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Ayesha Malik",
    role: "Customer Success",
    photo:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Omar Siddiqui",
    role: "Solutions Engineer",
    photo:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
  },
];

const BLOG_POSTS = [
  {
    img: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=600&q=80",
    date: "Mar 12, 2026",
    title: "Five fields every waistcoat order should capture",
  },
  {
    img: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=600&q=80",
    date: "Feb 28, 2026",
    title: "Why boutiques are digitising measurement cards this season",
  },
  {
    img: "https://images.unsplash.com/photo-1490111718993-d98654ce9cf9?auto=format&fit=crop&w=600&q=80",
    date: "Feb 14, 2026",
    title: "From backlog to balance: scheduling stitch-heavy weeks",
  },
  {
    img: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=600&q=80",
    date: "Jan 30, 2026",
    title: "Client experience ideas borrowed from premium retail",
  },
  {
    img: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=600&q=80",
    date: "Jan 08, 2026",
    title: "Fabric notes that save alteration time",
  },
  {
    img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=600&q=80",
    date: "Dec 19, 2025",
    title: "Year in review: what workshops asked us for most",
  },
];

const WebLandingPage = () => {
  const navigate = useNavigate();

  const onContactSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="web-landing" style={{ overflowX: "hidden" }}>
      <WebLandingNav />

      <Element name="wlp-home">
        <section className="wlp-hero" aria-label="Hero">
          <div
            className="wlp-hero-bg"
            style={{ backgroundImage: `url(${IMAGES.hero})` }}
          />
          <div className="wlp-hero-inner">
            <h1 className="wlp-serif">
              Deeper understanding.
              <br />
              Better fittings.
            </h1>
            <p>
              Stitch &amp; Stone helps tailoring teams digitise measurements,
              orders, and delivery timelines—so you resolve more jobs with less
              chaos.
            </p>
            <div className="wlp-hero-actions">
              <Button
                type="primary"
                size="large"
                className="wlp-btn-primary"
                onClick={() => navigate("/auth/login")}
              >
                Get Started
              </Button>
              <Button
                size="large"
                className="wlp-btn-ghost"
                onClick={() => navigate("/admin/dashboard")}
              >
                View dashboard
              </Button>
            </div>
          </div>
        </section>
      </Element>

      <Element name="wlp-about">
        <section className="wlp-about" id="wlp-about">
          <div className="wlp-container">
            <div className="wlp-about-grid">
              <div className="wlp-about-imgs">
                <div className="wlp-about-imgs-row">
                  <img
                    src={IMAGES.aboutA}
                    alt="Tailoring fabrics"
                    loading="lazy"
                  />
                  <img
                    src={IMAGES.aboutB}
                    alt="Workshop detail"
                    loading="lazy"
                  />
                </div>
                <img
                  src={IMAGES.aboutC}
                  alt="Garment work"
                  style={{
                    maxHeight: 240,
                    objectFit: "cover",
                    borderRadius: 12,
                  }}
                  loading="lazy"
                />
              </div>
              <div>
                <h2 className="wlp-serif wlp-section-title">
                  The best-in-class workflow for modern tailoring.
                </h2>
                <p className="wlp-section-sub" style={{ margin: "0 0 24px" }}>
                  Since we shipped Version 1, workshops use Stitch &amp; Stone
                  to replace scattered notebooks and chat threads with a single
                  source of truth—orders, garments, and customer history stay
                  aligned.
                </p>
                <p style={{ color: "#cbd5e1", lineHeight: 1.65 }}>
                  Whether you run a single master tailor bench or a multi-branch
                  brand, the same structured data model keeps your standards
                  consistent.
                </p>
                <div className="wlp-signature">
                  <img
                    src={TEAM[0].photo}
                    alt=""
                    loading="lazy"
                  />
                  <div>
                    <strong style={{ color: "#fff" }}>Hassan Imran</strong>
                    <div style={{ color: "#94a3b8", fontSize: "0.9rem" }}>
                      Head of Product, Stitch &amp; Stone
                    </div>
                  </div>
                </div>
                <div
                  className="wlp-hero-actions"
                  style={{ marginTop: 28, alignItems: "center" }}
                >
                  <Button
                    type="primary"
                    className="wlp-btn-primary"
                    onClick={() => navigate("/admin/orders/new/details")}
                  >
                    Start an order
                  </Button>
                  <button
                    type="button"
                    className="wlp-btn-ghost"
                    style={{
                      borderRadius: 999,
                      width: 48,
                      height: 48,
                      padding: 0,
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    aria-label="Play introduction"
                    onClick={() =>
                      window.open(
                        "https://www.youtube.com/results?search_query=tailor+shop+management",
                        "_blank",
                        "noopener,noreferrer"
                      )
                    }
                  >
                    <HiPlay size={22} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Element>

      <Element name="wlp-services">
        <section className="wlp-services" id="wlp-services">
          <div className="wlp-container" style={{ textAlign: "center" }}>
            <h2 className="wlp-serif wlp-section-title">
              Explore our practice areas
            </h2>
            <p className="wlp-section-sub">
              Everything you need to intake a client, capture precise
              measurements, and monitor production without losing the human
              touch.
            </p>
            <div className="wlp-service-grid">
              {SERVICES.map((s) => (
                <article key={s.title} className="wlp-service-card">
                  <div className="wlp-service-icon">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <a
                    className="wlp-link"
                    href="#wlp-contact"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("wlp-contact")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Learn more →
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>
      </Element>

      <section className="wlp-stats-light" aria-label="Impact">
        <div className="wlp-container">
          <div className="wlp-stats-row">
            <div>
              <div className="wlp-stat-num">1,500+</div>
              <div className="wlp-stat-label">Orders coordinated</div>
            </div>
            <div>
              <div className="wlp-stat-num">250+</div>
              <div className="wlp-stat-label">Workshop teams</div>
            </div>
            <div>
              <div className="wlp-stat-num">98%</div>
              <div className="wlp-stat-label">On-time delivery satisfaction</div>
            </div>
          </div>
          <div className="wlp-partners">
            {["Atelier One", "Thread & Co", "Verve Clothiers", "Northline", "Maison Cut"].map(
              (name) => (
                <span
                  key={name}
                  style={{
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    color: "#64748b",
                    letterSpacing: "0.04em",
                  }}
                >
                  {name}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      <section className="wlp-skills" aria-label="Expertise">
        <div className="wlp-container">
          <div className="wlp-skills-grid">
            <div className="wlp-skills-img">
              <img src={IMAGES.skills} alt="Professional tailoring" loading="lazy" />
            </div>
            <div>
              <h2 className="wlp-serif wlp-section-title">
                We have handled complex tailoring operations at scale.
              </h2>
              <p
                className="wlp-section-sub"
                style={{ margin: "0 0 28px", textAlign: "left" }}
              >
                Our product team ships improvements shaped by dispatch-heavy
                weeks, wedding seasons, and alteration spikes—so the percentages
                below reflect what teams actually achieve with disciplined data.
              </p>
              {SKILLS.map((row) => (
                <div key={row.label} className="wlp-progress-item">
                  <div className="wlp-progress-head">
                    <span>{row.label}</span>
                    <span>{row.pct}%</span>
                  </div>
                  <div className="wlp-progress-bar">
                    <div
                      className="wlp-progress-fill"
                      style={{ width: `${row.pct}%` }}
                    />
                  </div>
                </div>
              ))}
              <Button
                type="primary"
                className="wlp-btn-primary"
                style={{ marginTop: 16 }}
                onClick={() => navigate("/admin/dashboard")}
              >
                Read more
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="wlp-testimonials" aria-label="Testimonials">
        <div className="wlp-container" style={{ textAlign: "center" }}>
          <h2 className="wlp-serif wlp-section-title">What our clients say</h2>
          <p className="wlp-section-sub">
            Tailors and boutique leads trust Stitch &amp; Stone for clarity on
            the floor and confidence with clients.
          </p>
          <div className="wlp-testimonial-grid">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="wlp-testimonial-card">
                <p>&ldquo;{t.quote}&rdquo;</p>
                <div className="wlp-testimonial-author">
                  <img src={t.face} alt="" loading="lazy" />
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="wlp-team" aria-label="Team">
        <div className="wlp-container" style={{ textAlign: "center" }}>
          <h2 className="wlp-serif wlp-section-title">Meet our expert team</h2>
          <p className="wlp-section-sub">
            Product, tailoring operations, and customer success—working as one
            crew.
          </p>
          <div className="wlp-team-grid">
            {TEAM.map((m) => (
              <div key={m.name} className="wlp-team-card">
                <img src={m.photo} alt={m.name} loading="lazy" />
                <div className="wlp-team-body">
                  <h3>{m.name}</h3>
                  <span>{m.role}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="wlp-center-actions">
            <Button type="primary" className="wlp-btn-primary" onClick={() => navigate("/auth/login")}>
              View all members
            </Button>
          </div>
        </div>
      </section>

      <section className="wlp-consult" aria-label="Consultation">
        <div className="wlp-consult-inner">
          <div>
            <h2 className="wlp-serif" style={{ fontSize: "clamp(1.5rem,3vw,2rem)", margin: "0 0 12px" }}>
              Book a walkthrough tailored to your workshop.
            </h2>
            <p style={{ color: "#cbd5e1", margin: 0, maxWidth: 520 }}>
              Share your volume, branches, and cloth types—we will show you the
              fastest way to roll out Stitch &amp; Stone with your staff.
            </p>
          </div>
          <div className="wlp-consult-box">
            <h3>Get a free consultation</h3>
            <p style={{ color: "#64748b", margin: "8px 0 16px" }}>
              Call us directly
            </p>
            <p className="wlp-consult-phone">+92 300 0000000</p>
          </div>
        </div>
      </section>

      <Element name="wlp-contact">
        <section className="wlp-contact" id="wlp-contact" aria-label="Contact">
          <div
            className="wlp-contact-bg"
            style={{ backgroundImage: `url(${IMAGES.contactBg})` }}
          />
          <div className="wlp-container" style={{ textAlign: "center" }}>
            <h2
              className="wlp-serif wlp-section-title"
              style={{ marginBottom: 12 }}
            >
              Get in touch
            </h2>
            <p className="wlp-section-sub">
              Tell us about your tailoring workflow—we reply within one business
              day.
            </p>
            <div className="wlp-contact-form-wrap">
              <form onSubmit={onContactSubmit}>
                <div className="row g-3">
                  <div className="col-md-4">
                    <label className="form-label text-start d-block text-white-50 small mb-1">
                      Name
                    </label>
                    <input
                      name="name"
                      className="form-control"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label text-start d-block text-white-50 small mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label text-start d-block text-white-50 small mb-1">
                      Phone
                    </label>
                    <input
                      name="phone"
                      className="form-control"
                      placeholder="+92 ..."
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label text-start d-block text-white-50 small mb-1">
                      Message
                    </label>
                    <textarea
                      name="message"
                      className="form-control"
                      placeholder="How can we help?"
                      rows={5}
                    />
                  </div>
                </div>
                <div className="text-center mt-4">
                  <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                    className="wlp-btn-primary"
                  >
                    Send message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </Element>

      <section className="wlp-blog" aria-label="Blog">
        <div className="wlp-container">
          <h2
            className="wlp-serif wlp-section-title"
            style={{ textAlign: "center" }}
          >
            Latest news &amp; blog
          </h2>
          <p className="wlp-section-sub" style={{ textAlign: "center" }}>
            Practical ideas for tailors moving from paper to pixels.
          </p>

          <div className="wlp-blog-featured">
            <img src={IMAGES.blogFeatured} alt="" loading="lazy" />
            <div className="wlp-blog-featured-body">
              <div className="wlp-meta">Featured · Mar 18, 2026</div>
              <h3>
                How to onboard cutters and fitters to digital measurement cards
              </h3>
              <p style={{ color: "#94a3b8", lineHeight: 1.6 }}>
                Change management tips from teams that moved hundreds of
                historical clients without losing nuance.
              </p>
              <a className="wlp-link" href="#wlp-blog">
                Read more →
              </a>
            </div>
          </div>

          <div className="wlp-blog-grid" id="wlp-blog">
            {BLOG_POSTS.map((post) => (
              <article key={post.title} className="wlp-blog-card">
                <img src={post.img} alt="" loading="lazy" />
                <div className="wlp-blog-card-body">
                  <div className="wlp-meta">{post.date}</div>
                  <h4>{post.title}</h4>
                  <a
                    className="wlp-link"
                    href="#/"
                    onClick={(e) => e.preventDefault()}
                  >
                    Read more →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default WebLandingPage;
