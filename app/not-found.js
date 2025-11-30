// app/not-found.js
import Link from "next/link";
import Homebreadcrumbs from "../app/utill/Breadcrumbs/Homebreadcrumbs"

export default function NotFound() {
  return (
    <section id="not-foud" className="">
       <div className="container">
        <Homebreadcrumbs title={"404 Error"}/>

          <div className="text-row mt-[60px] text-center">

      <h2 className="text-[110px] font-Inter font-medium text-black mb-10">404 Not Found</h2>
      <p className="text-base font-popins font-normal text-black mb-20">
        Your visited page not found. You may go home page.
      </p>

      <Link
        href="/"
        className="px-12 py-4 bg-brand text-white rounded-sm text-base font-medium font-popins"
        >
        Back to home page
      </Link>
          </div>
        </div>
    </section>
  );
}
