import create from 'zustand';
import { Service } from '../types';

interface ServiceModalStore {
  isOpen: boolean;
  service: Service | null;
  openModal: (service: Service) => void;
  closeModal: () => void;
}

export const useServiceModal = create<ServiceModalStore>((set) => ({
  isOpen: false,
  service: null,
  openModal: (service) => set({ isOpen: true, service }),
  closeModal: () => set({ isOpen: false, service: null }),
}));