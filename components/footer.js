/**
 * Shared Footer Component
 * 
 * Renders the site-wide footer with copyright, brand name, and legal links.
 * 
 * Usage: <footer id="site-footer"></footer>
 *        <script src="./components/footer.js"></script>
 */
(function() {
  const footerHTML = `
    <div class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <!-- Copyright -->
      <p class="text-brand-dark text-xs tracking-wide order-2 md:order-1">
        © 2026 return home • spiritual trauma counseling
      </p>

      <!-- Brand Name -->
      <p class="font-heading text-brand-dark text-lg tracking-[0.2em] uppercase order-1 md:order-2">
        Gentle Return
      </p>

      <!-- Legal Links -->
      <div class="flex gap-6 text-xs tracking-wide order-3">
        <a href="./impressum.html" class="text-brand-dark underline underline-offset-2 hover:text-brand transition-colors hover:underline hover:underline-offset-4">Impressum</a>
        <a href="./impressum.html#datenschutz" class="text-brand-dark underline underline-offset-2 hover:text-brand transition-colors hover:underline hover:underline-offset-4">Datenschutz</a>
      </div>
    </div>
  `;

  const target = document.getElementById('site-footer');
  if (target) {
    target.innerHTML = footerHTML;
  }
})();
