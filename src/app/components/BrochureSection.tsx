import { BookOpen, Download, FileText, ArrowUpRight } from "lucide-react";

const brochureUrl = `${import.meta.env.BASE_URL}brochures/creative-sports-infra.pdf`;

export function BrochureSection() {
  return (
    <section id="brochure" aria-labelledby="brochure-heading" className="bg-slate-50 px-4 py-14 sm:px-6 lg:px-8 scroll-mt-28">
      <div className="max-w-7xl mx-auto rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 shadow-sm flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
        <div className="flex-1 flex items-start gap-5">
          <div className="hidden sm:flex shrink-0 size-16 items-center justify-center rounded-2xl bg-[#AF2324]/10 text-[#AF2324]">
            <FileText className="size-8" aria-hidden="true" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#AF2324] mb-2">Explore our expertise</p>
            <h2 id="brochure-heading" className="font-heading text-2xl sm:text-3xl font-black text-slate-900">Your next sports facility starts here.</h2>
            <p className="mt-3 max-w-2xl text-slate-600 leading-relaxed">Explore Creative Sports Infra’s brochure for an overview of our sports infrastructure solutions and services. Browse it online or save a copy for your project planning.</p>
            <p className="mt-3 text-xs font-medium text-slate-500">Company brochure · PDF · 5.9 MB</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
          <a href={brochureUrl} target="_blank" rel="noopener noreferrer" aria-label="View brochure (PDF, opens in a new tab)" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#AF2324] px-5 py-3 text-sm font-bold text-white hover:bg-[#921D1E] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#AF2324]">
            <BookOpen className="size-4" aria-hidden="true" /> View Brochure <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
          <a href={brochureUrl} download="Creative-Sports-Infra-Brochure.pdf" className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#AF2324] px-5 py-3 text-sm font-bold text-[#AF2324] hover:bg-[#AF2324]/5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#AF2324]">
            <Download className="size-4" aria-hidden="true" /> Download PDF
          </a>
        </div>
      </div>
    </section>
  );
}
