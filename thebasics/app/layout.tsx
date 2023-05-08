import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body>
        <nav>Rose Pine
            <Link href="/">
                Home
            </Link>
            <Link href="/about">
                About
            </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
