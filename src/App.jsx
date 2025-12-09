import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  // Porting setup logic
  useEffect(() => {
    // We will implement the main.js logic here or in a separate hook
    // For now, we rely on the loaded scripts and a small delay or manual init

    const initScripts = () => {
      // Typed.js
      const selectTyped = document.querySelector('.typed');
      if (selectTyped && window.Typed) {
        let typed_strings = selectTyped.getAttribute('data-typed-items');
        typed_strings = typed_strings.split(',');
        new window.Typed('.typed', {
          strings: typed_strings,
          loop: true,
          typeSpeed: 100,
          backSpeed: 50,
          backDelay: 2000
        });
      }

      // AOS
      if (window.AOS) {
        window.AOS.init({
          duration: 600,
          easing: 'ease-in-out',
          once: true,
          mirror: false
        });
      }

      // GLightbox
      if (window.GLightbox) {
        window.GLightbox({
          selector: '.glightbox'
        });
      }

      // PureCounter
      if (window.PureCounter) {
        new window.PureCounter();
      }

      // Swiper
      if (window.Swiper) {
        document.querySelectorAll(".init-swiper").forEach(function (swiperElement) {
          let configElement = swiperElement.querySelector(".swiper-config");
          if (!configElement) return;
          let config = JSON.parse(configElement.innerHTML.trim());
          new window.Swiper(swiperElement, config);
        });
      }

      // Isotope
      if (window.Isotope && window.imagesLoaded) {
        document.querySelectorAll('.isotope-layout').forEach(function (isotopeItem) {
          let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
          let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
          let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

          let initIsotope;
          window.imagesLoaded(isotopeItem.querySelector('.isotope-container'), function () {
            initIsotope = new window.Isotope(isotopeItem.querySelector('.isotope-container'), {
              itemSelector: '.isotope-item',
              layoutMode: layout,
              filter: filter,
              sortBy: sort
            });
          });

          isotopeItem.querySelectorAll('.isotope-filters li').forEach(function (filters) {
            filters.addEventListener('click', function () {
              isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
              this.classList.add('filter-active');
              initIsotope.arrange({
                filter: this.getAttribute('data-filter')
              });
              if (window.AOS) {
                window.AOS.init();
              }
            }, false);
          });
        });
      }

      // Skills Animation (Waypoints)
      if (window.Waypoint) {
        document.querySelectorAll('.skills-animation').forEach((item) => {
          new window.Waypoint({
            element: item,
            offset: '80%',
            handler: function (direction) {
              let progress = item.querySelectorAll('.progress .progress-bar');
              progress.forEach(el => {
                el.style.width = el.getAttribute('aria-valuenow') + '%';
              });
            }
          });
        });
      }

      // Preloader
      const preloader = document.querySelector('#preloader');
      if (preloader) {
        preloader.remove();
      }

      // Scroll Top
      let scrollTop = document.querySelector('.scroll-top');
      function toggleScrollTop() {
        if (scrollTop) {
          window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
        }
      }
      if (scrollTop) {
        scrollTop.addEventListener('click', (e) => {
          e.preventDefault();
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        });
      }
      window.addEventListener('scroll', toggleScrollTop);
      toggleScrollTop();

      // Header toggle
      const headerToggleBtn = document.querySelector('.header-toggle');
      function headerToggle() {
        document.querySelector('#header').classList.toggle('header-show');
        headerToggleBtn.classList.toggle('bi-list');
        headerToggleBtn.classList.toggle('bi-x');
      }
      if (headerToggleBtn) {
        headerToggleBtn.addEventListener('click', headerToggle);
      }

      // Mobile nav hide
      document.querySelectorAll('#navmenu a').forEach(navmenu => {
        navmenu.addEventListener('click', () => {
          if (document.querySelector('.header-show')) {
            headerToggle();
          }
        });
      });

      // Dropdowns
      document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
        navmenu.addEventListener('click', function (e) {
          e.preventDefault();
          this.parentNode.classList.toggle('active');
          this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
          e.stopImmediatePropagation();
        });
      });

      // Navmenu Scrollspy
      let navmenulinks = document.querySelectorAll('.navmenu a');
      function navmenuScrollspy() {
        navmenulinks.forEach(navmenulink => {
          if (!navmenulink.hash) return;
          let section = document.querySelector(navmenulink.hash);
          if (!section) return;
          let position = window.scrollY + 200;
          if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
            document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
            navmenulink.classList.add('active');
          } else {
            navmenulink.classList.remove('active');
          }
        })
      }
      window.addEventListener('scroll', navmenuScrollspy);
      navmenuScrollspy();

    };

    // Add small delay to ensure DOM is ready and scripts are loaded
    setTimeout(initScripts, 100);

    // Cleanup not fully implemented for all listeners, but essential for effect
    return () => {
      // cleanup listeners if needed
    };
  }, []);

  return (
    <div className="index-page">
      <Header />
      <main className="main">
        <Hero />
        <About />
        <Stats />
        <Skills />
        <Resume />
        <Portfolio />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />

      <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
      <div id="preloader"></div>
    </div>
  );
}

export default App;
