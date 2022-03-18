import { useRouter } from "next/router";

type ArticleProps = {
  id: string;
  title: string;
  subtitle: string;
};
export default function Article({ id, title, subtitle }: ArticleProps) {
  const router = useRouter();

  return (
    <div className="mb-16">
      <a className="font-bold">
        <h1
          onClick={() => router.push(`/posts/${id}`)}
          className="hover:underline hover:cursor-pointer"
        >
          {title}
        </h1>
      </a>
      <p className="text-gray-500 text-left text-3xl subtitle font-normal">
        {subtitle}
      </p>
      <p className="mt-4">
        Postado por{" "}
        <a
          className="italic underline"
          href="https://linkedin.com/in/keysijones"
        >
          Keysi Jones
        </a>
      </p>
    </div>
  );
}

export { Article };