// 'use server'; // will see server configuration

const AppSheet: string =
  'AKfycbwhLkhNWhJZNBrmaYzbzFVVANtppv8vLNeclG2N4VtX3RMioXCPiuvtWvjFzIaz0cA';

export const sheerURL = (
  username: string,
  whatsappNumber: string,
  email: string,
  message: string,
  intrestedProgram: string
) =>
  `https://script.google.com/macros/s/${AppSheet}/exec?action=create&username=${username}&whatsappNumber=${whatsappNumber}&email=${email}&message=${message}&intrestedProgram=${intrestedProgram}`;
