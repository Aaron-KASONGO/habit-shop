import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function FAQPage() {
  const faqs = [
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay."
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping takes 5-7 business days. Express shipping (2-3 business days) and overnight shipping are also available."
    },
    {
      question: "What is your return policy?",
      answer: "We offer 30-day returns for unworn items with original tags. Simply contact our customer service to initiate a return."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship to most countries worldwide. International shipping times and rates vary by destination."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order ships, you'll receive a tracking number via email that you can use to monitor your delivery."
    },
    {
      question: "Do you offer gift wrapping?",
      answer: "Yes, gift wrapping is available for a small additional fee. You can select this option at checkout."
    },
    {
      question: "What if an item is out of stock?",
      answer: "You can sign up for restock notifications on product pages. We'll email you as soon as the item is available again."
    },
    {
      question: "How do I care for my purchases?",
      answer: "Care instructions are included with each item. Most clothing should be washed in cold water and hung to dry."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Still have questions?</h2>
            <p className="text-gray-600 mb-4">
              Can't find the answer you're looking for? Our customer service team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/contact" 
                className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors text-center"
              >
                Contact Us
              </a>
              <a 
                href="mailto:info@habitshop.com" 
                className="inline-block border border-black text-black px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors text-center"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
