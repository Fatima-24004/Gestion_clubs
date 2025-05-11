document.addEventListener('DOMContentLoaded', function() {
  const registerForm = document.getElementById('registerForm');
  const passwordInput = document.getElementById('password');
  const confirmPasswordInput = document.getElementById('confirmPassword');
  const passwordError = document.getElementById('passwordError');

  registerForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Vérifier si le mot de passe contient @supnum.mr
      if (!passwordInput.value.includes('@supnum.mr')) {
          passwordError.textContent = "Le mot de passe doit contenir '@supnum.mr'";
          passwordError.style.display = 'block';
          return;
      }
      
      // Vérifier la longueur du mot de passe
      if (passwordInput.value.length < 8) {
          passwordError.textContent = "Le mot de passe doit avoir au moins 8 caractères";
          passwordError.style.display = 'block';
          return;
      }
      
      // Vérifier que les mots de passe correspondent
      if (passwordInput.value !== confirmPasswordInput.value) {
          passwordError.textContent = "Les mots de passe ne correspondent pas";
          passwordError.style.display = 'block';
          return;
      }
      
      // Si tout est valide
      passwordError.style.display = 'none';
      alert('Inscription réussie !');
      // Ici vous pourriez ajouter la redirection ou l'envoi des données au serveur
  });

  // Validation en temps réel
  passwordInput.addEventListener('input', function() {
      if (this.value.includes('@supnum.mr') && this.value.length >= 8) {
          passwordError.style.display = 'none';
      }
  });
  
  confirmPasswordInput.addEventListener('input', function() {
      if (this.value === passwordInput.value) {
          passwordError.style.display = 'none';
      }
  });
});