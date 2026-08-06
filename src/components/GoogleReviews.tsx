import { useEffect, useState } from 'react';
import { Star } from 'lucide-react';

const GoogleReviews = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://elfsightcdn.com/platform.js";
        script.async = true;
        script.defer = true;
        script.onload = () => {
            setTimeout(() => setIsLoaded(true), 2000);
        };
        document.body.appendChild(script);

        const observer = new MutationObserver((mutations) => {
            const brandingLink = document.querySelector('a[href*="elfsight.com"]') as HTMLElement;
            const brandingText = document.querySelector('a[title*="Free Google Reviews Widget"]') as HTMLElement;
            const widgetToolbar = document.querySelector('.eapps-widget-toolbar') as HTMLElement;

            if (brandingLink) {
                brandingLink.style.display = 'none';
                brandingLink.style.visibility = 'hidden';
                brandingLink.style.opacity = '0';
                brandingLink.style.pointerEvents = 'none';
            }
            if (brandingText) {
                brandingText.style.display = 'none';
                brandingText.style.visibility = 'hidden';
                brandingText.style.opacity = '0';
                brandingText.style.pointerEvents = 'none';
            }
            if (widgetToolbar) {
                widgetToolbar.style.display = 'none';
                widgetToolbar.style.visibility = 'hidden';
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <section className="py-10 bg-wolf-gray/5">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8 animate-fade-up">
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

                <div
                    className="max-w-6xl mx-auto bg-wolf-gray/20 rounded-xl p-4 relative"
                    style={{ minHeight: '450px' }}
                >
                    {!isLoaded && (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="animate-pulse flex flex-col items-center gap-4">
                                <div className="w-16 h-16 bg-gray-700 rounded-full"></div>
                                <div className="h-4 w-48 bg-gray-700 rounded"></div>
                                <div className="h-3 w-64 bg-gray-700 rounded"></div>
                                <p className="text-gray-500 text-sm mt-2">Loading reviews...</p>
                            </div>
                        </div>
                    )}

                    <div className="elfsight-app-bb5b49f3-b5cc-43be-bd9c-0b71cd71cae1 w-full" data-elfsight-app-lazy></div>
                </div>
            </div>
        </section>
    );
};

export default GoogleReviews;

