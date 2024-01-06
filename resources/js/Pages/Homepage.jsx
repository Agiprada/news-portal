import React from "react";
import { Link, Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import CardNews from "@/Components/Homepage/CardNews";
import Pagination from "@/Components/Homepage/Pagination";

export default function Homepage(props) {
    console.log(props);
    return (
        <>
            <div className="min-h-screen bg-slate-50 ">
                <Head title={props.title}></Head>
                <Navbar user={props.auth.user} />
                {/* <h1>{props.description}</h1> */}
                <div className="flex justify-center items-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch gap-4 my-3">
                    <CardNews news={props.news.data} />
                    {/* {props.news ? (
                        props.news.map((data, i) => {
                            return (
                                <div
                                    key={i}
                                    className="p-4 m-2 bg-white text-black shadow-md rounded-md"
                                >
                                    <p className="text-2xl">{data.title}</p>
                                    <p>{data.description}</p>
                                    <i>{data.category}</i>
                                    <i>{data.author}</i>
                                </div>
                            );
                        })
                    ) : (
                        <p>Not Found</p>
                    )} */}
                </div>
                <div className="flex justify-center">
                    <Pagination meta={props.news.meta} />
                </div>
            </div>
        </>
    );
}
