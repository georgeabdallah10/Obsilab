import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Processing Agreement | Obsilab",
  description: "Data Processing Agreement (DPA) for Obsilab - Cloud-based API load-testing platform",
};

export default function DataProcessingAgreement() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-2 leading-[1] tracking-[-0.02em] text-[3.052rem]">Data Processing Agreement</h1>
        <p className="text-muted-foreground mb-8">Last Updated: November 24, 2025</p>

        <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">

          {/* 1. Introduction & Purpose */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 leading-[1.1] text-[2.441rem]">1. Introduction & Purpose</h2>
            <p>
              This Data Processing Agreement (&quot;DPA&quot;) governs the processing of personal data by Obsilab on behalf of the Customer in connection with the Services.
            </p>
            <p>
              For the purposes of this DPA:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The <strong>Customer</strong> (you) acts as the <strong>Controller</strong> of personal data</li>
              <li><strong>Obsilab</strong> acts as the <strong>Processor</strong> processing data on your behalf</li>
            </ul>
            <p>
              This DPA supplements and forms part of the Obsilab Terms of Service. In the event of any conflict between this DPA and the Terms of Service, this DPA shall prevail with respect to data processing matters.
            </p>
          </section>

          {/* 2. Definitions */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 leading-[1.1] text-[2.441rem]">2. Definitions</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>&quot;Personal Data&quot;</strong> means any information relating to an identified or identifiable natural person.
              </li>
              <li>
                <strong>&quot;Processing&quot;</strong> means any operation performed on Personal Data, including collection, storage, use, transmission, and deletion.
              </li>
              <li>
                <strong>&quot;Controller&quot;</strong> means the entity that determines the purposes and means of Processing Personal Data.
              </li>
              <li>
                <strong>&quot;Processor&quot;</strong> means the entity that Processes Personal Data on behalf of the Controller.
              </li>
              <li>
                <strong>&quot;Sub-processor&quot;</strong> means any third party engaged by Obsilab to Process Personal Data on behalf of the Controller.
              </li>
              <li>
                <strong>&quot;Services&quot;</strong> means the Obsilab cloud-based load testing, performance analytics, and diagnostic services.
              </li>
              <li>
                <strong>&quot;Data Subject&quot;</strong> means the individual to whom Personal Data relates.
              </li>
              <li>
                <strong>&quot;Applicable Law&quot;</strong> means all laws and regulations applicable to the Processing of Personal Data, including GDPR, CCPA, and other data protection legislation.
              </li>
            </ul>
          </section>

          {/* 3. Scope of Processing */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 leading-[1.1] text-[2.441rem]">3. Scope of Processing</h2>
            <p>
              Obsilab processes the following categories of Personal Data:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Account information (email address, name)</li>
              <li>IP addresses and access logs</li>
              <li>Usage metrics and test metadata</li>
              <li>Anonymized performance metrics</li>
            </ul>
            <p className="mt-4">
              <strong>Obsilab does NOT process:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Special categories of data (health, biometric, religious, political data)</li>
              <li>Financial account numbers (payments handled by Stripe)</li>
              <li>API request or response bodies (unless explicitly enabled by the user)</li>
            </ul>
            <p className="mt-4">
              All user test payloads are processed ephemerally and are not stored. Request and response bodies are discarded immediately after test execution unless the user explicitly enables logging features.
            </p>
          </section>

          {/* 4. Responsibilities of the Controller (User) */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 leading-[1.1] text-[2.441rem]">4. Responsibilities of the Controller</h2>
            <p>As the Controller, you are responsible for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Ensuring you have a lawful basis for providing Personal Data to Obsilab</li>
              <li>Obtaining any necessary consents from Data Subjects</li>
              <li>Ensuring you have the legal right and authorization to test any systems you target using the Services</li>
              <li>Not uploading Personal Data, sensitive information, or regulated data into test payloads</li>
              <li>Complying with all Applicable Laws regarding the Personal Data you provide</li>
            </ul>
          </section>

          {/* 5. Responsibilities of the Processor (Obsilab) */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 leading-[1.1] text-[2.441rem]">5. Responsibilities of the Processor</h2>
            <p>As the Processor, Obsilab commits to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Process Personal Data only based on your documented instructions and as necessary to provide the Services</li>
              <li>Maintain appropriate technical and organizational security measures</li>
              <li>Ensure confidentiality of all personnel with access to Personal Data</li>
              <li>Restrict employee access to Personal Data on a need-to-know basis</li>
              <li>Assist you in responding to Data Subject requests</li>
              <li>Delete or return all Personal Data upon termination of the Services, at your request</li>
              <li>Not Process Personal Data for any purpose other than providing the Services</li>
            </ul>
          </section>

          {/* 6. Sub-Processors */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 leading-[1.1] text-[2.441rem]">6. Sub-Processors</h2>
            <p>
              Obsilab uses the following Sub-processors to provide the Services:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Supabase</strong>  Database hosting and authentication</li>
              <li><strong>DigitalOcean</strong>  Compute infrastructure</li>
              <li><strong>Cloudflare</strong>  Network services, caching, and worker execution</li>
              <li><strong>Stripe</strong>  Payment processing and billing</li>
            </ul>
            <p className="mt-4">
              Obsilab commits to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Only engage Sub-processors that provide sufficient guarantees of security and compliance</li>
              <li>Enter into written agreements with Sub-processors imposing equivalent data protection obligations</li>
              <li>Notify you of any intended changes to Sub-processors, giving you opportunity to object</li>
              <li>Remain fully liable for the acts and omissions of its Sub-processors</li>
            </ul>
          </section>

          {/* 7. International Data Transfers */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 leading-[1.1] text-[2.441rem]">7. International Data Transfers</h2>
            <p>
              Obsilab is based in the United States. Personal Data may be transferred to and processed in the US or other countries where our Sub-processors operate.
            </p>
            <p>
              For transfers of Personal Data from the European Economic Area (EEA), UK, or Switzerland, Obsilab relies on:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Standard Contractual Clauses (SCCs) approved by the European Commission</li>
              <li>Additional safeguards as required by Applicable Law</li>
            </ul>
            <p className="mt-4">
              We ensure all international transfers comply with GDPR and other applicable data protection regulations.
            </p>
          </section>

          {/* 8. Security Measures */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 leading-[1.1] text-[2.441rem]">8. Security Measures</h2>
            <p>
              Obsilab implements the following technical and organizational measures to protect Personal Data:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Encryption at rest:</strong> All databases encrypted using AES-256</li>
              <li><strong>Encryption in transit:</strong> All communications secured with TLS 1.2+</li>
              <li><strong>Network protection:</strong> Firewalls, intrusion detection, and DDoS mitigation</li>
              <li><strong>Access controls:</strong> Role-based access control (RBAC) for all internal systems</li>
              <li><strong>Abuse monitoring:</strong> Automated detection of suspicious activity and policy violations</li>
              <li><strong>Worker isolation:</strong> Load tests execute in sandboxed, ephemeral environments</li>
              <li><strong>No persistent storage:</strong> Raw request and response bodies are not stored</li>
              <li><strong>Secure credentials:</strong> Passwords hashed with bcrypt/Argon2; API keys stored hashed</li>
            </ul>
          </section>

          {/* 9. Data Subject Rights */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 leading-[1.1] text-[2.441rem]">9. Data Subject Rights</h2>
            <p>
              Obsilab will assist you in fulfilling your obligations to respond to Data Subject requests, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Right of access:</strong> Provide copies of Personal Data being processed</li>
              <li><strong>Right to rectification:</strong> Correct inaccurate Personal Data</li>
              <li><strong>Right to erasure:</strong> Delete Personal Data upon request</li>
              <li><strong>Right to restrict processing:</strong> Limit how Personal Data is processed</li>
              <li><strong>Right to data portability:</strong> Export Personal Data in a machine-readable format</li>
            </ul>
            <p className="mt-4">
              Obsilab will respond to your requests regarding Data Subject rights within 30 days or as required by Applicable Law.
            </p>
          </section>

          {/* 10. Data Breach Notification */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 leading-[1.1] text-[2.441rem]">10. Data Breach Notification</h2>
            <p>
              In the event of a Personal Data breach, Obsilab will:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Notify you without undue delay (and within 72 hours where feasible) after becoming aware of the breach</li>
              <li>Provide details including the nature and scope of the breach, categories of data affected, and likely consequences</li>
              <li>Describe measures taken or proposed to address the breach and mitigate potential harm</li>
              <li>Cooperate with your investigation and response efforts</li>
            </ul>
            <p className="mt-4">
              You remain responsible for notifying relevant supervisory authorities and affected Data Subjects as required by Applicable Law.
            </p>
          </section>

          {/* 11. Data Retention & Deletion */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 leading-[1.1] text-[2.441rem]">11. Data Retention & Deletion</h2>
            <p>
              Obsilab retains Personal Data only as long as necessary to provide the Services:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Account data:</strong> Retained while your account is active</li>
              <li><strong>Test metadata:</strong> Retained for 730 days depending on subscription plan</li>
              <li><strong>Load test bodies:</strong> Discarded immediately after execution (within minutes)</li>
              <li><strong>Security logs:</strong> Minimal retention for incident response</li>
            </ul>
            <p className="mt-4">
              Upon account deletion or your request, all Personal Data will be deleted within 30 days, unless retention is required by law. You may request deletion at any time by contacting{" "}
              <a href="mailto:privacy@obsilab.com" className="text-primary hover:underline">
                privacy@obsilab.com
              </a>.
            </p>
          </section>

          {/* 12. Audits & Compliance */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 leading-[1.1] text-[2.441rem]">12. Audits & Compliance</h2>
            <p>
              Obsilab supports your compliance efforts through:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Providing audit summaries, certifications, or security documentation upon reasonable request</li>
              <li>Engaging external auditors to assess Sub-processor compliance</li>
              <li>Maintaining documentation of Processing activities</li>
            </ul>
            <p className="mt-4">
              Physical site audits are not available unless specifically required by Applicable Law and agreed upon in writing. Any audits must be conducted at your expense with reasonable advance notice.
            </p>
          </section>

          {/* 13. Liability */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 leading-[1.1] text-[2.441rem]">13. Liability</h2>
            <p>
              Liability under this DPA is subject to the limitations set forth in the Obsilab Terms of Service.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Obsilab is not liable for any damages arising from your misuse of the Services</li>
              <li>Obsilab is not liable for unauthorized or illegal testing conducted through your account</li>
              <li>You are solely responsible for ensuring compliance with Applicable Laws in your use of the Services</li>
            </ul>
          </section>

          {/* 14. Term & Termination */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 leading-[1.1] text-[2.441rem]">14. Term & Termination</h2>
            <p>
              This DPA remains in effect for the duration of your use of the Services and terminates upon deletion of your account.
            </p>
            <p>
              Upon termination:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Obsilab will delete all Personal Data within 30 days</li>
              <li>Data may be retained only where required by Applicable Law</li>
              <li>You may request a copy of your data before termination</li>
            </ul>
          </section>

          {/* 15. Contact & Governing Law */}
          <section>
            <h2 className="text-2xl font-semibold mb-4 leading-[1.1] text-[2.441rem]">15. Contact & Governing Law</h2>
            <p>
              This DPA is governed by the laws of the State of Delaware, USA, without regard to conflict of law principles.
            </p>
            <p className="mt-4">
              For questions about this DPA or to exercise your rights, please contact us:
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
