import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Responsible Testing Policy | Obsilab",
  description: "Responsible Testing Policy for Obsilab - Guidelines for acceptable use of our load-testing platform",
};

export default function TestingPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-2 leading-[1] tracking-[-0.02em] text-[3.052rem]">Responsible Testing Policy</h1>
        <p className="text-muted-foreground mb-8">Last Updated: November 24, 2025</p>

        <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">

          {/* 1. Purpose of This Policy */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 leading-[1.1] text-[2.441rem]">1. Purpose of This Policy</h2>
            <p>
              This Responsible Testing Policy exists to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Ensure all users conduct load tests responsibly and ethically</li>
              <li>Protect infrastructureboth ours and third parties&apos;from misuse</li>
              <li>Define acceptable and unacceptable behavior on the Obsilab platform</li>
              <li>Comply with legal requirements that prohibit enabling DDoS attacks or unauthorized testing</li>
            </ul>
            <p>
              By using Obsilab, you agree to follow this policy. Violations may result in immediate account suspension or termination.
            </p>
          </section>

          {/* 2. User Responsibility & Ownership Requirements */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 leading-[1.1] text-[2.441rem]">2. User Responsibility & Ownership Requirements</h2>
            <p className="font-semibold">
              You may only use Obsilab to test systems you own, operate, or have explicit written permission to test.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>You are solely responsible for ensuring you have authorization to test any target endpoint</li>
              <li>You must not test client or customer systems without their explicit written consent</li>
              <li>Obsilab is not responsible for any misuse of the platform by users</li>
              <li>Testing unauthorized endpoints is strictly prohibited and may be illegal</li>
            </ul>
          </section>

          {/* 3. Prohibited Activities */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 leading-[1.1] text-[2.441rem]">3. Prohibited Activities</h2>
            <p>The following activities are strictly forbidden:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Testing any target without proper authorization or consent</li>
              <li>Conducting DDoS attacks, stress tests, or traffic simulation against services you do not own</li>
              <li>Attacking or testing government, financial, medical, or critical infrastructure systems</li>
              <li>Attempting to bypass security controls, firewalls, or rate limits on target systems</li>
              <li>Using Obsilab to exfiltrate data, probe vulnerabilities, or compromise systems</li>
              <li>Sending malware, viruses, or harmful payloads through tests</li>
              <li>Running tests that exceed legal traffic thresholds in your jurisdiction</li>
              <li>Using the platform for any illegal purpose</li>
            </ul>
          </section>

          {/* 4. Rate Limits & Traffic Safety */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 leading-[1.1] text-[2.441rem]">4. Rate Limits & Traffic Safety</h2>
            <p>
              To maintain platform stability and prevent abuse:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Traffic caps:</strong> Each subscription plan has defined traffic limits to prevent unexpected spikes</li>
              <li><strong>Monitoring:</strong> We continuously monitor for suspicious patterns and anomalous behavior</li>
              <li><strong>Automatic blocking:</strong> Tests exhibiting abusive patterns may be automatically terminated</li>
              <li><strong>Platform protection:</strong> We implement controls to prevent any single user from affecting platform-wide stability</li>
              <li><strong>Throttling:</strong> We may suspend or throttle tests that threaten stability or violate this policy</li>
            </ul>
          </section>

          {/* 5. Required Permissions for Third-Party Targets */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 leading-[1.1] text-[2.441rem]">5. Required Permissions for Third-Party Targets</h2>
            <p>
              If you are testing systems owned by third parties (such as client or customer systems):
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>You must maintain written permission documenting your authorization to test</li>
              <li>Obsilab may request proof of authorization at any time</li>
              <li>We reserve the right to suspend tests until satisfactory proof is provided</li>
              <li>Failure to provide proof when requested will result in test termination</li>
            </ul>
          </section>

          {/* 6. Data Handling & Test Content Restrictions */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 leading-[1.1] text-[2.441rem]">6. Data Handling & Test Content Restrictions</h2>
            <p>
              To protect privacy and security:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>No sensitive personal data (PII, PHI, financial data) should be included in test payloads</li>
              <li>Do not upload credentials, API tokens, passwords, or private keys to test configurations</li>
              <li>Workers do not accept or execute user codethey only send HTTP requests</li>
              <li>Only standard HTTP traffic is permittedno exploit payloads, vulnerability scanners, or attack tools</li>
            </ul>
          </section>

          {/* 7. Legal Compliance */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 leading-[1.1] text-[2.441rem]">7. Legal Compliance</h2>
            <p>
              Users must comply with all applicable local, federal, and international laws when using Obsilab.
            </p>
            <p>Obsilab does not permit load testing against:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Government-owned systems or networks</li>
              <li>Financial institutions or banking systems</li>
              <li>Emergency services or healthcare systems</li>
              <li>Critical infrastructure (power grids, telecommunications, transportation)</li>
              <li>Any system where testing would be illegal</li>
            </ul>
            <p className="mt-4">
              Obsilab may cooperate with law enforcement agencies in cases of suspected illegal activity or abuse.
            </p>
          </section>

          {/* 8. Violations & Enforcement */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 leading-[1.1] text-[2.441rem]">8. Violations & Enforcement</h2>
            <p>
              We take policy violations seriously and enforce this policy through:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Detection:</strong> Automated monitoring and manual review to identify violations</li>
              <li><strong>Immediate action:</strong> We may immediately suspend or terminate accounts that violate this policy</li>
              <li><strong>No refunds:</strong> Accounts terminated for abuse are not eligible for refunds</li>
              <li><strong>Legal escalation:</strong> Severe violations may be reported to law enforcement authorities</li>
              <li><strong>Permanent bans:</strong> Repeated infractions result in permanent platform bans</li>
            </ul>
          </section>

          {/* 9. Reporting Abuse */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 leading-[1.1] text-[2.441rem]">9. Reporting Abuse</h2>
            <p>
              If you believe someone is using Obsilab to conduct unauthorized testing against your systems, or if you witness abuse of the platform:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Email us at{" "}
                <a href="mailto:abuse@obsilab.com" className="text-primary hover:underline">
                  abuse@obsilab.com
                </a>
              </li>
              <li>Include details about the incident (timestamps, affected systems, traffic patterns)</li>
              <li>We will review all reports promptly and take appropriate action</li>
            </ul>
          </section>

          {/* 10. Updates to This Policy */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 leading-[1.1] text-[2.441rem]">10. Updates to This Policy</h2>
            <p>
              We may update this Responsible Testing Policy as laws change or as we add new platform features. When we make significant changes, we will notify users through email or platform notifications.
            </p>
            <p>
              We encourage you to review this policy periodically. Your continued use of Obsilab after changes are posted constitutes acceptance of the updated policy.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
