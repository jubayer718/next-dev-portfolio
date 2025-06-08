import "./globals.css";
import {JetBrains_Mono} from "next/font/google";


//components
import Header from "@/components/Header";
import Page_Transition from "@/components/Page_Transition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable:"--font-jetbrainsMono",

})

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Jubayer's Portfolio",
  description: "All time active for taking new technologies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={jetbrainsMono.variable}
      >
        <Header />
        <StairTransition/>
        <Page_Transition>
          {children}
        </Page_Transition>
      
      </body>
    </html>
  );
}
