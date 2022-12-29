import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Spinner from '../Home/Spinner/Spinner';
import Allposts from './Allposts';

const Media = () => {

    const { data: post = [], refetch } = useQuery({
        queryKey: ['post'],

        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allpost', {
                headers: {

                    'content-type': 'application/json'
                }
            })
            const data = await res.json();
            refetch()
            return data;

        }


    })

    return (
        <div className=''>
            {
                post.map(posts => <Allposts
                    posts={posts}
                    key={posts._id}
                    refetch={refetch}

                ></Allposts>)
            }
        </div>
    );
};

export default Media;