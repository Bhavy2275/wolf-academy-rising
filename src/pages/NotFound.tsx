import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, BookOpen, Calendar, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-grow flex items-center justify-center py-24">
        <div className="section-container text-center max-w-2xl">
          {/* 404 Badge */}
          <div className="inline-block mb-8">
            <span className="font-heading text-9xl md:text-[180px] text-primary/20 font-bold">
              404
            </span>
          </div>

          {/* Message */}
          <h1 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
            Oops! You've Stepped Out of the Ring
          </h1>
          <p className="font-body text-lg text-muted-foreground mb-12">
            The page you're looking for doesn't exist. But don't worry — let's get you back on track.
          </p>

          {/* Helpful Links */}
          <div className="grid sm:grid-cols-3 gap-4 mb-12">
            <a
              href="/"
              className="flex flex-col items-center p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all group"
            >
              <Home size={32} className="text-primary mb-3 group-hover:scale-110 transition-transform" />
              <span className="font-heading text-sm tracking-wider text-foreground">HOME</span>
              <span className="font-body text-xs text-muted-foreground mt-1">Back to main page</span>
            </a>

            <a
              href="/blog"
              className="flex flex-col items-center p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all group"
            >
              <BookOpen size={32} className="text-primary mb-3 group-hover:scale-110 transition-transform" />
              <span className="font-heading text-sm tracking-wider text-foreground">BLOG</span>
              <span className="font-body text-xs text-muted-foreground mt-1">Training tips & articles</span>
            </a>

            <a
              href="/#schedule"
              className="flex flex-col items-center p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all group"
            >
              <Calendar size={32} className="text-primary mb-3 group-hover:scale-110 transition-transform" />
              <span className="font-heading text-sm tracking-wider text-foreground">SCHEDULE</span>
              <span className="font-body text-xs text-muted-foreground mt-1">View class timings</span>
            </a>
          </div>

          {/* Primary CTA */}
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-8 rounded-2xl border border-primary/30">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Phone size={24} className="text-primary" />
              <h2 className="font-heading text-xl text-foreground">Ready to Start Training?</h2>
            </div>
            <p className="font-body text-muted-foreground mb-6">
              Book your FREE trial class and experience Bangalore's best combat sports training.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-gold text-primary-foreground font-heading tracking-wider rounded-lg glow-gold hover:scale-105 transition-transform duration-300"
            >
              BOOK FREE TRIAL
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
