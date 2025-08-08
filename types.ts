export enum ElementType {
  Logo = 'LOGO',
  Text = 'TEXT',
  Spectrum = 'SPECTRUM',
}

export type ProjectFormat = 'youtube' | 'instagram' | 'tiktok';
export type PreviewQuality = 'auto' | '1080' | '720' | '480';

export type SpectrumStyle = 
  'aurora' | 'galaxy' | 'ripple' | 'nebula' | 'supernova' | 
  'equalizer' | 'firefly' | 'spikes' | 'cosmic-ripples' | 
  'trinity-pulse' | 'radiant-pulse' | 'circular-equalizer';

export type PulseTarget = 'none' | 'background' | 'logo';

export type OverlayEffect = 'none' | 'snow' | 'bokeh' | 'digital-rain' | 'fire-particles';

export type LogoShape = 'original' | 'circular' | 'sphere';

export interface CanvasElement {
  id: string;
  type: ElementType;
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number;
  // Text properties
  content?: string;
  fontFamily?: string;
  fontSize?: number;
  fontWeight?: number;
  color?: string;
  textShadow?: boolean;
  textShadowColor?: string;
  textShadowBlur?: number;
  textShadowOffsetX?: number;
  textShadowOffsetY?: number;
  textStroke?: boolean;
  textStrokeColor?: string;
  textStrokeWidth?: number;
  // Image properties
  src?: string;
  logoShape?: LogoShape;
  // Spectrum properties
  spectrumStyle?: SpectrumStyle;
  spectrumColor?: string;
  spectrumColor2?: string;
  spectrumColor3?: string;
  audioSource?: string; // e.g., 'master' or a clip ID
  logoSrc?: string;
  logoSize?: number;
}

// Represents a media file in the media pool
export interface MediaPoolClip {
  id: string;
  src: string;
  fileName:string;
  duration: number;
  type: 'video' | 'audio' | 'image';
  width?: number;
  height?: number;
}

// Represents an instance of a video or audio clip on the timeline
export interface VideoClip {
  id: string; // Unique instance ID
  poolId: string; // ID of the clip in the media pool
  trackId: string; // ID of the track this clip belongs to
  src: string;
  fileName: string;
  type: 'video' | 'audio' | 'image';
  duration: number; // Original full duration of the source video
  startTime: number; // Trim start time, relative to source video (in seconds)
  endTime: number; // Trim end time, relative to source video (in seconds)
  timelineStart: number; // Start time on the main timeline (in seconds)
  fadeInDuration?: number; // Duration of fade in in seconds
  fadeOutDuration?: number; // Duration of fade out in seconds
  speed?: number; // Playback speed, 1.0 is normal
}

export interface Track {
  id:string;
  type: 'video' | 'audio';
  name: string;
  isMuted?: boolean;
  volume: number; // From 0.0 to 1.0
  preMuteVolume?: number; // To restore volume after unmuting
}

export interface Scene {
  id: string;
  name: string;
  elements: CanvasElement[];
  backgroundImage: string | null;
  pulseTarget: PulseTarget;
  overlayEffect: OverlayEffect;
}

export type AnalyserFrame = {
    freqData: Uint8Array;
    timeDomainData: Uint8Array;
};