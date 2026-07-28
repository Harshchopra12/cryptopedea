"use client";

import { getDashboardMessage } from "../services/lulu.services";

export function useLulu() {
  return getDashboardMessage();
}