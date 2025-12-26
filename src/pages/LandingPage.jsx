import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';

const LandingPage = () => {
  const navigate = useNavigate();
  const heroTitleRef = useRef(null);
  const heroSubtitleRef = useRef(null);
  const ctaButtonRef = useRef(null);
  const featureCardsRef = useRef([]);
  const blob1Ref = useRef(null);
  const blob2Ref = useRef(null);
  const blob3Ref = useRef(null);
  const flame1Ref = useRef(null);
  const flame2Ref = useRef(null);
  const flame3Ref = useRef(null);
  const flame4Ref = useRef(null);
  const flame5Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate hero title
      gsap.from(heroTitleRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power2.out'
      });

      // Animate subtitle with delay
      gsap.from(heroSubtitleRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.7,
        delay: 0.2,
        ease: 'power2.out'
      });

      // Animate CTA button
      gsap.from(ctaButtonRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 0.6,
        delay: 0.4,
        ease: 'power2.out'
      });

      // Stagger animate feature cards
      gsap.from(featureCardsRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.7,
        stagger: 0.15,
        delay: 0.6,
        ease: 'power2.out'
      });

      // Animate background blobs with organic movement
      gsap.to(blob1Ref.current, {
        x: 80,
        y: -60,
        scale: 1.1,
        duration: 15,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });

      gsap.to(blob2Ref.current, {
        x: -100,
        y: 80,
        scale: 0.9,
        duration: 18,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 0.5
      });

      gsap.to(blob3Ref.current, {
        x: 60,
        y: 100,
        scale: 1.05,
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 1
      });

      // Animate fire-like flames rising upward
      gsap.to(flame1Ref.current, {
        y: -120,
        x: 15,
        scale: 1.1,
        opacity: 0.3,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });

      gsap.to(flame2Ref.current, {
        y: -150,
        x: -20,
        scale: 0.95,
        opacity: 0.25,
        duration: 12,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 0.5
      });

      gsap.to(flame3Ref.current, {
        y: -130,
        x: 25,
        scale: 1.05,
        opacity: 0.35,
        duration: 11,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 1
      });

      gsap.to(flame4Ref.current, {
        y: -140,
        x: -15,
        scale: 1.08,
        opacity: 0.28,
        duration: 13,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 1.5
      });

      gsap.to(flame5Ref.current, {
        y: -110,
        x: 18,
        scale: 0.98,
        opacity: 0.32,
        duration: 14,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 2
      });
    });

    return () => ctx.revert();
  }, []);

  const features = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      title: 'Discover Recipes',
      description: 'Search thousands of recipes from around the world and find your next favorite dish'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Plan Your Week',
      description: 'Organize meals for the entire week with our intuitive meal planning calendar'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      title: 'Smart Shopping List',
      description: 'Auto-generate shopping lists from your meal plan with combined ingredients'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F7FBF8] relative overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          ref={blob1Ref}
          className="absolute top-20 left-10 w-[400px] h-[400px] rounded-full"
          style={{
            background: 'rgba(47, 111, 78, 0.25)',
            filter: 'blur(120px)'
          }}
        />
        <div
          ref={blob2Ref}
          className="absolute top-1/3 right-20 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'rgba(111, 175, 138, 0.25)',
            filter: 'blur(120px)'
          }}
        />
        <div
          ref={blob3Ref}
          className="absolute bottom-32 left-1/4 w-[350px] h-[350px] rounded-full"
          style={{
            background: 'rgba(47, 111, 78, 0.2)',
            filter: 'blur(120px)'
          }}
        />

        {/* Fire-like Flame Elements */}
        <div
          ref={flame1Ref}
          className="absolute bottom-0 left-[15%] w-24 h-[300px] opacity-40"
          style={{
            background: 'linear-gradient(to top, rgba(47, 111, 78, 0.6), rgba(47, 111, 78, 0.3), transparent)',
            filter: 'blur(100px)',
            borderRadius: '9999px'
          }}
        />
        <div
          ref={flame2Ref}
          className="absolute bottom-0 left-[35%] w-32 h-[280px] opacity-45"
          style={{
            background: 'linear-gradient(to top, rgba(111, 175, 138, 0.5), rgba(111, 175, 138, 0.25), transparent)',
            filter: 'blur(90px)',
            borderRadius: '9999px'
          }}
        />
        <div
          ref={flame3Ref}
          className="absolute bottom-0 right-[30%] w-28 h-[320px] opacity-50"
          style={{
            background: 'linear-gradient(to top, rgba(47, 111, 78, 0.55), rgba(47, 111, 78, 0.3), transparent)',
            filter: 'blur(95px)',
            borderRadius: '9999px'
          }}
        />
        <div
          ref={flame4Ref}
          className="absolute bottom-0 right-[15%] w-20 h-[260px] opacity-38"
          style={{
            background: 'linear-gradient(to top, rgba(111, 175, 138, 0.48), rgba(111, 175, 138, 0.22), transparent)',
            filter: 'blur(85px)',
            borderRadius: '9999px'
          }}
        />
        <div
          ref={flame5Ref}
          className="absolute bottom-0 left-[55%] w-26 h-[290px] opacity-42"
          style={{
            background: 'linear-gradient(to top, rgba(47, 111, 78, 0.52), rgba(47, 111, 78, 0.28), transparent)',
            filter: 'blur(88px)',
            borderRadius: '9999px'
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 
            ref={heroTitleRef}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#2F6F4E] mb-6 tracking-tight"
          >
            Your Kitchen,
            <br />
            Perfectly Organized
          </h1>
          
          <p 
            ref={heroSubtitleRef}
            className="text-lg md:text-xl text-[#2F6F4E] opacity-70 mb-10 max-w-2xl mx-auto"
          >
            Plan meals, discover recipes, and create smart shopping lists all in one place
          </p>
          
          <button
            ref={ctaButtonRef}
            onClick={() => navigate('/search')}
            className="bg-[#2F6F4E] hover:bg-[#25593D] text-white px-8 py-4 rounded-full text-lg font-medium transition-colors shadow-lg hover:shadow-xl"
          >
            Start Exploring Recipes
          </button>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => (featureCardsRef.current[index] = el)}
              className="bg-[#E8F5EC] rounded-2xl p-8 text-center"
            >
              <div className="text-[#2F6F4E] mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-[#2F6F4E] mb-3">
                {feature.title}
              </h3>
              <p className="text-[#2F6F4E] opacity-70">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Secondary CTA */}
        <div className="text-center mt-20">
          <p className="text-[#2F6F4E] opacity-60 mb-4">
            Join thousands of home cooks simplifying their meal planning
          </p>
          <button
            onClick={() => navigate('/search')}
            className="border-2 border-[#2F6F4E] text-[#2F6F4E] px-6 py-3 rounded-full font-medium hover:bg-[#2F6F4E] hover:text-white transition-all duration-300"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
