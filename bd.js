//bd.js
async function selectUsuario(id) {
    const client = await connect();
    const query = "SELECT * FROM usuario WHERE id = $1";
    const usuario = [id];
    const res = await client.query(query, usuario);
    client.release();
    return res.rows;
  }
  async function insertUsuario(data) {
    const client = await connect();
    const query = "INSERT INTO usuario (nome, senha, email) VALUES ($1, $2, $3)";
    const usuario = [data.nome, data.senha, data.email];
    await client.query(query, usuario);
    client.release();
  }
  
  // Exporte a função
  export { selectUsuarios, selectUsuario, insertUsuario };
  async function deleteUsuario(id) {
  const client = await connect();
  const query = "DELETE FROM usuario WHERE id = $1";
  await client.query(query, [id]);
  client.release();
}

// Exporte a função
export { selectUsuarios, selectUsuario, insertUsuario, deleteUsuario };
async function deleteUsuario(id) {
    const client = await connect();
    const query = "DELETE FROM usuario WHERE id = $1";
    await client.query(query, [id]);
    client.release();
  }
  
  // Exporte a função
  export { selectUsuarios, selectUsuario, insertUsuario, deleteUsuario };
  async function updateUsuario(id, data) {
    const client = await connect();
    const query = "UPDATE usuario SET nome = $1, email = $2, senha = $3 WHERE id = $4";
    const usuario = [data.nome, data.email, data.senha, id];
    await client.query(query, usuario);
    client.release();
  }
  
  // Exporte a função
  export { selectUsuarios, selectUsuario, insertUsuario, deleteUsuario, updateUsuario };
  