import { Button } from "@/components/ui/AppButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useCompanyInfo } from "@/hooks/useCompanyInfo";
import { CheckCircle, Mail, MapPin, Phone, Send } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const INITIAL_FORM: FormData = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const INPUT_BASE =
  "w-full px-4 py-3 rounded-lg border border-input bg-card text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth";

export function Contact() {
  const { data: company } = useCompanyInfo();
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  function validate(): boolean {
    const errs: Partial<FormData> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      errs.email = "Please enter a valid email";
    if (!form.message.trim()) errs.message = "Message is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  }

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  return (
    <div data-ocid="contact.page" className="overflow-hidden">
      {/* Hero Banner */}
      <section
        data-ocid="contact.hero.section"
        className="relative bg-primary text-primary-foreground py-20 md:py-28 overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 40px, oklch(1 0 0 / 0.06) 40px, oklch(1 0 0 / 0.06) 41px)",
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-accent/40" />
        <div className="relative container mx-auto px-4 md:px-8 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block mb-5 px-4 py-1.5 rounded-full text-sm font-semibold tracking-widest uppercase bg-accent/20 text-accent border border-accent/30">
              Get In Touch
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-primary-foreground max-w-xl mx-auto leading-relaxed opacity-85">
              Enquiries for wholesale orders, custom packing, or export — we're
              ready to assist you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section
        data-ocid="contact.main.section"
        className="py-20 md:py-28 bg-background"
      >
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Info Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="lg:col-span-2 space-y-5"
            >
              <div>
                <span className="inline-block mb-3 text-accent font-semibold tracking-widest text-sm uppercase">
                  Reach Us
                </span>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground leading-tight mb-2">
                  Contact Information
                </h2>
                <div className="h-0.5 w-12 bg-accent rounded-full" />
              </div>

              {/* Address */}
              <div
                data-ocid="contact.address.card"
                className="bg-card border border-border rounded-2xl p-5 shadow-subtle hover:shadow-elevated transition-smooth"
              >
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm mb-1.5">
                      Factory Address
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      3/760-B, Naranapuram Road,
                      <br />
                      Anuppankulam,
                      <br />
                      Sivakasi – 626 189,
                      <br />
                      Tamil Nadu, India
                    </p>
                    <p className="text-muted-foreground text-xs mt-2">
                      India's Matchmaking Capital
                    </p>
                  </div>
                </div>
              </div>

              {/* Phones */}
              <div
                data-ocid="contact.phones.card"
                className="bg-card border border-border rounded-2xl p-5 shadow-subtle hover:shadow-elevated transition-smooth"
              >
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground text-sm mb-3">
                      Phone Numbers
                    </h3>
                    <div className="space-y-2">
                      {company.phones.map((phone, i) => (
                        <a
                          key={phone}
                          href={`tel:+91${phone}`}
                          data-ocid={`contact.phone.link.${i + 1}`}
                          className="flex items-center gap-3 text-sm text-accent font-medium hover:text-accent/80 transition-smooth group"
                        >
                          <span className="text-muted-foreground text-xs w-5">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="group-hover:underline">
                            +91 {phone}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div
                data-ocid="contact.email.card"
                className="bg-card border border-border rounded-2xl p-5 shadow-subtle hover:shadow-elevated transition-smooth"
              >
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-foreground text-sm mb-1.5">
                      Email Address
                    </h3>
                    <a
                      href={`mailto:${company.email}`}
                      data-ocid="contact.email.link"
                      className="text-accent text-sm font-medium hover:text-accent/80 hover:underline transition-smooth break-all"
                    >
                      {company.email}
                    </a>
                    <p className="text-muted-foreground text-xs mt-1.5">
                      For bulk orders, export &amp; dealer inquiries
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div
                data-ocid="contact.map.card"
                className="bg-primary rounded-2xl overflow-hidden shadow-elevated relative"
                style={{ minHeight: "180px" }}
              >
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(0deg, transparent, transparent 24px, oklch(1 0 0 / 0.08) 24px, oklch(1 0 0 / 0.08) 25px), repeating-linear-gradient(90deg, transparent, transparent 24px, oklch(1 0 0 / 0.08) 24px, oklch(1 0 0 / 0.08) 25px)",
                  }}
                />
                <div className="relative p-6 flex flex-col items-center justify-center text-center h-full min-h-[180px]">
                  <MapPin className="w-9 h-9 text-accent mb-3" />
                  <h4 className="font-display text-lg font-bold text-primary-foreground mb-1">
                    Sivakasi, Tamil Nadu
                  </h4>
                  <p className="text-primary-foreground text-xs mb-3 opacity-75">
                    Pin Code: 626 189 · India
                  </p>
                  <a
                    href="https://maps.google.com/?q=Sivakasi,Tamil+Nadu,India"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ocid="contact.map.directions_link"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/20 border border-accent/30 text-accent text-sm font-semibold hover:bg-accent/30 transition-smooth"
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    Open in Maps
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Form Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="lg:col-span-3"
            >
              <SectionHeading
                title="Send a Message"
                subtitle="Tell us about your requirements and we'll get back to you promptly."
                centered={false}
              />

              {submitted ? (
                <motion.div
                  data-ocid="contact.success_state"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-accent/10 border border-accent/30 rounded-2xl p-10 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                    Message Sent!
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Thank you for reaching out to Sri Gurusamy Matches Unit. We
                    will review your message and respond shortly at{" "}
                    <span className="text-foreground font-medium">
                      {form.email}
                    </span>
                    .
                  </p>
                  <button
                    type="button"
                    data-ocid="contact.send_another.button"
                    onClick={() => {
                      setSubmitted(false);
                      setForm(INITIAL_FORM);
                    }}
                    className="mt-6 text-accent text-sm font-semibold hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form
                  data-ocid="contact.form"
                  onSubmit={handleSubmit}
                  noValidate
                  className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-subtle"
                >
                  <div className="grid sm:grid-cols-2 gap-5 mb-5">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-foreground"
                      >
                        Full Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        data-ocid="contact.name.input"
                        required
                        placeholder="Your name"
                        value={form.name}
                        onChange={handleChange}
                        className={INPUT_BASE}
                      />
                      {errors.name && (
                        <p
                          className="text-destructive text-xs"
                          data-ocid="contact.name.field_error"
                        >
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-foreground"
                      >
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        data-ocid="contact.email.input"
                        required
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={handleChange}
                        className={INPUT_BASE}
                      />
                      {errors.email && (
                        <p
                          className="text-destructive text-xs"
                          data-ocid="contact.email.field_error"
                        >
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5 mb-5">
                    {/* Phone */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-foreground"
                      >
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        data-ocid="contact.phone.input"
                        placeholder="+91 XXXXX XXXXX"
                        value={form.phone}
                        onChange={handleChange}
                        className={INPUT_BASE}
                      />
                    </div>

                    {/* Subject */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="subject"
                        className="block text-sm font-semibold text-foreground"
                      >
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        data-ocid="contact.subject.select"
                        value={form.subject}
                        onChange={handleChange}
                        className={INPUT_BASE}
                      >
                        <option value="">Select a topic</option>
                        <option value="wholesale">Wholesale Enquiry</option>
                        <option value="export">Export Enquiry</option>
                        <option value="custom">Custom Packing</option>
                        <option value="splints">Dipped Splints Order</option>
                        <option value="general">General Query</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5 mb-6">
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-foreground"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      data-ocid="contact.message.textarea"
                      required
                      rows={5}
                      placeholder="Describe your requirements — product types, quantities, packing preferences, export destination…"
                      value={form.message}
                      onChange={handleChange}
                      className={`${INPUT_BASE} resize-none`}
                    />
                    {errors.message && (
                      <p
                        className="text-destructive text-xs"
                        data-ocid="contact.message.field_error"
                      >
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    variant="fire"
                    size="lg"
                    data-ocid="contact.submit_button"
                    className="w-full"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-muted/30 border-t border-border">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-display text-lg md:text-xl font-bold text-accent mb-4 uppercase tracking-wide bg-accent/10 border border-accent/30 rounded-xl px-6 py-3 inline-block">
              Choose SRI GURUSAMY MATCHES UNIT - Because Every Strike should be
              Safe
            </p>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Place an Order?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-xl mx-auto">
              We supply all over India and export internationally. Whether you
              need 300-box packing or bulk dipped splints, we'll match your
              exact specifications.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href={`tel:+91${company.phones[0]}`}
                data-ocid="contact.cta.call_button"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-accent-foreground font-semibold text-sm hover:bg-accent/90 transition-smooth shadow-elevated"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <a
                href={`mailto:${company.email}`}
                data-ocid="contact.cta.email_button"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-card text-foreground font-semibold text-sm hover:bg-muted transition-smooth"
              >
                <Mail className="w-4 h-4" />
                Send Email
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
