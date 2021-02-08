import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
        Hi, thanks for visiting my profile. I am Numan and I specialize in developing Single Page Applications (SPAs) as well as Regular Web Applications using Python/Django and React.js. My major concern is usually to transform your amazing ideas into fully functional and responsive applications. I prefer writing solution-oriented implementations with a high focus on security and scalability to automate your routine tasks. It has been 2 years since I am developing and managing web applications using Django. I really enjoy creating a Web App from the beginning following the best practices and deploy it. I am comfortable with developing both the client and server sides of web applications.

        I am also very good at building RESTful API web services. I have React, Vue, and general HTML, CSS, ES6. JavaScript experience necessary to work across frontend parts of any application. Along with the ORM, I'm also used to hand-written SQL queries and have experience with Oracle, PostgreSQL, MySQL and SQL Server.

        My Professional skills Include (but not limited to):
        <ul>
          <li>Python, Django, Django Rest Framework</li>
          <li>Laravel, Codeigniter, PHP</li>
          <li>JavaScript, jQuery, React.js, Vue.js</li>
          <li>Webpack</li>
          <li>HTML5, CSS3, Bootstrap</li>
          <li>SQL, PostgreSQL, Oracle Database, SQL Server, Firebase\Firestore</li>
          <li>Heroku , cPanel, VPS</li>
          <li>I am always learning, and have no problem picking up new technologies</li>
        </ul>

        Please also take a look on my portfolio and if you feel I can help you with your next project or potential product, feel free to ping and discuss.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}