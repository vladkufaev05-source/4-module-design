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

            if (currentIndex > maxIndex) {
                currentIndex = 0;
            }

            const card = track.children[0];
            const cardWidth = card.offsetWidth;
            const gap = parseFloat(getComputedStyle(track).gap) || 32;
            const offset = currentIndex * (cardWidth + gap);

            track.style.transform = `translateX(-${offset}px)`;
        });

        window.addEventListener('resize', () => {
            const card = track.children[0];
            const cardWidth = card.offsetWidth;
            const gap = parseFloat(getComputedStyle(track).gap) || 32;
            const offset = currentIndex * (cardWidth + gap);
            track.style.transform = `translateX(-${offset}px)`;
        });
    }

    const modal = document.getElementById('petModal');

    if (modal) {
        const modalClose = document.getElementById('modalClose');
        const modalContent = modal.querySelector('.modal-content');
        const modalImage = modal.querySelector('.modal-image');
        const petCards = document.querySelectorAll('.pet-card');

        const modalPetImage = document.getElementById('modalPetImage');
        const modalPetName = document.getElementById('modalPetName');
        const modalPetAge = document.getElementById('modalPetAge');
        const modalPetGender = document.getElementById('modalPetGender');
        const modalPetBirth = document.getElementById('modalPetBirth');
        const modalPetWeight = document.getElementById('modalPetWeight');
        const modalPetCharacter = document.getElementById('modalPetCharacter');
        const modalPetFeatures = document.getElementById('modalPetFeatures');

        petCards.forEach(card => {
            card.addEventListener('click', () => {
                modalPetImage.src = card.dataset.image || card.src;
                modalPetName.textContent = card.dataset.name || '';
                modalPetAge.textContent = card.dataset.age || '';
                modalPetGender.textContent = card.dataset.gender || '';
                modalPetBirth.textContent = card.dataset.birth || '';
                modalPetWeight.textContent = card.dataset.weight || '';
                modalPetCharacter.textContent = card.dataset.character || '';
                modalPetFeatures.textContent = card.dataset.features || '';

                if (card.dataset.bgColor) {
                    modalContent.style.backgroundColor = card.dataset.bgColor;
                }
                if (card.dataset.imageBgColor) {
                    modalImage.style.backgroundColor = card.dataset.imageBgColor;
                }

                modal.classList.add('active');
            });
        });

        if (modalClose) {
            modalClose.addEventListener('click', () => {
                modal.classList.remove('active');
            });
        }

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                modal.classList.remove('active');
            }
        });
    }

    const reviewInput = document.getElementById('reviewInput');
    const reviewBtn = document.getElementById('reviewBtn');

    if (reviewInput && reviewBtn) {
        reviewBtn.addEventListener('click', () => {
            if (reviewInput.value.trim() !== '') {
                reviewInput.value = '';
                alert('Отзыв отправлен!');
            }
        });
    }

    const missionModal = document.getElementById('missionModal');
    const openMissionBtn = document.getElementById('openMissionBtn');
    const missionModalClose = document.getElementById('missionModalClose');

    if (openMissionBtn && missionModal) {
        openMissionBtn.addEventListener('click', () => {
            missionModal.classList.add('active');
        });
    }

    if (missionModalClose && missionModal) {
        missionModalClose.addEventListener('click', () => {
            missionModal.classList.remove('active');
        });
    }

    if (missionModal) {
        missionModal.addEventListener('click', (e) => {
            if (e.target === missionModal) {
                missionModal.classList.remove('active');
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && missionModal && missionModal.classList.contains('active')) {
            missionModal.classList.remove('active');
        }
    });

    const methodologyModal = document.getElementById('methodologyModal');
    const openMethodologyBtn = document.getElementById('openMethodologyBtn');
    const methodologyModalClose = document.getElementById('methodologyModalClose');

    if (openMethodologyBtn && methodologyModal) {
        openMethodologyBtn.addEventListener('click', () => {
            methodologyModal.classList.add('active');
        });
    }

    if (methodologyModalClose && methodologyModal) {
        methodologyModalClose.addEventListener('click', () => {
            methodologyModal.classList.remove('active');
        });
    }

    if (methodologyModal) {
        methodologyModal.addEventListener('click', (e) => {
            if (e.target === methodologyModal) {
                methodologyModal.classList.remove('active');
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && methodologyModal && methodologyModal.classList.contains('active')) {
            methodologyModal.classList.remove('active');
        }
    });
});