import emailjs from "emailjs-com";
import { toast } from "react-toastify";

export const sendEmail = async ({ name, title,course, phone, email, message }) => {
  const currentTime = new Date().toLocaleString();

  console.log("Sending email...");

  // Validate required fields
  if (!name || !phone ) {
    console.error("Name and phone are required");
    toast("Please Enter Your name, Phone and Course ")
    return { success: false, error: "Name and phone are required" };
  }

  try {
    const result = await emailjs.send(
      "service_88pyx5l",
      "template_jcsaiuj",
      {
        title: title || "No Title",
        name,
        email: email || "No Email Provided",
        phone,
        course,
        time: currentTime,
        message: message || "No message provided",
      },
      "gcNdaKW35Hd9-2JWi"
    );
    toast("successfully registered for call back");
    console.log("✅ Email sent successfully:", result.text);
    return { success: true, result: result.text };
  } catch (error) {
    console.error("❌ Failed to send email:", error.text);
    return { success: false, error: error.text };
  }
};
