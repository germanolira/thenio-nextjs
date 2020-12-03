import Link from 'next/link';
import React from 'react';

function Home() {
    return(
        <div>
            <h1>Home</h1>

            <Link href="/stories">
                <a>Stories</a>
            </Link>
        </div>
        )
}
  
export default Home