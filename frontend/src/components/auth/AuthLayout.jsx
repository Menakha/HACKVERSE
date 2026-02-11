import { BRAND_ASSETS } from '@/components/branding/BrandAssets';

export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 gradient-bg-animated" />
      
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${BRAND_ASSETS.background})` }}
      />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-40" />
      
      {/* Vignette effect */}
      <div className="absolute inset-0 vignette" />
      
      {/* Floating glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: '1s' }}
      />
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-md animate-scale-in">
        {children}
      </div>
    </div>
  );
}
