document.addEventListener('DOMContentLoaded', function () {

          const options = {
                    strings: ["PHP Developer", "Laravel Enthusiast", "JavaScript Learner", "JQuery Learner", "Bootstrap Designer", "Figma intermediate"],
                    typeSpeed: 50,
                    backSpeed: 25,
                    backDelay: 1000,
                    startDelay: 500,
                    loop: true
          };

          new Typed('#typing-animation', options);

          const skillItems = document.querySelectorAll('.skill-item');
          skillItems.forEach(item => {
                    const progressBar = item.querySelector('.progress-bar');
                    const level = item.getAttribute('data-level');
                    progressBar.style.width = level + '%';
          });

          const detailItems = document.querySelectorAll('.detail-item');
          detailItems.forEach(item => {
                    const toggleInfo = item.querySelector('.toggle-info');
                    toggleInfo.addEventListener('click', () => {
                              item.classList.toggle('active');

                              const info = item.querySelector('.education-info, .experience-info');
                              if (item.classList.contains('active')) {
                                        info.style.maxHeight = info.scrollHeight + 'px';
                              } else {
                                        info.style.maxHeight = '0'
                              }
                    });
          });

          const projectItems = document.querySelectorAll('.project-item');
          projectItems.forEach(item => {
                    const toggleInfo = item.querySelector('.toggle-info');
                    toggleInfo.addEventListener('click', () => {
                              // Toggle the active class
                              item.classList.toggle('active');

                              const info = item.querySelector('.project-info');
                              if (item.classList.contains('active')) {
                                        info.style.maxHeight = info.scrollHeight + 'px'; 
                              } else {
                                        info.style.maxHeight = '0'; 
                              }
                    });
          });
});

document.querySelectorAll('.toggle-info').forEach(button => {
          button.addEventListener('click', function () {
                    const item = this.closest('.detail-item, .project-item');
                    const info = item.querySelector('.education-info, .experience-info, .project-info');
                    const isExpanded = this.getAttribute('aria-expanded') === 'true';

                    this.setAttribute('aria-expanded', !isExpanded);
                    info.setAttribute('aria-hidden', isExpanded);
                    item.classList.toggle('active', !isExpanded);
          });
});
