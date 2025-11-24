import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Obsilab",
  description: "Terms of Service for Obsilab - Cloud-based API load-testing platform",
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
        <p className="text-muted-foreground mb-8">Last Updated: November 24, 2025</p>

        <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">

          {/* 1. Acceptance of Terms */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing or using Obsilab, you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use the Service.
            </p>
            <p>
              We reserve the right to modify these terms at any time. Changes become effective immediately upon posting. Your continued use of Obsilab after any modifications constitutes acceptance of the updated terms. You are responsible for reviewing these terms periodically.
            </p>
          </section>

          {/* 2. Eligibility */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Eligibility</h2>
            <p>To use Obsilab, you must:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Be at least 13 years of age</li>
              <li>Have legal authority to test any APIs or systems you target using the Service</li>
              <li>Not be located in, or a resident of, any country subject to U.S. economic sanctions (including OFAC-restricted regions)</li>
              <li>Not be on any U.S. government prohibited parties list</li>
            </ul>
          </section>

          {/* 3. Use of Service */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Use of Service</h2>
            <p>
              <strong>You may only use Obsilab to test systems you own or have explicit written authorization to test.</strong>
            </p>
            <p>You agree NOT to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Conduct load tests against any system without proper authorization</li>
              <li>Use the Service for DDoS attacks, denial-of-service attacks, or any form of cyberattack</li>
              <li>Engage in any illegal activity or violate any applicable laws</li>
              <li>Harm, disrupt, or damage third-party infrastructure, networks, or services</li>
              <li>Attempt to overwhelm or crash systems you do not own</li>
              <li>Use the Service to test systems in violation of their terms of service</li>
              <li>Circumvent any rate limits, security measures, or restrictions we implement</li>
            </ul>
            <p>
              We reserve the right to throttle, limit, suspend, or terminate your access immediately and without notice if we suspect any misuse, abuse, or violation of these terms. We may also report illegal activity to appropriate authorities.
            </p>
          </section>

          {/* 4. Accounts */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Accounts</h2>
            <p>
              You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
            </p>
            <p>
              Account sharing beyond your subscription plan limits is prohibited. You must notify us immediately of any unauthorized use of your account.
            </p>
            <p>
              We may suspend or terminate accounts that violate these terms or engage in fraudulent activity.
            </p>
          </section>

          {/* 5. Subscription Plans, Billing & Refunds */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Subscription Plans, Billing & Refunds</h2>
            <p>
              Obsilab operates on a subscription basis with recurring billing. By subscribing, you authorize us to charge your payment method on a recurring basis until you cancel.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Automatic Renewal:</strong> Subscriptions automatically renew at the end of each billing period unless canceled before the renewal date.</li>
              <li><strong>Price Changes:</strong> We may change subscription prices with at least 30 days&apos; notice. Continued use after a price change constitutes acceptance.</li>
              <li><strong>Annual Discounts:</strong> Annual subscriptions may be offered at a discounted rate. Annual payments are non-refundable except where required by law.</li>
              <li><strong>Failed Payments:</strong> If payment fails, we may retry the charge, downgrade your account, or suspend access until payment is resolved.</li>
              <li><strong>Refunds:</strong> All fees are non-refundable except where required by applicable law. No refunds will be provided for partial subscription periods or unused features.</li>
            </ul>
          </section>

          {/* 6. Load Testing Traffic & Resource Usage */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Load Testing Traffic & Resource Usage</h2>
            <p>
              Obsilab generates high-volume synthetic traffic to simulate virtual users and perform distributed load tests. You acknowledge and agree that:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>You are solely responsible for any costs, damages, or consequences resulting from load tests on your own systems or third-party systems you are authorized to test</li>
              <li>You must configure tests responsibly and within appropriate limits for the target infrastructure</li>
              <li>We may impose rate limits, traffic controls, or other restrictions to maintain platform stability and safety</li>
              <li>Test traffic volume and behavior are your responsibility to manage appropriately</li>
            </ul>
          </section>

          {/* 7. API Content & Test Data */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">7. API Content & Test Data</h2>
            <p>
              Our distributed workers do not permanently store test payloads or API response content.
            </p>
            <p>
              You are solely responsible for ensuring that any test data, API requests, or payloads you use:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Do not contain illegal content</li>
              <li>Do not include sensitive personal data unless properly secured and authorized</li>
              <li>Comply with all applicable data protection laws</li>
            </ul>
            <p>
              Obsilab has no responsibility or liability for the content of API requests, responses, or any data transmitted through tests you conduct.
            </p>
          </section>

          {/* 8. AI Diagnostics */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">8. AI Diagnostics</h2>
            <p>
              Obsilab provides AI-powered diagnostic insights based on your test results. These insights are:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Informational only and provided for convenience</li>
              <li>Not guaranteed to be accurate, complete, or reliable</li>
              <li>Not a substitute for professional engineering analysis or review</li>
            </ul>
            <p>
              You should independently verify any AI-generated recommendations before implementing changes to your systems.
            </p>
          </section>

          {/* 9. Termination */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Termination</h2>
            <p>
              We may suspend or terminate your account immediately, without notice, for any violation of these terms or at our sole discretion.
            </p>
            <p>
              You may cancel your subscription at any time through your account settings. Cancellation takes effect at the end of the current billing period.
            </p>
            <p>
              Upon termination, your access to the Service will cease. Test data and account information may be deleted after a reasonable retention period. We are not obligated to retain or provide copies of your data after termination.
            </p>
          </section>

          {/* 10. Intellectual Property */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Intellectual Property</h2>
            <p>
              Obsilab and its licensors own all rights, title, and interest in the Service, including all software, code, UI, branding, trademarks, and documentation.
            </p>
            <p>
              You retain ownership of your APIs, test configurations, and data. You grant us a limited license to use this content solely to provide the Service.
            </p>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Reverse engineer, decompile, or disassemble any part of the Service</li>
              <li>Copy, modify, or create derivative works of the Service</li>
              <li>Bypass or circumvent any security or access controls</li>
              <li>Remove any proprietary notices or labels</li>
            </ul>
          </section>

          {/* 11. Disclaimers of Warranties */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">11. Disclaimers of Warranties</h2>
            <p className="uppercase font-semibold">
              THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED.
            </p>
            <p>We do not warrant or guarantee that:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The Service will be uninterrupted, error-free, or always available</li>
              <li>Test results will be accurate, complete, or consistent</li>
              <li>AI diagnostics or insights will be correct or useful</li>
              <li>The Service will detect all issues or performance problems</li>
              <li>Results will be the same across different environments or infrastructure</li>
            </ul>
            <p>
              <strong>You accept all risks associated with running load tests, including potential damage to your systems, data loss, or service disruptions.</strong> Test results may vary based on your environment, network conditions, and target infrastructure.
            </p>
          </section>

          {/* 12. Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">12. Limitation of Liability</h2>
            <p className="uppercase font-semibold">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Obsilab is NOT liable for any damage to your servers, systems, or infrastructure resulting from load tests</li>
              <li>We are NOT responsible for downtime, outages, lost revenue, lost data, lost profits, or SLA violations</li>
              <li>We are NOT liable for any indirect, incidental, special, consequential, or punitive damages</li>
              <li>We disclaim all responsibility for any misuse of the platform by you or third parties</li>
            </ul>
            <p>
              <strong>Our total liability for any claims arising from your use of the Service is limited to the amount you paid us in the three (3) months preceding the claim.</strong>
            </p>
            <p>
              Some jurisdictions do not allow limitation of certain damages. In such cases, our liability is limited to the minimum extent permitted by law.
            </p>
          </section>

          {/* 13. Indemnification */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">13. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless Obsilab, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, costs, and expenses (including reasonable attorneys&apos; fees) arising from:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your use of the Service</li>
              <li>Your violation of these terms</li>
              <li>Unauthorized or illegal testing conducted through your account</li>
              <li>Any claims by third parties resulting from your load tests</li>
              <li>Your violation of any applicable laws or third-party rights</li>
            </ul>
          </section>

          {/* 14. Governing Law */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">14. Governing Law & Dispute Resolution</h2>
            <p>
              These terms are governed by the laws of the State of Delaware, USA, without regard to conflict of law principles.
            </p>
            <p>
              <strong>Arbitration:</strong> Any disputes arising from these terms or your use of the Service shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association. Arbitration will take place in Delaware, and the arbitrator&apos;s decision will be final and binding.
            </p>
            <p>
              <strong>Class Action Waiver:</strong> You agree to resolve disputes only on an individual basis and waive any right to participate in class actions, class arbitrations, or representative proceedings.
            </p>
            <p>
              <strong>Exceptions:</strong> Either party may seek injunctive relief in court for intellectual property infringement or unauthorized access to the Service.
            </p>
          </section>

          {/* 15. Changes to Terms */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">15. Changes to Terms</h2>
            <p>
              We may update these Terms of Service from time to time. We will notify you of material changes by posting the updated terms on our website and updating the &quot;Last Updated&quot; date.
            </p>
            <p>
              Your continued use of Obsilab after changes are posted constitutes acceptance of the modified terms. If you do not agree to the updated terms, you must stop using the Service.
            </p>
          </section>

          {/* 16. Contact Information */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">16. Contact Information</h2>
            <p>
              For questions about these Terms of Service, please contact us at:
            </p>
            <p className="mt-2">
              <strong>Email:</strong>{" "}
              <a href="mailto:legal@obsilab.com" className="text-primary hover:underline">
                legal@obsilab.com
              </a>
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
