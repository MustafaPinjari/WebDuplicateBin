/* eslint-disable @next/next/no-img-element */
import { cn } from "@/utils/cn"

const reviews = [
  {
    name: "Sarah Chen",
    username: "@sarahdev",
    body: "DuplicateBin saved me 200GB of storage space safely. The archive-first approach gave me confidence to clean my development folders.",
    img: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Marcus Rodriguez",
    username: "@marcuslinux",
    body: "Finally, a duplicate cleaner that doesn't scare me. The SHA-256 detection is incredibly accurate and the CLI integration is perfect.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Alex Thompson",
    username: "@alexsysadmin",
    body: "Used it on our file servers. The system-safe exclusions and backup workflow make it enterprise-ready. Highly recommended.",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Emma Wilson",
    username: "@emmaphoto",
    body: "As a photographer with thousands of RAW files, DuplicateBin's fuzzy matching found duplicates I never knew existed. Game changer!",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "David Kim",
    username: "@davidops",
    body: "The archive-before-delete approach is brilliant. I can review everything before permanent deletion. Perfect for production environments.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Lisa Zhang",
    username: "@lisabackup",
    body: "Cleaned up 15 years of accumulated files safely. The rollback feature saved me when I accidentally archived something important.",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "James Miller",
    username: "@jamescoder",
    body: "Love the Linux-first approach. No bloatware, just clean efficient duplicate detection. Exactly what I needed for my home server.",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Rachel Green",
    username: "@racheldesign",
    body: "The visual interface is beautiful and the CLI is powerful. Best of both worlds. Cleaned 50GB from my design asset library.",
    img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Michael Brown",
    username: "@mikebrown",
    body: "System administrators dream tool. The safety features and detailed logging give me complete confidence in enterprise deployments.",
    img: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Sofia Martinez",
    username: "@sofiatech",
    body: "Impressed by the fuzzy matching algorithm. It found near-duplicate images that other tools missed. Saved hours of manual work.",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Ryan Cooper",
    username: "@ryandev",
    body: "The multi-language support is fantastic. Our international team can use it in their preferred language. Great attention to detail.",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Anna Petrov",
    username: "@annapetrov",
    body: "As a data scientist, I appreciate the precision of the duplicate detection. The statistical reports help me understand my storage patterns.",
    img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Carlos Santos",
    username: "@carlossantos",
    body: "Perfect for managing our video production archives. The content-aware analysis works brilliantly with large media files.",
    img: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Jennifer Lee",
    username: "@jenniferlee",
    body: "The backup integration saved my project when I accidentally deleted important files. The restore feature is a lifesaver.",
    img: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Tom Anderson",
    username: "@tomanderson",
    body: "Excellent performance on large datasets. Scanned 2TB in under an hour. The progress tracking keeps me informed throughout.",
    img: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&h=150&fit=crop&crop=face",
  },
]

const firstRow = reviews.slice(0, 5)
const secondRow = reviews.slice(5, 10)
const thirdRow = reviews.slice(10, 15)

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string
  name: string
  username: string
  body: string
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-80 cursor-pointer overflow-hidden rounded-xl border p-6",
        "border-gray-800 bg-gray-900/40 hover:bg-gray-900/60 transition-colors duration-300"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <img className="rounded-full" width="40" height="40" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-semibold text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-gray-400">{username}</p>
        </div>
      </div>
      <blockquote className="mt-4 text-sm text-gray-300 leading-relaxed">
        "{body}"
      </blockquote>
    </figure>
  )
}

// Simple Marquee component with seamless loop
const SimpleMarquee = ({ 
  children, 
  reverse = false, 
  vertical = false,
  className = "",
  pauseOnHover = true 
}: { 
  children: React.ReactNode
  reverse?: boolean
  vertical?: boolean
  className?: string
  pauseOnHover?: boolean
}) => {
  const direction = vertical 
    ? (reverse ? 'animate-marquee-up' : 'animate-marquee-down')
    : (reverse ? 'animate-marquee-right' : 'animate-marquee-left')
  
  return (
    <div className={cn(
      "flex overflow-hidden",
      vertical ? "flex-col h-full" : "flex-row w-full",
      className
    )}>
      <div className={cn(
        "flex shrink-0",
        vertical ? "flex-col" : "flex-row",
        direction,
        pauseOnHover && "hover:[animation-play-state:paused]",
        "gap-4"
      )}>
        {/* Render children multiple times for seamless loop */}
        {children}
        {children}
        {children}
        {children}
      </div>
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <section className="relative py-32 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-black" />
      
      <div className="relative container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center rounded-full bg-gray-900/50 border border-gray-800 px-6 py-2 text-sm text-gray-400 mb-6">
            TRUSTED BY DEVELOPERS
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-6">
            Loved by developers,{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              trusted by teams
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl leading-relaxed text-gray-400 max-w-3xl mx-auto">
            Join thousands of developers and IT professionals who trust DuplicateBin to safely clean their storage.
          </p>
        </div>

        {/* 3D Marquee Effect - Bigger and Broader */}
        <div className="relative flex h-[600px] w-full flex-row items-center justify-center gap-8 overflow-hidden [perspective:400px]">
          <div
            className="flex flex-row items-center gap-8"
            style={{
              transform: "translateX(-80px) translateY(0px) translateZ(-80px) rotateX(12deg) rotateY(-6deg) rotateZ(8deg)",
            }}
          >
            <SimpleMarquee vertical className="[--duration:25s]">
              {firstRow.map((review) => (
                <ReviewCard key={review.username} {...review} />
              ))}
            </SimpleMarquee>
            
            <SimpleMarquee reverse vertical className="[--duration:20s]">
              {secondRow.map((review) => (
                <ReviewCard key={review.username} {...review} />
              ))}
            </SimpleMarquee>
            
            <SimpleMarquee vertical className="[--duration:30s]">
              {thirdRow.map((review) => (
                <ReviewCard key={review.username} {...review} />
              ))}
            </SimpleMarquee>
            
            <SimpleMarquee reverse vertical className="[--duration:22s]">
              {firstRow.map((review) => (
                <ReviewCard key={review.username} {...review} />
              ))}
            </SimpleMarquee>
            
            <SimpleMarquee vertical className="[--duration:28s]">
              {secondRow.map((review) => (
                <ReviewCard key={review.username} {...review} />
              ))}
            </SimpleMarquee>
          </div>
          
          {/* Gradient overlays for fade effect */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-black to-transparent"></div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black to-transparent"></div>
        </div>
      </div>
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-green-500/10 rounded-full blur-3xl opacity-40" />
    </section>
  )
}