import "./globals.css";

export const metadata = {
  title: "Kalyani Mantramurthi | Full-Stack Software Engineer",
  description: "Portfolio of Kalyani Mantramurthi, a full-stack software engineer specializing in Java, Spring Boot, React, and AI-integrated applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
