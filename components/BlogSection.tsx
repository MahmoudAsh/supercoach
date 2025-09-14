import Link from 'next/link'
import Image from 'next/image'

export function BlogSection() {
  const blogPosts = [
    {
      title: "SuperCoach's Guide to the Personal Trainer Job Description: What Are Your True Responsibilities?",
      excerpt: "The personal trainer job description is more than just designing workouts, it's about guiding clients toward lasting change. A great trainer is a mentor, motivator, and problem-solver, helping clients build sustainable habits for better health and fitness. In this guide, we'll uncover what truly defines a personal trainer job description, beyond the basics.",
      image: "/images/article_1.png",
      link: "https://blog.supercoach.me/articles/%d9%85%d9%87%d8%a7%d9%85-%d8%a7%d9%84%d9%85%d8%af%d8%b1%d8%a8-%d8%a7%d9%84%d8%b4%d8%ae%d8%b5%d9%8a/"
    },
    {
      title: "The difference between a fitness trainer and a personal trainer: How to choose the right one",
      excerpt: "Are you considering entering the world of sports training and wondering about the difference between a fitness trainer and a personal trainer? You're not alone. Many beginners and those interested in the fitness field face this question at the beginning of their careers. With the growing awareness of healthy lifestyles, the demand for trainers is constantly increasing.",
      image: "/images/article_2.png",
      link: "https://blog.supercoach.me/articles/%d8%a7%d9%84%d9%81%d8%b1%d9%82-%d8%a8%d9%8a%d9%86-%d9%85%d8%af%d8%b1%d8%a8-%d8%a7%d9%84%d9%84%d9%8a%d8%a7%d9%82%d8%a9-%d9%88%d8%a7%d9%84%d9%85%d8%af%d8%b1%d8%a8-%d8%a7%d9%84%d8%b4%d8%ae%d8%b5%d9%8a/"
    },
    {
      title: "Step by Step: Learn How to Start Your Online Personal Trainer Services",
      excerpt: "Online personal training is radically transforming the way personal trainers connect with clients in the digital age. With the global personal training industry in the fitness sector valued at over $4 billion, more and more professional athletes are now exploring how to start an online personal training business to take advantage of the freedom and flexibility it offers.",
      image: "/images/article_3.png",
      link: "https://blog.supercoach.me/articles/%d9%83%d9%8a%d9%81%d9%8a%d8%a9-%d8%a8%d8%af%d8%a1-%d8%b9%d9%85%d9%84-%d9%85%d8%af%d8%b1%d8%a8-%d8%b4%d8%ae%d8%b5%d9%8a-%d8%b9%d8%a8%d8%b1-%d8%a7%d9%84%d8%a5%d9%86%d8%aa%d8%b1%d9%86%d8%aa/"
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="text-supercoach-dark">SuperCoach Blog</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            Tips, strategies, and the latest trends to help you maximize your coaching journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="overflow-hidden">
              <div 
                className="relative h-48"
                style={{
                  clipPath: 'polygon(28px 0, calc(100% - 28px) 0, 100% 28px, 100% calc(100% - 28px), calc(100% - 28px) 100%, 28px 100%, 0 calc(100% - 28px), 0 28px)'
                }}
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="py-8">
                <h3 className="text-xl font-bold mb-4 text-supercoach-dark leading-tight line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                <Link
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-300 text-black font-semibold hover:bg-gray-400 transition-colors duration-200 px-4 py-2 rounded"
                >
                  Read Article →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
