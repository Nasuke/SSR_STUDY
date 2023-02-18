import Link from "next/link"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <div>
          <Link href={'/'}>Home</Link>
          {children}
        </div>
      </body>
    </html>
  )
}
