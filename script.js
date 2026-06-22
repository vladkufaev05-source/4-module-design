document.addEventListener('DOMContentLoaded', () => {

    const track = document.getElementById('petsTrack');
    const arrow = document.getElementById('carouselArrow');

    if (track && arrow) {
        const totalPets = track.children.length;
        const visiblePets = 4;
        const maxIndex = totalPets - visiblePets;
        let currentIndex = 0;

        arrow.addEventListener('click', () => {
            currentIndex++;
            if (currentIndex > maxIndex) currentIndex = 0;

            const card = track.children[0];
            const cardWidth = card.offsetWidth;
            const gap = parseFloat(getComputedStyle(track).gap) || 32;
            track.style.transform = `translateX(-${currentIndex * (cardWidth + gap)}px)`;
        });

        window.addEventListener('resize', () => {
            const card = track.children[0];
            const cardWidth = card.offsetWidth;
            const gap = parseFloat(getComputedStyle(track).gap) || 32;
            track.style.transform = `translateX(-${currentIndex * (cardWidth + gap)}px)`;
        });
    }

    const modal = document.getElementById('petModal');

    if (modal) {
        const modalClose = document.getElementById('modalClose');
        const modalContent = modal.querySelector('.modal-content');
        const modalImage = modal.querySelector('.modal-image');
        const petCards = document.querySelectorAll('.pet-card');

        const fields = {
            modalPetImage: 'image',
            modalPetName: 'name',
            modalPetAge: 'age',
            modalPetGender: 'gender',
            modalPetBirth: 'birth',
            modalPetWeight: 'weight',
            modalPetCharacter: 'character',
            modalPetFeatures: 'features'
        };

        petCards.forEach(card => {
            card.addEventListener('click', () => {
                Object.entries(fields).forEach(([id, key]) => {
                    const el = document.getElementById(id);
                    if (el) el[key === 'image' ? 'src' : 'textContent'] = card.dataset[key] || (key === 'image' ? card.src : '');
                });

                if (card.dataset.bgColor) modalContent.style.backgroundColor = card.dataset.bgColor;
                if (card.dataset.imageBgColor) modalImage.style.backgroundColor = card.dataset.imageBgColor;

                modal.classList.add('active');
            });
        });

        modalClose?.addEventListener('click', () => modal.classList.remove('active'));
        modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('active'); });
        document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modal.classList.contains('active')) modal.classList.remove('active'); });
    }

    const reviewInput = document.getElementById('reviewInput');
    const reviewBtn = document.getElementById('reviewBtn');

    if (reviewInput && reviewBtn) {
        reviewBtn.addEventListener('click', () => {
            if (reviewInput.value.trim()) {
                reviewInput.value = '';
                alert('Отзыв отправлен!');
            }
        });
    }

    ['mission', 'methodology'].forEach(name => {
        const modal = document.getElementById(`${name}Modal`);
        const openBtn = document.getElementById(`open${name.charAt(0).toUpperCase() + name.slice(1)}Btn`);
        const closeBtn = document.getElementById(`${name}ModalClose`);

        if (modal) {
            openBtn?.addEventListener('click', () => modal.classList.add('active'));
            closeBtn?.addEventListener('click', () => modal.classList.remove('active'));
            modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('active'); });
            document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modal.classList.contains('active')) modal.classList.remove('active'); });
        }
    });

    const researchTrack = document.getElementById('researchTrack');
    const arrowLeft = document.querySelector('.research-arrow-left');
    const arrowRight = document.querySelector('.research-arrow-right');

    if (researchTrack && arrowLeft && arrowRight) {
        const totalSpreads = researchTrack.children.length;
        let currentIndex = 0;

        function updateResearchCarousel() {
            const card = researchTrack.children[0];
            const cardWidth = card.offsetWidth;
            const gap = parseFloat(getComputedStyle(researchTrack).gap) || 48;
            researchTrack.style.transform = `translateX(-${currentIndex * (cardWidth + gap)}px)`;
        }

        arrowRight.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % totalSpreads;
            updateResearchCarousel();
        });

        arrowLeft.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + totalSpreads) % totalSpreads;
            updateResearchCarousel();
        });

        window.addEventListener('resize', updateResearchCarousel);
    }

    const registerBtn = document.getElementById('registerBtn');
    const inputName = document.getElementById('inputName');
    const inputEmail = document.getElementById('inputEmail');
    const inputPassword = document.getElementById('inputPassword');

    if (registerBtn && inputName && inputEmail && inputPassword) {
        registerBtn.addEventListener('click', () => {
            if (inputName.value.trim() && inputEmail.value.trim() && inputPassword.value.trim()) {
                window.location.href = 'error.html';
            } else {
                alert('Пожалуйста, заполните все поля!');
            }
        });
    }
});