import { Phone, Mail } from "lucide-react";
import { AUTHOR } from "@/lib/author-data";
import { PHONE_HREF, EMAIL_HREF } from "@/lib/constants";

export function AuthorBioBox() {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 bg-gray-50 border border-gray-200 rounded-xl p-6 md:p-8">
      <div className="w-[100px] h-[100px] rounded-full bg-primary text-white flex items-center justify-center text-4xl font-bold shrink-0">
        D
      </div>
      <div className="text-center sm:text-left">
        <h3 className="text-lg font-bold text-gray-900">{AUTHOR.name}</h3>
        <p className="text-sm text-accent font-medium mb-3">
          {AUTHOR.jobTitle}, LuminaSky
        </p>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          {AUTHOR.bio}
        </p>
        <div className="flex items-center justify-center sm:justify-start gap-4 text-sm text-gray-500">
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-1.5 hover:text-primary transition-colors"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            {AUTHOR.phone}
          </a>
          <a
            href={EMAIL_HREF}
            className="inline-flex items-center gap-1.5 hover:text-primary transition-colors"
          >
            <Mail className="w-4 h-4" aria-hidden="true" />
            {AUTHOR.email}
          </a>
        </div>
      </div>
    </div>
  );
}
