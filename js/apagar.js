
export function adicionarEventoExclusao() {
    var deleteIcon = document.querySelector('img[alt="Ícone de Eliminação"]');
    
    
    deleteIcon.addEventListener('click', function() {
      
      var divToDelete = deleteIcon.parentNode;
      divToDelete.remove();
    });
  }
  