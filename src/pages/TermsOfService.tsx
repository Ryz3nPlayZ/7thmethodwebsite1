import { motion, useScroll, useTransform } from 'framer-motion'; // React import removed
import { AnimatedElement, ParallaxSection } from '../lib/animations';
import Layout from '../components/layout/Layout';

export default function TermsOfService() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  
  return (
    <Layout>
      <section className="min-h-screen w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        {/* Subtle background elements */}
        <ParallaxSection depth={100} className="absolute inset-0"> {/* baseVelocity prop removed */}
          <motion.div 
            className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full opacity-50 blur-3xl"
            style={{ 
              scale: useTransform(scrollYProgress, [0, 1], [1, 1.1]),
              rotateZ: useTransform(scrollYProgress, [0, 1], [0, 5])
            }}
          />
          <motion.div 
            className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-50 rounded-full opacity-50 blur-3xl"
            style={{ 
              scale: useTransform(scrollYProgress, [0, 1], [1, 1.05]),
              rotateZ: useTransform(scrollYProgress, [0, 1], [0, -3])
            }}
          />
        </ParallaxSection>
        
        <motion.div 
          className="max-w-4xl mx-auto relative z-10" 
          style={{ y }}
        >
          <AnimatedElement>
            <h1 className="text-3xl md:text-4xl font-serif font-medium text-gray-900 mb-8 text-center">Terms of Service</h1>
          </AnimatedElement>
          
          <AnimatedElement delay={0.1}>
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <div className="text-sm text-gray-600 leading-relaxed space-y-6">
                <div className="text-center mb-6">
                  <p className="text-gray-500">Effective Date: May 27, 2025</p>
                  <p className="text-gray-500">Last Updated: May 27, 2025</p>
                </div>
                
                <p>
                  These Terms of Service ("Terms") constitute a legally binding agreement between you ("Client," "you," or "your") and 7th Method ("we," "us," or "our") and govern your access to and use of our services as described herein. By engaging our services, including by approving a proposal, making payment, or accessing any deliverables we provide, you acknowledge that you have read, understood, and agreed to be bound by these Terms in their entirety.
                </p>
                
                <h2 className="text-lg font-medium text-gray-900 mt-8 mb-4">1. Scope of Services</h2>
                <p>
                  7th Method provides customized workflow automation design and implementation services for early-stage HealthTech companies and related entities. Our services are generally rendered via no-code and low-code platforms (including but not limited to Make, Zapier, and n8n) and are tailored to internal operational workflows, including data routing, task automation, system integrations, and workflow orchestration.
                </p>
                <p className="mt-4">
                  Services may include:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Needs assessment and workflow design;</li>
                  <li>Integration of third-party SaaS tools and platforms;</li>
                  <li>Workflow automation implementation;</li>
                  <li>Documentation and training materials;</li>
                  <li>Post-implementation support, if specified.</li>
                </ul>
                <p className="mt-4">
                  We do not provide custom software development, legal compliance certification, cybersecurity advisory, or medical software design.
                </p>
                
                <h2 className="text-lg font-medium text-gray-900 mt-8 mb-4">2. Client Obligations</h2>
                <p>
                  You agree to:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Provide full and accurate access to necessary tools, documentation, personnel, and credentials;</li>
                  <li>Ensure all provided access tokens or credentials are permission-scoped and do not include unnecessary privileges;</li>
                  <li>Disclose any use of Protected Health Information (PHI), regulated data, or sensitive proprietary data that may implicate compliance or security obligations;</li>
                  <li>Review, test, and validate the workflows delivered before they are applied to production environments;</li>
                  <li>Adhere to all relevant laws and internal company policies when applying the workflows we deliver.</li>
                </ul>
                <p className="mt-4">
                  Failure to fulfill these obligations may result in delays or errors in implementation and may relieve us of certain obligations under this agreement.
                </p>
                
                <h2 className="text-lg font-medium text-gray-900 mt-8 mb-4">3. Compliance & Legal Disclaimers</h2>
                <p>
                  Our services are developed in a manner that respects applicable data privacy and security best practices but do not constitute legal advice or compliance consulting. Specifically:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>We do not act as your HIPAA, HITECH, GDPR, 42 CFR Part 2, or SOC 2 compliance officer.</li>
                  <li>We do not provide a legal opinion or guarantee regarding your company's compliance with applicable regulatory frameworks.</li>
                  <li>We expressly disclaim responsibility for any compliance failures arising from your data handling, policy management, or the misapplication of our deliverables.</li>
                </ul>
                <p className="mt-4">
                  Where relevant, we implement workflow architectures that are designed to minimize exposure to PHI and other sensitive information, ensure secure credentials handling, and preserve an auditable log of activity. However, you remain solely responsible for verifying that these implementations are used in accordance with your obligations under law, contract, and internal policy.
                </p>
                
                <h2 className="text-lg font-medium text-gray-900 mt-8 mb-4">4. Payment Terms</h2>
                <p>
                  Fees for all services will be communicated to you in advance and formalized in a mutually accepted written scope of work ("SOW"), proposal, invoice, or equivalent document. Unless otherwise specified:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>All projects are billed 50% in advance and 50% upon completion of the agreed deliverables.</li>
                  <li>Retainer services are billed monthly in advance.</li>
                  <li>Payment is due upon receipt of invoice and must be completed within five (5) business days.</li>
                </ul>
                <p className="mt-4">
                  Late payments may result in service suspension, withheld deliverables, or cancellation of ongoing support. We reserve the right to charge a late fee of 1.5% per month on overdue invoices or the maximum permitted by law, whichever is less.
                </p>
                
                <h2 className="text-lg font-medium text-gray-900 mt-8 mb-4">5. Ownership of Deliverables</h2>
                <p>
                  Upon full payment of all fees due, you will receive a perpetual, non-exclusive, non-transferable license to use, modify, and maintain any deliverables provided under the applicable SOW. You acknowledge that:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>All underlying techniques, templates, methodologies, know-how, and configurations not unique to your business may be reused by us in future engagements;</li>
                  <li>We retain a limited right to use anonymized, aggregated learnings from our engagement with you to improve our offerings;</li>
                  <li>We may reference your company and the nature of our engagement in marketing materials unless you notify us in writing otherwise.</li>
                </ul>
                
                <h2 className="text-lg font-medium text-gray-900 mt-8 mb-4">6. Confidentiality</h2>
                <p>
                  Each party agrees to maintain in confidence all proprietary information disclosed by the other party during the term of the engagement, including technical, business, and operational information, and not to disclose or use such information except as expressly permitted under these Terms or as required by law.
                </p>
                <p className="mt-4">
                  You agree to safeguard our intellectual property, service methodologies, pricing structures, and automation logic against unauthorized disclosure. We will similarly treat any documentation, access credentials, or data you provide with commercially reasonable care and confidentiality.
                </p>
                
                <h2 className="text-lg font-medium text-gray-900 mt-8 mb-4">7. Limitations of Liability</h2>
                <p>
                  To the fullest extent permitted by law, we shall not be liable for any:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Indirect, incidental, special, consequential, or punitive damages;</li>
                  <li>Data loss, business interruption, revenue decline, or reputational harm;</li>
                  <li>Damages arising out of or related to third-party platform outages, misconfigurations made without our knowledge, or errors in tools outside our control.</li>
                </ul>
                <p className="mt-4">
                  In any case, our total cumulative liability under any cause of action shall not exceed the total amount paid by you to us in the six (6) months preceding the event giving rise to the claim.
                </p>
                <p className="mt-4">
                  You agree that you are solely responsible for:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Ensuring your implementation and use of our deliverables are compliant with all laws and applicable regulatory frameworks;</li>
                  <li>Backing up your systems, data, and configuration before applying any workflow changes;</li>
                  <li>Monitoring and maintaining workflow health once deployed.</li>
                </ul>
                
                <h2 className="text-lg font-medium text-gray-900 mt-8 mb-4">8. Termination</h2>
                <p>
                  You or we may terminate the engagement at any time with seven (7) days' written notice. Upon termination:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>All outstanding payments will become immediately due;</li>
                  <li>Any partially completed work will be invoiced proportionally;</li>
                  <li>No refunds shall be provided for services rendered unless otherwise agreed in writing.</li>
                </ul>
                <p className="mt-4">
                  We reserve the right to terminate or suspend services immediately upon any violation of these Terms, abuse, harassment, or suspected fraud.
                </p>
                
                <h2 className="text-lg font-medium text-gray-900 mt-8 mb-4">9. Governing Law</h2>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law principles. Any disputes arising under these Terms shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association, unless both parties agree to an alternative method of resolution in writing.
                </p>
                
                <h2 className="text-lg font-medium text-gray-900 mt-8 mb-4">10. Miscellaneous</h2>
                <p>
                  <strong>Entire Agreement:</strong> These Terms, along with any applicable proposals or statements of work, constitute the full and exclusive agreement between the parties.
                </p>
                <p className="mt-2">
                  <strong>Severability:</strong> If any part of these Terms is held unenforceable, the remaining provisions will remain in full force.
                </p>
                <p className="mt-2">
                  <strong>Assignment:</strong> You may not assign these Terms or any obligations hereunder without our prior written consent.
                </p>
                <p className="mt-2">
                  <strong>Force Majeure:</strong> We are not liable for any delay or failure to perform due to events beyond our control.
                </p>
                
                <h2 className="text-lg font-medium text-gray-900 mt-8 mb-4">11. Contact</h2>
                <p>
                  For all questions, notices, or correspondence regarding these Terms:
                </p>
                <p className="mt-2">
                  Email: zemuliu@7thmethod.com<br />
                  Business Name: 7th Method<br />
                  Business Address: Remote
                </p>
                
                <p className="mt-8 text-center">
                  By engaging our services, you agree to the above Terms. If you do not agree, you may not access or use our deliverables, materials, or services.
                </p>
              </div>
            </div>
          </AnimatedElement>
          
          <AnimatedElement delay={0.2} className="text-center">
            <a href="/" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors">
              &larr; Back to Home
            </a>
          </AnimatedElement>
        </motion.div>
      </section>
    </Layout>
  );
}
