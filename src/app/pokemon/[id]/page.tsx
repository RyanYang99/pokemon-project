import React from "react";

const fetchPokemonData = async (id: string) => {
  const apiUrl = "http://localgost:3000";
  const response = await fetch(`${apiUrl}/api/pokemons/${id}`);
  return response.json();
};
