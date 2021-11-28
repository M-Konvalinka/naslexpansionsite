// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import from below is not correctly, probably due to where the file is being called from
import styles from '~/styles/Home.module.css'

export default function About() {
    return (
      <div>

         <h1 className={styles.title}>
           Testing About Page
          </h1>
      </div>
    )
  }
