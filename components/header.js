/**
 * Shared Header/Navigation Component
 * 
 * Renders the site-wide navigation bar.
 * Automatically highlights the current page based on the filename.
 * 
 * Usage: <div id="site-header"></div>
 *        <script src="components/header.js"></script>
 */
(function() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  const navLinks = [
    { href: 'index.html', label: 'Welcome' },
    { href: 'approach.html', label: 'The Approach' },
    { href: 'session.html', label: 'The Session' },
    { href: 'about.html', label: 'About Me' },
  ];

  const navLinksHTML = navLinks.map(link => {
    // Current page check simplified to match exact filename
    const isActive = currentPage === link.href;
    const classes = isActive
      ? 'underline underline-offset-4 font-semibold'
      : 'hover:text-brand transition-colors hover:underline hover:underline-offset-4';
    return `<a href="${link.href}" class="${classes}">${link.label}</a>`;
  }).join('\n          ');

  const headerHTML = `
    <nav class="max-w-[1400px] w-full mx-auto px-4 md:px-8 py-5 flex items-center justify-between">
      <!-- Logo -->
      <div class="flex-shrink-0">
        <a href="index.html" class="flex items-center group">
          <img src="images/Logo_Angel.webp" alt="Gentle Return Logo" class="h-20 md:h-28 lg:h-32 w-auto object-contain object-left">
        </a>
      </div>

      <!-- Nav Links -->
      <div class="hidden md:flex flex-grow justify-center items-center gap-4 lg:gap-8 font-body text-sm tracking-wide text-brand-dark px-4">
          ${navLinksHTML}
      </div>

      <!-- CTA Button -->
      <div class="flex-shrink-0 ml-auto">
        <a href="contact.html" class="bg-white text-brand-dark px-5 py-3 text-sm tracking-wide hover:bg-brand-dark hover:text-white transition-all duration-300 rounded-tr-2xl rounded-bl-2xl shadow-sm">
          Get in touch
        </a>
      </div>
    </nav>
  `;

  const target = document.getElementById('site-header');
  if (target) {
    target.innerHTML = headerHTML;
  }
})();
