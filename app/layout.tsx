import '@/app/ui/global.css';
import { inter, lusitana } from '@/app/ui/fonts';
// import styles from '@/app/ui/home.module.css';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
     {/* <body className={`${inter.className} antialiased`}>{children}</body> */}
     <body className={`${inter.className} ${lusitana.className} antialiased`}>{children}
     </body>
    </html>
  );
}