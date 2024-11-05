

export default function ThankYou() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#12113D] text-white p-6">
      <h1 className="text-4xl font-bold mb-6">🎉 Payment Successful!</h1>
      <p className="text-lg mb-4">
        Thank you for your purchase! Your payment was received, and you now have access to the model.
      </p>
      <a href="/" className="mt-6 px-6 py-3 bg-[#7B68EE] text-white rounded-lg hover:bg-[#9a88ff] transition duration-200">
          Go to Homepage
      </a>
      <a href="/marketplace" className="mt-4 px-6 py-3 bg-[#7B68EE] text-white rounded-lg hover:bg-[#9a88ff] transition duration-200">
          Explore More Models
      </a>
    </div>
  );
}
