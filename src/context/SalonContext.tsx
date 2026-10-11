import React, { createContext, useContext, useState, useEffect } from 'react';
import { SalonConfig, DisplayMode } from '../types/salon';
import { placeholderSalonConfig, demoSalonConfig } from '../config/defaultSalonConfig';

export type PageId =
  | 'home'
  | 'about'
  | 'services'
  | 'bridal'
  | 'gallery'
  | 'artists'
  | 'book'
  | 'contact'
  | 'faqs-policies';

interface SalonContextType {
  config: SalonConfig;
  updateConfig: (updater: Partial<SalonConfig> | ((prev: SalonConfig) => SalonConfig)) => void;
  resetConfig: (targetMode?: DisplayMode) => void;
  displayMode: DisplayMode;
  setDisplayMode: (mode: DisplayMode) => void;
  toggleDisplayMode: () => void;
  activePage: PageId;
  setActivePage: (page: PageId) => void;
  isCustomizerOpen: boolean;
  setIsCustomizerOpen: (open: boolean) => void;
  selectedServiceForBooking: string;
  setSelectedServiceForBooking: (serviceName: string) => void;
  navigateToBookingWithService: (serviceName: string) => void;
}

const SalonContext = createContext<SalonContextType | undefined>(undefined);

const STORAGE_KEY = 'laura_salon_template_config_v1';
const MODE_KEY = 'laura_salon_display_mode_v1';

export const SalonProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [displayMode, setDisplayModeState] = useState<DisplayMode>(() => {
    const saved = localStorage.getItem(MODE_KEY);
    return (saved === 'demo' || saved === 'placeholder') ? saved : 'placeholder';
  });

  const [config, setConfig] = useState<SalonConfig>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // ignore JSON parse error
    }
    return displayMode === 'demo' ? demoSalonConfig : placeholderSalonConfig;
  });

  const [activePage, setActivePageState] = useState<PageId>('home');
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState('');

  // Persist config to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
    } catch {
      // quota or localstorage disabled
    }
  }, [config]);

  // Persist mode
  useEffect(() => {
    try {
      localStorage.setItem(MODE_KEY, displayMode);
    } catch {
      // ignore
    }
  }, [displayMode]);

  const updateConfig = (updater: Partial<SalonConfig> | ((prev: SalonConfig) => SalonConfig)) => {
    if (typeof updater === 'function') {
      setConfig((prev) => updater(prev));
    } else {
      setConfig((prev) => ({ ...prev, ...updater }));
    }
  };

  const setDisplayMode = (mode: DisplayMode) => {
    setDisplayModeState(mode);
    setConfig(mode === 'demo' ? demoSalonConfig : placeholderSalonConfig);
  };

  const toggleDisplayMode = () => {
    const nextMode = displayMode === 'placeholder' ? 'demo' : 'placeholder';
    setDisplayMode(nextMode);
  };

  const resetConfig = (targetMode?: DisplayMode) => {
    const mode = targetMode || displayMode;
    setDisplayModeState(mode);
    setConfig(mode === 'demo' ? demoSalonConfig : placeholderSalonConfig);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  };

  const setActivePage = (page: PageId) => {
    setActivePageState(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToBookingWithService = (serviceName: string) => {
    setSelectedServiceForBooking(serviceName);
    setActivePageState('book');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <SalonContext.Provider
      value={{
        config,
        updateConfig,
        resetConfig,
        displayMode,
        setDisplayMode,
        toggleDisplayMode,
        activePage,
        setActivePage,
        isCustomizerOpen,
        setIsCustomizerOpen,
        selectedServiceForBooking,
        setSelectedServiceForBooking,
        navigateToBookingWithService,
      }}
    >
      {children}
    </SalonContext.Provider>
  );
};

export const useSalon = (): SalonContextType => {
  const context = useContext(SalonContext);
  if (!context) {
    throw new Error('useSalon must be used within a SalonProvider');
  }
  return context;
};
