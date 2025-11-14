document.addEventListener('DOMContentLoaded', function () {
	const hamburger = document.getElementById('hamburger');
	const navbar = document.querySelector('.navbar');
	const overlay = document.getElementById('mobile-overlay');

	if (!hamburger || !navbar) return;

	// Helpers
	function isMobile() { return window.innerWidth <= 900; }

	function openMenu() {
		navbar.classList.add('show');
		hamburger.setAttribute('aria-expanded', 'true');
		if (overlay) overlay.classList.add('show');
		const first = navbar.querySelector('a');
		if (first) first.focus();
	}

	function closeMenu() {
		navbar.classList.remove('show');
		hamburger.setAttribute('aria-expanded', 'false');
		if (overlay) overlay.classList.remove('show');
		hamburger.focus();
	}

	function toggleMenu() {
		if (!isMobile()) return;
		if (navbar.classList.contains('show')) closeMenu(); else openMenu();
	}

	// Toggle on click
	hamburger.addEventListener('click', function () { toggleMenu(); });

	// Keyboard activation
	hamburger.addEventListener('keydown', function (e) {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			toggleMenu();
		}
	});

	// Close mobile menu when clicking a nav link
	navbar.addEventListener('click', function (e) {
		if (e.target.tagName === 'A' && isMobile()) {
			closeMenu();
		}
	});

	// Close when clicking outside (mobile)
	document.addEventListener('click', function (e) {
		if (!isMobile()) return;
		if (!navbar.classList.contains('show')) return;
		const target = e.target;
		if (!navbar.contains(target) && !hamburger.contains(target) && !(overlay && overlay.contains(target))) {
			closeMenu();
		}
	});

	// Keyboard handling: Escape to close, Tab focus trap inside menu when open
	document.addEventListener('keydown', function (e) {
		if (!isMobile()) return;
		if (!navbar.classList.contains('show')) return;

		if (e.key === 'Escape') {
			closeMenu();
			return;
		}

		if (e.key === 'Tab') {
			const focusable = Array.from(navbar.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])'))
				.filter(el => !el.hasAttribute('disabled'));
			if (focusable.length === 0) return;
			const first = focusable[0];
			const last = focusable[focusable.length - 1];
			if (e.shiftKey) {
				if (document.activeElement === first) {
					e.preventDefault();
					last.focus();
				}
			} else {
				if (document.activeElement === last) {
					e.preventDefault();
					first.focus();
				}
			}
		}
	});

	// overlay click closes menu
	if (overlay) {
		overlay.addEventListener('click', function () { closeMenu(); });
	}

	// ensure overlay/menu hides if window resized to desktop
	window.addEventListener('resize', function () {
		if (window.innerWidth > 900) {
			closeMenu();
		}
	});

	// View My Work button scrolls to projects
	const viewWork = document.getElementById('view-work');
	const projects = document.getElementById('project');
	if (viewWork && projects) {
		viewWork.addEventListener('click', function () {
			projects.scrollIntoView({ behavior: 'smooth', block: 'start' });
		});
	}
});

// IntersectionObserver to reveal education cards when they enter viewport with a staggered delay
document.addEventListener('DOMContentLoaded', function () {
    const eduCards = Array.from(document.querySelectorAll('.edu-card'));
    if (!eduCards.length) return;

    // If no IntersectionObserver, just reveal all with small stagger
    if (!('IntersectionObserver' in window)) {
        eduCards.forEach((c, i) => {
            c.style.transitionDelay = `${i * 120}ms`;
            c.classList.add('inview');
        });
        return;
    }

    const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const idx = eduCards.indexOf(entry.target);
                const delay = (idx >= 0) ? idx * 120 : 0;
                entry.target.style.transitionDelay = `${delay}ms`;
                entry.target.classList.add('inview');
                io.unobserve(entry.target);
            }
        });
    }, { root: null, threshold: 0.12 });

    eduCards.forEach(c => io.observe(c));
});

// IntersectionObserver to reveal experience cards with staggered delay
document.addEventListener('DOMContentLoaded', function () {
    const expCards = Array.from(document.querySelectorAll('.exp-card'));
    if (!expCards.length) return;

    // If no IntersectionObserver, just reveal all with small stagger
    if (!('IntersectionObserver' in window)) {
        expCards.forEach((c, i) => {
            c.style.transitionDelay = `${i * 120}ms`;
            c.classList.add('inview');
        });
        return;
    }

    const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const idx = expCards.indexOf(entry.target);
                const delay = (idx >= 0) ? idx * 120 : 0;
                entry.target.style.transitionDelay = `${delay}ms`;
                entry.target.classList.add('inview');
                io.unobserve(entry.target);
            }
        });
    }, { root: null, threshold: 0.12 });

    expCards.forEach(c => io.observe(c));
});

// IntersectionObserver to reveal skill cards with staggered delay
document.addEventListener('DOMContentLoaded', function () {
    const skillCards = Array.from(document.querySelectorAll('.skill-card'));
    if (!skillCards.length) return;

    // If no IntersectionObserver, just reveal all with small stagger
    if (!('IntersectionObserver' in window)) {
        skillCards.forEach((c, i) => {
            c.style.transitionDelay = `${i * 120}ms`;
            c.classList.add('inview');
        });
        return;
    }

    const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const idx = skillCards.indexOf(entry.target);
                const delay = (idx >= 0) ? idx * 120 : 0;
                entry.target.style.transitionDelay = `${delay}ms`;
                entry.target.classList.add('inview');
                io.unobserve(entry.target);
            }
        });
    }, { root: null, threshold: 0.12 });

    skillCards.forEach(c => io.observe(c));
});

// IntersectionObserver to reveal competency cards with staggered delay
document.addEventListener('DOMContentLoaded', function () {
    const compCards = Array.from(document.querySelectorAll('.competency-card'));
    if (!compCards.length) return;

    // If no IntersectionObserver, just reveal all with small stagger
    if (!('IntersectionObserver' in window)) {
        compCards.forEach((c, i) => {
            c.style.transitionDelay = `${i * 120}ms`;
            c.classList.add('inview');
        });
        return;
    }

    const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const idx = compCards.indexOf(entry.target);
                const delay = (idx >= 0) ? idx * 120 : 0;
                entry.target.style.transitionDelay = `${delay}ms`;
                entry.target.classList.add('inview');
                io.unobserve(entry.target);
            }
        });
    }, { root: null, threshold: 0.12 });

    compCards.forEach(c => io.observe(c));
});

// IntersectionObserver to reveal featured & other project cards with stagger
document.addEventListener('DOMContentLoaded', function () {
	const projCards = Array.from(document.querySelectorAll('.project-card'));
	const otherCards = Array.from(document.querySelectorAll('.other-card'));
	const all = projCards.concat(otherCards);
	if (!all.length) return;

	if (!('IntersectionObserver' in window)) {
		all.forEach((c, i) => {
			c.style.transitionDelay = `${i * 100}ms`;
			c.classList.add('inview');
		});
		return;
	}

	const io = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				const idx = all.indexOf(entry.target);
				const delay = (idx >= 0) ? idx * 100 : 0;
				entry.target.style.transitionDelay = `${delay}ms`;
				entry.target.classList.add('inview');
				io.unobserve(entry.target);
			}
		});
	}, { root: null, threshold: 0.12 });

	all.forEach(c => io.observe(c));

		// Simple click handler for project action buttons (open data-url)
		document.body.addEventListener('click', function (e) {
			const btn = e.target.closest('.btn-code, .btn-demo, .btn-cert');
			if (!btn) return;
			const url = btn.getAttribute('data-url');
			if (!url || url === '#') {
				// placeholder action — nothing provided
				e.preventDefault();
				// you could show a toast or open a modal here
				return;
			}
			// Open in new tab for external links
			window.open(url, '_blank', 'noopener');
		});
});

// Contact interactions and footer year
document.addEventListener('DOMContentLoaded', function () {
	// contact card clicks open mailto/tel
	document.body.addEventListener('click', function (e) {
		const card = e.target.closest('.contact-card');
		if (!card) return;
		const action = card.getAttribute('data-action');
		if (action === 'email') {
			const email = card.querySelector('.card-value')?.textContent?.trim();
			if (email) window.location.href = `mailto:${email}`;
			return;
		}
		if (action === 'phone') {
			const phone = card.querySelector('.card-value')?.textContent?.trim();
			if (phone) window.location.href = `tel:${phone}`;
			return;
		}
	});

	// set current year in footer
	const yearEl = document.getElementById('year');
	if (yearEl) yearEl.textContent = new Date().getFullYear();
});

// Back to top behavior
document.addEventListener('DOMContentLoaded', function () {
	const btt = document.getElementById('back-to-top');
	if (!btt) return;

	function checkScroll() {
		if (window.scrollY > 320) btt.classList.add('visible'); else btt.classList.remove('visible');
	}

	// show/hide on scroll
	window.addEventListener('scroll', checkScroll, { passive: true });
	// initial check
	checkScroll();

	// click to scroll to top
	btt.addEventListener('click', function () {
		window.scrollTo({ top: 0, behavior: 'smooth' });
		btt.blur();
	});

	// keyboard accessibility: Enter/Space triggers
	btt.addEventListener('keydown', function (e) {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}
	});
});

// Other Projects slider (non-looping pager) — shows 1 or 2 slides per view and pages by groups
document.addEventListener('DOMContentLoaded', function () {
	const slider = document.querySelector('.other-slider');
	if (!slider) return;

	const trackWrapper = slider.querySelector('.slider-track-wrapper');
	const track = slider.querySelector('.slider-track');
	const slides = Array.from(track.querySelectorAll('.slide'));
	const btnPrev = slider.querySelector('.slider-prev');
	const btnNext = slider.querySelector('.slider-next');
	const dotsContainer = slider.querySelector('.slider-dots');

	if (!slides.length) return;

	const GAP = 20; // must match CSS
	let slidesPerView = window.innerWidth >= 900 ? 2 : 1;
	let currentPage = 0; // 0-based page index

	function pagesCount() {
		return Math.max(1, Math.ceil(slides.length / slidesPerView));
	}

	function renderDots() {
		if (!dotsContainer) return;
		dotsContainer.innerHTML = '';
		const count = pagesCount();
		for (let i = 0; i < count; i++) {
			const btn = document.createElement('button');
			btn.type = 'button';
			btn.className = i === currentPage ? 'active' : '';
			btn.setAttribute('aria-label', `Go to page ${i + 1}`);
			btn.dataset.page = i;
			btn.addEventListener('click', function () { goToPage(i); });
			dotsContainer.appendChild(btn);
		}
	}

	function updateSizes() {
		slidesPerView = window.innerWidth >= 900 ? 2 : 1;
		const wrapperWidth = trackWrapper.clientWidth;
		const slideWidth = Math.floor((wrapperWidth - ((slidesPerView - 1) * GAP)) / slidesPerView);
		slides.forEach(s => { s.style.minWidth = `${slideWidth}px`; });
		// clamp current page
		const maxPage = pagesCount() - 1;
		if (currentPage > maxPage) currentPage = maxPage;
		moveToPage(currentPage, false);
		updateButtons();
		renderDots();
		updateDotsActive();
	}

	function moveToPage(page, animate = true) {
		const slideWidth = slides[0].getBoundingClientRect().width;
		const offset = page * slidesPerView * (slideWidth + GAP);
		if (!animate) track.style.transition = 'none'; else track.style.transition = '';
		track.style.transform = `translateX(-${offset}px)`;
		if (!animate) requestAnimationFrame(() => { track.style.transition = ''; });
		currentPage = page;
		updateButtons();
		updateDotsActive();
	}

	function updateButtons() {
		const maxPage = pagesCount() - 1;
		if (btnPrev) btnPrev.disabled = currentPage <= 0;
		if (btnNext) btnNext.disabled = currentPage >= maxPage;
	}

	function goToPage(page) {
		const max = pagesCount() - 1;
		const target = Math.max(0, Math.min(max, page));
		moveToPage(target, true);
	}

	function updateDotsActive() {
		if (!dotsContainer) return;
		Array.from(dotsContainer.children).forEach((b, i) => b.classList.toggle('active', i === currentPage));
	}

	// prev/next
	if (btnPrev) btnPrev.addEventListener('click', function () { goToPage(currentPage - 1); });
	if (btnNext) btnNext.addEventListener('click', function () { goToPage(currentPage + 1); });

	// keyboard nav
	slider.addEventListener('keydown', function (e) {
		if (e.key === 'ArrowLeft') btnPrev && btnPrev.click();
		if (e.key === 'ArrowRight') btnNext && btnNext.click();
	});

	// drag / swipe support: change page if threshold passed
	(function addDrag() {
		let startX = 0;
		let isDown = false;

		function onDown(e) {
			isDown = true;
			startX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
			track.style.transition = 'none';
		}

		function onMove(e) {
			if (!isDown) return;
			const x = e.clientX || (e.touches && e.touches[0].clientX) || 0;
			const dx = x - startX;
			const slideWidth = slides[0].getBoundingClientRect().width;
			const baseOffset = currentPage * slidesPerView * (slideWidth + GAP);
			track.style.transform = `translateX(${ -baseOffset + -dx }px)`;
		}

		function onUp(e) {
			if (!isDown) return;
			isDown = false;
			const endX = e.clientX || (e.changedTouches && e.changedTouches[0].clientX) || 0;
			const dx = endX - startX;
			const slideWidth = slides[0].getBoundingClientRect().width;
			const threshold = Math.max(40, slideWidth * 0.18);
			track.style.transition = '';
			if (dx > threshold) {
				goToPage(currentPage - 1);
			} else if (dx < -threshold) {
				goToPage(currentPage + 1);
			} else {
				moveToPage(currentPage, true);
			}
		}

		trackWrapper.addEventListener('pointerdown', onDown, { passive: true });
		window.addEventListener('pointermove', onMove, { passive: true });
		window.addEventListener('pointerup', onUp);
		trackWrapper.addEventListener('touchstart', onDown, { passive: true });
		window.addEventListener('touchmove', onMove, { passive: true });
		window.addEventListener('touchend', onUp);
	})();

	// resize handling
	let resizeTimer = null;
	window.addEventListener('resize', function () {
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(updateSizes, 120);
	});

	// init
	renderDots();
	updateSizes();
	updateButtons();
	updateDotsActive();
});


// Certifications slider (non-looping pager) — responsive: 1 / 2 / 3 slides per view
document.addEventListener('DOMContentLoaded', function () {
	const slider = document.querySelector('.cert-slider');
	if (!slider) return;

	const trackWrapper = slider.querySelector('.slider-track-wrapper');
	const track = slider.querySelector('.slider-track');
	const slides = Array.from(track.querySelectorAll('.slide'));
	const btnPrev = slider.querySelector('.slider-prev');
	const btnNext = slider.querySelector('.slider-next');
	const dotsContainer = slider.querySelector('.cert-dots');

	if (!slides.length) return;

	const GAP = 20;
	let slidesPerView = window.innerWidth >= 1100 ? 3 : (window.innerWidth >= 900 ? 2 : 1);
	let currentPage = 0;

	function pagesCount() { return Math.max(1, Math.ceil(slides.length / slidesPerView)); }

	function renderDots() {
		if (!dotsContainer) return;
		dotsContainer.innerHTML = '';
		const count = pagesCount();
		for (let i = 0; i < count; i++) {
			const btn = document.createElement('button');
			btn.type = 'button';
			btn.className = i === currentPage ? 'active' : '';
			btn.setAttribute('aria-label', `Go to page ${i + 1}`);
			btn.dataset.page = i;
			btn.addEventListener('click', function () { goToPage(i); });
			dotsContainer.appendChild(btn);
		}
	}

	function updateSizes() {
		slidesPerView = window.innerWidth >= 1100 ? 3 : (window.innerWidth >= 900 ? 2 : 1);
		const wrapperWidth = trackWrapper.clientWidth;
		const slideWidth = Math.floor((wrapperWidth - ((slidesPerView - 1) * GAP)) / slidesPerView);
		slides.forEach(s => { s.style.minWidth = `${slideWidth}px`; });
		const maxPage = pagesCount() - 1;
		if (currentPage > maxPage) currentPage = maxPage;
		moveToPage(currentPage, false);
		updateButtons();
		renderDots();
		updateDotsActive();
	}

	function moveToPage(page, animate = true) {
		const slideWidth = slides[0].getBoundingClientRect().width;
		const offset = page * slidesPerView * (slideWidth + GAP);
		if (!animate) track.style.transition = 'none'; else track.style.transition = '';
		track.style.transform = `translateX(-${offset}px)`;
		if (!animate) requestAnimationFrame(() => { track.style.transition = ''; });
		currentPage = page;
		updateButtons();
		updateDotsActive();
	}

	function updateButtons() {
		const maxPage = pagesCount() - 1;
		if (btnPrev) btnPrev.disabled = currentPage <= 0;
		if (btnNext) btnNext.disabled = currentPage >= maxPage;
	}

	function goToPage(page) {
		const max = pagesCount() - 1;
		const target = Math.max(0, Math.min(max, page));
		moveToPage(target, true);
	}

	function updateDotsActive() {
		if (!dotsContainer) return;
		Array.from(dotsContainer.children).forEach((b, i) => b.classList.toggle('active', i === currentPage));
	}

	// prev/next
	if (btnPrev) btnPrev.addEventListener('click', function () { goToPage(currentPage - 1); });
	if (btnNext) btnNext.addEventListener('click', function () { goToPage(currentPage + 1); });

	// keyboard nav
	slider.addEventListener('keydown', function (e) {
		if (e.key === 'ArrowLeft') btnPrev && btnPrev.click();
		if (e.key === 'ArrowRight') btnNext && btnNext.click();
	});

	// drag / swipe support
	(function addDrag() {
		let startX = 0;
		let isDown = false;

		function onDown(e) {
			isDown = true;
			startX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
			track.style.transition = 'none';
		}

		function onMove(e) {
			if (!isDown) return;
			const x = e.clientX || (e.touches && e.touches[0].clientX) || 0;
			const dx = x - startX;
			const slideWidth = slides[0].getBoundingClientRect().width;
			const baseOffset = currentPage * slidesPerView * (slideWidth + GAP);
			track.style.transform = `translateX(${ -baseOffset + -dx }px)`;
		}

		function onUp(e) {
			if (!isDown) return;
			isDown = false;
			const endX = e.clientX || (e.changedTouches && e.changedTouches[0].clientX) || 0;
			const dx = endX - startX;
			const slideWidth = slides[0].getBoundingClientRect().width;
			const threshold = Math.max(40, slideWidth * 0.18);
			track.style.transition = '';
			if (dx > threshold) {
				goToPage(currentPage - 1);
			} else if (dx < -threshold) {
				goToPage(currentPage + 1);
			} else {
				moveToPage(currentPage, true);
			}
		}

		trackWrapper.addEventListener('pointerdown', onDown, { passive: true });
		window.addEventListener('pointermove', onMove, { passive: true });
		window.addEventListener('pointerup', onUp);
		trackWrapper.addEventListener('touchstart', onDown, { passive: true });
		window.addEventListener('touchmove', onMove, { passive: true });
		window.addEventListener('touchend', onUp);
	})();

	// resize handling
	let resizeTimer = null;
	window.addEventListener('resize', function () {
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(updateSizes, 120);
	});

	// init
	renderDots();
	updateSizes();
	updateButtons();
	updateDotsActive();
});

// Certificate modal / lightbox
document.addEventListener('DOMContentLoaded', function () {
	const modal = document.getElementById('cert-modal');
	if (!modal) return;
	const overlay = modal.querySelector('.modal-overlay');
	const closeBtn = modal.querySelector('.modal-close');
	const prevBtn = modal.querySelector('.modal-prev');
	const nextBtn = modal.querySelector('.modal-next');
	const imgEl = document.getElementById('cert-modal-img');
	const iframeEl = document.getElementById('cert-modal-iframe');
	const captionEl = document.getElementById('cert-modal-caption');

	const certCards = Array.from(document.querySelectorAll('.cert-card'));
	// Build items array extracting image src and optional data-url from button
	const items = certCards.map(card => {
		const img = card.querySelector('.cert-media img');
		const btn = card.querySelector('.btn-cert');
		const title = card.querySelector('.cert-title')?.textContent?.trim() || '';
		return {
			imgSrc: img ? img.getAttribute('src') : null,
			dataUrl: btn ? (btn.getAttribute('data-url') || '') : '',
			title: title
		};
	});

	let currentIndex = 0;

	function openModal(index) {
		currentIndex = Math.max(0, Math.min(items.length - 1, index));
		const it = items[currentIndex];
		// Decide whether to use iframe (PDF) or image preview
		const url = (it.dataUrl && it.dataUrl !== '#') ? it.dataUrl : it.imgSrc;
		const isPdf = typeof url === 'string' && url.toLowerCase().endsWith('.pdf');

		// hide both first
		imgEl.style.display = 'none';
		iframeEl.style.display = 'none';

		if (isPdf) {
			iframeEl.src = url;
			iframeEl.style.display = 'block';
		} else if (url) {
			imgEl.src = url;
			imgEl.style.display = 'block';
		}

		captionEl.textContent = it.title || '';

		modal.setAttribute('aria-hidden', 'false');
		document.body.style.overflow = 'hidden';
		// focus close for accessibility
		closeBtn && closeBtn.focus();
		updateModalButtons();
	}

	function closeModal() {
		modal.setAttribute('aria-hidden', 'true');
		document.body.style.overflow = '';
		// clear iframe to stop PDF playback/download issues
		iframeEl.src = '';
	}

	function updateModalButtons() {
		if (prevBtn) prevBtn.disabled = currentIndex <= 0;
		if (nextBtn) nextBtn.disabled = currentIndex >= items.length - 1;
	}

	// click handlers on cert buttons
	document.body.addEventListener('click', function (e) {
		const btn = e.target.closest('.btn-cert');
		if (!btn) return;
		const card = btn.closest('.cert-card');
		if (!card) return;
		const idx = certCards.indexOf(card);
		if (idx >= 0) {
			e.preventDefault();
			openModal(idx);
		}
	});

	// close interactions
	overlay.addEventListener('click', closeModal);
	closeBtn.addEventListener('click', closeModal);

	// prev/next
	if (prevBtn) prevBtn.addEventListener('click', function () { if (currentIndex > 0) openModal(currentIndex - 1); });
	if (nextBtn) nextBtn.addEventListener('click', function () { if (currentIndex < items.length - 1) openModal(currentIndex + 1); });

	// keyboard handling
	document.addEventListener('keydown', function (e) {
		if (modal.getAttribute('aria-hidden') === 'true') return;
		if (e.key === 'Escape') closeModal();
		if (e.key === 'ArrowLeft') { if (currentIndex > 0) openModal(currentIndex - 1); }
		if (e.key === 'ArrowRight') { if (currentIndex < items.length - 1) openModal(currentIndex + 1); }
	});

	// simple swipe for modal content (mobile)
	(function addModalSwipe(){
		let startX = 0, isDown = false;
		const body = modal.querySelector('.modal-body');
		if (!body) return;
		body.addEventListener('pointerdown', function (e) { isDown = true; startX = e.clientX; });
		window.addEventListener('pointerup', function (e) {
			if (!isDown) return; isDown = false; const dx = e.clientX - startX; if (dx > 50) { if (currentIndex > 0) openModal(currentIndex - 1); } else if (dx < -50) { if (currentIndex < items.length - 1) openModal(currentIndex + 1); }
		});
	})();
});

// IntersectionObserver to reveal certifications with staggered delay and enable certificate button handling
document.addEventListener('DOMContentLoaded', function () {
	const certCards = Array.from(document.querySelectorAll('.cert-card'));
	if (!certCards.length) return;

	if (!('IntersectionObserver' in window)) {
		certCards.forEach((c, i) => {
			c.style.transitionDelay = `${i * 90}ms`;
			c.classList.add('inview');
		});
		return;
	}

	const io = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				const idx = certCards.indexOf(entry.target);
				const delay = (idx >= 0) ? idx * 90 : 0;
				entry.target.style.transitionDelay = `${delay}ms`;
				entry.target.classList.add('inview');
				io.unobserve(entry.target);
			}
		});
	}, { root: null, threshold: 0.12 });

	certCards.forEach(c => io.observe(c));
});