declare global {
    interface Window {
      BrevoConversations?: (method: string, params?: Record<string, any>) => void;
    }
  }

  export {};
