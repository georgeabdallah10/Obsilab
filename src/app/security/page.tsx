import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security | Obsilab",
  description: "Security practices and data protection at Obsilab - Cloud-based API load-testing platform",
};

export default function Security() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-2 leading-[1] tracking-[-0.02em] text-[3.052rem]">Security</h1>
        <p className="text-muted-foreground mb-8">How we protect your data and ensure safe testing</p>

        <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">

          {/* 1. Security Overview */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 leading-[1.1] text-[2.441rem]">1. Security Overview</h2>
            <p>
              At Obsilab, security is foundational to how we build and operate our platform. We designed our architecture with the following principles:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Minimal data collection:</strong> We only collect the metadata necessary to run tests and display results</li>
              <li><strong>No storage of sensitive content:</strong> We never store API response bodies, request payloads, or your source code</li>
              <li><strong>Customer isolation:</strong> Each customer&apos;s tests run in isolated environments with no cross-contamination</li>
              <li><strong>Synthetic traffic only:</strong> Our workers generate HTTP traffic to endpoints you specifynothing more</li>
            </ul>
          </section>

          {/* 2. Data Protection & Privacy */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 leading-[1.1] text-[2.441rem]">2. Data Protection & Privacy</h2>
            <p>We implement multiple layers of protection for your data:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Encryption at rest:</strong> All databases are encrypted using AES-256</li>
              <li><strong>Encryption in transit:</strong> All communications use HTTPS with TLS 1.2 or higher</li>
              <li><strong>Access controls:</strong> Internal systems are protected by strict role-based access controls</li>
              <li><strong>Data separation:</strong> Application data is strictly separated from logs and operational data</li>
              <li><strong>No payload storage:</strong> Request and response bodies from your APIs are never stored or logged</li>
              <li><strong>No credential access:</strong> We have no access to your API credentials, tokens, or source code</li>
            </ul>
          </section>

          {/* 3. Worker Isolation & Test Execution Security */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 leading-[1.1] text-[2.441rem]">3. Worker Isolation & Test Execution Security</h2>
            <p>
              Our distributed workers are designed for security and isolation:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Ephemeral workers:</strong> Workers are created for each test and destroyed immediately after executionno persistent state</li>
              <li><strong>No long-term storage:</strong> Workers do not retain any data after test completion</li>
              <li><strong>Minimal configuration:</strong> Test configurations contain only URLs and parametersno sensitive data required</li>
              <li><strong>No code execution:</strong> Workers do not execute user code; they only send HTTP requests</li>
              <li><strong>Controlled traffic:</strong> Workers send traffic only to endpoints you explicitly provide</li>
              <li><strong>Regional execution:</strong> Tests run from cloud regions to generate realistic load without exposing your internal networks</li>
            </ul>
          </section>

          {/* 4. Responsible Testing & Abuse Prevention */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 leading-[1.1] text-[2.441rem]">4. Responsible Testing & Abuse Prevention</h2>
            <p>
              We actively prevent misuse of our platform:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Authorization requirement:</strong> Users must only test systems they own or have explicit permission to test</li>
              <li><strong>Validation checks:</strong> We validate test targets to prevent DDoS attacks or testing of unauthorized endpoints</li>
              <li><strong>Rate limiting:</strong> Abuse detection and rate limiting prevent excessive or suspicious activity</li>
              <li><strong>Pattern blocking:</strong> Known malicious patterns and behaviors are blocked automatically</li>
              <li><strong>Audit logging:</strong> We maintain audit logs to investigate suspicious behavior and policy violations</li>
            </ul>
          </section>

          {/* 5. Infrastructure Security */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 leading-[1.1] text-[2.441rem]">5. Infrastructure Security</h2>
            <p>
              Our cloud infrastructure follows security best practices:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Hardened configuration:</strong> Firewalls, IAM policies, and least-privilege access across all systems</li>
              <li><strong>Network segmentation:</strong> Worker clusters are separated from the control plane and customer-facing services</li>
              <li><strong>Continuous updates:</strong> Regular patching and security updates for all infrastructure components</li>
              <li><strong>Anomaly monitoring:</strong> Automated monitoring for unusual CPU, memory, or network patterns</li>
              <li><strong>Secure secrets:</strong> All secrets and credentials are managed through secure vaultsnever stored in plaintext</li>
            </ul>
          </section>

          {/* 6. Application Security */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 leading-[1.1] text-[2.441rem]">6. Application Security</h2>
            <p>
              The Obsilab application is built with security in mind:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Role-based access:</strong> Internal systems use role-based access control (RBAC)</li>
              <li><strong>Login protection:</strong> Brute-force protection, session timeouts, and secure session management</li>
              <li><strong>Input validation:</strong> All user inputs are sanitized and validated to prevent injection attacks</li>
              <li><strong>Password security:</strong> Passwords are hashed using bcrypt or Argon2never stored in plaintext</li>
              <li><strong>API key security:</strong> API keys are stored hashed and are never retrievable after creation</li>
            </ul>
          </section>

          {/* 7. Data Retention & Deletion */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 leading-[1.1] text-[2.441rem]">7. Data Retention & Deletion</h2>
            <p>
              We retain only what&apos;s necessary and respect your right to delete:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Account deletion:</strong> You can delete your account at any time from your settings</li>
              <li><strong>Data removal:</strong> All identifiable data is removed within 30 days of account deletion</li>
              <li><strong>Test history:</strong> Test metadata is retained for 730 days depending on your subscription plan</li>
              <li><strong>Worker cleanup:</strong> Test traffic is discarded immediately after executionworkers retain nothing</li>
            </ul>
          </section>

          {/* 8. Compliance & Best Practices */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 leading-[1.1] text-[2.441rem]">8. Compliance & Best Practices</h2>
            <p>
              We follow industry standards and regulatory guidelines:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>GDPR-friendly:</strong> We support data access, correction, deletion, and export rights</li>
              <li><strong>SOC 2-aligned:</strong> Our practices align with SOC 2 principles for security, availability, and confidentiality</li>
              <li><strong>Industry standards:</strong> We follow best practices for encryption, logging, secrets management, and isolation</li>
              <li><strong>Data minimization:</strong> We avoid unnecessary data collection and only store what&apos;s required for the service</li>
            </ul>
          </section>

          {/* 9. Vulnerability Disclosure Program */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 leading-[1.1] text-[2.441rem]">9. Vulnerability Disclosure</h2>
            <p>
              We value the security research community and welcome responsible disclosure of vulnerabilities.
            </p>
            <p>If you discover a security issue:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Email us at{" "}
                <a href="mailto:security@obsilab.com" className="text-primary hover:underline">
                  security@obsilab.com
                </a>
              </li>
              <li>Include a detailed description of the vulnerability and steps to reproduce</li>
              <li>Allow us reasonable time to investigate and address the issue before public disclosure</li>
            </ul>
            <p className="mt-4">
              We commit to acknowledging reports promptly and working with researchers to resolve issues quickly. Please note that we do not currently operate a paid bug bounty program.
            </p>
          </section>

          {/* 10. Contact */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 leading-[1.1] text-[2.441rem]">10. Contact</h2>
            <p>
              For security-related questions, concerns, or to report a vulnerability, please contact us:
            </p>
            <p className="mt-2">
              <strong>Email:</strong>{" "}
              <a href="mailto:security@obsilab.com" className="text-primary hover:underline">
                security@obsilab.com
              </a>
            </p>
            <p className="mt-4 text-muted-foreground">
              We aim to respond to all security inquiries within 48 hours.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
