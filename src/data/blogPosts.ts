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
      <h2>The "Sitting Disease": Combatting 9-5 Desk Stiffness</h2>
      <p>If you live in Bangalore, chances are you spend a significant portion of your day sitting—whether it's at a desk in start-up hub Koramangala or stuck in traffic on the Outer Ring Road. This sedentary lifestyle leads to what health experts call "sitting disease": tight hips, weak glutes, and chronic back pain.</p>
      <p>Traditional gyms offer a solution, but let's be honest: running on a treadmill for 45 minutes can be mind-numbingly boring. This is where <strong>Mixed Martial Arts (MMA)</strong> changes the game. Unlike a static gym workout, MMA forces your body to move in every plane of motion. You're twisting, sprawling, pushing, and pulling. It's the ultimate antidote to the stiffness that comes from an 8-hour coding marathon.</p>

      <h2>Stress Relief: Why Hitting Pads Beats Hitting 'Send'</h2>
      <p>We all know the feeling. A production bug at 5 PM, a client escalation, or just the general hum of deadline pressure. Cortisol levels spike, and you carry that stress home.</p>
      <p>MMA provides a visceral outlet for that stress. There is something profoundly therapeutic about hitting a heavy bag or focusing entirely on a complex BJJ leverage point. For that hour on the mats, you cannot think about Jira tickets or quarterly targets. You are 100% present. It’s "active meditation" for the high-functioning brain.</p>

      <h2>Can You Train MMA Without Getting Injured?</h2>
      <p>A common misconception is that MMA training means getting punched in the face daily. This couldn't be further from the truth. At <strong>Wolf Academy India</strong>, we distinguish between "fighting" and "training."</p>
      <p>Our curriculum is designed for safety first. 90% of our students are working professionals who need to go to work the next day without a black eye. You learn the techniques—striking, grappling, defense—in a controlled environment. Sparring is completely optional and only introduced when you are ready.</p>

      <h2>Best Evening Batches for Office Goers in North Bangalore</h2>
      <p>We understand the Bangalore work schedule. That's why we’ve optimized our evening batches specifically for working professionals.</p>
      <ul>
        <li><strong>7:00 PM - 8:30 PM:</strong> Perfect for catching a class after logging off.</li>
        <li><strong>8:30 PM - 10:00 PM:</strong> For those who get stuck in late traffic or meetings.</li>
      </ul>
      <p>Conveniently located near <strong>Reva University</strong> and <strong>Yelahanka New Town</strong>, we are the accessible choice for North Bangalore's tech community.</p>

      <div class="bg-primary/10 p-6 rounded-xl my-8 border-l-4 border-primary">
        <h3 class="font-heading text-xl mb-2 text-primary">Ready to Punch Out the Stress?</h3>
        <p class="mb-4">Don't just read about it. Experience the rush yourself. Join us for a trial class and see why MMA is the preferred workout for Bangalore's professionals.</p>
        <a href="/#contact" class="inline-block bg-primary text-white font-bold py-2 px-6 rounded hover:bg-primary/90 transition">Book Your Free Trial</a>
      </div>
    `
  }
];
