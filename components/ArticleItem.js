
import Link from "next/link"

const ArticleItem = ({ article }) => {
    return (
        <Link href="/article/[id]" as={`/article/${article.id}`}>
            <div className="border-teal-900 my-9 p-7 backdrop-opacity-40 rounded bg-slate-50	shadow-sm shadow-slate-400		">
                <a className='text-lg font-medium cursor-pointer'> {article.title} </a>
                <p className=''>{article.excerpt}</p>
            </div>

        </Link>
    )
}

export default ArticleItem