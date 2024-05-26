// 'use server'; // will see server configuration

const AppSheet: string =
  'AKfycbzl5rVVx_GPBfs9Y98p0hoCI6uAwYmns13UbAH97DesQX4ufPmLyVQmM1-CQBTh4BTa';

export const sheerURL = (
  username: string,
  whatsappNumber: string,
  email: string,
  message: string
) =>
  `https://script.google.com/macros/s/${AppSheet}/exec?action=create&username=${username}&whatsappNumber=${whatsappNumber}&email=${email}&message=${message}`;
