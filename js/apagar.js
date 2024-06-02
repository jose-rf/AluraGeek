export async function adicionarEventoExclusao(id) {
  const conexao = await fetch(`http://localhost:3000/produtos/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
  }
  });

  return conexao;

}