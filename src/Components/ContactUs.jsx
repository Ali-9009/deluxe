import React, { useState } from "react";
import { Mail, Phone, Clock, Send, Map } from "lucide-react";

export default function Contact() {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <main className="py-5">
            <div className="container">
                <div className="row g-5 align-items-start">

                    {/* LEFT SIDE */}
                    <div className="col-lg-5 d-flex flex-column justify-content-center">

                        <div>
                            <p className="text-uppercase small text-secondary fw-medium letter-spacing">
                                Contact us
                            </p>

                            <h1 className="fw-bold display-5">
                                Let’s Grab.
                            </h1>

                            <p className="mt-3 text-secondary">
                                Have a project, partnership, or question in mind? Send a note and
                                we’ll get back with a clear next step.
                            </p>
                        </div>

                        <div className="d-flex flex-column gap-3">

                            <InfoItem
                                icon={<Mail size={18} />}
                                label="Email"
                                values={[
                                    "info@deluxepackages.com",
                                    "sales@deluxepackages.com"
                                ]}
                            />

                            <InfoItem
                                icon={<Phone size={18} />}
                                label="Phone"
                                values={[
                                    "(+92-21) 35056249",
                                    "(+92-21) 35066285"
                                ]}
                            />

                            <InfoItem
                                icon={<Map size={18} />}
                                label="Address"
                                values={[
                                    "Plot # 14-A, Unit 149",
                                    "Sector 30, Korangi Industrial Area",
                                    "Karachi, Pakistan"
                                ]}
                            />

                        </div>
                    </div>

                    {/* RIGHT SIDE (FORM) */}
                    <div className="col-lg-7">
                        <div className="card border-0 shadow-lg rounded-4">
                            <div className="card-body p-4 p-md-5">

                                <form onSubmit={handleSubmit}>

                                    <div className="row g-4">

                                        <div className="col-md-6">
                                            <Field
                                                label="First Name"
                                                name="firstName"
                                                value={form.firstName}
                                                onChange={handleChange}
                                                placeholder="Jane"
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <Field
                                                label="Last Name"
                                                name="lastName"
                                                value={form.lastName}
                                                onChange={handleChange}
                                                placeholder="Cooper"
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <Field
                                                label="Email Address"
                                                name="email"
                                                type="email"
                                                value={form.email}
                                                onChange={handleChange}
                                                placeholder="jane@email.com"
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <Field
                                                label="Phone Number"
                                                name="phone"
                                                type="tel"
                                                value={form.phone}
                                                onChange={handleChange}
                                                placeholder="+1 234 567 890"
                                            />
                                        </div>

                                        <div className="col-12">
                                            <label className="form-label fw-medium">
                                                Message
                                            </label>

                                            <textarea
                                                name="message"
                                                value={form.message}
                                                onChange={handleChange}
                                                rows="6"
                                                className="form-control"
                                                placeholder="Tell us a little about what you need..."
                                            />
                                        </div>

                                        <div className="col-12 d-flex flex-column flex-sm-row justify-content-between align-items-sm-center gap-3 mt-3">

                                            <p className="text-muted small mb-0">
                                                We usually reply within one business day.
                                            </p>

                                            <button
                                                type="submit"
                                                className="btn btn-dark rounded-pill px-4 d-flex align-items-center"
                                            >
                                                Send message
                                                <Send size={16} className="ms-2" />
                                            </button>
                                        </div>

                                    </div>

                                </form>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}

/* INPUT FIELD */
function Field({ label, name, value, onChange, placeholder, type = "text" }) {
    return (
        <div>
            <label className="form-label fw-medium">{label}</label>
            <input
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="form-control"
            />
        </div>
    );
}

function InfoItem({ icon, label, values = [] }) {
    return (
        <div className="d-flex align-items-start gap-3 p-3 border rounded-4 bg-light shadow-sm">

            <div
                className="d-flex align-items-center justify-content-center bg-dark text-white rounded-circle"
                style={{ width: "42px", height: "42px" }}
            >
                {icon}
            </div>

            <div>
                <p className="mb-1 fw-medium text-dark">{label}</p>

                {values.map((val, index) => (
                    <p key={index} className="mb-0 text-muted small">
                        {val}
                    </p>
                ))}
            </div>

        </div>
    );
}