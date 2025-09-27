const EMAILJS_SERVICE_ID = 'service_mangotango';
const EMAILJS_TEMPLATE_ID = 'template_approval';
const EMAILJS_PUBLIC_KEY = 'your_public_key_here';

function isEmailJSConfigured() {
  return EMAILJS_SERVICE_ID !== 'service_mangotango' && 
         EMAILJS_PUBLIC_KEY !== 'your_public_key_here';
}

function initializeEmailJS() {
  if (!window.emailjs) {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
    script.onload = () => {
      window.emailjs.init(EMAILJS_PUBLIC_KEY);
    };
    document.head.appendChild(script);
  } else {
    window.emailjs.init(EMAILJS_PUBLIC_KEY);
  }
}

async function sendApprovalEmail(technicianData) {
  try {
    if (!isEmailJSConfigured()) {
      console.warn('EmailJS not configured. Please update email-service.js with your EmailJS credentials.');
      console.warn('Visit https://www.emailjs.com/ for setup instructions.');
      return false;
    }

    if (!window.emailjs) {
      console.error('EmailJS not loaded');
      return false;
    }

    const { firstName, lastName, email, expertise } = technicianData;
    
    const templateParams = {
      to_email: email,
      to_name: `${firstName} ${lastName}`,
      technician_name: `${firstName} ${lastName}`,
      expertise: expertise || 'Technician',
      login_url: window.location.origin + '/index.html',
      company_name: 'MangoTango',
      approval_date: new Date().toLocaleDateString()
    };

    console.log('Sending approval email to:', email);
    console.log('Template params:', templateParams);

    const response = await window.emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    console.log('Email sent successfully:', response);
    return true;

  } catch (error) {
    console.error('Error sending approval email:', error);
    return false;
  }
}

async function sendRejectionEmail(technicianData) {
  try {
    if (!isEmailJSConfigured()) {
      console.warn('EmailJS not configured. Please update email-service.js with your EmailJS credentials.');
      console.warn('Visit https://www.emailjs.com/ for setup instructions.');
      return false;
    }

    if (!window.emailjs) {
      console.error('EmailJS not loaded');
      return false;
    }

    const { firstName, lastName, email, expertise } = technicianData;
    
    const templateParams = {
      to_email: email,
      to_name: `${firstName} ${lastName}`,
      technician_name: `${firstName} ${lastName}`,
      expertise: expertise || 'Technician',
      company_name: 'MangoTango',
      rejection_date: new Date().toLocaleDateString()
    };

    console.log('Sending rejection email to:', email);
    console.log('Template params:', templateParams);

    const response = await window.emailjs.send(
      EMAILJS_SERVICE_ID,
      'template_rejection',
      templateParams
    );

    console.log('Rejection email sent successfully:', response);
    return true;

  } catch (error) {
    console.error('Error sending rejection email:', error);
    return false;
  }
}

document.addEventListener('DOMContentLoaded', initializeEmailJS);

window.EmailService = {
  sendApprovalEmail,
  sendRejectionEmail,
  initializeEmailJS,
  isEmailJSConfigured
};