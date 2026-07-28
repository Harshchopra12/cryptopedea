import { welcomeMessages } from "../messages/welcome";

export interface LuluResponse {
  title: string;
  message: string;
}

export function getDashboardMessage(): LuluResponse {
  const randomMessage =
    welcomeMessages[
      Math.floor(
        Math.random() *
          welcomeMessages.length,
      )
    ];

  return {
    title: "LULU",
    message: randomMessage,
  };
}