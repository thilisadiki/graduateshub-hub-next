'use client';

import { useState } from 'react';
import { ChevronDown, MessageCircleQuestion } from 'lucide-react';

const faqs: { question: string; answer: string; node?: React.ReactNode }[] = [
  {
    question: 'Are the courses on Graduates Hub really free?',
    answer: "Yes! Every course listed on Graduates Hub is 100% free to access. There are no hidden fees, subscription charges, or paywalls. You only pay if you choose to purchase an official physical certificate after completing a course.",
  },
  {
    question: 'Are these certificates recognised by employers?',
    answer: "Absolutely. The courses are CPD (Continuing Professional Development) accredited and recognized by thousands of employers globally. For a deeper look at what employers value, read our career guides and industry insights on Graduates Hub.",
    node: <>Absolutely. The courses are CPD (Continuing Professional Development) accredited and recognized by thousands of employers globally. For a deeper look at what employers value, read our <a href="/blog" className="text-primary font-semibold hover:underline">career guides and industry insights</a> on Graduates Hub.</>,
  },
  {
    question: 'Do I need any previous experience to enrol?',
    answer: "No formal entry requirements are needed for the vast majority of our certificate and diploma courses. They are specifically designed to be accessible to beginners while still providing immense value to experienced professionals looking to upskill.",
  },
  {
    question: 'How long does it take to complete a course?',
    answer: "It depends entirely on the course format. Standard Certificate courses typically take 2 to 3 hours to complete, while comprehensive Diploma programs can take 10 to 15 hours. Because everything is completely self-paced, you learn on your own schedule. Check out our study tips and time management guides to help you stay on track.",
    node: <>It depends entirely on the course format. Standard Certificate courses typically take 2 to 3 hours to complete, while comprehensive Diploma programs can take 10 to 15 hours. Because everything is completely self-paced, you learn on your own schedule. Check out our <a href="/blog/how-to-successfully-balance-full-time-work-with-online-study" className="text-primary font-semibold hover:underline">study tips and time management guides</a> to help you stay on track.</>,
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
};

function FAQItem({
  question,
  answer,
  node,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  node?: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border border-gray-100 bg-white rounded-xl shadow-sm mb-4 overflow-hidden transition-all duration-300">
      <button
        className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-colors group"
        onClick={onClick}
      >
        <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors pr-4">{question}</h3>
        <ChevronDown
          className={`text-primary shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          size={20}
        />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 pb-5 pt-1 text-gray-600 leading-relaxed">{node ?? answer}</div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="w-full max-w-4xl mx-auto py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="text-center mb-10">
        <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-blue-50 text-primary mb-4 shadow-sm">
          <MessageCircleQuestion size={32} />
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
          Everything you need to know about learning with Graduates Hub.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            node={faq.node}
            isOpen={openIndex === index}
            onClick={() => toggleFAQ(index)}
          />
        ))}
      </div>
    </section>
  );
}
