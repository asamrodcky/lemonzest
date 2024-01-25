import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.banner}>
          LEMON ZEST<Image src='https://upload.wikimedia.org/wikipedia/commons/f/fa/Lemon.svg' width='100' height='100' />
        </h1>

        <div className={styles.description}>
          THIS IS WHERE THE TABLE SHOULD POPULATE
        </div>

        <p className={styles.description}>
          Get started by editing <code>pages/index.js</code>
        </p>
        <div>
          {/* <table>
            <tr>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
              <th>Saturday</th>
              <th>Sunday</th>
            </tr>
            <tr>
              <td>12</td>
              <td>28</td>
              <td>28</td>
              <td>28</td>
              <td>28</td>
              <td>28</td>
              <td>28</td>
            </tr>
            <tr>
              <td>35</td>
              <td>21</td>
              <td>34</td>
              <td>00</td>
              <td>8</td>
              <td>75</td>
              <td>24</td>
            </tr>
          </table> */}
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/nextjs-github-pages/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>

      {/* <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
        table, th, td {
          border:1px solid green;
       } 
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style> */}
    </div>
  );
}
