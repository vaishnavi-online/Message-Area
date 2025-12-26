
   
        const textarea = document.getElementById("message");
        const counter = document.getElementById("counter");
        const warning = document.getElementById("warning");
        const maxLength = 200;

        textarea.addEventListener("input", () => {
            let textLength = textarea.value.length;
            let remaining = maxLength - textLength;

            if (textLength > maxLength) {
                textarea.value = textarea.value.substring(0, maxLength);
                textLength = maxLength;
                remaining = 0;
            }

            counter.textContent = `Typed: ${textLength} | Remaining: ${remaining}`;

            // Color logic
            if (remaining === 0) {
                counter.style.color = "red";
                warning.style.display = "block";
            } else if (remaining <= 20) {
                counter.style.color = "orange";
                warning.style.display = "none";
            } else {
                counter.style.color = "green";
                warning.style.display = "none";
            }
        });

        function clearText() {
            textarea.value = "";
            counter.textContent = "Typed: 0 | Remaining: 200";
            counter.style.color = "black";
            warning.style.display = "none";
        }
  