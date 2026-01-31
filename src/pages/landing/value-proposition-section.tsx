export function ValuePropositionSection() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-32 bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold tracking-tight text-white leading-[0.9] mb-8 sm:mb-12">
            Tame disk clutter with safe,{' '}
            <span className="text-gray-300">archive-first duplicate cleanup</span>
          </h2>
          
          {/* Supporting Text */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed text-gray-400 font-light max-w-4xl mx-auto mb-6 sm:mb-8">
            DuplicateBin gives you precision duplicate detection, system-safe exclusions, and a protected archive workflow so you can clean your storage without fear. Scan deeply, review clearly, and delete only when you're confident.
          </p>
          
          {/* Small Caption */}
          <p className="text-base sm:text-lg text-gray-500 font-medium">
            Built for Linux users, developers, and power users who care about control, safety, and transparency.
          </p>
        </div>
      </div>
      
      {/* Subtle glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] lg:w-[800px] h-[200px] sm:h-[300px] lg:h-[400px] bg-white/5 rounded-full blur-3xl opacity-30" />
    </section>
  )
}