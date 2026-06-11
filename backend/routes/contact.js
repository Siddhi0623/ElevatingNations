const express = require('express')
const nodemailer = require('nodemailer')
const router = express.Router()

// Configure your email transporter here.
// For Gmail: use an App Password (not your regular password).
// See: https://support.google.com/accounts/answer/185833
const transporter = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
    user: process.env.EMAIL_USER || 'elevatingnationscic@hotmail.com',
    pass: process.env.EMAIL_PASS || 'YOUR_EMAIL_PASSWORD_HERE',
  },
})

router.post('/', async (req, res) => {
  const { fullName, organisation, email, phone, enquiryType, message } = req.body

  if (!fullName || !email || !enquiryType || !message) {
    return res.status(400).json({ error: 'Missing required fields.' })
  }

  const mailOptions = {
    from: process.env.EMAIL_USER || 'elevatingnationscic@hotmail.com',
    to: process.env.EMAIL_TO || 'elevatingnationscic@hotmail.com',
    replyTo: email,
    subject: `New Enquiry: ${enquiryType} — ${fullName}`,
    html: `
      <h2 style="font-family:Georgia,serif;color:#49483A;">New Enquiry from Elevating Nations Website</h2>
      <table cellpadding="8" style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px;">
        <tr><td><strong>Name:</strong></td><td>${fullName}</td></tr>
        <tr><td><strong>Organisation:</strong></td><td>${organisation || '—'}</td></tr>
        <tr><td><strong>Email:</strong></td><td><a href="mailto:${email}">${email}</a></td></tr>
        <tr><td><strong>Phone:</strong></td><td>${phone || '—'}</td></tr>
        <tr><td><strong>Enquiry Type:</strong></td><td>${enquiryType}</td></tr>
        <tr><td style="vertical-align:top"><strong>Message:</strong></td><td>${message.replace(/\n/g, '<br>')}</td></tr>
      </table>
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    console.log(`[Contact] Email sent from ${email}`)
    res.json({ success: true })
  } catch (err) {
    console.error('[Contact] Email error:', err.message)
    // Still acknowledge receipt so the user isn't left hanging;
    // log the submission for manual follow-up.
    console.log('[Contact] Submission data:', req.body)
    res.status(500).json({ error: 'Email delivery failed. Please contact us directly.' })
  }
})

module.exports = router
