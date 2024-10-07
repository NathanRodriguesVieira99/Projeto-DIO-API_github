import React, { useState, useEffect } from "react";

function CicloDeVida() {
  const [count, setCount] = useState(0)
  const [usuario, setUsuario] = useState("");
  const [usuarios, setUsuarios] = useState([
    "Timbu",
    "Makonho",
    "Zé do caixão",
    'Umbabarauma',
    'El Wetto',
    'Blanco Leopardo'
  ]);

  const handleAddUser = () => {
    setUsuarios([...usuarios, usuario]);
    setUsuario("");
  };
  console.log('renderizou');

  useEffect(() => {
    setCount(usuarios.length)

  }, [usuarios])

  return (
    <div>
      <h1>Número de usuários: {count}</h1>
      <input
        type="text"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
      />
      <button type="button" onClick={handleAddUser}>
        Adicionar
      </button>
      <ul style={{ listStyle: 'none' }}>
        {usuarios.map((user, index) => (
          <li key={index}>
            Usuário: {user}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CicloDeVida;
