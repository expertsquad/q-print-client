import Link from "next/link";
import {
  IconChevronRight,
  IconPrinter,
  IconArticle,
  IconMilk,
} from "@tabler/icons-react"; // Replace with actual icon imports

const Sidebar = () => (
  <div className="hidden md:flex">
    <div className="flex flex-col gap-5">
      <details className="group relative">
        <summary className="flex items-center gap-2 marker:content-none hover:cursor-pointer">
          <span className="">All Categories</span>
          <span className="transition group-open:rotate-90">
            <IconChevronRight />
          </span>
        </summary>
        <article className="absolute top-10 md:max-w-[300px] bg-red-300 rounded-lg pl-5 py-3">
          <SidebarCategory title="Printer" icon={<IconPrinter />} />
          <SidebarCategory title="Cartridge" icon={<IconArticle />} />
          <SidebarCategory title="Ink" icon={<IconMilk />} />
          {/* Add more categories as needed */}
        </article>
      </details>
    </div>

    <div className="flex gap-5">
      <Link href="/">Home</Link>
      <Link href="/home">Brands</Link>
      <Link href="/home">Find Cartridge</Link>
      <Link href="/home">Order a Design Printing</Link>
      <Link href="/home">About Us</Link>
      <Link href="/home">Privacy Policy</Link>
    </div>
  </div>
);

const SidebarCategory = ({ title, icon }: any) => (
  <ul className="flex flex-col gap-5">
    {[...Array(3)].map((_, index) => (
      <li key={index} className="flex gap-3 relative">
        {icon}
        <Link href="/">{title}</Link>
        <details className="group">
          <summary className="marker:content-none hover:cursor-pointer">
            <span className="transition group-open:rotate-90">
              <IconChevronRight />
            </span>
          </summary>
          <article className="absolute right-[-127px] bg-slate-300 p-5 rounded-md">
            {[...Array(5)].map((_, index) => (
              <li key={index} className="flex gap-3">
                {icon}
                <Link href="/">{title}</Link>
              </li>
            ))}
          </article>
        </details>
      </li>
    ))}
  </ul>
);

export default Sidebar;
