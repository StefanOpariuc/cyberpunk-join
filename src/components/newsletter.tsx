import { FC, useEffect, useState } from 'react';
import { Post } from '@/app/api/posts/route';

const Newsletter: FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        fetch("/api/posts")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                setPosts(data.data);
                console.log("Fetched posts:", data);
            })
            .catch((error) => {
                console.error("There was a problem with the fetch request:", error);
            });

    }, []);
    return (
        <div className="flex flex-col items-center md:pt-[126px] pt-[80px] gap-[40px]">
            <div className="flex flex-col items-center gap-[20px]">
                <p className="text-center md:text-4xl text-xl font-nebula">
                    in&out by <span className="text-green">cyberpunk capital</span>
                </p>
                <p className=" max-w-[720px] text-white/60 md:text-m text:sm font-sans text-center">
                    Newsletter-ul gratuit care ajunge in inbox saptamanal si care te ajuta sa ramai conectat la piata crypto si la pietele traditionale de capital.
                </p>
            </div>

            <div className="flex flex-col items-center ">
                <div className="grid md:grid-cols-3 grid-cols-1 md:gap-[40px] gap-[25px]">
                    {posts.map((post) => (
                        <div key={post.id} className="flex flex-col w-[330px] gap-[40px] border-b-gray-400">
                            <div className="flex flex-col gap-[22px]">
                                <p className='text-left md:text-l text-m font-sans'>
                                    {post.title}
                                </p>
                                <p className='text-left md:text-m text-sm font-sans text-green '>
                                    {post.subject_line}
                                </p>
                            </div>
                            <div className='flex flex-row gap-[10px] cursor-pointer' onClick={() => window.open(post.web_url, '_blank')}>
                                <p className="text-left md:text-m text-sm font-sans">
                                    Learn More
                                </p>
                                <img src='/images/arrow-up-right.svg' width='11px' height='11px' />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Newsletter;