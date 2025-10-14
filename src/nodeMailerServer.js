import emailjs from "emailjs-com";
export const sendEmail = async () => {
  //   e.preventDefault();
  const currentTime = new Date().toLocaleString();
  console.log("first");

  emailjs
    .send(
      "service_88pyx5l",
      "template_jcsaiuj",
      {
        title: "jgbjb",
        name: "jkjn",
        email: "jbmj",
        phone: "jj",
        time: "ibghuihuk",
        message: "kujmhbhbj",
      },
      "gcNdaKW35Hd9-2JWi"
    )
    .then(
      result => {
        console.log("✅ Email sent:", result.text);
        alert("Email sent successfully!");
      },
      error => {
        console.error("❌ Failed:", error.text);
      }
    );
};
