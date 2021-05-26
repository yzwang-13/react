// our-domain.com/news
import React from 'react';
import Link from 'next/link';


const NewsPage = () => {
    return (
        <React.Fragment>
            <h1>The News Page</h1>
            <ul>
                <li>
                    <Link href='/news/next-js'>
                        Nextjs is a great framework
                    </Link>
                </li>
                <li>
                    <Link href='/news/something'>
                        Something else
                    </Link>
                </li>
                <li>
                    <Link href='/news/today'>
                        Today is a great day
                    </Link>
                </li>
            </ul>
        </React.Fragment>
    )
}

export default NewsPage;
