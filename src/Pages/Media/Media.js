
import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

import Allposts from './Allposts';
import Spinner from './Spinner';

const Media = () => {
    const { loading } = useContext(AuthContext)
    const [post, setPost] = useState([])
    useEffect(() => {
        fetch('https://chat-six-ashen.vercel.app/allpost')
            .then(res => res.json())
            .then(data => {
                if (loading) {
                    <>
                        <Spinner></Spinner>
                    </>
                }
                setPost(data)
            })

    }, [post])
    console.log(post)
    // const { data: post = [], refetch } = useQuery({
    //     queryKey: ['post'],

    //     queryFn: async () => {
    //         const res = await fetch('https://chat-six-ashen.vercel.app/allpost', {
    //             headers: {

    //                 'content-type': 'application/json'
    //             }
    //         })
    //         const data = await res.json();
    //         refetch()
    //         console.log(data)
    //         return data;

    //     }


    // })





    return (

        <section>
            <div>
                {loading}
            </div>
            <div className=''>

                {post &&
                    post?.map(posts => <Allposts
                        posts={posts}
                        key={posts._id}



                    ></Allposts>)
                }
            </div>



        </section>
    );
};

export default Media;