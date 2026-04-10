'use client';

import { useState } from 'react';
import SectionReveal from './SectionReveal';
import RequestQuoteModal from './RequestQuoteModal';

export default function CTASection({
  title,
  subtitle,
  buttonLabel,
  buttonHref,
  onSubmitQuoteForm,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = (e) => {
    const isQuoteButton =
      buttonLabel?.toLowerCase().trim() === 'request a quote';

    if (isQuoteButton) {
      e.preventDefault();
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <section className="cta-strip-section" id="contact">
        <div className="container px-4 px-md-0">
          <SectionReveal>
            <div className="cta-strip">
              <div>
                <h3 className="inter-semibold">{title}</h3>
                <p>{subtitle}</p>
              </div>

              <button
                className="btn btn-light cta-strip-btn"
                onClick={handleButtonClick}
              >
                {buttonLabel}
              </button>
            </div>
          </SectionReveal>
        </div>
      </section>

      <RequestQuoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmitForm={onSubmitQuoteForm}
      />
    </>
  );
}