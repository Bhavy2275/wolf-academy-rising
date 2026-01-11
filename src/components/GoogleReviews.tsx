import { useEffect } from 'react';
import { Star } from 'lucide-react';

const GoogleReviews = () => {
    useEffect(() => {
        // Load Elfsight script dynamically
        const script = document.createElement('script');
        script.src = "https://elfsightcdn.com/platform.js";
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <section className="py-20 bg-wolf-gray/5">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12 animate-fade-up">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                        <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                        <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                        <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                        <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-wolf-red mb-4 font-heading">
                        What Our Students Say
                    </h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Join the community of champions at Wolf Academy India
                    </p>
                </div>

                {/* Elfsight Google Reviews Widget Container */}
                <div className="max-w-6xl mx-auto min-h-[400px] bg-wolf-gray/20 rounded-xl p-4 flex items-center justify-center">
                    <div className="elfsight-app-bb5b49f3-b5cc-43be-bd9c-0b71cd71cae1 w-full" data-elfsight-app-lazy></div>

                    {/* Fallback/Instruction for the User */}
                    <div className="text-center p-8 border-2 border-dashed border-wolf-red/30 rounded-lg hidden empty:block">
                        <p className="text-gray-400 mb-4">Reviews widget loading...</p>
                        <a
                            href="https://g.page/r/YOUR_GOOGLE_REVIEW_LINK"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center px-6 py-3 bg-wolf-red text-white font-bold rounded-full hover:bg-red-700 transition-colors"
                        >
                            Write a Review
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GoogleReviews;
