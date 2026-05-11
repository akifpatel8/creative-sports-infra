export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl mb-4">Creative Sports Infra</h3>
            <p className="text-gray-400">
              Building world-class sports facilities for champions of tomorrow.
            </p>
          </div>

          <div>
            <h4 className="text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Projects</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Badminton Courts</li>
              <li>Basketball Courts</li>
              <li>Cricket Pitches</li>
              <li>Volleyball Floors</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2026 Creative Sports Infra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
