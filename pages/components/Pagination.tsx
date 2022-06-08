import Link from "next/link";
import { generatePagination } from "../lib/pagination";

type Props = {
  current: number;
  pages: number;
  link: {
    href: (page: number) => string;
    as: (page: number) => string;
  };
};

const Pagination = ({ current, pages, link }: Props) => {
    const pagination = generatePagination(current, pages);
    return (
        <ul>
            {pagination.map((it, i) => (
                <li key={i}>
                    {it.excerpt ? (
                        "..."
                    ) : (
                        <Link href={link.href(it.page||1)} as={link.as(it.page||1)}>
                            <a>{it.page}</a>
                        </Link>
                    )}
                </li>
            ))}
        </ul>
    );
}

export default Pagination;