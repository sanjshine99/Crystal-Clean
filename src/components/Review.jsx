import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Review() {
    const [rating, setRating] = useState(0);
    const [hoveredRating, setHoveredRating] = useState(0);
    const [showReviewBox, setShowReviewBox] = useState(false);
    const [reviewText, setReviewText] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState(''); // Added phone state
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const handleStarClick = (starRating) => {
        setRating(starRating);
        setError('');
        setSubmitted(false);
        if (starRating <= 4) {
            setShowReviewBox(true);
        } else {
            setShowReviewBox(false);
            window.open("https://g.page/r/CYSKTm_brVBzEBM/review", "_blank", "noopener,noreferrer");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // These keys now exactly match your HTML template placeholders
        const templateParams = {
            customer_name: name,
            customer_email: email,
            customer_phone: phone || 'Not provided',
            rating: rating,
            review_text: reviewText,
            star_rating: '⭐'.repeat(rating),
            date: new Date().toLocaleDateString()
        };

        try {
            await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY);
            setLoading(false);
            setSubmitted(true);

            // Reset form
            setTimeout(() => {
                setRating(0);
                setShowReviewBox(false);
                setReviewText('');
                setName('');
                setEmail('');
                setPhone('');
                setSubmitted(false);
            }, 4000);
        } catch (err) {
            setError('Failed to send. Please try again.');
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen py-20 flex items-center justify-center p-4 bg-black">
            <div className="w-full max-w-2xl">
                <div className="bg-white rounded-3xl shadow-2xl mt-20 overflow-hidden border border-gray-100">

                    {/* Header */}
                    <div style={{ backgroundColor: '#13AFFE' }} className="px-6 py-10 text-center">
                        <div className="inline-block mb-4">
                            <div className="bg-white/20 backdrop-blur-md rounded-full p-4">
                                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            </div>
                        </div>
                        <h1 className="text-3xl font-bold text-white mb-2">Rate Your Experience</h1>
                        <p className="text-white/90 font-medium">Your feedback helps us serve you better</p>
                    </div>

                    <div className="px-6 py-10 md:px-12">
                        {/* Star Rating Section */}
                        <div className="mb-8 text-center">
                            <p className="text-gray-600 mb-6 font-medium">How would you rate our service?</p>
                            <div className="flex justify-center gap-2">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <button
                                        key={star}
                                        type="button"
                                        onClick={() => handleStarClick(star)}
                                        onMouseEnter={() => setHoveredRating(star)}
                                        onMouseLeave={() => setHoveredRating(0)}
                                        className="transition-transform hover:scale-125 focus:outline-none"
                                    >
                                        <svg
                                            className="w-10 h-10 sm:w-14 sm:h-14 transition-colors duration-200"
                                            fill={star <= (hoveredRating || rating) ? '#F5A623' : '#4B5563'}
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    </button>
                                ))}
                            </div>
                            {rating > 0 && (
                                <p style={{ color: '#13AFFE' }} className="mt-4 text-lg font-bold animate-fade-in">
                                    {rating === 1 && "We're sorry to hear that 😢"}
                                    {rating === 2 && "We can do better 😕"}
                                    {rating === 3 && "Thanks for your feedback 🙂"}
                                    {rating === 4 && "Great! Thank you! 😊"}
                                    {rating === 5 && "Excellent! We appreciate you! 🌟"}
                                </p>
                            )}
                        </div>

                        {showReviewBox && !submitted && (
                            <div className="animate-slide-down">
                                <form onSubmit={handleSubmit} className="space-y-4 border-t pt-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                            className="w-full h-12 px-4 rounded-xl border-2 border-gray-200 focus:border-[#13AFFE] focus:ring-0 outline-none transition-all text-gray-800 bg-white"
                                        />
                                        <input
                                            type="email"
                                            placeholder="Your Email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                            className="w-full h-12 px-4 rounded-xl border-2 border-gray-200 focus:border-[#13AFFE] focus:ring-0 outline-none transition-all text-gray-800 bg-white"
                                        />
                                    </div>

                                    {/* Added Phone Input Field */}
                                    <input
                                        type="tel"
                                        placeholder="Phone Number"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        className="w-full h-12 px-4 rounded-xl border-2 border-gray-200 focus:border-[#13AFFE] focus:ring-0 outline-none transition-all text-gray-800 bg-white"
                                    />

                                    <textarea
                                        placeholder="Please share your experience with us..."
                                        value={reviewText}
                                        onChange={(e) => setReviewText(e.target.value)}
                                        required
                                        rows={4}
                                        className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-[#13AFFE] focus:ring-0 outline-none transition-all resize-none text-gray-800 bg-white"
                                    />

                                    {error && <p className="text-red-500 text-sm text-center">{error}</p>}

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        style={{ backgroundColor: '#13AFFE' }}
                                        className="w-full text-white font-bold py-4 rounded-xl shadow-lg hover:opacity-90 transition-all disabled:opacity-50"
                                    >
                                        {loading ? 'Sending...' : 'Submit Review'}
                                    </button>
                                </form>
                            </div>
                        )}

                        {submitted && (
                            <div className="text-center py-10 bg-green-50 rounded-2xl animate-fade-in border border-green-100">
                                <h3 className="text-2xl font-bold text-green-800">Thank You!</h3>
                                <p className="text-green-700">Your feedback has been received.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <style>
                {`
                @keyframes slide-down { 
                    from { opacity: 0; transform: translateY(-10px); } 
                    to { opacity: 1; transform: translateY(0); } 
                }
                @keyframes fade-in { 
                    from { opacity: 0; } 
                    to { opacity: 1; } 
                }
                .animate-slide-down { animation: slide-down 0.4s ease-out forwards; }
                .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
                `}
            </style>
        </div>
    );
}