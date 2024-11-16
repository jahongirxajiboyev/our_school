window.onload = () => {
    const texts = [
      "Hello everyone.",
      "Welcome to our created site.",
      "Here you will be able to get a lot of information about our school."
    ];
  
    let currentLine = 0;
  
    function typeLine() {
      if (currentLine < texts.length) {
        const currentText = texts[currentLine];
        const element = document.getElementById(`line${currentLine + 1}`);
        element.textContent = currentText;
        element.classList.add('typing');  // Typing effekti qo‘shish
        currentLine++;
        setTimeout(typeLine, 5000); // Har bir matn yozilganidan keyin 4 sekund kutish
      }
    }
  
    typeLine(); // Birinchi matnni yozishni boshlash
  };
  