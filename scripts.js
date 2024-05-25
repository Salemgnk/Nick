document.addEventListener('DOMContentLoaded', () => {
    const typingEffectElement = document.getElementById('typing-effect');
    const giftButton = document.getElementById('gift-button');
    const surpriseText = document.getElementById('surprise-text');
    const messages = ['Joyeux anniversaire Nick', 'Clique ici pour recevoir ton cadeau'];
    let messageIndex = 0;
    let charIndex = 0;

    function typeEffect() {
        if (charIndex < messages[messageIndex].length) {
            typingEffectElement.textContent += messages[messageIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeEffect, 100);
        } else {
            if (messageIndex < messages.length - 1) {
                messageIndex++;
                charIndex = 0;
                setTimeout(() => {
                    typingEffectElement.textContent = '';
                    typeEffect();
                }, 2000);
            }
        }
    }

    typeEffect();

    giftButton.addEventListener('click', () => {
        surpriseText.style.display = 'block';
        openGift();
    });

    function openGift() {
        const container = document.getElementById('3d-container');

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(renderer.domElement);

        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const giftBox = new THREE.Mesh(geometry, material);
        scene.add(giftBox);

        camera.position.z = 5;

        function animate() {
            requestAnimationFrame(animate);
            giftBox.rotation.x += 0.01;
            giftBox.rotation.y += 0.01;
            renderer.render(scene, camera);
        }

        animate();
    }
});
