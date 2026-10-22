import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, M as MapPin, P as Phone, b as Mail } from "./index-DlCS8uXG.js";
import { m as motion, B as Button } from "./proxy-DDfmaAs-.js";
import { S as SectionHeading } from "./SectionHeading-DITPKy1c.js";
import { u as useCompanyInfo } from "./useCompanyInfo-CA1SUzuz.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
];
const CircleCheckBig = createLucideIcon("circle-check-big", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
];
const Send = createLucideIcon("send", __iconNode);
const INITIAL_FORM = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: ""
};
const INPUT_BASE = "w-full px-4 py-3 rounded-lg border border-input bg-card text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-smooth";
function Contact() {
  const { data: company } = useCompanyInfo();
  const [form, setForm] = reactExports.useState(INITIAL_FORM);
  const [submitted, setSubmitted] = reactExports.useState(false);
  const [errors, setErrors] = reactExports.useState({});
  function validate() {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      errs.email = "Please enter a valid email";
    if (!form.message.trim()) errs.message = "Message is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  }
  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: void 0 }));
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "contact.page", className: "overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        "data-ocid": "contact.hero.section",
        className: "relative bg-primary text-primary-foreground py-20 md:py-28 overflow-hidden",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 opacity-10",
              style: {
                backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 40px, oklch(1 0 0 / 0.06) 40px, oklch(1 0 0 / 0.06) 41px)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 right-0 h-px bg-accent/40" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative container mx-auto px-4 md:px-8 max-w-4xl text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 30 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.7 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block mb-5 px-4 py-1.5 rounded-full text-sm font-semibold tracking-widest uppercase bg-accent/20 text-accent border border-accent/30", children: "Get In Touch" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl md:text-6xl font-bold leading-tight mb-4", children: "Contact Us" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-primary-foreground max-w-xl mx-auto leading-relaxed opacity-85", children: "Enquiries for wholesale orders, custom packing, or export — we're ready to assist you." })
              ]
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        "data-ocid": "contact.main.section",
        className: "py-20 md:py-28 bg-background",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 md:px-8 max-w-6xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-5 gap-12 lg:gap-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, x: -30 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              transition: { duration: 0.65 },
              className: "lg:col-span-2 space-y-5",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block mb-3 text-accent font-semibold tracking-widest text-sm uppercase", children: "Reach Us" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl md:text-3xl font-bold text-foreground leading-tight mb-2", children: "Contact Information" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-0.5 w-12 bg-accent rounded-full" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    "data-ocid": "contact.address.card",
                    className: "bg-card border border-border rounded-2xl p-5 shadow-subtle hover:shadow-elevated transition-smooth",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-5 h-5 text-accent" }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground text-sm mb-1.5", children: "Factory Address" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-sm leading-relaxed", children: [
                          "3/760-B, Naranapuram Road,",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                          "Anuppankulam,",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                          "Sivakasi – 626 189,",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                          "Tamil Nadu, India"
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-xs mt-2", children: "India's Matchmaking Capital" })
                      ] })
                    ] })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    "data-ocid": "contact.phones.card",
                    className: "bg-card border border-border rounded-2xl p-5 shadow-subtle hover:shadow-elevated transition-smooth",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-5 h-5 text-accent" }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground text-sm mb-3", children: "Phone Numbers" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: company.phones.map((phone, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "a",
                          {
                            href: `tel:+91${phone}`,
                            "data-ocid": `contact.phone.link.${i + 1}`,
                            className: "flex items-center gap-3 text-sm text-accent font-medium hover:text-accent/80 transition-smooth group",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-xs w-5", children: String(i + 1).padStart(2, "0") }),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "group-hover:underline", children: [
                                "+91 ",
                                phone
                              ] })
                            ]
                          },
                          phone
                        )) })
                      ] })
                    ] })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    "data-ocid": "contact.email.card",
                    className: "bg-card border border-border rounded-2xl p-5 shadow-subtle hover:shadow-elevated transition-smooth",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-5 h-5 text-accent" }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground text-sm mb-1.5", children: "Email Address" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "a",
                          {
                            href: `mailto:${company.email}`,
                            "data-ocid": "contact.email.link",
                            className: "text-accent text-sm font-medium hover:text-accent/80 hover:underline transition-smooth break-all",
                            children: company.email
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-xs mt-1.5", children: "For bulk orders, export & dealer inquiries" })
                      ] })
                    ] })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    "data-ocid": "contact.map.card",
                    className: "bg-primary rounded-2xl overflow-hidden shadow-elevated relative",
                    style: { minHeight: "180px" },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "absolute inset-0 opacity-10",
                          style: {
                            backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 24px, oklch(1 0 0 / 0.08) 24px, oklch(1 0 0 / 0.08) 25px), repeating-linear-gradient(90deg, transparent, transparent 24px, oklch(1 0 0 / 0.08) 24px, oklch(1 0 0 / 0.08) 25px)"
                          }
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative p-6 flex flex-col items-center justify-center text-center h-full min-h-[180px]", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-9 h-9 text-accent mb-3" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-lg font-bold text-primary-foreground mb-1", children: "Sivakasi, Tamil Nadu" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground text-xs mb-3 opacity-75", children: "Pin Code: 626 189 · India" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "a",
                          {
                            href: "https://maps.google.com/?q=Sivakasi,Tamil+Nadu,India",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            "data-ocid": "contact.map.directions_link",
                            className: "inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/20 border border-accent/30 text-accent text-sm font-semibold hover:bg-accent/30 transition-smooth",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-3.5 h-3.5" }),
                              "Open in Maps"
                            ]
                          }
                        )
                      ] })
                    ]
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, x: 30 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              transition: { duration: 0.65, delay: 0.1 },
              className: "lg:col-span-3",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  SectionHeading,
                  {
                    title: "Send a Message",
                    subtitle: "Tell us about your requirements and we'll get back to you promptly.",
                    centered: false
                  }
                ),
                submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    "data-ocid": "contact.success_state",
                    initial: { opacity: 0, scale: 0.95 },
                    animate: { opacity: 1, scale: 1 },
                    className: "bg-accent/10 border border-accent/30 rounded-2xl p-10 text-center",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-8 h-8 text-accent" }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-bold text-foreground mb-3", children: "Message Sent!" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground leading-relaxed", children: [
                        "Thank you for reaching out to Sri Gurusamy Matches Unit. We will review your message and respond shortly at",
                        " ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: form.email }),
                        "."
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "button",
                          "data-ocid": "contact.send_another.button",
                          onClick: () => {
                            setSubmitted(false);
                            setForm(INITIAL_FORM);
                          },
                          className: "mt-6 text-accent text-sm font-semibold hover:underline",
                          children: "Send another message"
                        }
                      )
                    ]
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "form",
                  {
                    "data-ocid": "contact.form",
                    onSubmit: handleSubmit,
                    noValidate: true,
                    className: "bg-card border border-border rounded-2xl p-6 md:p-8 shadow-subtle",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-5 mb-5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "label",
                            {
                              htmlFor: "name",
                              className: "block text-sm font-semibold text-foreground",
                              children: "Full Name *"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "input",
                            {
                              id: "name",
                              name: "name",
                              type: "text",
                              "data-ocid": "contact.name.input",
                              required: true,
                              placeholder: "Your name",
                              value: form.name,
                              onChange: handleChange,
                              className: INPUT_BASE
                            }
                          ),
                          errors.name && /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "p",
                            {
                              className: "text-destructive text-xs",
                              "data-ocid": "contact.name.field_error",
                              children: errors.name
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "label",
                            {
                              htmlFor: "email",
                              className: "block text-sm font-semibold text-foreground",
                              children: "Email Address *"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "input",
                            {
                              id: "email",
                              name: "email",
                              type: "email",
                              "data-ocid": "contact.email.input",
                              required: true,
                              placeholder: "you@example.com",
                              value: form.email,
                              onChange: handleChange,
                              className: INPUT_BASE
                            }
                          ),
                          errors.email && /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "p",
                            {
                              className: "text-destructive text-xs",
                              "data-ocid": "contact.email.field_error",
                              children: errors.email
                            }
                          )
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-5 mb-5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "label",
                            {
                              htmlFor: "phone",
                              className: "block text-sm font-semibold text-foreground",
                              children: "Phone Number"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "input",
                            {
                              id: "phone",
                              name: "phone",
                              type: "tel",
                              "data-ocid": "contact.phone.input",
                              placeholder: "+91 XXXXX XXXXX",
                              value: form.phone,
                              onChange: handleChange,
                              className: INPUT_BASE
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "label",
                            {
                              htmlFor: "subject",
                              className: "block text-sm font-semibold text-foreground",
                              children: "Subject"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "select",
                            {
                              id: "subject",
                              name: "subject",
                              "data-ocid": "contact.subject.select",
                              value: form.subject,
                              onChange: handleChange,
                              className: INPUT_BASE,
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select a topic" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "wholesale", children: "Wholesale Enquiry" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "export", children: "Export Enquiry" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "custom", children: "Custom Packing" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "splints", children: "Dipped Splints Order" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "general", children: "General Query" })
                              ]
                            }
                          )
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 mb-6", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "label",
                          {
                            htmlFor: "message",
                            className: "block text-sm font-semibold text-foreground",
                            children: "Message *"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "textarea",
                          {
                            id: "message",
                            name: "message",
                            "data-ocid": "contact.message.textarea",
                            required: true,
                            rows: 5,
                            placeholder: "Describe your requirements — product types, quantities, packing preferences, export destination…",
                            value: form.message,
                            onChange: handleChange,
                            className: `${INPUT_BASE} resize-none`
                          }
                        ),
                        errors.message && /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            className: "text-destructive text-xs",
                            "data-ocid": "contact.message.field_error",
                            children: errors.message
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        Button,
                        {
                          type: "submit",
                          variant: "fire",
                          size: "lg",
                          "data-ocid": "contact.submit_button",
                          className: "w-full",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-4 h-4" }),
                            "Send Message"
                          ]
                        }
                      )
                    ]
                  }
                )
              ]
            }
          )
        ] }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-muted/30 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 md:px-8 max-w-3xl text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-lg md:text-xl font-bold text-accent mb-4 uppercase tracking-wide bg-accent/10 border border-accent/30 rounded-xl px-6 py-3 inline-block", children: "Choose SRI GURUSAMY MATCHES UNIT - Because Every Strike should be Safe" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl md:text-3xl font-bold text-foreground mb-4", children: "Ready to Place an Order?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-6 max-w-xl mx-auto", children: "We supply all over India and export internationally. Whether you need 300-box packing or bulk dipped splints, we'll match your exact specifications." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4 justify-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: `tel:+91${company.phones[0]}`,
                "data-ocid": "contact.cta.call_button",
                className: "inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-accent-foreground font-semibold text-sm hover:bg-accent/90 transition-smooth shadow-elevated",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4" }),
                  "Call Now"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: `mailto:${company.email}`,
                "data-ocid": "contact.cta.email_button",
                className: "inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-card text-foreground font-semibold text-sm hover:bg-muted transition-smooth",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-4 h-4" }),
                  "Send Email"
                ]
              }
            )
          ] })
        ]
      }
    ) }) })
  ] });
}
export {
  Contact
};
