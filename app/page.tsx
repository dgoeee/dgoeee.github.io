import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            这里是主页，我希望能对内容有所区分和引导，所以没有直接展示内容
          </li>
          <li className="mb-2">
            我基于{" "}
            <a
              className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold hover:underline hover:underline-offset-4"
              href="https://nextjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Next.js
            </a>{" "}
            框架构建了这个页面，而这个框架则基于{" "}
            <a
              className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold hover:underline hover:underline-offset-4"
              href="https://react.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React
            </a>
          </li>
          <li className="mb-2">主页是单独的一面，它不受内部布局限制</li>
          <li className="mb-2">
            这个列表前面的 &quot;1. 2. 3. 4.&quot;
            并不由我手动书写，而是由布局编码生成的
          </li>{" "}
          <li className="mb-2">
            至于我是怎么做的，可以参考链接{" "}
            <a
              className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold hover:underline hover:underline-offset-4"
              href="https://tailwindcss.com/docs/list-style-type#setting-the-list-style-type/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tailwind CSS
            </a>
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://www.mi.com/about/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            链接测试（小米官网）
          </a>
          <Link
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="./doc"
            target="_self"
            rel="noopener noreferrer"
          >
            路由测试
          </Link>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.mi.com/about/index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          文本
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.mi.com/about/index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          页面
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.mi.com/about/index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          链接 →
        </a>
      </footer>
    </div>
  );
}
