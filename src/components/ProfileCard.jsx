import React from 'react';

const ProfileCard = () => {
    return (
        <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
            <div className="rounded-t-lg h-32 overflow-hidden">
                <img className="object-cover object-top w-full" src='https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt='Mountain' />
            </div>
            <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                <img className="object-cover object-center h-32" src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt='Woman looking front' />
            </div>
            <div className="text-center mt-2">
                <h2 className="font-semibold">Sarah Smith</h2>
                <p className="text-gray-500">Freelance Web Designer</p>
            </div>
            <ul className="py-4 mt-2 text-gray-700 flex items-center justify-around">
                <li className="flex flex-col items-center justify-around">
                    <svg className="w-6 h-6 fill-current text-blue-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95.49-7.44-2.72-7.93-6.68-.06-.55.36-1.03.91-1.09.52-.06 1.03.36 1.09.91.42 3.18 3.25 5.46 6.44 5.06 3.18-.42 5.46-3.25 5.06-6.44-.42-3.18-3.25-5.46-6.44-5.06-1.68.22-3.14 1.14-4.04 2.47-.2.29-.51.47-.86.5-.41.04-.81-.19-.99-.57-.25-.54-.03-1.2.5-1.5 1.25-1.47 2.94-2.5 4.94-2.84 4.26-.67 8.17 2.61 8.84 6.87.67 4.26-2.61 8.17-6.87 8.84z"/>
                    </svg>
                    <div>2k</div>
                </li>
                <li className="flex flex-col items-center justify-around">
                    <svg className="w-6 h-6 fill-current text-blue-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6.39-4.56c-.76-.76-1.61-1.22-2.48-1.43V11c0-3.07-1.64-5.64-4-6.32V4c0-.55-.45-1-1-1s-1 .45-1 1v.68c-2.36.68-4 3.25-4 6.32v4.01c-.87.21-1.72.67-2.48 1.43-.78.78-.92 2.02-.29 2.91.63.89 1.69 1.23 2.68.83C7.71 19.2 9.71 20 12 20s4.29-.8 5.39-2.82c.99.4 2.05.06 2.68-.83.63-.89.49-2.13-.28-2.91z"/>
                    </svg>
                    <div>10k</div>
                </li>
                <li className="flex flex-col items-center justify-around">
                    <svg className="w-6 h-6 fill-current text-blue-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L9 18V5h10v13z"/>
                    </svg>
                    <div>15</div>
                </li>
            </ul>
            <div className="p-4 border-t mx-8 mt-2">
                <button className="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2">Follow</button>
            </div>
        </div>
    );
};

export default ProfileCard;
