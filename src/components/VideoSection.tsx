
import { Play, Volume2 } from "lucide-react";
import { useState } from "react";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  return (
    <section id="video-section" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How Smart Waste Management Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Watch our welcome video to discover how our intelligent waste management system 
            revolutionizes collection, reduces environmental impact, and creates cleaner communities.
          </p>
        </div>

        {/* Enhanced Video Container */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative aspect-video bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl overflow-hidden shadow-2xl border-4 border-green-200">
            {!isPlaying ? (
              // Video Thumbnail/Placeholder
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-green-200 to-emerald-300">
                <div className="text-center">
                  <div 
                    className="w-24 h-24 bg-green-600 rounded-full flex items-center justify-center mb-6 mx-auto hover:scale-110 transition-transform duration-300 cursor-pointer shadow-xl hover:shadow-2xl"
                    onClick={handlePlayVideo}
                  >
                    <Play size={40} className="text-white ml-2" />
                  </div>
                  <p className="text-green-800 font-semibold text-lg mb-2">Welcome to Smart Waste Management</p>
                  <p className="text-green-700 text-sm max-w-xs mx-auto">
                    Click to watch our promotional video and learn how we're making waste management smarter
                  </p>
                </div>
              </div>
            ) : (
              // Actual Video
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0&modestbranding=1"
                title="Smart Waste Management System - Welcome Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
            
            {/* Video Controls Hint */}
            {!isPlaying && (
              <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-white bg-opacity-90 px-3 py-2 rounded-full text-sm text-gray-600">
                <Volume2 size={16} />
                <span>With sound</span>
              </div>
            )}
          </div>

          {/* Enhanced Video Description */}
          <div className="mt-8 bg-white rounded-xl p-6 shadow-lg border border-green-100">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
              Smart Technology for a Cleaner Tomorrow
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">85%</div>
                <p className="text-gray-600 text-sm">More Efficient Collection</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
                <p className="text-gray-600 text-sm">Real-time Monitoring</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">50%</div>
                <p className="text-gray-600 text-sm">Reduced Carbon Footprint</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
