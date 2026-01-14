export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  content: string; // HTML content
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'mma-for-working-professionals-bangalore',
    title: 'Why Techies in Bangalore Are Swapping the Gym for MMA Training',
    excerpt: 'Tired of the treadmill? Discover why Bangalore\'s software engineers are turning to Mixed Martial Arts for stress relief, fitness, and mental clarity.',
    date: 'October 15, 2023', // You might want to use a current date
    readTime: '5 min read',
    category: 'Lifestyle',
    image: '/wolf-logo.jpg', // Using logo as placeholder until blog images are added
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
          <a href="/#contact" class="inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-primary/90 transition-all hover:scale-105">Book Your Free Trial →</a>
        </div>
      </div>
    `
  }
];
