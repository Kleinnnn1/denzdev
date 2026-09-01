import { Send } from 'lucide-react';

function HireMe() {
  return (
    <section id="hire-me">
      <div className="section-header">
        <span className="eyebrow">Hire Me</span>
        <h2>Let's Work Together</h2>
        <p>
          Have a project, freelance opportunity, or full-time role?
          Send me a message and I'll get back to you as soon as possible.
        </p>
      </div>

      <form
        className="hire-form"
        action="https://formsubmit.co/aliwate.denzel@gmail.com"
        method="POST"
      >
        <input
          type="hidden"
          name="_subject"
          value="New Portfolio Inquiry"
        />

        <div className="form-row">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
          />
        </div>

        <input
          type="text"
          name="company"
          placeholder="Company / Organization"
        />

        <textarea
          name="message"
          rows="6"
          placeholder="Tell me about your project..."
          required
        />

        <button type="submit" className="btn btn-primary">
          <Send size={18} />
          Send Request
        </button>
      </form>
    </section>
  );
}

export default HireMe;