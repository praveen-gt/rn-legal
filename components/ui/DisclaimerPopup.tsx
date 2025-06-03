import Link from "next/link";
import { useState, useEffect, memo } from "react";
import Cookies from "js-cookie";

const DisclaimerPopup: React.FC = memo(() => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const hasAcceptedDisclaimer = Cookies.get("disclaimerAccepted");
    if (!hasAcceptedDisclaimer) {
      setShowPopup(true);
      document.body.classList.add("disable-scroll");
    }
    return () => {
      document.body.classList.remove("disable-scroll");
    };
  }, []);

  const handleAccept = () => {
    Cookies.set("disclaimerAccepted", "true", { expires: 365 });
    setShowPopup(false);
    document.body.classList.remove("disable-scroll");
  };

  const handleDecline = () => {
    window.location.href = "/disclaimer-not-accepted";
  };

  if (!showPopup) return null;

  return (
    <div
      className="flex fixed inset-0 bg-black bg-opacity-50 items-center justify-center px-4 fade-in"
      style={{ zIndex: 9999 }}
    >
      <div
        className="bg-white text-black dark:bg-[#171717] dark:text-[#ededed] px-6 pt-6 pb-3 rounded-lg shadow-lg text-left w-full max-w-2xl font-sans relative overflow-y-auto max-h-[90vh] hideVerticalScrollbar scale-in"
      >
        <div>
          <h2 className="text-xl font-bold mb-2 text-[--color-primary-500]">
            Disclaimer & Privacy Notice
          </h2>
          <p className="mb-4 text-sm leading-relaxed">
            Welcome to Vidhi Mantra Legal Consultants. By continuing to use this site, you acknowledge and agree to the following:
          </p>
          <ul className="list-disc ml-6 text-sm leading-relaxed mb-4">
            <li>
              We use cookies to enhance your browsing experience. By clicking &quot;I Agree&quot;, you consent to our use of cookies. See our{" "}
              <Link href="/privacy-policy" className="text-[--color-accent-DEFAULT] hover:underline smooth-transition">
                Privacy Policy
              </Link>.
            </li>
            <li>
              Vidhi Mantra Legal Consultants is a premier law firm specializing in litigation, corporate advisory, dispute resolution, and other legal services across Punjab, Haryana, and the Supreme Court of India.
            </li>
            <li>
              For any concerns or inquiries, please contact us at{" "}
              <a
                href="mailto:vidhimantralegalconsultants@gmail.com"
                className="text-[--color-accent-DEFAULT] hover:underline smooth-transition"
              >
                vidhimantralegalconsultants@gmail.com
              </a> or call us at +91-9643213390.
            </li>
          </ul>
          <p className="mb-4 text-sm leading-relaxed">
            Thank you for choosing Vidhi Mantra Legal Consultants. We are committed to providing reliable and effective legal solutions.
          </p>
        </div>
        <div className="flex justify-end gap-3 max-sm:flex-col">
          <button
            onClick={handleDecline}
            className="bg-[--color-secondary-500] text-white py-2 px-4 rounded hover:bg-[--color-secondary-600] text-sm smooth-transition"
          >
            I DISAGREE
          </button>
          <button
            onClick={handleAccept}
            className="btn-accent text-sm"
          >
            I AGREE
          </button>
        </div>
      </div>
    </div>
  );
});

DisclaimerPopup.displayName = "DisclaimerPopup";

export default DisclaimerPopup;
