import { Feather } from "lucide-react";

const groups = [
  { title: "Product", links: ["Features", "How it works", "Pricing", "Mobile app"] },
  { title: "Explore", links: ["Species guide", "Life list", "Community", "Blog"] },
  { title: "Company", links: ["About", "Careers", "Privacy", "Contact"] },
];

export function Footer() {
  return (
    <footer className="border-t border-stone-200 py-14">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="#" className="flex items-center gap-2 font-semibold text-stone-900">
              <span className="grid size-8 place-items-center rounded-xl bg-stone-900 text-[#f4f0e9]">
                <Feather className="size-4" />
              </span>
              <span className="text-lg">BirdVision</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-stone-500">
              Identify any bird from a photo or song, and discover the world of
              birds around you.
            </p>
          </div>

          {groups.map((g) => (
            <div key={g.title}>
              <h4 className="text-sm font-semibold text-stone-900">{g.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {g.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-stone-500 transition-colors hover:text-stone-900"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-stone-200 pt-6 text-sm text-stone-500 sm:flex-row">
          <p>© {new Date().getFullYear()} BirdVision. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-stone-900">
              Privacy
            </a>
            <a href="#" className="hover:text-stone-900">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
