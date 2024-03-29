import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { BiLike, BiComment, BiMessage } from 'react-icons/bi'
import { AuthContext } from '../../Context/AuthProvider';
import { toast } from 'react-hot-toast';




const Allposts = ({ posts, refetch }) => {



    const { _id, liking, comments, likeusersname, commentusername } = posts
    const { user } = useContext(AuthContext)

    const [like, setLike] = useState(liking + 1 || 1)

    const addlike = () => {
        const liked = {
            like,
            username: user?.displayName
        }
        setLike(like + 1)

        fetch(`https://chat-six-ashen.vercel.app/post/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(liked)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {

                    console.log(data)
                }

            })


    }
    const Comment = event => {
        event.preventDefault()
        const form = event.target;
        const comment = form.comment.value
        const comments = {
            comment: comment,
            username: user?.displayName,

        }

        fetch(`https://chat-six-ashen.vercel.app/post/comment/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(comments)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    console.log(data)

                }


            })



    }

    return (
        <div className="card  mt-4 bg-base-100 shadow-xl">
            <div className="card-body">
                <div className="avatar offline">
                    <div className="w-10 rounded-full">
                        <img alt='' src='' />

                    </div>
                    <span className='ml-3 font-bold'>{posts.username}</span>
                </div>

                <p> {posts.post}</p>

            </div>


            <figure><img src={posts.image} alt="Shoes" /></figure>
            <div className='p-5'>
                <div>
                    <span className='flex items-center'>

                        <BiLike></BiLike>{liking}</span>
                </div>
                <hr />

                <div className='flex sm:mx-auto'>
                    <div>
                        <Link onClick={addlike} className='btn btn-ghost '><BiLike></BiLike><span>Like</span> </Link>
                    </div>
                    <div>
                        <Link className='btn btn-ghost '><BiComment></BiComment> Comment</Link>
                    </div>
                    <div>
                        <Link className='btn btn-ghost '><BiMessage></BiMessage>Message</Link>
                    </div>
                </div>

                <hr />

                <div className="avatar items-center offline">
                    <div className="w-10 h-1/2 rounded-full">
                        <img alt='' src="https://placeimg.com/192/192/people" />

                    </div>


                    <form onSubmit={Comment}>
                        <label for="chat" class="sr-only">Your message</label>
                        <div class="flex items-center py-2 mx-auto rounded-lg bg-gray-50 dark:bg-gray-700">


                            <textarea id="chat" name='comment' rows="1" class="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
                            <button type="submit" class="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600">
                                <svg aria-hidden="true" class="w-6 h-6 rotate-90" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
                                <span class="sr-only">Send message</span>
                            </button>
                        </div>
                    </form>



                </div>
                <div>
                    <div className="flex p-3 bg-zinc-300 shadow-2xl shadow-gray-800 rounded-2xl items-center offline">

                        <div className='avatar mr-3'>
                            {
                                comments && <div className="avatar w-7 h-1/2 rounded-full">
                                    <img alt='' src="https://placeimg.com/192/192/people" />
                                    <span className='ml-3 font-bold'>{posts.commentusername}</span>
                                </div>

                            }
                        </div>




                        <div className=''>
                            <p className='text-sm'>{comments}</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Allposts;