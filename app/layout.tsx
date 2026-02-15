// import type { Metadata } from 'next'
// import './globals.css'

// export const metadata: Metadata = {
//   title: 'SNBP',
//   description: 'Created with SunRayz',
//   generator: 'SunRayz',
// }

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return (
//     <html lang="en">
//       <body>{children}</body>
//     </html>
//   )
// }



import type { Metadata } from 'next'
import 'bootstrap/dist/css/bootstrap.min.css' // ✅ Add this line
import './globals.css'

export const metadata: Metadata = {
  title: 'SNBP',
  description: 'Created with SunRayz',
  generator: 'SunRayz',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
