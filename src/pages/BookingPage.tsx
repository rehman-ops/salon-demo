import React, { useState, useEffect } from 'react';
import { useSalon } from '../context/SalonContext';
import { AppointmentRequest } from '../types/salon';
import { MessageCircle, Calendar, Clock, Sparkles, CheckCircle2, AlertCircle, Phone, ArrowRight } from 'lucide-react';

export const BookingPage: React.FC = () => {
  const { config, selectedServiceForBooking, setSelectedServiceForBooking } = useSalon();

  const [formData, setFormData] = useState<AppointmentRequest>({
    fullName: '',
    phone: '',
    email: '',
    serviceId: '',
    serviceName: selectedServiceForBooking || 'Signature Barat Bridal Makeup',
    eventType: 'Barat',
    preferredDate: '',
    preferredTime: '12:00 PM',
    artistPreference: 'Any Senior Lead Artist',
    branch: config.branches[0]?.name || 'Flagship Bridal Studio',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedStatus, setSubmittedStatus] = useState<'idle' | 'success'>('idle');

  useEffect(() => {
    if (selectedServiceForBooking) {
      setFormData((prev) => ({ ...prev, serviceName: selectedServiceForBooking }));
    }
  }, [selectedServiceForBooking]);

  const validate = (): boolean => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name.';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Please provide a valid contact phone number.';
    } else if (formData.phone.length < 8) {
      errs.phone = 'Phone number must be at least 8 digits.';
    }
    if (!formData.preferredDate) {
      errs.preferredDate = 'Please select your preferred appointment or wedding date.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const generateWhatsAppMessage = (): string => {
    return encodeURIComponent(
      `Salaam ${config.salonName} Concierge,\n\nI would like to request an appointment reservation with the following details:\n\n` +
      `• Client Name: ${formData.fullName}\n` +
      `• Contact: ${formData.phone}\n` +
      `• Service / Package: ${formData.serviceName}\n` +
      `• Event Type: ${formData.eventType}\n` +
      `• Preferred Date: ${formData.preferredDate}\n` +
      `• Preferred Time: ${formData.preferredTime}\n` +
      `• Artist Preference: ${formData.artistPreference}\n` +
      `• Studio Branch: ${formData.branch}\n` +
      (formData.notes ? `• Additional Details: ${formData.notes}\n\n` : '\n') +
      `Please let me know slot availability and deposit details. Thank you!`
    );
  };

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const rawPhone = config.whatsapp.replace(/[^0-9]/g, '');
    const cleanNumber = rawPhone || '923000000000';
    const waUrl = `https://wa.me/${cleanNumber}?text=${generateWhatsAppMessage()}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmittedStatus('success');
  };

  return (
    <div className="w-full bg-[#F8F5EF] text-[#30231F] min-h-screen">
      {/* Header Banner */}
      <section className="py-20 lg:py-24 border-b border-[#B79A68]/20 bg-[#E8DCCB]/20 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#B79A68] font-medium font-sans block">
            Atelier Reservations
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#30231F] font-normal">
            Request Your Appointment
          </h1>
          <p className="text-sm md:text-base text-[#9A8878] max-w-2xl mx-auto font-light leading-relaxed">
            Please share your wedding or appointment details. Our concierge will review artist calendars and confirm your slot promptly.
          </p>
        </div>
      </section>

      {/* Main Reservation Container */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {submittedStatus === 'success' ? (
          <div className="bg-white border border-[#B79A68]/40 p-8 sm:p-12 shadow-xl text-center space-y-6 animate-in fade-in">
            <div className="w-16 h-16 rounded-full bg-[#B79A68]/20 text-[#B79A68] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8 text-[#B79A68]" />
            </div>

            <div className="space-y-2 max-w-xl mx-auto">
              <span className="text-[11px] uppercase tracking-widest text-[#B79A68] font-mono">
                Booking Request Logged
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#30231F]">
                Thank You, {formData.fullName}
              </h2>
              <p className="text-sm text-[#30231F]/80 leading-relaxed font-light">
                Your appointment request for <strong className="font-semibold text-[#30231F]">{formData.serviceName}</strong> on <strong className="font-semibold text-[#30231F]">{formData.preferredDate}</strong> has been received by our salon concierge.
              </p>
            </div>

            {/* Crucial honesty notice */}
            <div className="p-4 bg-[#F8F5EF] border border-[#B79A68]/30 max-w-lg mx-auto text-xs text-[#9A8878] text-left space-y-1.5">
              <div className="flex items-center gap-1.5 font-semibold text-[#30231F]">
                <AlertCircle className="w-4 h-4 text-[#B79A68]" />
                <span>Notice Regarding Confirmation:</span>
              </div>
              <p>
                This request does not guarantee an immediate calendar booking. A salon coordinator will call or message your phone number ({formData.phone}) within 2 business hours to verify slot availability and discuss advance deposit payment.
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={handleWhatsAppBooking}
                className="px-6 py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs uppercase tracking-widest font-medium transition-colors cursor-pointer flex items-center gap-2 shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send via WhatsApp to Expedite</span>
              </button>

              <button
                onClick={() => setSubmittedStatus('idle')}
                className="px-6 py-3 border border-[#30231F] hover:bg-[#30231F] hover:text-white text-xs uppercase tracking-widest font-medium transition-colors cursor-pointer"
              >
                Submit Another Request
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-white border border-[#B79A68]/30 p-8 sm:p-12 shadow-lg">
            {/* Left: Instructions & WhatsApp Quick Reserve */}
            <div className="lg:col-span-5 space-y-6 lg:border-r lg:border-[#30231F]/10 lg:pr-8">
              <div>
                <span className="text-[11px] uppercase tracking-widest text-[#B79A68] font-sans font-medium">
                  Direct Concierge
                </span>
                <h3 className="font-serif text-2xl text-[#30231F] mt-1">
                  How Bookings Work
                </h3>
              </div>

              <div className="space-y-4 text-xs text-[#30231F]/80 leading-relaxed font-light">
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#B79A68]/20 text-[#B79A68] flex items-center justify-center shrink-0 font-mono text-[10px]">
                    1
                  </span>
                  <p>
                    Submit this form or connect directly with our studio via WhatsApp.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#B79A68]/20 text-[#B79A68] flex items-center justify-center shrink-0 font-mono text-[10px]">
                    2
                  </span>
                  <p>
                    Our manager verifies artist calendar availability for your date and time.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#B79A68]/20 text-[#B79A68] flex items-center justify-center shrink-0 font-mono text-[10px]">
                    3
                  </span>
                  <p>
                    Your booking is officially confirmed upon receipt of the 50% non-refundable deposit.
                  </p>
                </div>
              </div>

              {/* Instant WhatsApp CTA Box */}
              <div className="p-5 bg-[#E8DCCB]/30 border border-[#B79A68]/30 space-y-3">
                <div className="flex items-center gap-2 text-[#30231F] font-semibold text-xs">
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Prefer Immediate WhatsApp Chat?</span>
                </div>
                <p className="text-[11px] text-[#9A8878] leading-normal font-light">
                  Skip the form and message our bridal concierge on WhatsApp with your event date:
                </p>
                <a
                  href={`https://wa.me/${config.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                    `Salaam ${config.salonName}, I am inquiring about bridal/salon appointments.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-medium uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              <div className="pt-2 text-xs text-[#9A8878] space-y-1">
                <p><strong>Studio Concierge:</strong> {config.phone}</p>
                <p><strong>Hours:</strong> {config.openingHours}</p>
              </div>
            </div>

            {/* Right: The Booking Form */}
            <div className="lg:col-span-7">
              <form onSubmit={handleFormSubmit} className="space-y-5">
                {/* Full Name */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-medium text-[#30231F] mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    placeholder="e.g. Ayesha Malik"
                    className={`w-full px-3.5 py-2.5 bg-[#F8F5EF] border text-sm text-[#30231F] rounded-xs focus:outline-hidden ${
                      errors.fullName
                        ? 'border-red-400 focus:border-red-500'
                        : 'border-[#B79A68]/30 focus:border-[#B79A68]'
                    }`}
                  />
                  {errors.fullName && (
                    <span className="text-[11px] text-red-600 mt-1 block">
                      {errors.fullName}
                    </span>
                  )}
                </div>

                {/* Phone & Email Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-medium text-[#30231F] mb-1.5">
                      Phone Number / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="e.g. +92 300 1234567"
                      className={`w-full px-3.5 py-2.5 bg-[#F8F5EF] border text-sm text-[#30231F] rounded-xs focus:outline-hidden ${
                        errors.phone
                          ? 'border-red-400 focus:border-red-500'
                          : 'border-[#B79A68]/30 focus:border-[#B79A68]'
                      }`}
                    />
                    {errors.phone && (
                      <span className="text-[11px] text-red-600 mt-1 block">
                        {errors.phone}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-medium text-[#30231F] mb-1.5">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="e.g. ayesha@example.com"
                      className="w-full px-3.5 py-2.5 bg-[#F8F5EF] border border-[#B79A68]/30 text-sm text-[#30231F] rounded-xs focus:outline-hidden focus:border-[#B79A68]"
                    />
                  </div>
                </div>

                {/* Desired Service & Event Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-medium text-[#30231F] mb-1.5">
                      Desired Service / Look *
                    </label>
                    <input
                      type="text"
                      value={formData.serviceName}
                      onChange={(e) =>
                        setFormData({ ...formData, serviceName: e.target.value })
                      }
                      placeholder="e.g. Barat Bridal Makeup"
                      className="w-full px-3.5 py-2.5 bg-[#F8F5EF] border border-[#B79A68]/30 text-sm text-[#30231F] rounded-xs focus:outline-hidden focus:border-[#B79A68]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-medium text-[#30231F] mb-1.5">
                      Event Type
                    </label>
                    <select
                      value={formData.eventType}
                      onChange={(e) =>
                        setFormData({ ...formData, eventType: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 bg-[#F8F5EF] border border-[#B79A68]/30 text-sm text-[#30231F] rounded-xs focus:outline-hidden focus:border-[#B79A68]"
                    >
                      <option value="Barat">Barat Reception</option>
                      <option value="Walima">Walima Reception</option>
                      <option value="Mehndi">Mehndi Celebration</option>
                      <option value="Nikkah">Nikkah Ceremony</option>
                      <option value="Engagement">Engagement / Baat Pakki</option>
                      <option value="Party">Party / Sister of Bride</option>
                      <option value="Skin Ritual">Pre-Bridal Facial / Spa</option>
                    </select>
                  </div>
                </div>

                {/* Date & Time Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-medium text-[#30231F] mb-1.5">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) =>
                        setFormData({ ...formData, preferredDate: e.target.value })
                      }
                      className={`w-full px-3.5 py-2.5 bg-[#F8F5EF] border text-sm text-[#30231F] rounded-xs focus:outline-hidden ${
                        errors.preferredDate
                          ? 'border-red-400 focus:border-red-500'
                          : 'border-[#B79A68]/30 focus:border-[#B79A68]'
                      }`}
                    />
                    {errors.preferredDate && (
                      <span className="text-[11px] text-red-600 mt-1 block">
                        {errors.preferredDate}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-medium text-[#30231F] mb-1.5">
                      Preferred Time Slot
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) =>
                        setFormData({ ...formData, preferredTime: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 bg-[#F8F5EF] border border-[#B79A68]/30 text-sm text-[#30231F] rounded-xs focus:outline-hidden focus:border-[#B79A68]"
                    >
                      <option value="11:00 AM">11:00 AM (Early Daylight)</option>
                      <option value="12:30 PM">12:30 PM (Midday Session)</option>
                      <option value="2:00 PM">2:00 PM (Afternoon)</option>
                      <option value="3:30 PM">3:30 PM (Evening Wedding Prep)</option>
                      <option value="5:00 PM">5:00 PM (Late Barat/Walima Prep)</option>
                    </select>
                  </div>
                </div>

                {/* Artist Preference & Branch */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-medium text-[#30231F] mb-1.5">
                      Artist Preference
                    </label>
                    <select
                      value={formData.artistPreference}
                      onChange={(e) =>
                        setFormData({ ...formData, artistPreference: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 bg-[#F8F5EF] border border-[#B79A68]/30 text-sm text-[#30231F] rounded-xs focus:outline-hidden focus:border-[#B79A68]"
                    >
                      <option value="Any Senior Lead Artist">Any Senior Lead Artist</option>
                      {config.artists.map((artist) => (
                        <option key={artist.id} value={artist.name}>
                          {artist.name} ({artist.role})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-medium text-[#30231F] mb-1.5">
                      Studio Location
                    </label>
                    <select
                      value={formData.branch}
                      onChange={(e) =>
                        setFormData({ ...formData, branch: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 bg-[#F8F5EF] border border-[#B79A68]/30 text-sm text-[#30231F] rounded-xs focus:outline-hidden focus:border-[#B79A68]"
                    >
                      {config.branches.map((b) => (
                        <option key={b.id} value={b.name}>
                          {b.name} ({b.city})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Additional Notes */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-medium text-[#30231F] mb-1.5">
                    Additional Notes (Dress Colors, Jewelry type, Family members booking)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) =>
                      setFormData({ ...formData, notes: e.target.value })
                    }
                    placeholder="e.g. Red and gold traditional lehenga, need matha patti setting. Sister also requires party makeup."
                    className="w-full px-3.5 py-2.5 bg-[#F8F5EF] border border-[#B79A68]/30 text-sm text-[#30231F] rounded-xs focus:outline-hidden focus:border-[#B79A68]"
                  />
                </div>

                {/* Submit Actions */}
                <div className="pt-4 space-y-3">
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#30231F] hover:bg-[#B79A68] text-white text-xs uppercase tracking-[0.2em] font-medium transition-colors shadow-md cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Submit Appointment Request</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppBooking}
                    className="w-full py-3 bg-[#E8DCCB] hover:bg-[#D4BE98] text-[#30231F] border border-[#B79A68]/40 text-xs uppercase tracking-[0.15em] font-medium transition-colors cursor-pointer flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    <span>Send Directly via WhatsApp</span>
                  </button>
                </div>

                <p className="text-[11px] text-[#9A8878] text-center pt-2 italic">
                  * Submission sends an inquiry request. Our concierge will contact you to confirm artist availability and deposit requirements.
                </p>
              </form>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};
