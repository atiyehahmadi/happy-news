import { server } from '../../../config'
import Meta from '../../../components/Meta'
import Link from "next/link"

const article = ({ article }) => {

  return (
    <div className="border-teal-900 my-9 p-7 backdrop-opacity-40 rounded bg-slate-50	shadow-sm shadow-slate-400		">
      <Meta title={article.title}/>
      <h1 className='text-lg font-medium mb-4'>{article.title}</h1>
      <p className=''>{article.body}</p>

      <Link href='/'> Go back </Link>
    </div>


  )
}



// export const getServerSideProps = async (context) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
//   const article = await res.json()

//   return {
//     props: {
//       article
//     }
//   }
// }

// export const getStaticProps = async (context) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
//   const article = await res.json()

//   return {
//     props: {
//       article
//     }
//   }
// }

// export const getStaticPaths = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
//   const articles = await res.json()
//   const ids = articles.map(article => article.id)
//   const paths = ids.map(id => ({ params: { id: id.toString() } }))

//   return {
//     paths,
//     fallback: false
//   }
// }


export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/articles/${context.params.id}`)
  const article = await res.json()

  return {
    props: {
      article
    }
  }
}

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json()
  const ids = articles.map(article => article.id)
  const paths = ids.map(id => ({ params: { id: id.toString() } }))

  return {
    paths,
    fallback: false
  }
}

export default article