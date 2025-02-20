import React, { useState } from 'react';

const BookDescription = ({ description }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const maxLength = 200; // Máximo de caracteres antes de truncar

    const toggleDescription = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className='flex flex-col gap-4 my-5 relative'>
            <p className='text-gray-500 font-bold'>Description</p>
            <div className='relative text-gray-700'>
                <p className={`transition-all duration-300 ${!isExpanded ? 'line-clamp-4' : ''}`}>
                    {description}
                </p>
                {!isExpanded && description.length > maxLength && (
                    <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-white to-transparent"></div>
                )}
            </div>
            {description.length > maxLength && (
                <button
                    onClick={toggleDescription}
                    className='text-blue-500 cursor-pointer font-semibold self-start underline'
                >
                    {isExpanded ? 'Ver menos' : 'Ver más'}
                </button>
            )}
        </div>
    );
};

export default BookDescription;
