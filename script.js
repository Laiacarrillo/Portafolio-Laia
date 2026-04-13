// ─────────────── NAVBAR SCROLL ───────────────
function handleNavbarScroll() {
  const navbar = document.getElementById('navbar')
  if (window.scrollY > 50) {
    navbar.classList.add('navbar-scrolled')
  } else {
    navbar.classList.remove('navbar-scrolled')
  }
}

// ─────────────── BACK TO TOP ───────────────
function handleBackToTopButton() {
  const btn = document.getElementById('back-to-top')
  if (!btn) return
  if (window.scrollY > 300) {
    btn.classList.add('visible')
  } else {
    btn.classList.remove('visible')
  }
}

// ─────────────── MOBILE MENU ───────────────
function setupMobileMenu() {
  const toggleBtn = document.getElementById('menu-toggle')
  const mobileMenu = document.getElementById('mobile-menu')
  if (!toggleBtn || !mobileMenu) return

  toggleBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden')
  })

  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden')
    })
  })
}

// ─────────────── SKILL TAB SWITCHING ───────────────
function setupTabs() {
  const techTab   = document.getElementById('tab-tech')
  const softTab   = document.getElementById('tab-soft')
  const techSkills = document.getElementById('tech-skills')
  const softSkills = document.getElementById('soft-skills')
  if (!techTab || !softTab) return

  techTab.addEventListener('click', () => {
    techTab.classList.add('active')
    softTab.classList.remove('active')
    techSkills.classList.remove('hidden')
    softSkills.classList.add('hidden')
  })

  softTab.addEventListener('click', () => {
    softTab.classList.add('active')
    techTab.classList.remove('active')
    softSkills.classList.remove('hidden')
    techSkills.classList.add('hidden')
    // Animate skill bars when shown
    animateSkillBars()
  })
}

// ─────────────── SKILL BARS ANIMATION ───────────────
function animateSkillBars() {
  document.querySelectorAll('.skill-progress').forEach(bar => {
    const target = bar.style.width
    bar.style.width = '0%'
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        bar.style.width = target
      })
    })
  })
}

// ─────────────── COUNTER ANIMATION ───────────────
function animateCounters() {
  document.querySelectorAll('.counter[data-target]').forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'), 10)
    const duration = 1800
    const step = target / (duration / 16)
    let current = 0
    const timer = setInterval(() => {
      current += step
      if (current >= target) {
        counter.textContent = target
        clearInterval(timer)
      } else {
        counter.textContent = Math.floor(current)
      }
    }, 16)
  })
}

// ─────────────── SCROLL-TRIGGERED ANIMATIONS ───────────────
function handleScrollAnimations() {
  // About section animate-items
  const section = document.querySelector('#sobremi')
  if (section) {
    const animateItems = section.querySelectorAll('.animate-item')
    const rect = section.getBoundingClientRect()
    const inView = rect.top <= window.innerHeight * 0.8 && rect.bottom >= 0

    animateItems.forEach(item => {
      if (inView) {
        item.classList.add('animate')
      } else {
        item.classList.remove('animate')
      }
    })
  }
}

// ─────────────── INTERSECTION OBSERVERS ───────────────
function setupIntersectionObservers() {
  // Counter observer
  const counterSection = document.querySelector('.stat-card')?.parentElement
  if (counterSection) {
    const counterObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateCounters()
            counterObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.4 }
    )
    counterObserver.observe(counterSection)
  }

  // Project cards stagger entrance
  const projectCards = document.querySelectorAll('.project-card')
  const projectObserver = new IntersectionObserver(
    entries => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = '1'
            entry.target.style.transform = 'translateY(0)'
          }, i * 80)
          projectObserver.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1 }
  )

  projectCards.forEach(card => {
    card.style.opacity = '0'
    card.style.transform = 'translateY(24px)'
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
    projectObserver.observe(card)
  })

  // Skill cards
  const skillCards = document.querySelectorAll('.flip-card, .skill-card')
  const skillObserver = new IntersectionObserver(
    entries => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = '1'
            entry.target.style.transform = 'translateY(0) scale(1)'
          }, i * 50)
          skillObserver.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1 }
  )

  skillCards.forEach(card => {
    card.style.opacity = '0'
    card.style.transform = 'translateY(16px) scale(0.97)'
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease'
    skillObserver.observe(card)
  })
}

// ─────────────── PARTICLES ───────────────
function createParticles() {
  const container = document.querySelector('.particles-container')
  if (!container) return

  const count = window.innerWidth < 768 ? 20 : 40

  for (let i = 0; i < count; i++) {
    const p = document.createElement('div')
    p.classList.add('particle')
    const size = Math.random() * 4 + 1.5
    p.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      opacity: ${Math.random() * 0.4 + 0.05};
      animation-duration: ${Math.random() * 12 + 8}s;
      animation-delay: ${Math.random() * 6}s;
    `
    container.appendChild(p)
  }
}

// ─────────────── ACTIVE NAV LINK ───────────────
function setupActiveNavLink() {
  const sections = document.querySelectorAll('section[id], main[id]')
  const navLinks = document.querySelectorAll('.nav-link')

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id
          navLinks.forEach(link => {
            link.style.color = link.getAttribute('href') === `#${id}`
              ? 'white'
              : ''
          })
        }
      })
    },
    { threshold: 0.4 }
  )

  sections.forEach(s => observer.observe(s))
}

// ─────────────── INIT ───────────────
document.addEventListener('DOMContentLoaded', () => {
  // Scroll event handlers
  window.addEventListener('scroll', handleNavbarScroll, { passive: true })
  window.addEventListener('scroll', handleBackToTopButton, { passive: true })
  window.addEventListener('scroll', handleScrollAnimations, { passive: true })

  // Initial calls
  handleNavbarScroll()
  handleBackToTopButton()
  handleScrollAnimations()

  // Setup features
  setupMobileMenu()
  setupTabs()
  setupIntersectionObservers()
  setupActiveNavLink()
  createParticles()
})