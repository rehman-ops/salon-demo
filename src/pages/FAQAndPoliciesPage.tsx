import React, { useState } from 'react';
import { useSalon } from '../context/SalonContext';
import { ChevronDown, ShieldAlert, FileText, HelpCircle, Lock, AlertTriangle } from 'lucide-react';

export const FAQAndPoliciesPage: React.FC = () => {
  const { config, navigateToBookingWithService } = useSalon();
  const [openFaqId, setOpenFaqId] = useState<string | null>(config.faqs[0]?.id || null);
  const [activePolicyTab, setActivePolicyTab] = useState<'cancellation' | 'privacy' | 'terms'>('cancellation');

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="w-full bg-[#F8F5EF] text-[#30231F] min-h-screen">
      {/* Header Banner */}
      <section className="py-20 lg:py-24 border-b border-[#B79A68]/20 bg-[#E8DCCB]/20 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#B79A68] font-medium font-sans block">
            Client Guidelines & Transparency
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#30231F] font-normal">
            Frequently Asked Questions & Studio Policies
          </h1>
          <p className="text-sm md:text-base text-[#9A8878] max-w-2xl mx-auto font-light leading-relaxed">
            Everything you need to know about bridal deposits, dupatta drape schedules, pre-wedding skin prep, and client confidentiality.
          </p>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 space-y-2">
          <span className="text-[11px] uppercase tracking-widest text-[#B79A68] font-sans font-medium">
            Common Questions
          </span>
          <h2 className="font-serif text-3xl text-[#30231F]">
            Bridal & Salon Inquiries
          </h2>
        </div>

        <div className="space-y-4">
          {config.faqs.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white border border-[#B79A68]/30 transition-all duration-300 shadow-xs"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full py-5 px-6 flex items-center justify-between text-left cursor-pointer focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg text-[#30231F] font-medium pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full border border-[#B79A68]/30 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#30231F] text-white' : 'text-[#9A8878]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#30231F]/80 leading-relaxed font-light border-t border-[#30231F]/5 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#B79A68] mt-3 block">
                      Category: {faq.category}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Policies Section with Draft Notice */}
      <section className="py-20 bg-[#E8DCCB]/25 border-t border-[#B79A68]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 space-y-2">
            <span className="text-[11px] uppercase tracking-widest text-[#B79A68] font-sans font-medium">
              Legal & Terms
            </span>
            <h2 className="font-serif text-3xl text-[#30231F]">
              Studio Operating Policies
            </h2>
          </div>

          {/* Draft Disclaimer Notice */}
          <div className="mb-8 p-4 bg-[#FFFFFF] border-l-4 border-[#B79A68] shadow-xs flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-[#B79A68] shrink-0 mt-0.5" />
            <div className="text-xs text-[#9A8878] leading-relaxed">
              <strong className="text-[#30231F] font-semibold block mb-0.5">
                Template Notice: Draft Legal Policies
              </strong>
              The policy drafts below are template samples designed for beauty parlours and bridal studios. The parlour owner must review and tailor these clauses with legal counsel prior to formal publication.
            </div>
          </div>

          {/* Policy Tab Switcher */}
          <div className="flex border-b border-[#30231F]/10 mb-6 bg-white p-1 rounded-xs border border-[#B79A68]/30">
            {[
              { id: 'cancellation', label: 'Cancellation & Deposits' },
              { id: 'privacy', label: 'Client Privacy' },
              { id: 'terms', label: 'Terms & Service Timelines' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActivePolicyTab(tab.id as any)}
                className={`flex-1 py-3 text-xs uppercase tracking-wider font-medium text-center transition-colors cursor-pointer ${
                  activePolicyTab === tab.id
                    ? 'bg-[#30231F] text-white shadow-xs'
                    : 'text-[#9A8878] hover:text-[#30231F]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Policy Content Card */}
          <div className="bg-white border border-[#B79A68]/30 p-8 sm:p-10 shadow-sm space-y-6">
            {activePolicyTab === 'cancellation' && (
              <div className="space-y-4 text-xs sm:text-sm text-[#30231F]/80 leading-relaxed font-light">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B79A68]">
                  <FileText className="w-4 h-4" />
                  <span>Draft Cancellation Policy — Subject to Salon Approval</span>
                </div>
                <p>
                  1. <strong className="font-semibold text-[#30231F]">Advance Deposits:</strong> A non-refundable 50% deposit is required for all bridal bookings upon slot reservation. No slot is guaranteed without receipt of this deposit.
                </p>
                <p>
                  2. <strong className="font-semibold text-[#30231F]">Date Rescheduling:</strong> Rescheduling requests made at least 14 days prior to the wedding date are accommodated subject to artist calendar availability without penalty. Requests under 14 days forfeit the initial deposit.
                </p>
                <p>
                  3. <strong className="font-semibold text-[#30231F]">Service Reductions:</strong> Bridal suites cannot be downgraded to individual services within 7 days of the booked event date.
                </p>
                <p>
                  4. <strong className="font-semibold text-[#30231F]">Refund Protocol:</strong> Under exceptional force majeure occurrences, studio credits valid for 12 months may be issued at management discretion.
                </p>
              </div>
            )}

            {activePolicyTab === 'privacy' && (
              <div className="space-y-4 text-xs sm:text-sm text-[#30231F]/80 leading-relaxed font-light">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B79A68]">
                  <Lock className="w-4 h-4" />
                  <span>Draft Client Privacy Policy</span>
                </div>
                <p>
                  1. <strong className="font-semibold text-[#30231F]">Client Photography Consent:</strong> {config.salonName} strictly respects privacy. Photographs or videos taken in bridal suites are never uploaded to social platforms without explicit consent from the bride or her guardian.
                </p>
                <p>
                  2. <strong className="font-semibold text-[#30231F]">Personal Data:</strong> Phone numbers, wedding dates, and contact information gathered during booking requests are used exclusively for salon logistics and never shared with third-party vendors.
                </p>
                <p>
                  3. <strong className="font-semibold text-[#30231F]">Private Dressing Suites:</strong> Only approved female attendants and family members are permitted in private bridal dressing rooms during draping.
                </p>
              </div>
            )}

            {activePolicyTab === 'terms' && (
              <div className="space-y-4 text-xs sm:text-sm text-[#30231F]/80 leading-relaxed font-light">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B79A68]">
                  <ShieldAlert className="w-4 h-4" />
                  <span>Draft Terms & Conditions of Service</span>
                </div>
                <p>
                  1. <strong className="font-semibold text-[#30231F]">Punctuality:</strong> Brides and guests must arrive on time with clean, washed hair and cleansed, unmoisturized faces. Delays exceeding 45 minutes may result in simplified styling steps to maintain schedule integrity for subsequent clients.
                </p>
                <p>
                  2. <strong className="font-semibold text-[#30231F]">Heirloom Jewellery & Valuables:</strong> Clients remain solely responsible for heavy gold, diamond, or kundan jewellery while on salon premises. We provide secure lockable vanity compartments in our bridal suite.
                </p>
                <p>
                  3. <strong className="font-semibold text-[#30231F]">Allergies & Skin Sensitivity:</strong> Clients must inform the artist in writing of any known cosmetics allergies, active dermatologist treatments, or skin sensitivities during consultation.
                </p>
              </div>
            )}
          </div>

          <div className="text-center pt-8">
            <button
              onClick={() => navigateToBookingWithService('Policy Clarification Inquiry')}
              className="px-6 py-3 bg-[#30231F] hover:bg-[#B79A68] text-white text-xs uppercase tracking-widest font-medium transition-colors cursor-pointer shadow-xs"
            >
              Have a Specific Policy Question? Inquire Here
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
