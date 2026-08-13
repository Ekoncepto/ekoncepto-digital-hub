/// <reference types="vite/client" />

// Pixel do ChatGPT Ads (OpenAI) — injetado no Layout.astro via SDK oaiq.min.js
interface Window {
  oaiq?: (...args: unknown[]) => void;
}
