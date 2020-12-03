import Link from 'next/link';

function Home() {
    return(
        <div>
            <h1>Home1</h1>

            <Link href="/stories">
                <a>Stories</a>
            </Link>
        </div>
        )
}
  
export default Home