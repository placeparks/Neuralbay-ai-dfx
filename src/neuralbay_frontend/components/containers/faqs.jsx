import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion

export default function FAQs() {
  const faqs = [
    {
      id: "1",
      qus: "What is NeuralBay?",
      ans: "NeuralBay is an innovative AI Model Marketplace designed to provide users with access to a diverse range of pretrained AI models. It empowers AI engineers, developers, and enthusiasts to discover, experiment, buy, sell, and monetize AI models securely and transparently. NeuralBay leverages cutting-edge technologies, including blockchain, to create a comprehensive ecosystem for AI model transactions and usage.",
    },
    {
      id: "2",
      qus: "How do I get started with NeuralBay?",
      ans: (
        <>
          <p>Getting started with NeuralBay is simple:</p>
          <ol className="list-decimal pl-4 space-y-2 mt-4">
            <li>
              Visit the NeuralBay website and click on the login/signup option.
            </li>
            <li>
              You&apos;ll be prompted to log in or sign up using the Internet
              Computer&apos;s identity canister.
            </li>
            <li>
              After logging in for the first time, you&apos;ll be asked to complete
              your profile by entering your full name.
            </li>
            <li>
              Once your profile is set up, you can start exploring the
              marketplace, searching for AI models, or even uploading your own
              models to sell.
            </li>
          </ol>
        </>
      ),
    },
    {
      id: "3",
      qus: "Can I test AI models before purchasing them?",
      ans: "Yes, absolutely! NeuralBay provides a testing feature for AI models. When you're viewing a model's details page, you'll find options to test the model. You can enter prompts and upload or attach files to see how the model performs. This allows you to ensure the model meets your requirements before making a purchase or subscription commitment.",
    },
    {
      id: "4",
      qus: "How can I contribute my own AI models to NeuralBay?",
      ans: (
        <>
          <p>
            NeuralBay welcomes contributions from AI engineers and developers.
            To upload your own model:
          </p>
          <ol className="list-decimal pl-4 space-y-2 mt-4">
            <li>
              Navigate to the model upload section in your user dashboard.
            </li>
            <li>
              Follow the 3-step upload process:
              <ul>
                <li>- Enter model details</li>
                <li>- Specify input and output requirements</li>
                <li>- Upload project files</li>
              </ul>
            </li>
            <li>
              Set your preferred monetization method (one-time sale,
              subscription, or usage-based pricing).
            </li>
            <li>Submit your model for review.</li>
          </ol>
        </>
      ),
    },
    {
      id: "5",
      qus: "How does NeuralBay use the Internet Computer Protocol (ICP), and why is this important?",
      ans: (
        <>
          <p>
            NeuralBay leverages the Internet Computer Protocol (ICP) in several
            key ways:
          </p>
          <ol className="list-decimal pl-4 space-y-2 mt-4">
            <li>
              *User Authentication:* NeuralBay uses the Internet Computer&apos;s
              identity canister for user login and signup. This provides a
              secure and decentralized method of user authentication.
            </li>
            <li>
              *Blockchain Integration:* The use of ICP allows NeuralBay to
              integrate blockchain technology, enhancing the security and
              transparency of transactions on the platform.
            </li>
            <li>
              *Decentralized Infrastructure:* By building on ICP, NeuralBay can
              operate on a decentralized infrastructure, potentially improving
              reliability and reducing single points of failure.
            </li>
            <li>
              *Smart Contracts:* ICP enables the use of smart contracts, which
              can be utilized for secure and automated transactions, such as
              model purchases or revenue sharing.
            </li>
          </ol>
        </>
      ),
    },
  ];

  return (
    <section className="w-full py-24 space-y-16">
      <div className="container flex flex-col items-center text-center gap-4">
        <h2 className="homepage-head">FREQUENTLY ASKED QUESTIONS</h2>
        <h1 className="homepage-title">We&apos;ve Got The Answers</h1>
        <p className="lg:w-2/3 lg:text-lg text-muted">
          Our FAQ area is the best place to look to find answers to your
          questions. Our community and support team constantly updates the
          questions and answers.
        </p>
      </div>

      <div className="container">
        <Accordion type="single" collapsible className="lg:px-12 space-y-5">
          {faqs.map((item, index) => (
            <AccordionItem key={index} value={item.id}>
              <AccordionTrigger className="text-xl max-lg:text-start">
                {item.qus}
              </AccordionTrigger>
              <AccordionContent className="text-base p-5 rounded-2xl bg-[linear-gradient(180deg,#12113D_21%,#070232_100%)]">
                {item.ans}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
