// import Image from "next/image";

import Link from "next/link";

export default function Page() {
  return (
    <div className="row-start-2 flex flex-col gap-8 items-center sm:items-start">
      <p className="mb-4 list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
        是的，这里就是更深一层的内容区了
      </p>
      <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
        <li className="mb-2">先帝创业未半而中道崩殂</li>
        <li className="mb-2">先帝创业未半而中道崩殂</li>
        <li className="mb-2">先帝创业未半而中道崩殂</li>
        <li className="mb-2">先帝创业未半而中道崩殂</li>
      </ol>
      <div className="flex gap-4 items-center flex-col sm:flex-row">
        <Link
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          href="/"
          target="_self"
          rel="noopener noreferrer"
        >
          回到主页
        </Link>
        <Link
          className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
          href="../"
          target="_self"
          rel="noopener noreferrer"
        >
          向上一层
        </Link>
      </div>
    </div>
  );
}
