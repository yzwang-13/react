import {useRouter} from 'next/router';

// our-domain.com/news/ANYTHING


const DetailPage = () => {
    const router = useRouter();
    console.log(router.query.newsId);
    const newsId = router.query.newsId;
    // send a request to the backend API
    // to fetch the news item with newsId

    return <h1>The News Detail Page</h1>
}

export default DetailPage;
