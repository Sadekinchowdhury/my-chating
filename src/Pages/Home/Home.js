import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';
import Allposts from '../Media/Allposts';

const Home = () => {
    const { user, loading } = useContext(AuthContext)
    console.log(user)
    const imageHostkeyk = process.env.REACT_APP_IMG_KEY
    const { register, formState: { errors }, handleSubmit } = useForm()

    const PostButton = data => {


        const image = data.img[0]

        const formData = new FormData()
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageHostkeyk}`
        fetch(url, {
            method: 'POST',
            body: formData


        })
            .then(res => res.json())
            .then(imgData => {
                console.log(imgData)
                if (imgData.success) {
                    console.log(imgData.data.url)

                }

                const postData = {
                    post: data.post,
                    image: imgData.data.url,
                    username: user?.displayName,
                    email: user?.email

                }
                fetch('http://localhost:5000/post', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(postData)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.acknowledged) {
                            toast('post aded')
                        }
                        console.log(data)


                    })
                console.log(postData)
            })





    }
    return (
        <section className='p-7 w-full'>
            <div>
                <div className=''>
                    <div className="avatar offline">
                        <div className="w-10 rounded-full">
                            <img alt='' src="https://placeimg.com/192/192/people" />

                        </div>
                        <span className='ml-3 font-bold'> {user?.displayName}</span>
                    </div>
                </div>


                <form onSubmit={handleSubmit(PostButton)}>
                    <div>
                        <textarea className='w-full outline rounded-2xl' type='text' {...register("post", {

                        })} placeholder='Write you article....' id="" cols="30" rows="10">

                        </textarea>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <input type="file" {...register("img", {

                        })} placeholder='img add' className="input input-bordered mb-2 w-full max-w-xs" />
                    </div>
                    <div>
                        <input className='btn btn-accent' type="submit" />
                    </div>
                </form>


            </div>

        </section>
    );
};

export default Home;