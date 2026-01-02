const cars = [
  { name: "مرسيدس S-Class", image: "مرسيدس-E53-2025-.jpg" },
  { name: "BMW الفئة السابعة", image: "x.jpg" },
  { name: "تويوتا كامري", image: "Cover_.jfif" },
  { name: "تويوتا كامري", image: "Cover_.jfif" },
  { name: "تويوتا كامري", image: "Cover_.jfif" }
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