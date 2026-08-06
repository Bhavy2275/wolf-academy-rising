export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'mma-for-working-professionals-bangalore',
    title: 'Why Techies in Bangalore Are Swapping the Gym for MMA Training',
    excerpt: 'Tired of the treadmill? Discover why Bangalore\'s software engineers are turning to Mixed Martial Arts for stress relief, fitness, and mental clarity.',
    date: 'October 15, 2023',
    readTime: '5 min read',
    category: 'Lifestyle',
    image: '/blog-techies-mma.jpg',
    content: `
      <div class="space-y-8">
        <section class="bg-card p-6 rounded-xl border border-border">
          <h2 class="text-2xl font-bold text-primary mb-4">🪑 The "Sitting Disease": Combatting 9-5 Desk Stiffness</h2>
          <p class="mb-4">If you live in Bangalore, chances are you spend a significant portion of your day sitting—whether it's at a desk in start-up hub Koramangala or stuck in traffic on the Outer Ring Road. This sedentary lifestyle leads to what health experts call "sitting disease": <strong>tight hips, weak glutes, and chronic back pain.</strong></p>
          <p>Traditional gyms offer a solution, but let's be honest: running on a treadmill for 45 minutes can be mind-numbingly boring. This is where <strong class="text-primary">Mixed Martial Arts (MMA)</strong> changes the game. Unlike a static gym workout, MMA forces your body to move in every plane of motion. You're twisting, sprawling, pushing, and pulling. It's the ultimate antidote to the stiffness that comes from an 8-hour coding marathon.</p>
        </section>

        <section class="bg-card p-6 rounded-xl border border-border">
          <h2 class="text-2xl font-bold text-primary mb-4">😤 Stress Relief: Why Hitting Pads Beats Hitting 'Send'</h2>
          <p class="mb-4">We all know the feeling. A production bug at 5 PM, a client escalation, or just the general hum of deadline pressure. Cortisol levels spike, and you carry that stress home.</p>
          <p>MMA provides a visceral outlet for that stress. There is something profoundly therapeutic about hitting a heavy bag or focusing entirely on a complex BJJ leverage point. For that hour on the mats, you cannot think about Jira tickets or quarterly targets. <strong>You are 100% present.</strong> It's "active meditation" for the high-functioning brain.</p>
        </section>

        <section class="bg-card p-6 rounded-xl border border-border">
          <h2 class="text-2xl font-bold text-primary mb-4">🛡️ Can You Train MMA Without Getting Injured?</h2>
          <p class="mb-4">A common misconception is that MMA training means getting punched in the face daily. This couldn't be further from the truth. At <strong class="text-primary">Wolf Academy India</strong>, we distinguish between "fighting" and "training."</p>
          <p>Our curriculum is designed for safety first. <strong>90% of our students are working professionals</strong> who need to go to work the next day without a black eye. You learn the techniques—striking, grappling, defense—in a controlled environment. Sparring is completely optional and only introduced when you are ready.</p>
        </section>

        <section class="bg-card p-6 rounded-xl border border-border">
          <h2 class="text-2xl font-bold text-primary mb-4">⏰ Best Evening Batches for Office Goers</h2>
          <p class="mb-4">We understand the Bangalore work schedule. That's why we've optimized our evening batches specifically for working professionals.</p>
          <ul class="list-none space-y-3 mb-4">
            <li class="flex items-center gap-3 bg-surface p-3 rounded-lg">
              <span class="text-primary font-bold">7:00 PM - 8:30 PM</span>
              <span>Perfect for catching a class after logging off.</span>
            </li>
            <li class="flex items-center gap-3 bg-surface p-3 rounded-lg">
              <span class="text-primary font-bold">8:30 PM - 10:00 PM</span>
              <span>For those who get stuck in late traffic or meetings.</span>
            </li>
          </ul>
          <p>Conveniently located near <strong class="text-primary">Reva University</strong> and <strong class="text-primary">Yelahanka New Town</strong>, we are the accessible choice for North Bangalore's tech community.</p>
        </section>

        <div class="bg-gradient-to-r from-primary/20 to-primary/5 p-8 rounded-2xl border-2 border-primary text-center">
          <h3 class="text-2xl font-bold text-primary mb-3">🥊 Ready to Punch Out the Stress?</h3>
          <p class="mb-6 text-lg">Don't just read about it. Experience the rush yourself. Join us for a trial class and see why MMA is the preferred workout for Bangalore's professionals.</p>
          <a href="https://wolfacademyindia.com/#contact" class="inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-primary/90 transition-all hover:scale-105">Book Your Free Trial →</a>
        </div>
      </div>
    `
  },
  {
    id: '2',
    slug: 'mma-boxing-north-bangalore-hennur-bagalur',
    title: 'MMA & Boxing in North Bangalore: Why Hennur is the New Combat Sports Hub',
    excerpt: 'Discover why North Bangalore, especially Hennur and Bagalur Road, is becoming the heart of combat sports training with world-class facilities like Wolf Academy.',
    date: 'January 15, 2026',
    readTime: '6 min read',
    category: 'Community',
    image: '/blog-techies-mma.jpg',
    content: `
      <div class="space-y-8">
        <section class="bg-card p-6 rounded-xl border border-border">
          <h2 class="text-2xl font-bold text-primary mb-4">📍 The Rise of North Bangalore's Fitness Scene</h2>
          <p class="mb-4">North Bangalore is no longer just a residential suburb. With the expansion around <strong>Hennur, Bagalur Road, and Yelahanka</strong>, it has transformed into a vibrant hub for young professionals and athletes. But as the population grows, so does the need for high-quality, specialized fitness training that goes beyond the standard big-box gym.</p>
          <p>Combat sports like <strong class="text-primary">Boxing and MMA</strong> are leading this revolution. Residents are looking for more than just weightlifting; they want skills, discipline, and a community.</p>
        </section>

        <section class="bg-card p-6 rounded-xl border border-border">
          <h2 class="text-2xl font-bold text-primary mb-4">🥊 Why Boxing in Hennur and Bagalur is Gaining Momentum</h2>
          <p class="mb-4">Boxing has always been the "sweet science," but its popularity in areas like <strong>Dasanayakanahalli and Chikkagubbi</strong> has skyrocketed recently. Why? Because it offers a level of cardiovascular conditioning that is hard to match.</p>
          <ul class="list-disc list-inside space-y-2 mb-4 text-muted-foreground">
            <li><strong>High-Intensity Workouts:</strong> Perfect for those living near the airport road with busy schedules.</li>
            <li><strong>Mental Sharpness:</strong> Boxing requires focus, helping residents decompress after a day in Bangalore's tech parks.</li>
            <li><strong>Self-Defense:</strong> Practical skills that build real-world confidence.</li>
          </ul>
        </section>

        <section class="bg-card p-6 rounded-xl border border-border">
          <h2 class="text-2xl font-bold text-primary mb-4">🏢 Wolf Academy: At the Heart of the Community</h2>
          <p class="mb-4">Located strategically at <strong>The School of Raya on Bagalur Road</strong>, Wolf Academy India has become the focal point for martial arts in North Bangalore. We aren't just a gym; we are a training ground for champions and hobbyists alike.</p>
          <p>Our proximity to <strong>Reva University</strong> and the bustling <strong>Hennur-Bagalur stretch</strong> makes it convenient for students and working professionals to drop in for an evening session without the dread of Crosstown traffic.</p>
        </section>

        <div class="bg-gradient-to-r from-primary/20 to-primary/5 p-8 rounded-2xl border-2 border-primary text-center">
          <h3 class="text-2xl font-bold text-primary mb-3">🐺 Join the Wolf Pack in North Bangalore</h3>
          <p class="mb-6 text-lg">Whether you are from Yelahanka, Hennur, or right here in Bagalur, your journey to greatness starts on our mats. Stop searching for "boxing near me" and come experience the best.</p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wolfacademyindia.com/#contact" class="inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-primary/90 transition-all hover:scale-105">Book Your Free Trial →</a>
            <a href="tel:9319812158" class="inline-block bg-surface-elevated text-foreground font-bold py-3 px-8 rounded-lg text-lg border border-border hover:border-primary transition-all">Call Us Now</a>
          </div>
        </div>
      </div>
    `
  }
];
