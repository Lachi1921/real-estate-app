import EmotionRegistry from './components/EmotionRegistry';
import { manrope, montserrat, roboto } from './fonts';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${montserrat.variable} ${roboto.variable}`}>
      <body>
        <EmotionRegistry>
          {children}
        </EmotionRegistry>
      </body>
    </html>
  );
}