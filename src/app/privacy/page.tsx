import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Obsilab",
  description: "Privacy Policy for Obsilab - Cloud-based API load-testing platform",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-2 leading-[1] tracking-[-0.02em] text-[3.052rem]">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last Updated: November 24, 2025</p>

        <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">

          {/* 1. Overview */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 leading-[1.1] text-[2.441rem]">1. Overview</h2>
            <p>
              Obsilab is a cloud-based API load-testing platform that simulates virtual users, performs distributed load tests, and provides AI-powered diagnostics to help developers optimize their applications.
            </p>
            <p>
              This Privacy Policy explains what information we collect, how we use it, and your rights regarding your data. By using Obsilab, you agree to the practices described in this policy.
            </p>
          </section>

          {/* 2. Information We Collect */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 leading-[1.1] text-[2.441rem]">2. Information We Collect</h2>

            <h3 className="text-xl font-medium mt-6 mb-3 tracking-[-0.015em] text-[1.953rem]">A. Account Information</h3>
            <p>When you create an account, we collect:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Email address</li>
              <li>Password (stored securely using one-way hashing)</li>
              <li>Name (if provided)</li>
            </ul>

            <h3 className="text-xl font-medium mt-6 mb-3 tracking-[-0.015em] text-[1.953rem]">B. Billing Information</h3>
            <p>
              Payment processing is handled securely by Stripe. Obsilab does not store credit card numbers or full payment details. We only receive confirmation of payment status and basic transaction records.
            </p>

            <h3 className="text-xl font-medium mt-6 mb-3 tracking-[-0.015em] text-[1.953rem]">C. Usage Data</h3>
            <p>We collect metadata about your tests, including:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Test configurations (number of virtual users, duration, target endpoints)</li>
              <li>Timestamps of test execution</li>
              <li>Success and error counts</li>
              <li>Response time metrics</li>
              <li>AI insight metadata</li>
            </ul>
            <p className="mt-4 font-medium">
              Important: Obsilab does NOT store API response bodies, request payloads, or your private source code. We only process the metadata necessary to display your test results and generate insights.
            </p>

            <h3 className="text-xl font-medium mt-6 mb-3 tracking-[-0.015em] text-[1.953rem]">D. Device & Technical Data</h3>
            <p>We automatically collect:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>General geographic region</li>
            </ul>
            <p>This information is used for security monitoring and service analytics only.</p>
          </section>

          {/* 3. How We Use the Information */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 leading-[1.1] text-[2.441rem]">3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Execute and manage your load tests</li>
              <li>Scale workers and infrastructure based on test requirements</li>
              <li>Generate analytics, reports, and AI-powered insights</li>
              <li>Prevent abuse, including unauthorized testing and DDoS attempts</li>
              <li>Improve platform performance, reliability, and features</li>
              <li>Send account-related communications (billing, security alerts, service updates)</li>
              <li>Respond to support requests</li>
            </ul>
            <p className="mt-4">
              We do not sell your personal data. Marketing emails are only sent if you explicitly opt in.
            </p>
          </section>

          {/* 4. AI Diagnostics */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 leading-[1.1] text-[2.441rem]">4. AI Diagnostics</h2>
            <p>Obsilab provides AI-powered diagnostic insights to help you understand test results. Regarding AI processing:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>AI analysis operates on test metadata (response times, error rates, patterns)  not on API response bodies</li>
              <li>No request payloads or API responses are stored or fed into AI models</li>
              <li>AI-generated suggestions are informational and may not be perfectly accurate</li>
              <li>You retain full ownership of your API data and test configurations</li>
            </ul>
          </section>

          {/* 5. Data Sharing */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 leading-[1.1] text-[2.441rem]">5. Data Sharing</h2>
            <p>
              We do not sell your personal data. We only share data with trusted third-party service providers necessary to operate the platform:
            </p>

            <h3 className="text-lg font-medium mt-4 mb-2 tracking-[-0.015em] text-[1.953rem]">Payment Processing</h3>
            <p>Stripe processes all payments securely.</p>

            <h3 className="text-lg font-medium mt-4 mb-2 tracking-[-0.015em] text-[1.953rem]">Cloud Infrastructure</h3>
            <p>
              We use cloud providers (such as AWS, DigitalOcean, Fly.io, or similar) to host our platform and execute distributed load tests.
            </p>

            <h3 className="text-lg font-medium mt-4 mb-2 tracking-[-0.015em] text-[1.953rem]">Analytics & Error Monitoring</h3>
            <p>
              We use tools like Sentry and Logtail for error tracking and operational monitoring.
            </p>

            <p className="mt-4">
              All third-party access is strictly limited to what is necessary for service operation. We require these providers to protect your data appropriately.
            </p>
          </section>

          {/* 6. How Test Traffic Works */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 leading-[1.1] text-[2.441rem]">6. How Test Traffic Works</h2>
            <p>Understanding how Obsilab handles test traffic:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Load tests generate synthetic HTTP traffic from distributed workers</li>
              <li>Workers send requests to URLs you provide and measure responses</li>
              <li>We do not store or inspect the content of request or response bodies</li>
              <li>Test traffic data is processed in real time and deleted immediately after execution</li>
              <li>Only aggregated metrics (response times, status codes, error counts) are retained for your dashboard</li>
            </ul>
          </section>

          {/* 7. Cookies */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 leading-[1.1] text-[2.441rem]">7. Cookies</h2>
            <p>Obsilab uses cookies for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Authentication and session management</li>
              <li>Security (preventing unauthorized access)</li>
              <li>Remembering dashboard preferences</li>
            </ul>
            <p className="mt-4">
              We do not use advertising or tracking cookies. You can manage cookie preferences in your browser settings.
            </p>
          </section>

          {/* 8. Data Retention */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 leading-[1.1] text-[2.441rem]">8. Data Retention</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Account information:</strong> Retained while your account is active</li>
              <li><strong>Test metadata and results:</strong> Retained for 730 days depending on your subscription plan</li>
              <li><strong>Security logs:</strong> Short-term retention for monitoring and incident response</li>
              <li><strong>After account deletion:</strong> All associated data is deleted within 30 days</li>
            </ul>
          </section>

          {/* 9. Security */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 leading-[1.1] text-[2.441rem]">9. Security</h2>
            <p>We implement industry-standard security measures to protect your data:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>All data transmitted over HTTPS (encryption in transit)</li>
              <li>Encrypted databases (encryption at rest)</li>
              <li>Isolated worker environments for test execution</li>
              <li>No access to or storage of test payloads or API response bodies</li>
              <li>Rate limiting and abuse detection systems</li>
              <li>Regular security reviews</li>
            </ul>
            <p className="mt-4">
              While we take security seriously, no system is 100% secure. We cannot guarantee absolute security but are committed to protecting your information.
            </p>
          </section>

          {/* 10. User Rights */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 leading-[1.1] text-[2.441rem]">10. Your Rights</h2>
            <p>You have the following rights regarding your data:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your account and associated data</li>
              <li><strong>Export:</strong> Request an export of your data in a portable format</li>
              <li><strong>Opt-out:</strong> Unsubscribe from marketing communications at any time</li>
            </ul>
            <p className="mt-4">
              To exercise these rights, contact us at{" "}
              <a href="mailto:privacy@obsilab.com" className="text-primary hover:underline">
                privacy@obsilab.com
              </a>
              . We will respond within a reasonable timeframe.
            </p>
          </section>

          {/* 11. Children's Privacy */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 leading-[1.1] text-[2.441rem]">11. Children&apos;s Privacy</h2>
            <p>
              Obsilab is not intended for use by anyone under the age of 13. We do not knowingly collect personal information from children under 13. If we learn that we have collected such information, we will delete it promptly.
            </p>
          </section>

          {/* 12. International Transfers */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 leading-[1.1] text-[2.441rem]">12. International Data Transfers</h2>
            <p>
              Obsilab is based in the United States. Your data may be processed in the US or other regions where our infrastructure or service providers operate. This includes regions necessary for distributed load-testing execution.
            </p>
            <p>
              When we transfer data internationally, we implement appropriate safeguards to protect your information in accordance with applicable laws.
            </p>
          </section>

          {/* 13. Changes to This Policy */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 leading-[1.1] text-[2.441rem]">13. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. When we make changes, we will update the &quot;Last Updated&quot; date at the top of this page.
            </p>
            <p>
              We encourage you to review this policy periodically. Your continued use of Obsilab after changes are posted constitutes acceptance of the updated policy.
            </p>
          </section>

          {/* 14. Contact Us */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 leading-[1.1] text-[2.441rem]">14. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or how we handle your data, please contact us at:
            </p>
            <p className="mt-2">
              <strong>Email:</strong>{" "}
              <a href="mailto:privacy@obsilab.com" className="text-primary hover:underline">
                privacy@obsilab.com
              </a>
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
