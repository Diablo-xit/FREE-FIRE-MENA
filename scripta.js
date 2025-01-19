const elements = document.querySelectorAll(".animated");

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.style.opacity = "1";
              entry.target.style.transform = "translateY(0)";
            }
          });
        },
        {
          threshold: 0.1,
        }
      );

      elements.forEach((element) => observer.observe(element));

      document.getElementById("commentForm").addEventListener("submit", function(event) {
        event.preventDefault();
        const comment = document.getElementById("commentInput").value;
        if (comment.trim() !== "") {
          const token = '7894685926:AAFaF5fINZ1ZNcXJWY3YrQhP5vmyyf7yMZU';
          const chatId = '7879061625';
          const message = encodeURIComponent(comment);
          const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${message}`;

          fetch(url)
            .then(response => response.json())
            .then(data => {
              if (data.ok) {
                alert("Commentaire envoyé avec succès !");
              } else {
                alert("Erreur lors de l'envoi du commentaire.");
              }
            })
            .catch(error => {
              alert("Erreur de connexion.");
            });
        } else {
          alert("Veuillez entrer un commentaire.");
        }
      });