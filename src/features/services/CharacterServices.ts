// src/services/userService.js

const API_URL = "https://web.dragonball-api.com/";

export const characterService = {
  async getAll() {
    const response = await fetch(API_URL);
    console.log(response);
    if (!response.ok) {
      throw new Error("Error al obtener los personajes");
    }
    return response.json();
  },

  async getById(id: string) {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) {
      throw new Error("Error al obtener los personajes");
    }
    return response.json();
  },
};
