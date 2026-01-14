import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogPosts } from '@/data/blogPosts';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SEO } from '@/components/SEO';

export default function BlogPost() {
    const { slug } = useParams();
    const post = blogPosts.find(p => p.slug === slug);

    if (!post) {
        return <Navigate to="/blog" replace />;
    }

    return (
        <div className="min-h-screen bg-background">
            <SEO
                title={post.title}
                description={post.excerpt}
                image={post.image}
                url={`https://wolfacademyindia.com/blog/${post.slug}`}
            />
            <Header />

            <main className="pt-24 pb-16">
                <article className="section-container max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <a
                            href="/blog"
                            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors"
                        >
                            <ArrowLeft size={20} /> Back to Blog
                        </a>

                        <div className="bg-card border border-border rounded-2xl overflow-hidden mb-12">
                            <div className="relative h-[300px] md:h-[400px] overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                                <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
                                    <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">
                                        {post.category}
                                    </span>
                                    <h1 className="font-heading text-3xl md:text-5xl text-foreground mb-4">
                                        {post.title}
                                    </h1>
                                    <div className="flex items-center gap-6 text-sm text-muted-foreground">
                                        <div className="flex items-center gap-2">
                                            <Calendar size={16} />
                                            {post.date}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock size={16} />
                                            {post.readTime}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            className="prose prose-invert prose-lg max-w-none 
                prose-headings:font-heading prose-headings:text-foreground 
                prose-p:text-muted-foreground prose-p:font-body prose-p:leading-relaxed
                prose-strong:text-primary prose-strong:font-heading
                prose-li:text-muted-foreground
                prose-a:text-primary hover:prose-a:text-primary/80"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />

                        <div className="mt-12 pt-8 border-t border-border flex justify-between items-center">
                            <p className="font-body text-muted-foreground italic">
                                Written by Wolf Academy Team
                            </p>
                            <button
                                className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                                onClick={() => {
                                    navigator.share({
                                        title: post.title,
                                        text: post.excerpt,
                                        url: window.location.href,
                                    }).catch(() => { });
                                }}
                            >
                                <Share2 size={20} /> Share Article
                            </button>
                        </div>
                    </motion.div>
                </article>
            </main>

            <Footer />
        </div>
    );
}
