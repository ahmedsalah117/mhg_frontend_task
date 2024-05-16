import { Inter, Poppins, Rubik } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import store from "../lib/store.js";
import StoreProvider from "./StoreProvider.jsx";
import Navbar from "../components/shared/navbar/Navbar.jsx";
const inter = Inter({ subsets: ["latin"] });
// const poppins = Poppins({
//   subsets: ["latin"],
//   variable: "--poppins",
//   weight: ["400", "500", "600", "700", "800", "900"],
// });
// const rubik = Rubik({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700", "800", "900"],
//   variable: "--rubik",
// });

export const metadata = {
  title: "MHC Frontend Task",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-tertiaryColor text-textPrimary`}>
        <Toaster />
        <section className="w-[98%] min-h-[90vh] m-auto">
          <StoreProvider>
            <Navbar />
            {children}
          </StoreProvider>
        </section>
      </body>
    </html>
  );
}
