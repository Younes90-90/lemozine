const cars = [
  { name: "تويوتا كامري", image: "pngwing.com (5).png" },
  { name: "هيونداي H1", image: "pngwing.com (7).png" },
  { name: "تويوتا كامري", image: "pngwing.com (1).png" },
  { name: "مرسيدس G class", image: "pngwing.com (3).png" },
  { name: "رينو ميجان", image: "pngwing.com (6).png" },
  { name: "مرسيدس 500", image: "pngwing.com.png" }

];


let currentCar = 0;

const carImage = document.getElementById("carImage");
const carName  = document.getElementById("carName");

function showCar() {
  carImage.src = cars[currentCar].image;
  carName.textContent = cars[currentCar].name;
}

function nextCar() {
  currentCar = (currentCar + 1) % cars.length;
  showCar();
}

function prevCar() {
  currentCar = (currentCar - 1 + cars.length) % cars.length;
  showCar();
}

showCar();

document.addEventListener("DOMContentLoaded", () => {
    const statsNumbers = document.querySelectorAll('.stat-card h2');

    const runAnimate = (targetEl) => {
        const targetValue = parseInt(targetEl.getAttribute('data-target'));
        let current = 0;
        const duration = 5000; // الأرقام تخلص عد في ثانيتين
        const step = targetValue / (duration / 16);

        const animate = () => {
            current += step;
            if (current < targetValue) {
                targetEl.innerText = Math.ceil(current).toLocaleString();
                requestAnimationFrame(animate);
            } else {
                targetEl.innerText = targetValue.toLocaleString();
            }
        };
        animate();
    };

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                runAnimate(entry.target);
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statsNumbers.forEach(num => statsObserver.observe(num));
});
let isFirstImage = true;

function toggleHeroImage() {
    const heroSection = document.getElementById('service-card-1');
    
    // أسماء الصور عندك (تأكد إن الأسماء مكتوبة صح)
    const image1 = "2023-Kia-Sportage-Redesign.webp";
    const image2 = "Mercedes-S500-2021-....jpg"; 

    if (isFirstImage) {
        heroSection.style.backgroundImage = `url('${image2}')`;
    } else {
        heroSection.style.backgroundImage = `url('${image1}')`;
    }
    
    // عكس الحالة للمرة الجاية
    isFirstImage = !isFirstImage;
}