import { useState } from "react";
import { Link } from "react-router-dom";

// High-resolution architectural furniture studio photograph from Saba Living's catalog pieces
const HERO_IMAGE_URL =
  "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1920&q=80";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-16 sm:space-y-20 pb-20">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-walnut-dark py-16 sm:py-20 lg:py-24 border-b border-sand/40">
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE_URL}
            alt="Warm architectural furniture studio with natural lighting"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-walnut-dark/75 to-charcoal/85" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-block text-xs uppercase tracking-widest text-sand-light font-semibold px-3.5 py-1 rounded-full bg-warm-ivory/15 border border-warm-ivory/25 backdrop-blur-xs">
            Studio Inquiries
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-warm-ivory tracking-tight drop-shadow-xs">
            Contact & Inquiries
          </h1>
          <p className="text-sm sm:text-base text-sand-light/90 leading-relaxed max-w-xl mx-auto font-normal drop-shadow-xs">
            We welcome showroom appointment requests, custom design inquiries,
            and interior consultations. Connect with our studio team below.
          </p>
        </div>
      </section>

      {/* 2. Main Contact Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-semibold tracking-widest text-terracotta uppercase block">
                Get In Touch
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-walnut tracking-tight">
                Studio & Consultations
              </h2>
              <p className="text-sm text-charcoal-muted leading-relaxed">
                Whether inquiring about a specific timber piece, discussing a
                custom proportion, or arranging a showroom appointment, we are
                here to help.
              </p>
              <div className="w-10 h-0.5 bg-terracotta/60 mt-3 rounded-full" />
            </div>

            {/* Existing supplied contact details from project */}
            <div className="space-y-5 pt-2">
              <div className="bg-warm-ivory p-5 sm:p-6 rounded-sm border border-sand/80 space-y-1.5">
                <span className="text-xs font-semibold uppercase tracking-wider text-terracotta block">
                  Showroom Location
                </span>
                <p className="font-serif text-lg text-charcoal font-normal">
                  Bole Sub-City, Addis Ababa, Ethiopia
                </p>
                <p className="text-xs text-charcoal-muted leading-relaxed pt-1">
                  Showroom visits and bespoke consultations are arranged by
                  appointment.
                </p>
              </div>

              <div className="bg-warm-ivory p-5 sm:p-6 rounded-sm border border-sand/80 space-y-1.5">
                <span className="text-xs font-semibold uppercase tracking-wider text-terracotta block">
                  Direct Inquiries
                </span>
                <p className="font-serif text-lg text-charcoal font-normal">
                  inquiries@sabaliving.demo
                </p>
                <p className="text-xs text-charcoal-muted leading-relaxed pt-1">
                  Email us for catalog specifications, material swatches, or
                  order status.
                </p>
              </div>

              <div className="bg-warm-ivory p-5 sm:p-6 rounded-sm border border-sand/80 space-y-1.5">
                <span className="text-xs font-semibold uppercase tracking-wider text-terracotta block">
                  Telephone (Demo)
                </span>
                <p className="font-serif text-lg text-charcoal font-normal">
                  +251 900 000 000
                </p>
                <p className="text-xs text-charcoal-muted leading-relaxed pt-1">
                  Consultation availability is scheduled by prior appointment.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-warm-ivory p-6 sm:p-10 rounded-sm border border-sand/80 shadow-xs">
              <div className="mb-6 space-y-1">
                <h3 className="font-serif text-xl sm:text-2xl font-normal text-walnut">
                  Send a Message
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-muted">
                  Fill in your details below and our studio team will respond to
                  your inquiry.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 bg-sand-light rounded-sm border border-sand space-y-3">
                  <span className="text-xs uppercase font-semibold text-terracotta tracking-wider block">
                    Frontend Preview Mode
                  </span>
                  <p className="text-sm text-charcoal font-medium">
                    Thank you, {formData.name || "visitor"}.
                  </p>
                  <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                    This form is a frontend demonstration interface. It is not
                    connected to a live backend or mail service, so no message has
                    been transmitted. For actual inquiries, please reach out directly
                    via{" "}
                    <span className="text-terracotta font-medium">
                      inquiries@sabaliving.demo
                    </span>
                    .
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-2 text-xs uppercase font-semibold text-walnut hover:text-terracotta transition-colors underline underline-offset-4"
                  >
                    Reset Form
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs uppercase tracking-wider font-semibold text-walnut mb-1.5"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full px-3.5 py-2.5 bg-warm-ivory border border-sand/80 rounded-sm text-sm text-charcoal placeholder-charcoal-muted/50 focus:outline-none focus:border-walnut focus:ring-1 focus:ring-walnut transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs uppercase tracking-wider font-semibold text-walnut mb-1.5"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full px-3.5 py-2.5 bg-warm-ivory border border-sand/80 rounded-sm text-sm text-charcoal placeholder-charcoal-muted/50 focus:outline-none focus:border-walnut focus:ring-1 focus:ring-walnut transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-xs uppercase tracking-wider font-semibold text-walnut mb-1.5"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Showroom appointment or custom inquiry"
                      className="w-full px-3.5 py-2.5 bg-warm-ivory border border-sand/80 rounded-sm text-sm text-charcoal placeholder-charcoal-muted/50 focus:outline-none focus:border-walnut focus:ring-1 focus:ring-walnut transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs uppercase tracking-wider font-semibold text-walnut mb-1.5"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share details regarding your space, timeline, or preferred pieces..."
                      className="w-full px-3.5 py-2.5 bg-warm-ivory border border-sand/80 rounded-sm text-sm text-charcoal placeholder-charcoal-muted/50 focus:outline-none focus:border-walnut focus:ring-1 focus:ring-walnut transition-colors resize-y"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center px-7 py-3 text-xs sm:text-sm font-semibold tracking-wider uppercase rounded bg-walnut text-warm-ivory hover:bg-terracotta transition-colors shadow-xs"
                    >
                      Submit Inquiry
                    </button>
                    <span className="text-[11px] text-charcoal-muted">
                      Frontend demonstration interface
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Closing Section Guiding Visitors to Collections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-walnut text-warm-ivory rounded-sm p-8 sm:p-12 md:p-14 text-center max-w-3xl mx-auto border border-walnut-dark shadow-md space-y-5">
          <span className="text-xs font-semibold tracking-widest text-terracotta-light uppercase">
            Curated Spaces
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-normal text-warm-ivory">
            Explore Our Collections
          </h2>
          <p className="text-sm sm:text-base text-sand-light/85 leading-relaxed max-w-xl mx-auto">
            While our studio reviews your inquiry, discover curated room edits
            and signature furniture pieces crafted for calm living.
          </p>
          <div className="pt-2">
            <Link
              to="/collections"
              className="inline-flex items-center justify-center px-7 py-3 text-xs sm:text-sm font-semibold tracking-wider uppercase rounded bg-terracotta text-warm-ivory hover:bg-terracotta-dark transition-colors shadow-xs gap-2"
            >
              <span>View Collections</span>
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

