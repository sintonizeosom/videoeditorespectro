import React from 'react';
import { ProjectFormat, SpectrumStyle, CanvasElement } from './types';
import { Youtube, Instagram, Music, Clapperboard, BarChart2, CircleDot, Waves, Atom, Sun, SlidersHorizontal, Orbit, Zap, Spline, Triangle, Activity, BarChart4 } from 'lucide-react';

export const FORMAT_DIMENSIONS: Record<ProjectFormat, { width: number; height: number; name: string; icon: React.ReactNode }> = {
  youtube: { width: 1920, height: 1080, name: 'YouTube (Full HD 16:9)', icon: <Youtube className="w-8 h-8 mr-4" /> },
  instagram: { width: 1080, height: 1080, name: 'Instagram (1:1)', icon: <Instagram className="w-8 h-8 mr-4" /> },
  tiktok: { width: 1080, height: 1920, name: 'TikTok (9:16)', icon: <Music className="w-8 h-8 mr-4" /> },
};

export const AVAILABLE_FONTS = ['Arial', 'Verdana', 'Georgia', 'Times New Roman', 'Courier New', 'Impact', 'Comic Sans MS'];

export const SPECTRUM_MODELS: { id: SpectrumStyle; name: string; icon: React.ReactNode }[] = [
    { id: 'aurora', name: 'Aurora Boreal', icon: <BarChart2 className="w-5 h-5 mr-2" /> },
    { id: 'radiant-pulse', name: 'Pulso Radiante', icon: <Activity className="w-5 h-5 mr-2" /> },
    { id: 'galaxy', name: 'Galáxia', icon: <CircleDot className="w-5 h-5 mr-2" /> },
    { id: 'ripple', name: 'Onda de Neon', icon: <Waves className="w-5 h-5 mr-2" /> },
    { id: 'nebula', name: 'Nebulosa', icon: <Atom className="w-5 h-5 mr-2" /> },
    { id: 'supernova', name: 'Supernova', icon: <Sun className="w-5 h-5 mr-2" /> },
    { id: 'equalizer', name: 'Equalizador', icon: <SlidersHorizontal className="w-5 h-5 mr-2" /> },
    { id: 'circular-equalizer', name: 'Equalizador Circular', icon: <BarChart4 className="w-5 h-5 mr-2" /> },
    { id: 'firefly', name: 'Orbe Vagalume', icon: <Orbit className="w-5 h-5 mr-2" /> },
    { id: 'spikes', name: 'Picos de Voltagem', icon: <Zap className="w-5 h-5 mr-2" /> },
    { id: 'cosmic-ripples', name: 'Ondas Cósmicas', icon: <Spline className="w-5 h-5 mr-2" /> },
    { id: 'trinity-pulse', name: 'Pulso da Trindade', icon: <Triangle className="w-5 h-5 mr-2" /> },
];

export const PRESET_TEXT_STYLES: { name: string; style: Partial<CanvasElement> }[] = [
  {
    name: 'Néon',
    style: {
      fontFamily: 'Impact',
      fontWeight: 400,
      color: '#FFFFFF',
      textShadow: true,
      textShadowColor: '#39ff14',
      textShadowBlur: 20,
      textShadowOffsetX: 0,
      textShadowOffsetY: 0,
      textStroke: true,
      textStrokeColor: '#39ff14',
      textStrokeWidth: 2,
    },
  },
  {
    name: 'Fogo',
    style: {
      fontFamily: 'Verdana',
      fontWeight: 900,
      color: '#FFD700',
      textShadow: true,
      textShadowColor: '#FF4500',
      textShadowBlur: 10,
      textShadowOffsetX: 0,
      textShadowOffsetY: 0,
      textStroke: true,
      textStrokeColor: '#8B0000',
      textStrokeWidth: 2,
    },
  },
  {
    name: 'Cinemático',
    style: {
      fontFamily: 'Impact',
      fontWeight: 400,
      color: '#FFFFFF',
      textShadow: true,
      textShadowColor: 'rgba(0,0,0,0.7)',
      textShadowBlur: 5,
      textShadowOffsetX: 3,
      textShadowOffsetY: 3,
      textStroke: true,
      textStrokeColor: '#111111',
      textStrokeWidth: 1,
    },
  },
   {
    name: 'Dourado',
    style: {
      fontFamily: 'Times New Roman',
      fontWeight: 700,
      color: '#FFD700',
      textShadow: true,
      textShadowColor: 'rgba(0,0,0,0.4)',
      textShadowBlur: 4,
      textShadowOffsetX: 2,
      textShadowOffsetY: 2,
      textStroke: true,
      textStrokeColor: '#B8860B',
      textStrokeWidth: 2,
    },
  },
  {
    name: 'Fantasma',
    style: {
      fontFamily: 'Courier New',
      fontWeight: 400,
      color: 'rgba(255,255,255,0.1)',
      textShadow: true,
      textShadowColor: '#48D1CC',
      textShadowBlur: 15,
      textShadowOffsetX: 0,
      textShadowOffsetY: 0,
      textStroke: true,
      textStrokeColor: 'rgba(255,255,255,0.8)',
      textStrokeWidth: 1,
    },
  },
  {
    name: 'Contorno',
    style: {
      fontFamily: 'Arial',
      fontWeight: 900,
      color: '#FFFFFF',
      textShadow: false,
      textStroke: true,
      textStrokeColor: '#000000',
      textStrokeWidth: 3,
    },
  },
];