import Head from "next/head";
import Link from "next/link";

export default function PageNotFound() {
    return (
        <>
            <Head>
                <title>Movie Searcher | 404</title>
            </Head>
            <div className=" w-screen h-screen flex flex-col justify-center items-center text-lg">
                <h1 className="font-bold text-xl mb-4">Something went wrong...</h1>
                <h2>This page doesn`t exist!</h2>
                <p>Go to <Link className=" font-semibold underline hover:font-bold" href={'/'}>home page</Link></p>
            </div>
        </>
    );
};