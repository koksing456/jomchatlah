export default function Page() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center my-8">Privacy Policy</h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold my-5">
          Data Confidentiality and Security
        </h2>
        <p className="mb-4">
          JomChatLah respects the privacy of its users and ensures that personal
          information is treated confidentially. We use your data to process
          orders as efficiently as possible and will only use your data with
          your permission. JomChatLah will not sell your personal information to
          third parties and will only share it with third parties when necessary
          to process your service order.
        </p>
        {/* ... */}
      </section>

      {/* <section className="mb-10">
        <h2 className="text-2xl font-semibold my-5">Collected Data</h2>
      </section> */}

      {/* ... additional sections ... */}

      <section className="mb-10">
        <h2 className="text-2xl font-semibold my-5">Cookies</h2>
        <p className="mb-4">
          Cookies are small pieces of information saved by your browser.
          JomChatLah uses cookies to recognize you on your next visit and to
          collect information about your use of our services. Our cookies do not
          provide information related to personal identification. You can set
          your browser to not receive cookies while visiting JomChatLah.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold my-5">
          Data Processing & GDPR Policy
        </h2>
        <p className="mb-4">
          For our data processing policy and GDPR regulations, please refer to
          the Data Processing Addendum document.
        </p>
      </section>

      {/* ... additional sections ... */}

      <section className="mb-10">
        <h2 className="text-2xl font-semibold my-5">Changes</h2>
        <p className="mb-4">
          We reserve the right to update our privacy policy and data processing
          policy over time. Please stop using our services if you disagree with
          the changes and consult the new terms if you continue to use our
          services.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold my-5">Refund Policies</h2>
        <p className="mb-4">
          We offer a 7 Day Free Trial so you can test all features before
          subscribing. Please note that we do not offer refunds after the
          purchase.
        </p>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold my-5">Update Policies</h2>
        <p className="mb-4">
          Our commitment to your satisfaction is paramount, yet our ability to
          provide updates depends on the rules and updates of the relevant
          messaging platforms.
        </p>
      </section>
    </div>
  );
}
