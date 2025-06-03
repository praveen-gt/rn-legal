import { useState, useEffect, memo } from "react";
import Link from "next/link";

interface DisclaimerPolicyProps {
  trigger?: boolean;
  onClose: () => void; // Add a callback function prop to close the disclaimer from outside
}

const DisclaimerPolicy: React.FC<DisclaimerPolicyProps> = memo(({ trigger, onClose }) => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show popup on trigger or if it's the first time
    if (trigger) {
      setShowPopup(true);
      document.body.classList.add("disable-scroll");
    }

    return () => {
      document.body.classList.remove("disable-scroll");
    };
  }, [trigger]);

  const handleAccept = () => {
    setShowPopup(false);
    document.body.classList.remove("disable-scroll");
    onClose(); // Reset the showDisclaimer state in the parent
  };

  if (!showPopup) return null;
  

  return (
    <div
      className="flex fixed inset-0 bg-black bg-opacity-50 items-center justify-center px-4"
      style={{ zIndex: 9999 }}
    >
      <div
        className="bg-white px-6 pt-6 pb-3 rounded-lg shadow-lg text-left w-full 800px:w-3/5 font-poppins relative overflow-y-auto max-h-[90vh] hideVerticalScrollbar"
      >
        <div className=""> {/* Adds padding for the button space */}
        <h2 className="text-xl font-bold mb-2">Cookie & Privacy Notice</h2>
          <p className="mb-4 text-sm leading-relaxed">
            We use cookies to enhance your experience on our site. By clicking &quot;Got it&quot;, you consent to our use of cookies. For more information, please see our{" "}
            <Link href="/privacy-policy" className="text-blue-600 hover:underline">
              Privacy Policy
            </Link>.
          </p>
          <p className="mb-4 text-sm leading-relaxed">
            Our work for you is performed in accordance with the Tax Agent
            Services Act 2009. Under this Act, the Tax Agent Services (Code of
            Professional Conduct) Determination 2024 requires that we make the
            following disclosures to you:
          </p>
          <ol className="list-decimal ml-6 text-sm leading-relaxed">
            <li>
              Matters that could significantly influence your decision to engage
              us (or continue to engage us) for a Tax Agent Service from 1 July
              2022 onward include the following:
              <ul className="list-disc ml-6 py-2 text-sm">
                <li>None Applicable</li>
              </ul>
            </li>
            <li className="pb-2">
              The Tax Practitioner’s Board maintains a register of Tax Agents and
              BAS Agents. You can access and search this register here:{" "}
              <Link
                href={"https://www.tpb.gov.au/public-register"}
                className="text-blue-600 hover:underline"
                target="_blank"
              >
                https://www.tpb.gov.au/public-register
              </Link>
            </li>
            <li className="mb-4">
              If you have a complaint about our Tax Agent services, you will need
              to contact your Accountant in the first instance with details by
              email. If they are unable to resolve your complaint within 3
              business days, please contact Karuna Malik - Principal by emailing
              karunamalik@forwardaccounting.com.au. Your complaint will be
              investigated by Karuna Malik who is not involved in the subject
              matter of the dispute where possible. We will provide you with email
              acknowledgement of receipt of your complaint and our understanding
              of the circumstances. The email will inform you that we will attempt
              to resolve your complaint with 14 days and will outline the dispute
              resolution process. If you are unhappy with the outcome that we
              propose to you, you can then make a complaint to the Tax
              Practitioners Board (TPB) using the link listed above. The TPB will
              send you an email to acknowledge the receipt of your complaint and
              review and risk assess your complaint. If you are unhappy with how
              the TPB has dealt with your complaint, the above link includes
              details about your review rights and who can further assist you.
            </li>
          </ol>
        </div>
        <div className="max-sm:fixed max-sm:bottom-0 left-0 w-full bg-white py-3 px-6 border-t border-gray-200">
          <button
            onClick={handleAccept}
            className="bg-blue-600 text-white max-sm:w-full py-3 rounded hover:bg-blue-700 text-sm px-4 py-2"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
});

DisclaimerPolicy.displayName = "DisclaimerPolicy";

export default DisclaimerPolicy;
